const koa = require('koa');
const mount = require('koa-mount');
const serve = require('koa-static');
const Resource = require('koa-resource-router');
const path = require('path');
const body = require('koa-bodyparser');
const wrapper = require('./middleware-wrapper')

const cats = new Resource('cats', wrapper(body()), require('./resources/cats'));
const koaApi = new koa();
koaApi.use(cats.middleware());

const koaApp = new koa();
koaApp.use(mount('/api', koaApi));

koaApp.use(serve(path.resolve(__dirname, "../client")));

koaApp.listen(3000);
