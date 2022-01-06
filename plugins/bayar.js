let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
PAYMENT!
DANA: 0895321757404 N wayan s
OVO: 0895321757404 m rio s w
GOPAY: 0895321757404 Delpa anggrvn
`.trim(), '©Robby Catur', 'Delpa Store', '.delpastore', m)
 }
 
 handler.command = /^bayar$/i
module.exports = handler