import { IApi } from './../interface/IApi';
import {GET,route} from "awilix-koa";
import { Context } from '@interfaces/IKoa';

@route("/api")
class ApiController{
  private apiService:IApi;
  constructor({apiService}:{apiService:IApi}){
    this.apiService = apiService;
  }
  @route('/list')
  @GET()
  async actionList(ctx:Context,next:()=>Promise<unknown>):Promise<any>{
    const data = await this.apiService.getInfo();
    ctx.body = {data}
  }
}

export default ApiController;