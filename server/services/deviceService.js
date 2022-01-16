const db = require("../db");
const uuid = require("uuid");
const path = require("path");

class DeviceService {
  async createDevice(name, price, brandId, typeId, img,info) {
    let fileName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname, "..", "static", fileName));

    const newDevice = await db.query('INSERT INTO device (name,price,brand_id,type_id,img) VALUES ($1,$2,$3,$4,$5) RETURNING *',[name, price, brandId, typeId,fileName]);
    if(info) {
      info = JSON.parse(info)
        info.forEach(i =>{
            return db.query('INSERT INTO device_info (title,description,device_id) VALUES ($1,$2,$3)', [i.title,i.description, newDevice.rows[0].id])
        })
    }

    return newDevice.rows[0];
  }

  async getAll(brandId, typeId,limit = 10,page = 1) {
    let offset = page * limit - limit

    let allDevices;
    if(brandId && typeId || limit || offset){
      allDevices = await db.query('SELECT * FROM device where brand_id = $1 and type_id = $2 LIMIT $3 OFFSET $4',[brandId,typeId,limit,offset]);
    }
    if(!brandId && typeId || limit || offset){
      allDevices = await db.query('SELECT * FROM device where type_id = $1 LIMIT $2 OFFSET $3',[typeId,limit,offset]);
    }
    if(brandId && !typeId || limit || offset){

      allDevices = await db.query('SELECT * FROM device where brand_id = $1 LIMIT $2 OFFSET $3',[brandId,limit,offset]);
    }
    if(!brandId && !typeId || limit || offset){
      allDevices = await db.query('SELECT * FROM device LIMIT $1 OFFSET $2',[limit,offset]);
    }
    return {count:allDevices.rows.length, rows:[...allDevices.rows]};
  }

  async getById(id) {
    const {rows:device} = await db.query('SELECT * FROM device where id = $1',[id])
    const {rows:deviceInfo} = await db.query('SELECT * FROM device_info WHERE device_id=$1',[id])

    return device.length ? {...device[0],deviceInfo} : []
  }

  async delete(id){
    await db.query('DELETE FROM device_info WHERE device_id IN (SELECT id FROM device WHERE id = $1)',[id])
    const device = await db.query('DELETE FROM device where id = $1',[id])
    return !device.rows.length
  }
}

module.exports = new DeviceService();
