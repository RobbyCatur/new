const HX = require('hxz-api')

let handler = async (m, { conn, args }) => {
  let me = conn.user.name
  let txt = `
${me} Instagram downloader
`.trim()
  let result = HX.igdl(args[0]).then(res => conn.sendFile(m.chat, res.medias[0].url, '', '', m))
}
handler.command = /^tesig$/i
module.exports = handler
