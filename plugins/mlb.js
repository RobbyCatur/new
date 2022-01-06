let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
*_PriceList Diamond ML B_*
*_Via ID - Legal 100%_*
🔰 *_FrihetStore_* 🔰

39 💎 = Rp 8.495
65 💎 = Rp 14.155
92 💎 = Rp 19.785
133 💎 = Rp 28.315
266 💎 = Rp 56.615
400 💎 = Rp 84.925
534 💎 = Rp 113.235
670 💎 = Rp 141.545
1342 💎 = Rp 283.135
2700 💎 = Rp 577.555
4150 💎 = Rp 866.555
7050 💎 = Rp 1.500.000


⏳ *_PROSES 1-30 MENIT_*
⚠️ *NOTE : TANYAKAN STOK SEBELUM MELAKUKAN TRANSFER*
`.trim(), '© Robby Catur', 'BAYAR', '.payment', m)
}
handler.command = /^mlb$/i
module.exports = handler