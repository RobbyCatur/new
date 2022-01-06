let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
	m.reply('Proses')
  if (!args[0]) throw 'Uhm...url nya mana?'
  let me = conn.user.name
  let res = await fetch(global.API('xteam', '/dl/tiktok', {
    url: args[0]
  }, 'APIKEY'))
  if (res.status !== 200) throw `Coba lagi`
  let json = await res.json()
  if (!json.status) throw json
  let url = json.result.link_dl1 || json.result.link_dl2 || ''
  if (!url) throw 'Gagal mengambil url download'
  let txt = `
${me} Tiktok Downloader
    `
    await conn.sendFile(m.chat, url, 'tiktok.mp4', txt.trim(), m)
}
handler.help = ['tiktok', 'tt', 'tik'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tt|tik(tok)?(dl)?)$/i
handler.limit = true
module.exports = handler
