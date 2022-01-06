let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
*_PriceList Diamond FreeFire_*
*_Via ID - Legal 100%_*
🔰 *FrihetStore* 🔰
    
5 💎 = Rp 820
20 💎 = Rp 2.735
50 💎 = Rp 6.565
70 💎 = Rp 9.030
100 💎 = Rp 13.405
140 💎 = Rp 18.060
210 💎 = Rp 27.100
355 💎 = Rp 45.130
720 💎 = Rp 90.255
2000 💎 = Rp 248.000
7290 💎 = Rp 905.000
🗿MM= Rp 27.500
🦏MB = Rp 137.000


⏳ *_PROSES 1-10 MENIT_*
`.trim(), '© Robby Catur', 'BAYAR', '.payment', m)
}
handler.command = /^ff$/i
module.exports = handler