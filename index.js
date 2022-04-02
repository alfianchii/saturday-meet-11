const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

/**
 * CRUD Buku Tamu
 * {
 *  name,
 *  phone,
 *  address
 * }
 */
const db = [
  {
    name: 'Akbar',
    phone: '+62856913123',
    address: 'Jakarta'
  },
  {
    name: 'Hanna',
    phone: '+6213231231',
    address: 'Tangerang'
  }
];

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/buku-tamu', function(req, res) {
  res.json(db)
})

app.post('/buku-tamu', function(req, res) {
  const data = req.body

  db.push(data)

  res.send('Data berhasil disimpan')
})

app.get('/buku-tamu/:index', function(req, res) {
  res.json(db[req.params.index])
})

app.put('/buku-tamu/:index', function(req, res) {
  const data = req.body

  db[req.params.index] = data

  res.send('Data berhasil diupdate')
})

app.delete('/buku-tamu/:index', function(req, res) {
  db.splice(req.params.index, 1)

  res.send('Id ' + req.params.index + ' berhasil dihapus')
})

app.listen(port, () => {
  console.log('Server berjalan di port ' + port)
})
