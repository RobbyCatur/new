const HX = require('hxz-api')

let handler = async (m, { conn }) => {
  let me = conn.user.name
  let txt = `
${me} Instagram downloader
`.trim()
  let result = HX.igdl(url).then(res => conn.sendFile(m.chat, res.medias[0].url, '', '',txt, m))
}
handler.command = /^tesig$/i
module.exports = handler
