let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
MLBB PAKET KONTOL

86💎    	18.850
172💎  	Rp37.700,00
257💎  	Rp57.000,00
344💎  	Rp76.100,00
429💎  	Rp95.000,00
514💎   Rp117.000,00
600💎  	Rp137.000,00
706💎  	Rp155.600,00
878💎   Rp199.500,00
963💎  	Rp219.450,00
1050💎	Rp239.508,00
1412💎	Rp320.000,00
2194💎	Rp476.525,00
3688💎	Rp800.000,00
5532💎	Rp1.290.000,00
9288💎	Rp1.980.000,00
SL / TL	Rp132.100,00
`.trim(), '©Robby Catur', 'BAYAR', '.bayar', m)
}
handler.command = /^mlkontol$/i
module.exports = handler