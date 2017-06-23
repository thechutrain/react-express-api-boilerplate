const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()

app.get('/test', (req, res) => {
	res.json({ test: 'hi' })
})

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`)
})
