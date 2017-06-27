const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const app = express()

// ======= Add middlerware =======

// ======== API ROUTES HERE ========
app.get('/test', (req, res) => {
	res.json({ test: 'hi franklin!!!' })
})

// ======= DEVELOPMENT BUILD =======
if (process.env.NODE_ENV === 'DEV') {
	console.log('======== DEVELOPMENT ENVIRONMENT!!!! ========')
}

// ======= PRODUCTION BUILD =========
if (process.env.NODE_ENV === 'PROD') {
	console.log('======== PRODUCTION ENVIRONMENT!!!! ========')
	app.use(express.static(path.join(__dirname, '../', 'build')))
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../', '/build/index.html'))
	})
}

// ======== Start Server ========
app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`)
})
