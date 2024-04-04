import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = m => m
handler.all = async function (m) {
    let name = await conn.getName(m.sender) 
	let pp = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
   // global.bg = await (await fetch(wibu)).buffer()
		global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf", "application/vnd.android.package-archive", "application/zip"])
		
		// Module 
		global.fetch = import('node-fetch')
		global.bochil = import('@bochilteam/scraper')
		
		const _uptime = process.uptime() * 1000
        
		// Ini untuk command crator/owner
		global.kontak2 = [
         [owner[0], await this.getName(owner[0] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'no@gmail.com', true],
         [owner[1], await this.getName(owner[1] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'rlxfly.uwu@gmail.com', true], // Kalo mau di tambah tinggal copy 1baris ini di tempel di bawahnya trs di edit dikit!
        ]
        
		// ucapan ini mah
		global.ucapan = ucapan()

		// pesan sementara
		global.ephemeral = null // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
		let urls = pickRandom(['https://avatars.githubusercontent.com/u/87053694?v=4'])
        global.marin = pickRandom([
  "https://i.pinimg.com/236x/f8/19/88/f819887d6b740420bde71c866ad22154.jpg",
  "https://i.pinimg.com/564x/9e/35/a3/9e35a3e94ce80399d8faded8e88a95f8.jpg",
  "https://i.pinimg.com/236x/c9/d6/b3/c9d6b39738ac793d32e4b5e06a3adbb7.jpg",
  "https://i.pinimg.com/236x/28/95/9c/28959c030ba3d23d564a0eee0206bb5c.jpg",
  "https://i.pinimg.com/236x/f5/f6/ad/f5f6ad8ddb24f63e772d8bc242edc5e7.jpg",
  "https://i.pinimg.com/236x/c0/99/d2/c099d2e16f14baf2ca9f6d10fdd16f90.jpg",
  "https://i.pinimg.com/236x/64/99/c8/6499c80cf33356ae83ff87d6b465d9ac.jpg",
  "https://i.pinimg.com/236x/2a/d6/e4/2ad6e41fe12168fa04f1307badaf70f1.jpg",
  "https://i.pinimg.com/236x/4d/63/f7/4d63f7fe2f79411e3ba8c7f7b048cd55.jpg",
  "https://i.pinimg.com/236x/88/c8/f8/88c8f882edf3b48ea4788dfc517c73e9.jpg",
  "https://i.pinimg.com/236x/3d/4f/fe/3d4ffe1f3cd68f150e0c0caecabcc4b7.jpg",
  "https://i.pinimg.com/236x/6c/d8/cf/6cd8cf405736834ea90aeca68ed29169.jpg",
  "https://i.pinimg.com/236x/4c/ff/f6/4cfff6b25ec919e431fb9a1ce064ac08.jpg",
  "https://i.pinimg.com/236x/24/78/22/24782270a9c48f013bb48de4ac773a17.jpg",
  "https://i.pinimg.com/236x/7b/4f/27/7b4f2710116972a24bba76ca0639eb9a.jpg",
  "https://i.pinimg.com/236x/e7/7d/77/e77d778ed8075142bd7710ac3c6be3f9.jpg",
  "https://i.pinimg.com/236x/37/07/36/370736967beee002dadafe7c4d2ed107.jpg",
  "https://i.pinimg.com/236x/71/70/f8/7170f8e5c644bc6114645947ae5e4dda.jpg",
  "https://i.pinimg.com/236x/10/d9/d9/10d9d914e0be1e0dbe6d4a9a0492cd2c.jpg",
  "https://i.pinimg.com/236x/46/d3/46/46d346f2ed8e938360b24eafe569b417.jpg",
  "https://i.pinimg.com/236x/59/79/a1/5979a16b0fa476b9fbc356a29925feb8.jpg",
  "https://i.pinimg.com/236x/e1/50/ba/e150ba12267666f82f408afb251fb6d7.jpg",
  "https://i.pinimg.com/236x/bd/02/78/bd027842a166ecf6ca43261b25bf71e6.jpg",
  "https://i.pinimg.com/236x/e2/de/9d/e2de9d9da93c66c11f764eb8ebaee5db.jpg",
  "https://i.pinimg.com/236x/c8/89/4b/c8894ba41cbaef477b5b8bcabe1544d1.jpg",
  "https://i.pinimg.com/236x/b6/0e/0a/b60e0adbdf2cd3b0658383e6cccc8ef3.jpg",
  "https://i.pinimg.com/236x/fc/36/f2/fc36f2b83a8c2d06d9566ecadc3a5b9d.jpg",
  "https://i.pinimg.com/564x/09/37/10/0937102c60c6fa5c45e15b34e96bce0f.jpg",
  "https://i.pinimg.com/236x/b6/ea/bc/b6eabca3d56f6073502c329a2e8a1198.jpg",
  "https://i.pinimg.com/236x/c9/66/8b/c9668bfc0468128025ab2909ac6de3ec.jpg",
  "https://i.pinimg.com/236x/d2/52/c5/d252c5d54c69b4a735290660692c6a4c.jpg",
  "https://i.pinimg.com/236x/97/80/68/97806855fee796add79018c8d702a8ef.jpg",
          "https://i.pinimg.com/236x/3e/35/5a/3e355a799e2d82945fb052d4050c8e0f.jpg"
])
		// externalAdReply atau text with thumbnail. gatau bahasa Inggris? coba translate!
		global.adReply = {
			contextInfo: {
				forwardingScore: 999,
				isForwarded: true, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
				externalAdReply: { // Bagian ini sesuka kalian berkreasi :'v
               showAdAttribution: false,
					title: `【 ＭＡＲＩＮ　ＫＩＴＡＧＡＷＡ 】`,
					body: '\t' + me,
					mediaUrl: ' ',
					description: '',
					previewType: "PHOTO",
					thumbnail: await(await fetch(marin)).buffer(),
					sourceUrl: "https://chat.whatsapp.com/JFzipOMAz155jOldBdqUZy",					
				},
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363272269077450@newsletter',
                    newsletterName: '© Marin Kitagawa',
                    serverMessageId: 125
                    }    
			}
		}
		global.fakeig = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            mediaUrl: "https://Instagram.com/rlxfly.uw",
            mediaType: "VIDEO",
            description: "https://Instagram.com/rlxfly.uw", 
            title: 'Simple Bot Esm',
            body: me,
            thumbnailUrl: pp,
            sourceUrl: 'http://s.id/0x404'
    }
    } }
		// Fake 🤥
		global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: me, orderTitle: me, sellerJid: '0@s.whatsapp.net' } } }
		global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': me, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${me},;;;\nFN:${me},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./image/me.png'), thumbnail: fs.readFileSync('./image/me.png'),sendEphemeral: true}}}
        global.fvn = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "17608914335-1625305606@g.us" } : {}) 
                       },
            message: { 
               "audioMessage": {
                        "mimetype":"audio/ogg; codecs=opus",
                        "seconds": "999999999999",
                        "ptt": "true"
                               }
                             } 
                            }
               
                global.ftextt = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "17608914335-1625305606@g.us" } : {}) 
                       },
            message: { 
               "extendedTextMessage": {
                        "text":me,
                        "title": me,
                        'jpegThumbnail': fs.readFileSync('./image/me.png')
                               }
                             } 
                            }
               
                  global.fliveLoc = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat  ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "caption":"Hi","h": `${me}`, 'jpegThumbnail': fs.readFileSync('./image/me.png')}}
           }
               
                  global.fliveLoc2 = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "title": "Hi There Im Using GitHub","h": me, 'jpegThumbnail': fs.readFileSync('./image/me.png')}}
           }
               
                   global.ftoko = {
       key: {
                   fromMe: false,
                   participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "17608914335@s.whatsapp.net" } : {})
               },
               message: {
                   "productMessage": {
                       "product": {
                           "productImage":{
                               "mimetype": "image/jpeg",
                               "jpegThumbnail": fs.readFileSync('./image/me.png') //Gambarnye
                           },
                           "title": me, //Kasih namalu 
                           "description": "Simple Bot Esm", 
                           "currencyCode": "USD",
                           "priceAmount1000": "20000000",
                           "retailerId": "Ghost",
                           "productImageCount": 1
                       },
                           "businessOwnerJid": `0@s.whatsapp.net`
               }
           }
       }
               
                     global.fdocs = {
           key : {
                  participant : '0@s.whatsapp.net'
                               },
              message: {
                           documentMessage: {
                           title: me, 
                           jpegThumbnail: fs.readFileSync('./image/me.png')
                                 }
                               }
                             }
               
                    global.fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "17608914335-1625305606@g.us",
                   "inviteCode": "null",
                   "groupName": "Iyh", 
                   "caption": me, 
                   'jpegThumbnail': fs.readFileSync('./image/me.png')
               }
           }
       }
       
                    global.fgif = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "17608914335-1625305606@g.us" } : {}) 
                       },
            message: { 
                        "videoMessage": { 
                        "title": me,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': me,
                        'jpegThumbnail': fs.readFileSync('./image/me.png')
                               }
                              }
                             }
                             //Fakes Random
           let fek = [global.ftroli, global.fkontak, global.fvn, global.fvid, global.ftextt, global.fliveLoc, global.fliveLoc2, global.ftoko, global.fdocs, global.fgclink, global.fgif]
            
               //Get Random Fake
           global.fake = fek.getRandom()
	}
}

export default handler 

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}