import fetch from "node-fetch"
import { readFileSync } from "fs"



export async function all(m) {

  //Kalo mau menggokil pake ini
 // let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')

  let stc = readFileSync('./sticker/tag.webp')
const trol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 999999999999,
                            itemCoun : 404,
                            surface : 404,
                            message: me,
                            orderTitle: 'B',
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return

    // ketika ditag 
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.sendMessage(m.chat, { sticker : stc, thumbnail: thumb , contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6283820073017',
title: '「 ❔ 」',
body: me,
sourceUrl: 'http://marin.my.id', thumbnail: thumb
  }
 }}, { quoted: m })
        }
    } catch (e) {
        return
    }

                                
}