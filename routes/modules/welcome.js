const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const firstName = req.signedCookies.user
  if (firstName) {
    return res.render('welcome', { firstName })
  }

  return res.redirect('/login')
})

module.exports = router
