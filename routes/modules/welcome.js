const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // const firstName = req.signedCookies.user
  const sessionUser = req.session.user
  if (sessionUser) {
    return res.render('welcome', { firstName: sessionUser })
  }

  return res.redirect('/login')
})

module.exports = router
