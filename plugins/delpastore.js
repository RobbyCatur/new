let handler = async (m, { conn, usedPrefix }) => {
  conn.send2Button(m.chat, `
*DELPA STORE* 
${usedPrefix}MLKONTOL
${usedPrefix}MLMEMEK
${usedPrefix}PUBGA
${usedPrefix}PUBGB
${usedPrefix}BAYAR
`.trim(), '©Robby Catur', 'MLKONTOL', `${usedPrefix}mlkontol`, 'MLMEMEK', `${usedPrefix}mlmemek`, m)
}

handler.command = /^delpastore$/i
module.exports = handler