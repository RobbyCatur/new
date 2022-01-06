let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
  REGION INDO PAKET A
35 UC	8.000		
74 UC	14.200	
221 UC	48.500	
770 UC	135.000		
2013 UC	325.000
4200 UC	638.000
8750 UC	1.290.000
`.trim(), '©Robby Catur', 'BAYAR', '.bayar', m)
}

handler.command = /^pubga$/i
module.exports = handler