import axios from 'axios'
import cheerio from 'cheerio'
import util from 'util'

let handler = async ( m , { conn, text } ) => {

if(!text) throw 'Number?'

  let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", text)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hola, equipo de WhatsApp: mi número está bloqueado sin motivo y no infringe las reglas de WhatsApp Si hay un informe de que infringí las reglas, es solo un informe falso Desbloquee la cuenta.
Mi número: `)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axios({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
m.reply('Berhasil\n' + util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}

handler.command = ['unban']
handler.rowner = true
export default handler