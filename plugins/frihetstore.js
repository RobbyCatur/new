let handler = async (m, { conn }) => {
  conn.reply(m.chat, `
*_ALL Menu 🔰 FrihetStore_* 🔰

!mlA
!mlB
!ff
!ecerhdi
!format
!payment
!convert
!ytprem
`.trim(), m)
}
handler.command = /^frihetstore$/i
module.exports = handler