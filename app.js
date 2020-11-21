const express = require('express')
// 使用套件: https://www.npmjs.com/package/cookie-parser
// 參考教學: https://www.cnblogs.com/chyingp/p/express-cookie-parser-deep-in.html
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  extname: '.handlebars',
  helpers: {
    ifEquals: function (value1, value2) {
      return value1 === value2
    }
  }
}))
app.set('view engine', 'handlebars')
// 使用 cookieParser 為送出給 client 的 cookie 加密
// 'secret' 可以用其他的字串替換，建議是一個 128 bytes 的隨機字串
app.use(cookieParser('secret'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
// setting static files
app.use(express.static('public'))

app.use(routes)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
