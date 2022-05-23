const Koa = require('koa')
const app = new Koa()

// logger
app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method} ${ctx.url} ${rt}`)
})

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

// response
app.use(async (ctx) => {
  // ctx.request; // is a Koa Request
  // ctx.response; // is a Koa Response
  // ctx.state.user = await User.find(id); // namespace for passing between middlewares
  // ctx.app.emit // emite eventos para hookers que vc escrever
  // ctx.throw([status], [msg], [properties]) // lança um erro e Koa responde de acordo
  // ctx.assert(ctx.state.user, 401, 'User not found. Please login!'); // faz uma assertion no primeiro parâmetro e lança um erro se der falso

  /*
    Request aliases

    ctx.header
    ctx.headers
    ctx.method
    ctx.method=
    ctx.url
    ctx.url=
    ctx.originalUrl
    ctx.origin
    ctx.href
    ctx.path
    ctx.path=
    ctx.query
    ctx.query=
    ctx.querystring
    ctx.querystring=
    ctx.host
    ctx.hostname
    ctx.fresh
    ctx.stale
    ctx.socket
    ctx.protocol
    ctx.secure
    ctx.ip
    ctx.ips
    ctx.subdomains
    ctx.is()
    ctx.accepts()
    ctx.acceptsEncodings()
    ctx.acceptsCharsets()
    ctx.acceptsLanguages()
    ctx.get()

    Response aliases
    
    ctx.body
    ctx.body=
    ctx.status
    ctx.status=
    ctx.message
    ctx.message=
    ctx.length=
    ctx.length
    ctx.type=
    ctx.type
    ctx.headerSent
    ctx.redirect()
    ctx.attachment()
    ctx.set()
    ctx.append()
    ctx.remove()
    ctx.lastModified=
    ctx.etag=
*/
  /*
  // se certifica de que a requisição para esta origin é de uma imagem
  if (ctx.is('image/*')) {
    // process
  } else {
    ctx.throw(415, 'images only!');
  }
*/
  ctx.body = 'Hallo Welt'
})

app.listen(3000)
