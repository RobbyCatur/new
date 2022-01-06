function handler(m) {
  this.sendContact(m.chat, '6282245409072', 'Robby Catur', m)
  m.reply('Itu nomor pembuat bot. Silahkan dichat jika ada yang ingin ditanyakan')
}
handler.help = ['creator']
handler.tags = ['info']
handler.command = /^(creator)$/i

module.exports = handler