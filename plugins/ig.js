let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  let me = await conn.user.name
  let res = await fetch(global.API('LeysCoder', '/api/instagram/video', { url: args[0] }, 'apikey'))
  let json = await res.json()
  let url = json.result
  if (!url) throw `URL tidak ditemukan`
  await conn.sendFile(m.chat, url, 'ig.mp4', `${me} Instagram downloader`, m)
  }
  handler.command = /^ig$/i
  module.exports = handler
  