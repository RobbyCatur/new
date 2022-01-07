const { igdl } = require('../lib/igdl-scraper')
let handler = async (m, { conn, text, }) => {
  let json = await igdl(text)
  let result = json.data
 conn.sendFile(m.chat, result, 'ig.mp4', m)
 }
 handler.command = /^tesig$/i
module.exports = handler