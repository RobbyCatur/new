let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
	let me = conn.user.name
	let res = await fetch(`https://hardianto.xyz/api/instagram?url=` + args[0])
	let json = await res.json()
	let url = json.url
	let isvideo = json.isvideo
	let txt = `
	${me} Instagram downloader
Post Info
Like : ${json.like}
Komen : ${json.comment}
View : ${json.view}
`
   conn.sendFile(m.chat, url, 'ig' + (isvideo == 'true' ? '.mp4', '.jpg'), txt.trim(), m)
   }
   handler.command = /^ig$/i
module.exports = handler