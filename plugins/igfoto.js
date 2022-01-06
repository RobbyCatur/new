let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, global.API('LeysCoder', '/api/instagram/photo', { url: args[0] }, apikey))
  }
  handler.command = /^igfoto$/i
  module.exports = handler
