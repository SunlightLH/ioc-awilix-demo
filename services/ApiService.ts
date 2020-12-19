import { IData } from '@interfaces/IData';
import { IApi } from '@interfaces/IApi';

class ApiService implements IApi{
  getInfo(){
    return new Promise<IData>((resolve,reject)=>{
      resolve({
        item:"后台数据",
        result:[1,2,"测试"]
      })
    })
  }
}

export default ApiService;