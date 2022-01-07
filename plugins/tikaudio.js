let handler = async (m, { conn, args }) => {
  conn.sendFile(m.chat, (`https://api.lolhuman.xyz/api/tiktokmusic?apikey=c6670fc7e461b7623a8fdf9f&url=` + args[0]), m)
  } 
  handler.command = /^tikaudio$/i
  module.exports = handler