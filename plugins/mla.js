let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
*_PriceList Diamond ML A_*
*_Via ID - Legal 100%_*
🔰 *FrihetStore* 🔰

86 💎 = Rp18.550
172 💎 =Rp37.100 
257 💎 = Rp55.650 
344 💎 = Rp74.200
429 💎 = Rp92.750
514 💎 = Rp111.300
600 💎 = Rp130.000
706 💎 = Rp148.500 
878 💎 = Rp185.500 
963 💎 = Rp204.100 
1050 💎 = Rp222.600 
1220 💎 = Rp259.700 
1412 💎 = Rp296.800 
2195 💎 =Rp450.000
3073 💎 = Rp630.000
3688 💎 = Rp740.000
4032 💎 = Rp815.000 
5532 💎 = Rp1.150.000 
6238 💎 = Rp1.300.000 
9288 💎 = Rp1.900.000 
⭐SL/TW	 Rp125.000
🌟SL PLUS	 Rp285.000


⏳ *_PROSES 1-10 MENIT_*
⚠️ *NOTE : TANYAKAN STOK SEBELUM MELAKUKAN TRANSFER*
`.trim(), '© Robby Catur', 'BAYAR', '.payment', m)
}

handler.command = /^mla$/i
module.exports = handler