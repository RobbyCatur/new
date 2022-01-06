let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
MLBB PAKET MEMEK
	
10-60menit max 24jam	
	
113 DM	Rp24.300
168 DM	Rp38.100
460 DM	Rp96.000
1427 DM	285.000
2398 DM	485.000
3596 DM	720.000
`.trim(), '©Robby Catur', 'BAYAR', '.bayar', m)
}
handler.command = /^mlmemek$/i
module.exports = handler