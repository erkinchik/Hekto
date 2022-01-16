import axios from 'axios'

export default class Api {
   static async getDevice(id){
       const resp = await axios.get(`${process.env.REACT_APP_API}/device/${id}`)
       console.log(resp.data)
       return resp.data
    }
}


