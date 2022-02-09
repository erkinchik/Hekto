import axios from 'axios'
import {IDevices} from '../types/index'


export class Api {


    static async getProducts(){
        try {
            const {data} = await axios.get<IDevices>('http://localhost:5000/device')
            return data.rows!;
        }catch (e) {
         console.log(e)
        }

    }

}