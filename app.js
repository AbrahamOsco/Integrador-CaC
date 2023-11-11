const express = require('express')
const path = require('node:path')

const app = express()
app.use(express.static(path.join(__dirname, './public'), { extensions: ['html'] }))

app.get('/relative', (req, res) => {
	res.sendFile('./public/pages/relative.html', { root: __dirname })
})

app.get('/absolute', (req, res) => {
	res.sendFile('./public/pages/absolute.html', { root: __dirname })
})

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
	console.log(`Listening at port ${PORT}`)
})
