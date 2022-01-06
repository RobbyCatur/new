let handler = async (m, { conn, args }) => {
  conn.send2Button(m.chat, `Silahkan pilih media`, '©Robby Catur', 'IG FOTO', `.igfoto ${args[0]}`, 'IG VIDEO', `.igvideo ${args[0]}`, m)
  }
  handler.command = /^ig$/i
module.exports = handler