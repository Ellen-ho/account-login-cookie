const express = require('express')
const router = express.Router()

const AccountLogin = require('../../models/accountLogin')

router.get('/', (req, res) => {
  return res.render('login', { errorMsg: null })
})

router.post('/', (req, res) => {
  const userAuth = req.body
  const email = userAuth.email.trim()
  const password = userAuth.password.trim()

  return AccountLogin.findOne(
    {
      $and: [
        { email: email },
        { password: password }
      ]
    })
    .lean()
    .then(result => {
      if (result === null) {
        res.render('login', { errorMsg: 'Username 或 Password 錯誤!' })
        return;
      }
      // 對 cookie 進行簽章(加密) + 10分鐘的存活期 
      // res.cookie('user', result.firstName, { signed: true, maxAge: 600 * 1000 });
      req.session.user = result.firstName;
      res.redirect('/welcome')
    })
    .catch(error => console.log(`login error: ${error}`))
})

module.exports = router
