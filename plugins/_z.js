import pkg from 'quick.db';
const {set, push, fetch} = pkg;
import rssParser from 'rss-parser';
const request = new rssParser();
let handler = m => m
handler.before = m => {

  // UCair3EnAPVYLDL4drNJOrwQ
  let ch = 'UCxxnxya_32jcKj4yN1_kD7A'
            let chs = Math.floor(Math.random()*ch.length)

  
  let chat = global.DATABASE.data.chats[m.chat] || {}
  if (chat.ingfo) {
    if (fetch(`postedVideos`) === null) set(`postedVideos`, []);
    setInterval(() => {
        request.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${ch}`)
        .then(data => {
            if (fetch(`postedVideos`).includes(data.items[0].link)) return;
            else {
                set(`videoData`, data.items[0]);
                push("postedVideos", data.items[0].link);
                let parsed = fetch(`videoData`);
                let message = `✅\tNEW VIDEO\n • From: ${parsed.author} \n • Tittle: ${parsed.title} \n • Link video: ${parsed.link}`

conn.sendMessage(m.chat, {text: message, thumbnail: global.thumb , contextInfo:{externalAdReply: {title: parsed.title, mediaType: 'VIDEO', mediaUrl: parsed.link, sourceUrl: parsed.link, body: me, thumbnail: global.thumb2 }}})
                  }
            }
        );
    }, 10000);
  }

}

export default handler