let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
*_PAYMENT/PEMBAYARAN_*
 *FrihetStore* 

/Shopee/Gopay/Ovo/Neo+                                 
Nomor : 082288316705 (Muhammad Zulfadli)

DANA : 081372434381 (MAR***)



BCA
NOMOR : 8550473446 (Muhammad Zulfadli)

 Qris/Alfamart/Indomaret
Pm Langsung Ke admin
`.trim(), '© Robby Catur', 'MENU', '.frihetstore', m)
  }
handler.command = /^payment$/i
module.exports = handler