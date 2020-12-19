import {addAliases} from "module-alias";
import Koa from "koa";
import {createContainer, Lifetime} from "awilix";
import {scopePerRequest,loadControllers} from "awilix-koa";
import render from "koa-swig";
import path from "path";
import co from 'co';

addAliases({
  "@root":__dirname,
  "@interfaces":`${__dirname}/interface`
})

const app = new Koa();
const container = createContainer();
container.loadModules([`${__dirname}/services/*.ts`],{
  formatName:"camelCase",
  resolverOptions:{
    lifetime:Lifetime.SCOPED
  }
})

app.context.render = co.wrap(render<render.DefaultSettings>({
  root:path.join(__dirname,"views"),
  autoescape:true,
  cache:"memory",
  ext:"html",
  writeBody:false
}))

app.use(scopePerRequest(container));
app.use(loadControllers( `${__dirname}/routers/*.ts`));

app.listen(8081,()=>{
  console.log("ioc node应用")
})