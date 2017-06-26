const express = require('express')
const router = express.Router()
const User = require('../models/user')

/*  ========== Register Route ===========
*
*/
router.post('/register', (req, res) => {
	// 1. Get the username and password from registration
	const { username, password } = req.body
	// 2. Search the User database to make sure there isn't already a user with the same username
	User.find({ username }, (err, match) => {
		if (err) {
			return res.json({ error: true, errMsgs: ['Error in finding User'] })
		} else if (match.length !== 0) {
			return res.json({
				error: true,
				errMsgs: ['Already a user with that username']
			})
		}
		// 3. Create the new user!
		const userData = new User({
			username,
			password
		})
		// 4. Save to the database
		userData.save(err => {
			console.log('saving ...')
			if (err) {
				return res.json({ error: true, errMsgs: ['Saving Error'] })
			}
			return res.json({ success: true })
		})
	})
})

/*  ========== Login Route ===========
*
*/

module.exports = router
