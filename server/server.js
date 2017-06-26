const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const app = express()
require('dotenv').load()

// ======= DEVELOPMENT BUILD =======
if (process.env.NODE_ENV === 'DEV') {
	console.log('======== DEVELOPMENT ENVIRONMENT!!!! ========')
	app.get('/test', (req, res) => {
		res.json({ test: 'hi' })
	})
	app.listen(PORT, () => {
		console.log(`Listening on port: ${PORT}`)
	})
}

// ======= PRODUCTION BUILD =========
if (process.env.NODE_ENV === 'PROD') {
	console.log('======== PRODUCTION ENVIRONMENT!!!! ========')
	app.use(express.static(path.join(__dirname, '../', 'build')))
	app.get('/test', (req, res) => {
		res.json({ test: 'hello' })
	})
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../', '/build/index.html'))
	})
	app.listen(PORT, () => {
		console.log(`Listening on port: ${PORT}`)
	})
}
