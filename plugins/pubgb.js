let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
263 UC	Rp45.250
525 UC	Rp92.500
788 UC	Rp129.800
1.050 UC	Rp175.200
1.375 UC	Rp219.900
1.638 UC	Rp260.000
1.900 UC	Rp310.000
8.750 UC	Rp1.290.000
2.425 UC	Rp389.700
2.875 UC	Rp442.846
3.138 UC	Rp476.400
3.400 UC	Rp530.500
3.925 UC	Rp616.680				
4.250 UC	Rp650.200				
6.000 UC	Rp865.000				
9.375 UC	Rp1.295.000				
46.875 UC	Rp6.420.000				
93.750 UC	Rp12.915.000
`.trim(), '©Robby Catur', 'BAYAR', '.bayar', m)
}

handler.command = /^pubgb$/i
module.exports = handler