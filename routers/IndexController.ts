import { Context } from '@interfaces/IKoa';
import {GET,route} from "awilix-koa";

@route("/")
class ApiController{
  @route('/')
  @GET()
  async actionList(ctx:Context,next:()=>Promise<unknown>):Promise<any>{
    ctx.body = await ctx.render("index")
  }
}

export default ApiController;