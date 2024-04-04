import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Reply media dengan perintah *${usedPrefix + command}*`
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`${link}
${media.length} Byte(s)
${isTele ? '(No Expiry Date)' : '(Unknown)'}`)

}

handler.help = ['upload2', 'up2']
handler.tags = ['tools']
handler.command = /^u(p2)?(pload2)?$/i

export default handler