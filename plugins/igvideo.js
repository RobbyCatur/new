let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let res = await fetch(global.API('LeysCoder', '/api/instagram/video', { url: args[0] }, 'apikey'))
  let json = await res.json()
  let hasil = json.result
  conn.sendFile(m.chat, hasil, 'ig.mp4', m)
  }
  handler.command = /^igvideo$/i
  module.exports = handler
