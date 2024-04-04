import fetch from 'node-fetch';

// Fungsi untuk menerjemahkan teks menggunakan Google Translate API
const translateText = async (text, targetLanguage) => {
  try {
    const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURI(text)}`);
    const json = await res.json();
    return json[0][0][0]; // Ambil hasil terjemahan dari respons JSON
  } catch (error) {
    console.error('Error translating text:', error);
    return text; // Kembalikan teks asli jika terjadi kesalahan
  }
};

let handler = async(m, { conn }) => {
  try {
    let res = await fetch(`https://api.jikan.moe/v4/top/characters`);
    if (!res.ok) throw new Error(`Gagal mengambil karakter top anime: ${res.statusText}`);
    let json = await res.json();

    let characterInfo = `[ *KARAKTER ANIME TOP* ]`;

    for (let character of json.data) {
      characterInfo += `\n- *Nama:* ${character.name}`;
      characterInfo += `\n- *Nama Kanji:* ${character.name_kanji}`;
      characterInfo += `\n- *Favorites:* ${character.favorites}`;
      // Terjemahkan bagian "about" ke bahasa Indonesia
      const translatedAbout = await translateText(character.about, 'id');
      characterInfo += `\n- *Tentang:* ${translatedAbout}`;
      characterInfo += '\n';
    }

    conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'karakter_top.jpg', characterInfo, m);
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat mengambil karakter top anime...');
  }
}

handler.help = ['karaktertopanime'];
handler.tags = ['anime'];
handler.command = /^(karaktertopanime)$/i;

export default handler;