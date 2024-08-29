

process.on('uncaughtException', console.error)
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const fs = require('fs')
const cron = require('node-cron')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require("performance-now");
const axios = require('axios')
const fsx = require('fs-extra')
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const ytdl = require("ytdl-core")
const cheerio = require('cheerio');
const ms = require("ms");
const crypto = require('crypto')
const https = require('https')
const tkApi = require('@tobyg74/tiktok-api-dl')
const { URL_REGEX } = require('@whiskeysockets/baileys')
const { fileTypeFromBuffer } = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const { Pixiv } = require('@ibaraki-douji/pixivts')
const pixiv = new Pixiv()
const bingi = require('bing-scraper')
const phd = require('@justalk/pornhub-api')
const xfar = require('xfarr-api')
const dylux = require('api-dylux')
const nou = require("node-os-utils");
const dhn = require('dhn-api')
const g4f = require("g4f")
const path = require('path')
const { pipeline } = require('stream')
const { promisify } = require("util")
const jimp = require('jimp')
const kotz = require("kotz-api");
const zsExtract = require('zs-extract')
const acrcloud = require('acrcloud')
const { chord } = require('@bochilteam/scraper')
const { ocrSpace } = require('ocr-space-api-wrapper')
const mann = require('d-scrape')
const content = JSON.stringify(m.message)
const isQuotedViewonce = m.quoted ? content.includes('viewOnceMessage') ? true : false : true
const { youtubedl, youtubedl2 } = require('@bochilteam/scraper-sosmed')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const maker = require('mumaker')
const yts = require("yt-search")
const { Saweria } = require('./lib/scrape/saweria')
const jsobfus = require('javascript-obfuscator')

const { Configuration, OpenAIApi } = require('openai')
const { tiktoks } = require('./lib/tiktoks')
const {
 downloadTrack,
 searchSpoti
 } = require('./lib/spotify')
const { 
jadibot, 
stopjadibot,
listjadibot 
} = require('./clonebot/jadibot')
const { 
exec, 
spawn, 
execSync 
} = require("child_process")
const {
formatIDR,
Tts,
igdl,
} = require('./src/func')
const { 
addExif
 } = require('./lib/exif')
const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
formatp, 
parseMention, 
getRandom, 
getGroupAdmins,
generateProfilePicture, 
toRupiah, 
shorturl, 
enumGetKey, 
sort,
pickRandom, 
toNumber, 
randomNumber
 } = require('./lib/myfunc')
const { TelegraPH } = require("./lib/TelegraPH")
const { 
search, 
ytmp3, 
ytmp4 } = require('./lib/searchyt')
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const ntixic = JSON.parse(fs.readFileSync("./lib/antixic.json"))
const { 
ssweb, 
findSongs,
remini,
hentai,
spek,
whisper,
ephoto,
tiktok,
formatUptime,
 } = require("./lib/scraper")
const { color, 
bgcolor 
} = require('./lib/color')
const { 
uptotelegra
 } = require('./lib/upload')
const { 
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./lib/register.js')
const {
  FajarNews,
  BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme,
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api");
//=================================================//
module.exports = conn = async (conn, m, chatUpdate, store) => {
 try {
 if (global.db.data == null) await loadDatabase()
    require('./src/schema')(m);
    var chats = global.db.data.chats[m.chat],
        users = global.db.data.users[m.sender]
        settings = global.db.data.settings
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')

const isCreator = [conn.decodeJid(conn.user.id), ...global.rowner.map(([number]) => number), ].map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender);

//WM By Rulzz, Titenono lek ko hapus le😹
 async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: conn.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'}
conn.ev.emit('messages.upsert', msg)}
var budy = (typeof m.text == 'string' ? m.text : '')

let prefix;
let commandnya;

if (isCreator || global.db.data.users[m.sender].premium) {
  prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '';
  commandnya = body.startsWith(prefix) ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
} else {
  prefix = /^[#!.,®©¥€¢£/\∆✓]/.test(body) ? body.match(/^[#!.,®©¥€¢£/\∆✓]/gi) : '#';
  commandnya = body.startsWith(prefix) ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
}
//=================================================//

const Styles = (text, style = 1) => {
var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
};
var replacer = [];
xStr.map((v, i) =>
replacer.push({
original: v,
convert: yStr[style].split('')[i]
})
);
var str = text.toLowerCase().split('');
var output = [];
str.map((v) => {
const find = replacer.find((x) => x.original == v);
find ? output.push(find.convert) : output.push(v);
});
return output.join('');
};
const pushname = m.pushName || "No Name"
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const botNumber = await conn.decodeJid(conn.user.id)
const isRegistered = checkRegisteredUser(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const nomore = m.sender.replace(/[^0-9]/g, '')
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const welcm = m.isGroup ? wlcm.includes(from) : false
const isAutoread = settings.autoread ? true : false
const jangan = m.isGroup ? ntilink.includes(m.chat) : false	
const chat = m.isGroup?[m.chat] : false
const qmsg = (quoted.msg || quoted)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
//const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const qtod = m.quoted? "true":"false"
const db_saweria = JSON.parse(fs.readFileSync('./src/saweria.json'));

let _limit = JSON.parse(fs.readFileSync('./src/rpg/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./src/rpg/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./src/rpg/darah.json'))
let balance = JSON.parse(fs.readFileSync('./lib/balance.json'));
let _petualang = JSON.parse(fs.readFileSync('./src/rpg/inventory.json'))
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah } = require('./src/rpg/darah.js')
const { cekInventoryAdaAtauGak } = require('./src/rpg/alat_tukar.js')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('./src/rpg/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit } = require('./src/rpg/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi,kurangGajah, getIkan, getAyam, getKelinci, getDomba,getSapi,getGajah} = require('./src/rpg/buruan.js')
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/scrape/limit");
const { getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,addIkan,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addStone,getMiningstone,getBatuId,addBatuId,jualstone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu, checkPetualangUser, addInventori, sellBesi, addDm, sellDm, getDm, sellEmas, addFish, sellFish, getFish, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion,getBesi, getEmas, getEmerald,getUmpan,getPotion} = require('./src/rpg/rpg.js')
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.senpder)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
//const isSewa = _sewa.checkSewaGroup(from, sewa)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const isPetualang = checkPetualangUser(m.sender)
// SETTING USER RPG
let DarahAwal = 100;
const ikan = ['🐟','🐠','🐡']
const enter = '\n'



// FANGSIEN RPG
if (m.isGroup) {
const Fisha = await getMancingIkan(m.sender)
const FishId = await getMancingId(m.sender)
if (Fisha === undefined && FishId === undefined) await addMancingId(m.sender)}

// AUTO SAVE PETUALANG

if(!isPetualang&&!commandnya){
reqXp = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
await _petualang.push(m.sender)
await addInventoriDarah(m.sender, DarahAwal)
await addInventori(m.sender)
await addInventoriBuruan(m.sender)
await fs.writeFileSync('./src/rpg/inventory.json', JSON.stringify(_petualang))
await addLevelingId(m.sender)
}
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Makassar').format('dddd, DD MMMM YYYY')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')


const time2 = moment().tz('Asia/Makassar').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🏙️'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌇'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🌤️'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Subuh 🌆'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
//=================================================//
// function

//SKREP
const { bard } = require('./lib/bard')
const ffstalk = require('./lib/ffstalk.js')
const uploadImage = require('./lib/uploadImage.js')
//================== [ RESPON ALL GAME ] ==================//

msToDate = (ms) => {
  let years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
  let months = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  let weeks = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7)
  );
  let days = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );
  return `${years} tahun ${months} bulan ${weeks} minggu ${days} hari`;
};


msToDay = (ms) => {
  let temp = ms;
  let years = Math.floor(temp / (365 * 24 * 60 * 60 * 1000));
  temp = temp % (365 * 24 * 60 * 60 * 1000);
  let months = Math.floor(temp / (30 * 24 * 60 * 60 * 1000));
  temp = temp % (30 * 24 * 60 * 60 * 1000);
  let weeks = Math.floor(temp / (7 * 24 * 60 * 60 * 1000));
  temp = temp % (7 * 24 * 60 * 60 * 1000);
  let days = Math.floor(temp / (24 * 60 * 60 * 1000));
  temp = temp % (24 * 60 * 60 * 1000);
  let hours = Math.floor(temp / (60 * 60 * 1000));
  temp = temp % (60 * 60 * 1000);
  let minutes = Math.floor(temp / (60 * 1000));
  temp = temp % (60 * 1000);

  let result = "";
  if (years > 0) {
    result += years + (years > 1 ? " tahun " : " tahun ");
  }
  if (months > 0) {
    result += months + (months > 1 ? " bulan " : " bulan ");
  }
  if (weeks > 0) {
    result += weeks + (weeks > 1 ? " minggu " : " minggu ");
  }
  if (days > 0) {
    result += days + (days > 1 ? " hari " : " hari ");
  }
  if (hours > 0) {
    result += hours + (hours > 1 ? " jam " : " jam ");
  }
  if (minutes > 0) {
    result += minutes + (minutes > 1 ? " menit " : " menit ");
  }
  return result.trim();
};

const kalgans = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `${botname}`,
jpegThumbnail: "",
}
}}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}

async function falseR () {
conn.sendReact(m.chat, '❌', m.key)
}

function monospace(string) {
return '```' + string + '```'
}

async function checkBandwidth() {
      let ind = 0;
      let out = 0;
      for (let i of await require("node-os-utils").netstat.stats()) {
        ind += parseInt(i.inputBytes);
        out += parseInt(i.outputBytes);
      }
      return {
        download: formatp(ind),
        upload: formatp(out),
      };
    }

function toRupiahh(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

const fake = {
key: {
participant: '0@s.whatsapp.net',
remoteJid: "0@s.whatsapp.net"
},
message: {
conversation: `ᴀɴʏᴏɴᴇ-ᴍᴅ`}
}

async function reply(teks) {
conn.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : fake })
}

// Banned Users
if (isCmd && db.data.users[m.sender].banned == true) return reply("❗Kamu tidak bisa memakai fitur bot, Karna kamu telah di *Banned!*")

// Anti Spam
if (prefix && command) {
       conn.spam = conn.spam ? conn.spam : {};
      if (m.sender in conn.spam) {
        conn.spam[m.sender].count++;
        if (m.messageTimestamp - conn.spam[m.sender].lastspam > 1) {
          if (conn.spam[m.sender].count > 1) {
            db.data.users[m.sender].banned = true;
            reply("Jangan spam, kamu dibanned selama 10 detik!");
            setTimeout(() => {
              db.data.users[m.sender].banned = false;
              reply(`Sekarang kamu bisa chat lagi.`);
            }, 10 * 1000);
          }
          conn.spam[m.sender].count = 0;
          conn.spam[m.sender].lastspam = m.messageTimestamp;
        }
      } else {
        conn.spam[m.sender] = {
          jid: m.sender,
          count: 0,
          lastspam: 0
        };
      }
    }


try {
let id = m.chat;
let timeout = 180000;
let hadiah = randomNumber(10000, 20000);
let users = global.db.data.users[m.sender];
let budy = typeof m.body == 'string' ? m.body : false;
conn.bomb = conn.bomb ? conn.bomb : {};

if (conn.bomb[id] && !isNaN(body) && !isCmd) {
let json = conn.bomb[id][1].find(v => v.position == body);
if (!json) return
if (json.emot == '💥') {
json.state = true;
let bomb = conn.bomb[id][1];
let teks = `*DUARRRRRR 💥*\n\n`;
teks += bomb.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += bomb.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += bomb.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `@${m.sender.split("@")[0]} membuka kotak yang berisi *Bom* Game di hentikan!`
conn.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://telegra.ph/file/da5e5612ccead39af2e93.jpg", title: " 🎮  𝗚 𝗔 𝗠 𝗘 - 𝗧 𝗘 𝗕 𝗔 𝗞 - 𝗕 𝗢 𝗢 𝗠  🎮", body: null, renderLargerThumbnail: true, sourceUrl: null, mediaType: 1}}}, {quoted: kalgans}).then(() => {
clearTimeout(conn.bomb[id][2]);
delete conn.bomb[id];
});
} else if (json.state) {
return conn.sendText(m.chat, `Kotak ${json.number} sudah di buka silahkan pilih kotak yang lain!`, m);
} else {
json.state = true;
let changes = conn.bomb[id][1];
let open = changes.filter(v => v.state && v.emot != '💥').length;

if (open >= 8) {
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `*Permainan selesai!* kotak berisi bom tidak terbuka\n*+ $${toRupiah(hadiah)} balance* ke @${m.sender.split("@")[0]}`;

conn.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender]}}, {quoted: kalgans}).then(() => {
db.data.users[m.sender].balance += hadiah;
clearTimeout(conn.bomb[id][2]);
delete conn.bomb[id];
});
} else {
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `Waktu : *${((timeout / 1000) / 60)} menit*\n`;
teks += `Kotak berisi bom tidak terbuka\n*+ $${toRupiah(hadiah)} balance* ke @${m.sender.split("@")[0]}`;

conn.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender]}}, {quoted: kalgans}).then(() => {
db.data.users[m.sender].balance += hadiah;
});
}
}
}
} catch (e) {
return conn.sendText(m.chat, e.toString(), m);
}

if ((from in tebakgambar2)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar2[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${tebakgambar2[from].jawaban}*`);
delete tebakgambar2[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 150`);
conn.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
users.balance += 150
clearTimeout(waktu);
delete tebakgambar2[from];
} else conn.sendMessage(sender, {react: {text: '❌', key: m.key}})
}

if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[from]

if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete caklontong[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete caklontong[from];
} else falseR()
}

if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await m.reply(`*GAME FAMILY 100*\n\nJawaban kamu benar!\nJawaban: ${i}\nHadiah: $${hadiah}\n\n${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}`)
users.balance += hadiah
} else falseR()
}
if (budy.toLowerCase() == "nyerah") {
let teks = `*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah\n`
let jwb = jawaban
for (let i of jwb){teks += `\n${i}`}
m.reply(teks)
delete family100[from];
clearTimeout(waktu);
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}

if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]

if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakbendera[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan: ${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete tebakbendera[from];
} else falseR()
}

let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
if (roof) {
let win = ''
let tie = false
if (sender == roof.p2 && /^(acc(ept)?|y|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(body) && m.isGroup && roof.status == 'wait') {
if (/^(gamau|nanti|ga(k.)?bisa)/i.test(body)) {
global.db.data.users[m.sender].balance -= 1000
pokl = `@${roof.p2.split('@')[0]} menolak suit, suit dibatalkan\nDan player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
await conn.sendTextWithMentions(from, pokl, m)
delete suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)

teksbbb = `AYO PILIH SUIT MU`
ggy = `Suit telah dikirimkan ke chat

@${roof.p.split('@')[0]} dan @${roof.p2.split('@')[0]}

Silahkan pilih suit di nomor bot"
➩ wa.me/${botNumber.split('@')[0]}`
await conn.sendMessage(m.chat, {text: 'Suit telah dikirimkan ke chat\nSilahkan pilih suit di chat masing²', contextInfo: {mentionedJid: [roof.p, roof.p2]}}, {quoted: m})
if (!roof.pilih) await conn.sendTextWithMentions(roof.p, `*Silahkan pilih dibawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`, m)
if (!roof.pilih2) await conn.sendTextWithMentions(roof.p2, `*Silahkan pilih dibawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`, m)
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await conn.sendMessage(from, {text: `Kedua pemain tidak niat main,\nSuit dibatalkan`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
global.db.data.users[m.sender].balance -= 1000
sffp = `@${(roof.pilih ? roof.p2 : roof.p).split('@')[0]} tidak memilih suit, game berakhir\nDan Player dikenakan sanksi pengurangan Rp. 1,000 saldo karna menolak ajakan pemain`
await reply(sffp)
}
delete suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = sender == roof.p
let jwb2 = sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(body) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(budy.toLowerCase())[0]
roof.text = body
await conn.sendMessage(from, {text: `Kamu telah memilih ${body} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted:kalgans})
if (!roof.pilih2) await conn.sendMessage(roof.p2, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(body) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(budy.toLowerCase())[0]
roof.text2 = body

tyu = `Kamu telah memilih ${body} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`
await conn.sendMessage(from, {text: tyu}, {quoted:m})

if (!roof.pilih) await conn.sendMessage(roof.p, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
await conn.sendTextWithMentions(roof.asal, `${tie ? '*HASIL SERI*\n\n' : ''}@${roof.p.split('@')[0]} *${roof.text}* ${tie ? '' : roof.p == win ? ' Menang' : ' Kalah'}\n@${roof.p2.split('@')[0]} *${roof.text2}* ${tie ? '' : roof.p2 == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah Balance : 1000 '}`)
if (roof.p == win) {
global.db.data.users[roof.p].balance += 1000
} else if (roof.p2 == win) {
global.db.data.users[roof.p2].balance += 1000
}
delete suit[roof.id]
}
}

const isTicTacToe = (from, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
status = true
}
})
return status
}
const getPosTic = (from, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
position = i
}
})
if (position !== null) {
return position
}
}
const KeisiSemua = (tic) => {
let status = true
for (let i of tic){
if (i !== '❌' && i !== '⭕'){
status = false
}
}
return status
}
const cekIsi = (nomor, tic) => {
let status = false
if (tic[nomor] === '❌' || tic[nomor] === '⭕'){
status = true
}
return status
}
const cekTicTac = (tic) => {
let status = false
if (tic[0] === '❌' && tic[1] === '❌' && tic[2] === '❌' || tic[0] === '⭕' && tic[1]=== '⭕' && tic[2] === '⭕'){
status = true
} else if (tic[3] === '❌' && tic[4] === '❌' && tic[5] === '❌' || tic[3] === '⭕' && tic[4] === '⭕' && tic[5] === '⭕'){
status = true
} else if (tic[6] === '❌' && tic[7] === '❌' && tic[8] === '❌' || tic[6] === '⭕' && tic[7] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[3] === '❌' && tic[6] === '❌' || tic[0] === '⭕' && tic[3] === '⭕' && tic[6] === '⭕'){
status = true
} else if (tic[1] === '❌' && tic[4] === '❌' && tic[7] === '❌' || tic[1] === '⭕' && tic[4] === '⭕' && tic[7] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[5] === '❌' && tic[8] === '❌' || tic[2] === '⭕' && tic[5] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[4] === '❌' && tic[8] === '❌' || tic[0] === '⭕' && tic[4] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[4] === '❌' && tic[6] === '❌' || tic[2] === '⭕' && tic[4] === '⭕' && tic[6] === '⭕'){
status = true
}
return status 
}
if (isTicTacToe(from, tictactoe)) {
try {
// TicTacToe
if (isTicTacToe(from, tictactoe)){
let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let posi = tictactoe[from]
let anu = posi.TicTacToe
if (posi.status === null){
if (sender === posi.ditantang){
if (body.toLowerCase() === 'y'){
the = `@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
conn.sendText(from, the, m)

tictactoe[from].status = true
} else if (body.toLowerCase() === 'n'){
db.data.users[m.sender].balance -= 100
the1 = `@${posi.ditantang.split('@')[0]} menolak, game dibatalkan\nDan Player dikenakan sanksi -100 balance karna menolak ajakan pemain`
conn.sendText(from, the1, m)
delete tictactoe[from];
}
}
} else if (posi.status === true){
if (sender === posi.penantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '❌'
if (cekTicTac(tictactoe[from].TicTacToe)){
the2 = `@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
conn.sendText(from, the2, m)
global.db.data.users[posi.penantang].balance += posi.hadiah
global.db.data.users[posi.ditantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the3 = `*HASIL SERI*

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
conn.sendText(from, the3, m)

delete tictactoe[from];
} else {
the4 = `@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.ditantang.split('@')[0]}`
conn.sendText(from, the4, m)

tictactoe[from].status = false
}
}
}
}
} else if (posi.status === false){
if (sender === posi.ditantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '⭕' 
if (cekTicTac(anu)){
the5 = `@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
conn.sendText(from, the5, m)
global.db.data.users[posi.ditantang].balance += posi.hadiah
global.db.data.users[posi.penantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the6 = `Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
conn.sendText(from, the6, m)

delete tictactoe[from];
} else {
the7 = `@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
conn.sendText(from, the7, m)

tictactoe[from].status = true
}
}
}
}
}
}
} catch (err){
console.log(chalk.redBright('[ ERROR TICTACTOE ]'), err)
}
}
//BATAS RESPON GAME

conn.autoshalat = conn.autoshalat ? conn.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.id : m.sender
	let id = m.chat 
    if(id in conn.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Waktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Makassar dan sekitarnya._`
    conn.autoshalat[id] = [
    conn.sendMessage(m.chat, {
                        audio: {
                            url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
                        },
                        mimetype: 'audio/mp4',
                        ptt: true,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                mediaType: 1,
                                mediaUrl: '',
                                title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
                                body: `🕑 ${waktu}`,
                                sourceUrl: '',
                                thumbnail: await fs.readFileSync('./media/jdw.jpg'),
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m,
                    }),
    setTimeout(async () => {
    delete conn.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }

let bdw = await checkBandwidth()

let tosers = Object.entries(global.db.data.users).sort((a, b) => b[1].registered - a[1].registered).map((v) => v[0]).length

let toPrem = 0;
          Object.values(global.db.data.users).forEach((e) => {
          if(e.premium) toPrem += 1
          })
          
const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await conn.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: kalgans })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}    

const downloadMp4 = async (Link) => {
      try {
        await ytdl.getInfo(Link)
        let mp4File = getRandom('.mp4')
        console.log(color('Download Video With ytdl-core'))
        let nana = ytdl(Link).pipe(fs.createWriteStream(mp4File)).on('finish', async () => {
          await conn.sendMessage(from, {
            video: fs.readFileSync(mp4File),
            gifPlayback: false
          }, {
            quoted: kalgans
          })
          fs.unlinkSync(`./${mp4File}`)
        })
      } catch (err) {
        m.reply(`${err}`)
      }
    }

jarakkota = (dari, ke) => {
   return new Promise(async (resolve, reject) => {
	var html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
	var $ = cheerio.load(html), obj = {}
	var img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
	obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
	obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
	resolve(obj)
   })
}


if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await conn.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return conn.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return conn.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return conn.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await conn.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
conn.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}


//BATAS
if (global.onlypc) {
        	if (command&!m.isGroup){
	         return reply(`conn - MD dalam mode private, gunakan di private chat!`)
	     }
	}
//=================================================//
if (!conn.public) {
if (!m.key.fromMe) return
}
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
conn.sendPresenceUpdate('available', m.chat)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m conn - MD \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
            }
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: conn.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
conn.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await conn.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (autobio) {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
await conn.updateProfileStatus(`I am ${botname} | Aktif Selama ${uptime} ⏳ | Mode : ${conn.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
}
if (autoread) {
conn.readMessages([m.key])
}
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
autoread: false
}

if (db.data.chats[m.chat].conn) {
let name = await conn.getName(m.sender)
  let prompt = `Mulai sekarang nama kamu adalah conn, kamu mempunyai sifat yang ramah, lucu, dan suka membantu orang lain, kamu selalu menjawab semua pertanyaan yang di berikan menggunakan bahasa indonesia dan selalu menggunakan kata panggilan aku dan kamu!, kamu adalah ai buatan dari GhostXdzz yang di buat hanya untuk menjawab semua pertanyaan dengan ramah, dan lawan bicaramu sekarang adalah ${name}, dan kamu merespon pertanyaan di awali dengan kata sapaan sepeti halo di tambahkan dengan ${name}. dan ingat jangan bicara menggunakan kata formal anggap ${name} adalah teman mu.`
let GhostXdzz = await fetchJson(`https://itzpire.site/ai/gpt-logic?q=${budy.toLowerCase()}&logic=${prompt}&realtime=true`)
conn.sendMessage(m.chat, {
text: `*[ F U R I N A - A I ]*\n\n${GhostXdzz.data.response}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: botname,
body: '',
thumbnailUrl: `${thumbnail}`,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}

let teksjpm = `*MASUK MAS, SERING BAGI BAGI VPS*\n\n${linkgc}`;
if (chats.autojpm && !m.key.fromMe && !isCreator && !isAdmins && isBotAdmins)
if (body.match(`chat.whatsapp.com`)) {
await conn.sendMessage(from, {delete: {remoteJid: m.chat, id: m.id, participant: m.sender }})
reply(teksjpm)
}
if (chats.autojpm && !isCreator && !isAdmins && isBotAdmins)
if (body.match(`chat.whatsapp.com`)) {
await conn.sendMessage(from, {delete: {remoteJid: m.chat, id: m.id, participant: m.sender }})
}

// FUNCTION ANTITOXIC
if (!db.data.chats[m.chat].antitoxic) {
db.data.chats[m.chat].antitoxic = false
}
if (chats.antitoxic && !m.key.fromMe && !isCreator)
if (body.includes('sange') || body.includes('memek') || body.includes('anjing') || body.includes('kontol') || body.includes('bangsat') || body.includes('anjg') || body.includes('titid') || body.includes('kanjut') || body.includes('tempek') || body.includes('tetek') || body.includes('bangsad') || body.includes('pepek') || body.includes('bngsd') || body.includes('babi') || body.includes('anj') || body.includes('ajg') || body.includes('bajingan') || body.includes('mmk') || body.includes('kntl') || body.includes('kontl') || body.includes('b4bi') || body.includes('ppk') || body.includes('njg') || body.includes('ngentot') || body.includes('coli') || body.includes('yapit') || body.includes('yatim') || body.includes('asu') || body.includes('piatu') || body.includes('mati') || body.includes('bacot') || body.includes('ngocok')) {
await conn.sendMessage(from, {delete: {remoteJid: m.chat, id: m.id, participant: m.sender }})
conn.sendTextWithMentions(m.chat, `*[ KATA TOXIC TERDETEKSI ]*\n\n@${m.sender.split('@')[0]} Kau Toxic Jangan Di Ulang Lagi !!`, m)
}

if (chats.antiSticker) {
  let isSticker = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
    if(isSticker === "stickerMessage"){
        if (isAdmins || !isBotAdmins) {
        } else {
          m.reply(`*Sticker Detected*\nSorry the sticker you sent will be deleted, because the admin activated antiSticker`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } return !1
    }
  }

if (chats.antibot && !isCreator && !isAdmins) {
    if (m.isBaileys && m.fromMe == false){
        if (!isAdmins || !isBotAdmins){		  
        } else {
          reply(`*[ System Notice ]* bot detected`)
    return await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
}

if (chats.antilink && !m.key.fromMe && !isCreator && !isAdmins && isBotAdmins)
if (body.match(`chat.whatsapp.com`)) {
await conn.sendMessage(from, {delete: {remoteJid: m.chat, id: m.id, participant: m.sender }})
reply(`Link Terdeteksi Jadi Nya Di Delete`)
}
if (chats.antilink && !isCreator && !isAdmins && isBotAdmins)
if (body.match(`chat.whatsapp.com`)) {
await conn.sendMessage(from, {delete: {remoteJid: m.chat, id: m.id, participant: m.sender }})
}

if (chats.antichanell && !m.key.fromMe && !isCreator && !isAdmins && isBotAdmins)
if (body.match(`whatsapp.com`)) {
await conn.sendMessage(from, {delete: {remoteJid: m.chat, id: m.id, participant: m.sender }})
reply(`Link Chanel Terdeteksi Jadi Nya Di Delete`)
}
if (chats.antichanell && !isCreator && !isAdmins && isBotAdmins)
if (body.match(`whatsapp.com`)) {
await conn.sendMessage(from, {delete: {remoteJid: m.chat, id: m.id, participant: m.sender }})
}
//================== [ ALL FUNCTION ] ==================//
let limitnya = db.data.users[m?.sender].limit
let balancenya = db.data.users[m?.sender].balance
const isPremium = db.data.users[m?.sender].premium == true ? true : m?.sender == owner ? true : false

async function uselimit() {
if (isCreator) return
db.data.users[m?.sender].limit -= 1
}

async function igdl2(url) {
let res = await axios("https://indown.io/");
let _$ = cheerio.load(res.data);
let referer = _$("input[name=referer]").val();
let locale = _$("input[name=locale]").val();
let _token = _$("input[name=_token]").val();
let { data } = await axios.post(
"https://indown.io/download",
new URLSearchParams({
link: url,
referer,
locale,
_token,
}),
{
headers: {
cookie: res.headers["set-cookie"].join("; "),
},
}
);
let $ = cheerio.load(data);
let result = [];
let __$ = cheerio.load($("#result").html());
__$("video").each(function () {
let $$ = $(this);
result.push({
type: "video",
thumbnail: $$.attr("poster"),
url: $$.find("source").attr("src"),
});
});
__$("img").each(function () {
let $$ = $(this);
result.push({
type: "image",
url: $$.attr("src"),
});
});

return result;
}

Array.prototype.rendem = function rendem() {
return this[Math.floor(Math.random() * this.length)];
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatter(value) {
return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculatePPN(value) {
return value * 0.1;
}

function removeItem(array, item) {
return array.filter(elem => !(elem.jid === item.jid && elem.state === item.state));
}

cron.schedule('00 00 * * *', () => {
let user = Object.keys(global.db.data.users)
for (let jid of user) {
global.db.data.users[jid].claim = 1
if (global.db.data.users[jid].balance < 10000 && global.db.data.users[jid].limit < 1) {
global.db.data.users[jid].limit = limitawal
global.db.data.users[jid].balance = balanceawal
}}}, {
scheduled: true,
timezone: "Asia/Makassar"
})

const totalFitur = () =>{
            var mytext = fs.readFileSync("./anyone.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}


const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
//=================================================//
switch(command) {
case "menu": {
wek = `
╭─ 「 I N F O - U S E R 」
│ ◦ *Name:*‎@${m.sender.split('@')[0]}
│ ◦‎ *Status:* ${isCreator ? "Owner" : "User"}
│ ◦‎ *User:* ${isPremium ? 'Premium' : 'Free'}
│ ◦‎ *Limit:* ${limitnya}
│ ◦‎ *Balance:* $${toRupiah(balancenya)}
╰──── •

╭─「 I N F O - B O T 」
│ ◦ *Botname:* ${botname}
│ ◦ *Upload:* ${bdw.upload}
│ ◦ *Download* : ${bdw.download}
│ ◦ *Owner Name:* ${ownername}
│ ◦ *Baileys:* @whiskeysockets/baileys
│ ◦ *Bot Festures:* ${totalFitur()}
│ ◦ *Run Time:* ${runtime(process.uptime())}
╰──── •
`

let sections = [{
title: '<!>List Menu',
highlight_label: 'All Menu Lists',
rows: [{
title: '<!>Menu All',
description: `Displays All Menu`, 
id: '.allmenu'
},
{
title: '<!>Menu Owner',
description: `Displays Owner Menu`, 
id: '.ownermenu'
},
{
title: '<!>Menu Main',
description: `Displays Main Menu`, 
id: '.mainmenu'
},
{
title: '<!>Menu Download',
description: `Displays Download Menu`, 
id: '.downloadmenu'
},
{
title: '<!>Menu Search',
description: `Displays Search Menu`, 
id: '.searchmenu'
},
{
title: '<!>Menu Group',
description: `Displays Group Menu`, 
id: '.groupmenu'
},
{
title: '<!>Menu Ai',
description: `Displays Ai Menu`, 
id: '.aimenu'
},
{
title: '<!>Menu Game', 
description: "Displays the Game Menu", 
id: '.gamemenu'
},
{
title: '<!>Menu Berita', 
description: "Displays the Berita Menu", 
id: '.beritamenu'
},
{
title: '<!>Menu Voice', 
description: "Displays the Voice Menu", 
id: '.voicemenu'
},
{
title: '<!>Menu Anime', 
description: "Displays the Anime Menu", 
id: '.animemenu'
},
{
title: '<!>Menu Epotho', 
description: "Displays the Epotho Menu", 
id: '.epothomenu'
},
{
title: '<!>Menu Rpg', 
description: "Displays the Rpg Menu", 
id: '.rpgmenu'
},
{
title: '<!>Menu Tools', 
description: "Displays the Tools Menu", 
id: '.toolsmenu'
},
{
title: '<!>Menu TextPro', 
description: "Displays the TextPro Menu", 
id: '.textpromenu'
},
]
},
{
title: 'Information', 
highlight_label: 'All Menu Lists',
rows: [{
title: 'Creator Bot',
description: `Bot owner info, who created it ( information )`, 
id: '.owner'
},
{
title: 'Backup', 
description: "Backup The Script", 
id: '.backupsc'
},
{
title: 'Public', 
description: "Change Bot To Public", 
id: '.public'
},
{
title: 'Self', 
description: "Change Bot To Self", 
id: '.self'
},
{
title: 'Total Feature', 
description: "<!> Displays the Total Fitur", 
id: '.totalfitur'
},
{
title: 'Your Saldo', 
description: "Check Your Saldo", 
id: '.me'
},
{
title: 'Clear Sesi', 
description: "Clear The Sesi", 
id: '.delsesi'
},
{
title: 'Runtime', 
description: "Runtime Bot", 
id: '.runtime'
},
{
title: 'Tqto', 
description: "People who collaborate in development", 
id: '.tqto'
},
{
title: 'Disk', 
description: "<!> Displays the Disk", 
id: '.disk'
},
{
title: 'Server', 
description: "<!> Displays the Server Bot", 
id: '.server'
},
{
title: 'Ping ', 
description: "<!> Displays the Speed", 
id: '.ping'
},
}]
}]


let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: Styles('Powered By Anyone - MD'), 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: wek
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('Bot WhatsApp Anyone MD')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ${m.sender.split('@')[0]}\n`,
 subtitle: "Anyone - MD",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/1f9a5d13299a6dabac8bc.png" } }, { upload: conn.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Creator\",\"url\":\"https://wa.me/6281359123789\",\"merchant_url\":\"https://wa.me/6281359123789\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "allmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `╭─ 「 I N F O - U S E R 」
│ ◦ *Name:*‎@${m.sender.split('@')[0]}
│ ◦‎ *Status:* ${isCreator ? "Owner" : "User"}
│ ◦‎ *User:* ${isPremium ? 'Premium' : 'Free'}
│ ◦‎ *Limit:* ${limitnya}
│ ◦‎ *Balance:* $${toRupiah(balancenya)}
╰──── •

╭─「 I N F O - B O T 」
│ ◦ *Botname:* ${botname}
│ ◦ *Owner Name:* ${ownername}
│ ◦ *Baileys:* @whiskeysockets/baileys
│ ◦ *Bot Festures:* ${totalFitur()}
│ ◦ *Run Time:* ${runtime(process.uptime())}
╰──── •

╭─ • O W N E R - M E N U 
│ ${prefix}banuser
│ ${prefix}unban
│ ${prefix}listban
│ ${prefix}setbotname
│ ${prefix}addprem
│ ${prefix}delprem
│ ${prefix}listprem
│ ${prefix}buatclaimprem
│ ${prefix}addbalance
│ ${prefix}addlimit
│ ${prefix}createredeem
│ ${prefix}resetredeem
│ ${prefix}listclaimprem
│ ${prefix}public
│ ${prefix}self
│ ${prefix}getcase
│ ${prefix}cekasalmember
│ ${prefix}listpc
│ ${prefix}nowa
│ ${prefix}addcase
│ ${prefix}delcase
│ ${prefix}listregis
│ ${prefix}getbio
│ ${prefix}setppbot
│ ${prefix}setpppanjang
│ ${prefix}delppbot
│ ${prefix}getname
│ ${prefix}sdomain
│ ${prefix}spanel
│ ${prefix}biochange
│ ${prefix}myip
│ ${prefix}restart
│ ${prefix}runtime
│ ${prefix}del
│ ${prefix}anticall
│ ${prefix}readchange
│ ${prefix}autojpm
╰──── •

╭─ • M A I N - M E N U
│ ${prefix}listclaimprem
│ ${prefix}buyprem
│ ${prefix}afk
│ ${prefix}topglobal
│ ${prefix}sewabot
│ ${prefix}buylimit
│ ${prefix}claim
│ ${prefix}monthly
│ ${prefix}redeem
│ ${prefix}me
│ ${prefix}totalfitur
│ ${prefix}kapankah
│ ${prefix}bisakah
│ ${prefix}apakah
│ ${prefix}bagaimanakah
│ ${prefix}cls
│ ${prefix}pin
│ ${prefix}pin2
│ ${prefix}image
│ ${prefix}server
│ ${prefix}ping
│ ${prefix}report
│ ${prefix}cerpen
│ ${prefix}sewabot
│ ${prefix}image
│ ${prefix}tambah
│ ${prefix}kali
│ ${prefix}kurang
╰──── •

╭─ • T E X T P R O - M E N U
│ ${prefix}aovwall 
│ ${prefix}anonymhacker 
│ ${prefix}advanceglow 
│ ${prefix}avatarlolnew 
│ ${prefix}avatardota 
│ ${prefix}avenger 
│ ${prefix}bloodfrosted 
│ ${prefix}bokeh 
│ ${prefix}box3d 
│ ${prefix}breakwall 
│ ${prefix}cartoongravity 
│ ${prefix}cloud 
│ ${prefix}deluxesilver 
│ ${prefix}fireworksparkle 
│ ${prefix}futureneon 
│ ${prefix}fluffy 
│ ${prefix}fpslogo 
│ ${prefix}greenneon 
│ ${prefix}holographic 
│ ${prefix}horrorblood 
│ ${prefix}icecold 
│ ${prefix}jokerlogo 
│ ${prefix}lionlogo 
│ ${prefix}lighttext 
│ ${prefix}lolbanner 
│ ${prefix}logogaming 
│ ${prefix}luxury 
│ ${prefix}marvelstudio 
│ ${prefix}metaldark 
│ ${prefix}minion 
│ ${prefix}natureleaves 
│ ${prefix}neon 
│ ${prefix}neonlight 
│ ${prefix}newyearcard 
│ ${prefix}ninjalogo 
│ ${prefix}pubgmaskot 
│ ${prefix}pornhubmaker 
│ ${prefix}roadwarning 
│ ${prefix}sandengraved 
│ ${prefix}sandsummer 
│ ${prefix}sandwriting 
│ ${prefix}space 
│ ${prefix}starsnight 
│ ${prefix}strawberries 
│ ${prefix}steel3d 
│ ${prefix}summersand 
│ ${prefix}sweet-candy 
│ ${prefix}carved-wood 
│ ${prefix}night-sky 
│ ${prefix}butterfly 
│ ${prefix}coffee-cup 
│ ${prefix}picture-of-love 
│ ${prefix}flower-typography 
│ ${prefix}harry-potter 
│ ${prefix}under-grass 
│ ${prefix}metallic 
│ ${prefix}naruto-maker 
│ ${prefix}pubg 
│ ${prefix}shadow-sky 
│ ${prefix}flaming 
│ ${prefix}text1917 
│ ${prefix}thunder 
│ ${prefix}toxic 
│ ${prefix}wooden3d 
│ ${prefix}wolflogo 
╰──── •

╭─ • A N I M - M E N U 
│ ${prefix}videoanime
│ ${prefix}quotesanime
│ ${prefix}otakudesu *query*
│ ${prefix}akira 
│ ${prefix}akiyama 
│ ${prefix}ana 
│ ${prefix}asuna 
│ ${prefix}ayuzawa 
│ ${prefix}boruto 
│ ${prefix}chiho 
│ ${prefix}chitoge 
│ ${prefix}cosplayloli 
│ ${prefix}cosplaysagiri 
│ ${prefix}deidara 
│ ${prefix}doraemon 
│ ${prefix}elaina 
│ ${prefix}emilia 
│ ${prefix}erza 
│ ${prefix}gremory 
│ ${prefix}hestia 
│ ${prefix}hinata 
│ ${prefix}husbu 
│ ${prefix}inori 
│ ${prefix}isuzu 
│ ${prefix}itachi 
│ ${prefix}itori 
│ ${prefix}kagachan 
│ ${prefix}kagura 
│ ${prefix}kakasih 
│ ${prefix}kaori 
│ ${prefix}keneki 
│ ${prefix}kotori 
│ ${prefix}kurumi 
│ ${prefix}loli 
│ ${prefix}madara 
│ ${prefix}megumin 
│ ${prefix}mikasa 
│ ${prefix}mikey 
│ ${prefix}miku 
│ ${prefix}minato 
│ ${prefix}naruto 
│ ${prefix}neko 
│ ${prefix}neko2 
│ ${prefix}nekonime 
│ ${prefix}nezuko 
│ ${prefix}onepiece 
│ ${prefix}pokemon 
│ ${prefix}randomnime 
│ ${prefix}randomnime2 
│ ${prefix}rize 
│ ${prefix}sagiri 
│ ${prefix}sakura 
│ ${prefix}sasuke 
│ ${prefix}shina 
│ ${prefix}shinka 
│ ${prefix}shinomiya 
│ ${prefix}shizuka 
│ ${prefix}shota 
│ ${prefix}tejina 
│ ${prefix}toukachan 
│ ${prefix}tsunade 
│ ${prefix}waifu 
│ ${prefix}animewall 
│ ${prefix}yotsuba 
│ ${prefix}yuki 
│ ${prefix}yulibocil 
│ ${prefix}yumeko 
│ ${prefix}wallnime 
╰──── •


╭─ • P H O T O - M E N U 
│ ${prefix}glitchtext 
│ ${prefix}writetext 
│ ${prefix}advancedglow 
│ ${prefix}typographytext 
│ ${prefix}pixelglitch 
│ ${prefix}neonglitch 
│ ${prefix}flagtext 
│ ${prefix}flag3dtext 
│ ${prefix}deletingtext 
│ ${prefix}blackpinkstyle 
│ ${prefix}glowingtext 
│ ${prefix}underwatertext 
│ ${prefix}logomaker 
│ ${prefix}cartoonstyle 
│ ${prefix}papercutstyle 
│ ${prefix}watercolortext 
│ ${prefix}effectclouds 
│ ${prefix}blackpinklogo 
│ ${prefix}gradienttext 
│ ${prefix}summerbeach 
│ ${prefix}luxurygold 
│ ${prefix}multicoloredneon 
│ ${prefix}sandsummer 
│ ${prefix}galaxywallpaper 
│ ${prefix}1917style 
│ ${prefix}makingneon 
│ ${prefix}royaltext 
│ ${prefix}freecreate 
│ ${prefix}galaxystyle 
│ ${prefix}lighteffects 
╰──── •


╭─ • D O W N - M E N U 
│ ${prefix}tiktok
│ ${prefix}tiktok2
│ ${prefix}tiktok
│ ${prefix}spotify
│ ${prefix}spotifydl
│ ${prefix}tt
│ ${prefix}fb
│ ${prefix}shorturl
│ ${prefix}ytmp4
│ ${prefix}ytmp4v2
│ ${prefix}ytmp3
│ ${prefix}ytmp3v2
│ ${prefix}mediafire
│ ${prefix}instagram 
│ ${prefix}igdl
│ ${prefix}gitclone
╰──── •

╭─ • S E A R C H - M E N U 
│ ${prefix}google
│ ${prefix}spotifysearch
│ ${prefix}gsmarena
│ ${prefix}bukalapak
│ ${prefix}gimage
│ ${prefix}subfinder
│ ${prefix}subfinderv2
│ ${prefix}yts
│ ${prefix}play
│ ${prefix}play2
│ ${prefix}ttsearch
│ ${prefix}ttsearch2
│ ${prefix}ffstalk
│ ${prefix}stalkwa
│ ${prefix}chord
╰──── •

╭─ • B E R I T A - M E N U 
│ ${prefix}antara 
│ ${prefix}cnbc 
│ ${prefix}cnn 
│ ${prefix}daily 
│ ${prefix}detik 
│ ${prefix}fajar 
│ ${prefix}indozone 
│ ${prefix}inews 
│ ${prefix}jalantikus-meme 
│ ${prefix}kompas 
│ ${prefix}kontan 
│ ${prefix}layarkaca 
│ ${prefix}merdeka 
│ ${prefix}okezone 
│ ${prefix}sindo 
│ ${prefix}tempo 
│ ${prefix}tribun 
│ ${prefix}wikipedia 
│ ${prefix}wikimedia
│ ${prefix}jalantikus-meme
╰──── •

╭─ • V O I C E - M E N U 
│ ${prefix}bass 
│ ${prefix}blown 
│ ${prefix}deep 
│ ${prefix}earrape 
│ ${prefix}fast 
│ ${prefix}fat 
│ ${prefix}nightcore 
│ ${prefix}reverse 
│ ${prefix}robot 
│ ${prefix}slow 
│ ${prefix}smooth 
│ ${prefix}squirrel
╰──── •

╭─ • G R O U P - M E N U 
│ ${prefix}add
│ ${prefix}acc
│ ${prefix}leavegc2
│ ${prefix}welcome
│ ${prefix}setname
│ ${prefix}linkgc
│ ${prefix}tagall
│ ${prefix}hidetag
│ ${prefix}promote
│ ${prefix}demote
│ ${prefix}kick 
│ ${prefix}closetime
│ ${prefix}opentime
│ ${prefix}creategc
│ ${prefix}antilink
│ ${prefix}antichanell
│ ${prefix}antilinkv2
│ ${prefix}antitoxic
│ ${prefix}antisticker
│ ${prefix}antibot
│ ${prefix}editdesk
│ ${prefix}sendlinkgc
│ ${prefix}resetlinkgc
│ ${prefix}totag
│ ${prefix}totalmem
│ ${prefix}setppgc
╰──── •

╭─ • A I - M E N U 
│ ${prefix}conn
│ ${prefix}connchatt
│ ${prefix}bard
│ ${prefix}ai-rizzpiw
│ ${prefix}anyone-ai
│ ${prefix}luminai
│ ${prefix}gemini
│ ${prefix}aivoice
╰──── •

╭─ • G A M E - M E N U 
│ ${prefix}modegame
│ ${prefix}tebakbomb
│ ${prefix}casino
│ ${prefix}family100
│ ${prefix}caklontong
│ ${prefix}tebakgambar
│ ${prefix}tebakbendera
│ ${prefix}coin
│ ${prefix}slot
│ ${prefix}tictactoe
│ ${prefix}delttt
│ ${prefix}suit
╰──── •

╭─ • R P G - M E N U 
│ ${prefix}joinrpg
│ ${prefix}inv
│ ${prefix}ngojek
│ ${prefix}hunting
│ ${prefix}mining
│ ${prefix}mancing
│ ${prefix}jual
│ ${prefix}buy
│ ${prefix}heal
│ ${prefix}nebang
│ ${prefix}luckyday
│ ${prefix}adventure
│ ${prefix}killslime
│ ${prefix}sellikan
│ ${prefix}sellemas
│ ${prefix}sellbesi
│ ${prefix}jualcoal
│ ${prefix}lebur
│ ${prefix}jualstone
│ ${prefix}jualingot
│ ${prefix}jualkayu
│ ${prefix}killgoblin
│ ${prefix}killdevil
│ ${prefix}killbehemoth
│ ${prefix}killdemon
│ ${prefix}killdemonking
╰──── •

╭─ • T O O L S  - M E N U
│ ${prefix}qc
│ ${prefix}qc2
│ ${prefix}remini
│ ${prefix}hd
│ ${prefix}removebg
│ ${prefix}sticker
│ ${prefix}smeme
│ ${prefix}ssweb
│ ${prefix}cekip
│ ${prefix}toimg
│ ${prefix}jarak
│ ${prefix}readvo
│ ${prefix}bukavn
│ ${prefix}get
│ ${prefix}tourl
╰──── •

`
conn.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted: fake })
}
break
case "ownermenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let teks = `
╭─ 「 I N F O - U S E R 」
│ ◦ *Name:*‎@${m.sender.split('@')[0]}
│ ◦‎ *Status:* ${isCreator ? "Owner" : "User"}
│ ◦‎ *User:* ${isPremium ? 'Premium' : 'Free'}
│ ◦‎ *Limit:* ${limitnya}
│ ◦‎ *Balance:* $${toRupiah(balancenya)}
╰──── •

╭─「 I N F O - B O T 」
│ ◦ *Botname:* ${botname}
│ ◦ *Owner Name:* ${ownername}
│ ◦ *Baileys:* @whiskeysockets/baileys
│ ◦ *Bot Festures:* ${totalFitur()}
│ ◦ *Run Time:* ${runtime(process.uptime())}
╰──── •

╭─ • O W N E R - M E N U
│ ${prefix}pay
│ ${prefix}banuser
│ ${prefix}unban
│ ${prefix}listban
│ ${prefix}setbotname
│ ${prefix}addprem
│ ${prefix}listregis 
│ ${prefix}delprem
│ ${prefix}listprem
│ ${prefix}buatclaimprem
│ ${prefix}addbalance
│ ${prefix}createredeem
│ ${prefix}resetredeem
│ ${prefix}addlimit
│ ${prefix}buylimit
│ ${prefix}listclaimprem
│ ${prefix}public
│ ${prefix}self
│ ${prefix}jpm
│ ${prefix}getcase
│ ${prefix}cekasalmember
│ ${prefix}listpc
│ ${prefix}nowa
│ ${prefix}addcase
│ ${prefix}delcase
│ ${prefix}getbio
│ ${prefix}setppbot
│ ${prefix}setpppanjang
│ ${prefix}delppbot
│ ${prefix}getname
│ ${prefix}sdomain
│ ${prefix}spanel
│ ${prefix}biochange
│ ${prefix}restart
│ ${prefix}runtime
│ ${prefix}myip
│ ${prefix}del
│ ${prefix}anticall
│ ${prefix}readchange
│ ${prefix}autojpm
╰──── •
`
conn.sendMessage(m.chat, {
text: teks,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "mainmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekf = `
╭─ 「 I N F O - U S E R 」
│ ◦ *Name:*‎@${m.sender.split('@')[0]}
│ ◦‎ *Status:* ${isCreator ? "Owner" : "User"}
│ ◦‎ *User:* ${isPremium ? 'Premium' : 'Free'}
│ ◦‎ *Limit:* ${limitnya}
│ ◦‎ *Balance:* $${toRupiah(balancenya)}
╰──── •

╭─「 I N F O - B O T 」
│ ◦ *Botname:* ${botname}
│ ◦ *Owner Name:* ${ownername}
│ ◦ *Baileys:* @whiskeysockets/baileys
│ ◦ *Bot Festures:* ${totalFitur()}
│ ◦ *Run Time:* ${runtime(process.uptime())}
╰──── •

╭─ • M A I N - M E N U
│ ${prefix}listclaimprem
│ ${prefix}buyprem
│ ${prefix}afk
│ ${prefix}topglobal
│ ${prefix}sewabot
│ ${prefix}buylimit
│ ${prefix}claim
│ ${prefix}monthly
│ ${prefix}redeem
│ ${prefix}me
│ ${prefix}totalfitur
│ ${prefix}kapankah
│ ${prefix}bisakah
│ ${prefix}apakah
│ ${prefix}bagaimanakah
│ ${prefix}cls
│ ${prefix}pin
│ ${prefix}pin2
│ ${prefix}image
│ ${prefix}server
│ ${prefix}ping
│ ${prefix}report
│ ${prefix}cerpen
│ ${prefix}sewabot
│ ${prefix}image
│ ${prefix}tambah
│ ${prefix}kali
│ ${prefix}kurang
╰──── •
`
conn.sendMessage(m.chat, {
text: tekf,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "downloadmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `
╭─ 「 I N F O - U S E R 」
│ ◦ *Name:*‎@${m.sender.split('@')[0]}
│ ◦‎ *Status:* ${isCreator ? "Owner" : "User"}
│ ◦‎ *User:* ${isPremium ? 'Premium' : 'Free'}
│ ◦‎ *Limit:* ${limitnya}
│ ◦‎ *Balance:* $${toRupiah(balancenya)}
╰──── •

╭─「 I N F O - B O T 」
│ ◦ *Botname:* ${botname}
│ ◦ *Owner Name:* ${ownername}
│ ◦ *Baileys:* @whiskeysockets/baileys
│ ◦ *Bot Festures:* ${totalFitur()}
│ ◦ *Run Time:* ${runtime(process.uptime())}
╰──── •

╭─ • D O W N - M E N U
│ ${prefix}tiktok
│ ${prefix}tiktok2
│ ${prefix}tiktokaudio
│ ${prefix}spotify
│ ${prefix}spotifydl
│ ${prefix}tt
│ ${prefix}fb
│ ${prefix}ytmp4
│ ${prefix}ytmp4v2
│ ${prefix}shorturl
│ ${prefix}ytmp3
│ ${prefix}ytmp3v2
│ ${prefix}mediafire
│ ${prefix}Instagram 
│ ${prefix}igdl
╰ ${prefix}gitclone
`
conn.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "searchmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekgh = `
╭─ 「 I N F O - U S E R 」
│ ◦ *Name:*‎@${m.sender.split('@')[0]}
│ ◦‎ *Status:* ${isCreator ? "Owner" : "User"}
│ ◦‎ *User:* ${isPremium ? 'Premium' : 'Free'}
│ ◦‎ *Limit:* ${limitnya}
│ ◦‎ *Balance:* $${toRupiah(balancenya)}
╰──── •

╭─「 I N F O - B O T 」
│ ◦ *Botname:* ${botname}
│ ◦ *Owner Name:* ${ownername}
│ ◦ *Baileys:* @whiskeysockets/baileys
│ ◦ *Bot Festures:* ${totalFitur()}
│ ◦ *Run Time:* ${runtime(process.uptime())}
╰──── •

╭─ • S E A R C H - M E N U
│ ${prefix}yts
│ ${prefix}subfinder
│ ${prefix}subfinderv2
│ ${prefix}google
│ ${prefix}spotifysearch
│ ${prefix}gsmarena
│ ${prefix}bukalapak
│ ${prefix}gimage
│ ${prefix}play
│ ${prefix}play2
│ ${prefix}ttsearch
│ ${prefix}ttsearch2
│ ${prefix}ffstalk
│ ${prefix}stalkwa
│ ${prefix}chord
╰──── •
`
conn.sendMessage(m.chat, {
text: tekgh,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "groupmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `
╭─ 「 I N F O - U S E R 」
│ ◦ *Name:*‎@${m.sender.split('@')[0]}
│ ◦‎ *Status:* ${isCreator ? "Owner" : "User"}
│ ◦‎ *User:* ${isPremium ? 'Premium' : 'Free'}
│ ◦‎ *Limit:* ${limitnya}
│ ◦‎ *Balance:* $${toRupiah(balancenya)}
╰──── •

╭─「 I N F O - B O T 」
│ ◦ *Botname:* ${botname}
│ ◦ *Owner Name:* ${ownername}
│ ◦ *Baileys:* @whiskeysockets/baileys
│ ◦ *Bot Festures:* ${totalFitur()}
│ ◦ *Run Time:* ${runtime(process.uptime())}
╰──── •

╭─ • G R O U P - M E N U
│ ${prefix}add
│ ${prefix}acc
│ ${prefix}leavegc2
│ ${prefix}welcome
│ ${prefix}setnamagc
│ ${prefix}linkgc
│ ${prefix}tagall
│ ${prefix}hidetag
│ ${prefix}promote
│ ${prefix}demote
│ ${prefix}setppgc
│ ${prefix}kick
│ ${prefix}opentime
│ ${prefix}creategc
│ ${prefix}closetime
│ ${prefix}antilink
│ ${prefix}antichanell
│ ${prefix}antilinkv2
│ ${prefix}antitoxic
│ ${prefix}antisticker
│ ${prefix}antibot
│ ${prefix}editdesk
│ ${prefix}sendlinkgc
│ ${prefix}resetlinkgc
│ ${prefix}totag
│ ${prefix}totalmem
╰──── •
`
conn.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "aimenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `
╭─ 「 I N F O - U S E R 」
│ ◦ *Name:*‎@${m.sender.split('@')[0]}
│ ◦‎ *Status:* ${isCreator ? "Owner" : "User"}
│ ◦‎ *User:* ${isPremium ? 'Premium' : 'Free'}
│ ◦‎ *Limit:* ${limitnya}
│ ◦‎ *Balance:* $${toRupiah(balancenya)}
╰──── •

╭─「 I N F O - B O T 」
│ ◦ *Botname:* ${botname}
│ ◦ *Owner Name:* ${ownername}
│ ◦ *Baileys:* @whiskeysockets/baileys
│ ◦ *Bot Festures:* ${totalFitur()}
│ ◦ *Run Time:* ${runtime(process.uptime())}
╰──── •

╭─ • A I - M E N U
│ ${prefix}conn
│ ${prefix}connchatt
│ ${prefix}bard
│ ${prefix}ai-rizzpiw
│ ${prefix}anyone-ai
│ ${prefix}luminai
│ ${prefix}gemini
│ ${prefix}aivoice
╰──── •
`
conn.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "gamemenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekf = `
╭─ 「 I N F O - U S E R 」
│ ◦ *Name:*‎@${m.sender.split('@')[0]}
│ ◦‎ *Status:* ${isCreator ? "Owner" : "User"}
│ ◦‎ *User:* ${isPremium ? 'Premium' : 'Free'}
│ ◦‎ *Limit:* ${limitnya}
│ ◦‎ *Balance:* $${toRupiah(balancenya)}
╰──── •

╭─「 I N F O - B O T 」
│ ◦ *Botname:* ${botname}
│ ◦ *Owner Name:* ${ownername}
│ ◦ *Baileys:* @whiskeysockets/baileys
│ ◦ *Bot Festures:* ${totalFitur()}
│ ◦ *Run Time:* ${runtime(process.uptime())}
╰──── •

╭─ • G A M E - M E N U
│ ${prefix}modegame
│ ${prefix}tebakbomb
│ ${prefix}casino
│ ${prefix}family100
│ ${prefix}caklontong
│ ${prefix}tebakgambar
│ ${prefix}tebakbendera
│ ${prefix}coin
│ ${prefix}slot
│ ${prefix}tictactoe
│ ${prefix}delttt
│ ${prefix}suit
╰──── •
`
conn.sendMessage(m.chat, {
text: tekf,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "beritamenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `
╭─ 「 I N F O - U S E R 」
│ ◦ *Name:*‎@${m.sender.split('@')[0]}
│ ◦‎ *Status:* ${isCreator ? "Owner" : "User"}
│ ◦‎ *User:* ${isPremium ? 'Premium' : 'Free'}
│ ◦‎ *Limit:* ${limitnya}
│ ◦‎ *Balance:* $${toRupiah(balancenya)}
╰──── •

╭─「 I N F O - B O T 」
│ ◦ *Botname:* ${botname}
│ ◦ *Owner Name:* ${ownername}
│ ◦ *Baileys:* @whiskeysockets/baileys
│ ◦ *Bot Festures:* ${totalFitur()}
│ ◦ *Run Time:* ${runtime(process.uptime())}
╰──── •

╭─ • B E R I T A - M E N U
│ ${prefix}antara 
│ ${prefix}cnbc 
│ ${prefix}cnn 
│ ${prefix}daily 
│ ${prefix}detik 
│ ${prefix}fajar 
│ ${prefix}indozone 
│ ${prefix}inews 
│ ${prefix}jalantikus-meme 
│ ${prefix}kompas 
│ ${prefix}kontan 
│ ${prefix}layarkaca 
│ ${prefix}merdeka 
│ ${prefix}okezone 
│ ${prefix}sindo 
│ ${prefix}tempo 
│ ${prefix}tribun 
│ ${prefix}wikipedia 
│ ${prefix}wikimedia
│ ${prefix}jalantikus-meme
╰──── •
`
conn.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "voicemenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekgzk = `
╭─ 「 I N F O - U S E R 」
│ ◦ *Name:*‎@${m.sender.split('@')[0]}
│ ◦‎ *Status:* ${isCreator ? "Owner" : "User"}
│ ◦‎ *User:* ${isPremium ? 'Premium' : 'Free'}
│ ◦‎ *Limit:* ${limitnya}
│ ◦‎ *Balance:* $${toRupiah(balancenya)}
╰──── •

╭─「 I N F O - B O T 」
│ ◦ *Botname:* ${botname}
│ ◦ *Owner Name:* ${ownername}
│ ◦ *Baileys:* @whiskeysockets/baileys
│ ◦ *Bot Festures:* ${totalFitur()}
│ ◦ *Run Time:* ${runtime(process.uptime())}
╰──── •

╭─ • V O I C E - M E N U
│ ${prefix}bass 
│ ${prefix}blown 
│ ${prefix}deep 
│ ${prefix}earrape 
│ ${prefix}fast 
│ ${prefix}fat 
│ ${prefix}nightcore 
│ ${prefix}reverse 
│ ${prefix}robot 
│ ${prefix}slow 
│ ${prefix}smooth 
│ ${prefix}squirrel
╰──── •
`
conn.sendMessage(m.chat, {
text: tekgzk,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "epothomenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `
╭─ 「 I N F O - U S E R 」
│ ◦ *Name:*‎@${m.sender.split('@')[0]}
│ ◦‎ *Status:* ${isCreator ? "Owner" : "User"}
│ ◦‎ *User:* ${isPremium ? 'Premium' : 'Free'}
│ ◦‎ *Limit:* ${limitnya}
│ ◦‎ *Balance:* $${toRupiah(balancenya)}
╰──── •

╭─「 I N F O - B O T 」
│ ◦ *Botname:* ${botname}
│ ◦ *Owner Name:* ${ownername}
│ ◦ *Baileys:* @whiskeysockets/baileys
│ ◦ *Bot Festures:* ${totalFitur()}
│ ◦ *Run Time:* ${runtime(process.uptime())}
╰──── •

╭─ • E P H O T O - M E N U
│ ${prefix}glitchtext 
│ ${prefix}writetext 
│ ${prefix}advancedglow 
│ ${prefix}typographytext 
│ ${prefix}pixelglitch 
│ ${prefix}neonglitch 
│ ${prefix}flagtext 
│ ${prefix}flag3dtext 
│ ${prefix}deletingtext 
│ ${prefix}blackpinkstyle 
│ ${prefix}glowingtext 
│ ${prefix}underwatertext 
│ ${prefix}logomaker 
│ ${prefix}cartoonstyle 
│ ${prefix}papercutstyle 
│ ${prefix}watercolortext 
│ ${prefix}effectclouds 
│ ${prefix}blackpinklogo 
│ ${prefix}gradienttext 
│ ${prefix}summerbeach 
│ ${prefix}luxurygold 
│ ${prefix}multicoloredneon 
│ ${prefix}sandsummer 
│ ${prefix}galaxywallpaper 
│ ${prefix}1917style 
│ ${prefix}makingneon 
│ ${prefix}royaltext 
│ ${prefix}freecreate 
│ ${prefix}galaxystyle 
│ ${prefix}lighteffects 
╰──── •
`
conn.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "rpgmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `
╭─ 「 I N F O - U S E R 」
│ ◦ *Name:*‎@${m.sender.split('@')[0]}
│ ◦‎ *Status:* ${isCreator ? "Owner" : "User"}
│ ◦‎ *User:* ${isPremium ? 'Premium' : 'Free'}
│ ◦‎ *Limit:* ${limitnya}
│ ◦‎ *Balance:* $${toRupiah(balancenya)}
╰──── •

╭─「 I N F O - B O T 」
│ ◦ *Botname:* ${botname}
│ ◦ *Owner Name:* ${ownername}
│ ◦ *Baileys:* @whiskeysockets/baileys
│ ◦ *Bot Festures:* ${totalFitur()}
│ ◦ *Run Time:* ${runtime(process.uptime())}
╰──── •

╭─ • R P G - M E N U
│ ${prefix}joinrpg
│ ${prefix}inv
│ ${prefix}ngojek
│ ${prefix}hunting
│ ${prefix}mining
│ ${prefix}mancing
│ ${prefix}jual
│ ${prefix}buy
│ ${prefix}heal
│ ${prefix}nebang
│ ${prefix}luckyday
│ ${prefix}adventure
│ ${prefix}killslime
│ ${prefix}sellikan
│ ${prefix}sellemas
│ ${prefix}sellbesi
│ ${prefix}jualcoal
│ ${prefix}lebur
│ ${prefix}jualstone
│ ${prefix}jualingot
│ ${prefix}jualkayu
│ ${prefix}killgoblin
│ ${prefix}killdevil
│ ${prefix}killbehemoth
│ ${prefix}killdemon
│ ${prefix}killdemonking
╰──── •
`
conn.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "toolsmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `
╭─ 「 I N F O - U S E R 」
│ ◦ *Name:*‎@${m.sender.split('@')[0]}
│ ◦‎ *Status:* ${isCreator ? "Owner" : "User"}
│ ◦‎ *User:* ${isPremium ? 'Premium' : 'Free'}
│ ◦‎ *Limit:* ${limitnya}
│ ◦‎ *Balance:* $${toRupiah(balancenya)}
╰──── •

╭─「 I N F O - B O T 」
│ ◦ *Botname:* ${botname}
│ ◦ *Owner Name:* ${ownername}
│ ◦ *Baileys:* @whiskeysockets/baileys
│ ◦ *Bot Festures:* ${totalFitur()}
│ ◦ *Run Time:* ${runtime(process.uptime())}
╰──── •

╭─ • T O O L S - M E N U
│ ${prefix}qc
│ ${prefix}qc2
│ ${prefix}remini
│ ${prefix}hd
│ ${prefix}removebg
│ ${prefix}sticker
│ ${prefix}smeme
│ ${prefix}ssweb
│ ${prefix}cekip
│ ${prefix}toimg
│ ${prefix}jarak
│ ${prefix}readvo
│ ${prefix}bukavn
│ ${prefix}get
│ ${prefix}tourl
╰──── •
`
conn.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "textpromenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `
╭─ 「 I N F O - U S E R 」
│ ◦ *Name:*‎@${m.sender.split('@')[0]}
│ ◦‎ *Status:* ${isCreator ? "Owner" : "User"}
│ ◦‎ *User:* ${isPremium ? 'Premium' : 'Free'}
│ ◦‎ *Limit:* ${limitnya}
│ ◦‎ *Balance:* $${toRupiah(balancenya)}
╰──── •

╭─「 I N F O - B O T 」
│ ◦ *Botname:* ${botname}
│ ◦ *Owner Name:* ${ownername}
│ ◦ *Baileys:* @whiskeysockets/baileys
│ ◦ *Bot Festures:* ${totalFitur()}
│ ◦ *Run Time:* ${runtime(process.uptime())}
╰──── •

╭─ • T E X T P R O - M E N U
│ ${prefix}aovwall 
│ ${prefix}anonymhacker 
│ ${prefix}advanceglow 
│ ${prefix}avatarlolnew 
│ ${prefix}avatardota 
│ ${prefix}avenger 
│ ${prefix}bloodfrosted 
│ ${prefix}bokeh 
│ ${prefix}box3d 
│ ${prefix}breakwall 
│ ${prefix}cartoongravity 
│ ${prefix}cloud 
│ ${prefix}deluxesilver 
│ ${prefix}fireworksparkle 
│ ${prefix}futureneon 
│ ${prefix}fluffy 
│ ${prefix}fpslogo 
│ ${prefix}greenneon 
│ ${prefix}holographic 
│ ${prefix}horrorblood 
│ ${prefix}icecold 
│ ${prefix}jokerlogo 
│ ${prefix}lionlogo 
│ ${prefix}lighttext 
│ ${prefix}lolbanner 
│ ${prefix}logogaming 
│ ${prefix}luxury 
│ ${prefix}marvelstudio 
│ ${prefix}metaldark 
│ ${prefix}minion 
│ ${prefix}natureleaves 
│ ${prefix}neon 
│ ${prefix}neonlight 
│ ${prefix}newyearcard 
│ ${prefix}ninjalogo 
│ ${prefix}pubgmaskot 
│ ${prefix}pornhubmaker 
│ ${prefix}roadwarning 
│ ${prefix}sandengraved 
│ ${prefix}sandsummer 
│ ${prefix}sandwriting 
│ ${prefix}space 
│ ${prefix}starsnight 
│ ${prefix}strawberries 
│ ${prefix}steel3d 
│ ${prefix}summersand 
│ ${prefix}sweet-candy 
│ ${prefix}carved-wood 
│ ${prefix}night-sky 
│ ${prefix}butterfly 
│ ${prefix}coffee-cup 
│ ${prefix}picture-of-love 
│ ${prefix}flower-typography 
│ ${prefix}harry-potter 
│ ${prefix}under-grass 
│ ${prefix}metallic 
│ ${prefix}naruto-maker 
│ ${prefix}pubg 
│ ${prefix}shadow-sky 
│ ${prefix}flaming 
│ ${prefix}text1917 
│ ${prefix}thunder 
│ ${prefix}toxic 
│ ${prefix}wooden3d 
│ ${prefix}wolflogo 
╰──── •
`
conn.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break

// batas menu<


//OWNER MENU
case "backupsc":{
if (!isCreator) return reply(mess.owner)
reply(mess.wait)
  const { execSync } = require("child_process");
  const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
  (pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != ".npm" &&
pe != ""
);
  const exec = await execSync(`zip -r New.zip ${ls.join(" ")}`);
  await conn.sendMessage(m?.chat,
{
  document: await fs.readFileSync("./New.zip"),
  mimetype: "application/zip",
  fileName: `${botname}.zip`,
},
{ quoted: kalgans }
  );
  await execSync("rm -rf New.zip");
}
break

case 'addgc':
if (!m.isGroup) return reply(`Khusus Grup`)
if (!isCreator) return reply(`khusus Creator`)
ntilink.push(m.chat)
fs.writeFileSync('./database/idgroup.json', JSON.stringify(ntilink))
reply(`${command} sukses`)
break

case 'delgc':
if (!isCreator) return reply(`khusus Creator`)
if (!m.isGroup) return reply(`Khusus Grup`)
var ini = ntilink.indexOf(m.chat)
ntilink.splice(ini, 1)
fs.writeFileSync('./database/idgruop.json', JSON.stringify(ntilink))
reply(`${command} sukses`)
break

case 'hidetag': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
conn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:kalgans})
}
break

case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}
break

case "backupdb": case "backupdatabase": {
if (!isCreator) return reply(mess.owner)
 conn.sendMessage(m.chat, {document: await fs.readFileSync('./database/database.json'), fileName: 'database.json', mimetype: 'application/json'}, {quoted: kalgans})
}
break

case 'addprem': {
        if (!isCreator) return m.reply(mess.owner)
        function no(number) {
          return number.replace(/\s/g, "").replace(/([@+-])/g, "");
        }
        let hl = [];
        hl[0] = text.split(" ")[0];
        hl[0] = no(hl[0]) + "@s.whatsapp.net";
        hl[1] = text.split(" ")[1];
        if (!text) return m.reply(`[ ! ] Cara Pemakaian Salah\nContoh: .addprem @${m.sender.split("@")[0]} 30`);
        let user = global.db.data.users
        if (typeof user[hl[0]] == "undefined")
          return reply(`Pengguna Tersebut Tidak Mendaftarkan Diri Ke ${botname}`)
        let jumlahHari = 86400000 * hl[1];
        let now = new Date() * 1;
        user[hl[0]].premium = true;
        if (now < user[hl[0]].expired)
          user[hl[0]].expired += jumlahHari;
        else user[hl[0]].expired = now + jumlahHari;
        user[hl[0]].limit += parseInt(10000)
        m.reply(`[✓] Selamat Kak *@${hl[0].split("@")[0]}* Telah Menjadi premium User Selama *${hl[1]}* Hari\n\nDetail premium: *${msToDate(user[hl[0]].expired - now)}*`);
        }
        break

case "delpremium": case "delprem": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply("nomornya")
let user = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (db.data.users[user].premium == false) return reply(`User ${args[0]} bukan *User Premium!*`)
if (user in db.data.users) {
db.data.users[user].premium = false
reply("Berhasil menghapus *User Premium*")
} else return reply(`User ${args[0]} tidak terdaftar di database bot`)
}
break

case 'listregis':{
if (!isCreator) return reply(mess.owner)  
let anu =  require('./database/registered')
let teks = ` *L I S T - R E G I S T E R E D*\n`
teks += `*Total Register* : ${anu.lenght}\n\n`
anu.map((v, i) => {
teks += `• ${i+1} •\n`
teks += `*Id* : ${v.id}\n`
teks += `*Name* : ${v.name}\n`
teks += `*Age* : ${v.age}\n`
teks += `*Ns* : ${v.time}\n\n───────────────\n\n`
}).join('\n\n')
teks += `${foter2}`
reply(teks) 
}
break

case "addbalance": {
if (!isCreator) return reply(mess.owner)
let user = args[0]+'@s.whatsapp.net'
if (args[0] && args[1]) {
if (isNaN(args[0])) return reply('nomornya 100')
if (!Object.keys(db.data.users).includes(user)) return reply("Nomor target tidak terdaftar di database bot!")
if (isNaN(args[1])) return reply('nomornya 100')
db.data.users[`${user}`].balance += Number(args[1])
conn.sendMessage(m.chat, {text: `Berhasil menambah *${args[1]}* balance ke ${user.split("@")[0]}`})
} else return reply('nomornya 100')
}
break

case "addlimit": {
if (!isCreator) return reply(mess.owner)
let user = args[0]+'@s.whatsapp.net'
if (args[0] && args[1]) {
if (isNaN(args[0])) return reply(example('nomornya 100'))
if (!Object.keys(db.data.users).includes(user)) return reply("Nomor target tidak terdaftar di database bot!")
if (isNaN(args[1])) return reply(example('nomornya 100'))
db.data.users[`${user}`].limit += Number(args[1])
conn.sendMessage(m.chat, {text: `Berhasil menambah *${args[1]}* limit ke ${user.split("@")[0]}`})
} else return reply(example('nomornya 100'))}
break

case "setnamagc": case "namegc": {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (!text) return reply(example('teksnya'))
conn.groupUpdateSubject(m.chat, text)
reply(mess.done)}
break

case 'del': {
if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.')
if (!m.quoted) return false
let { chat, fromMe, id, isBaileys } = m.quoted
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}
break

    case 'giveaway': {
        let acak = await conn.groupMetadata(m.chat)
        let peserta = pickRandom(acak.participants)
        let data = global.db.data.users[peserta.id]
          
        if (!isRegistered) return conn.reply(m.chat, `Yah😢 @${peserta.id.split('@')[0]} belum terdaftar di database jadi dapet deh`, null, {
            contextInfo: {
                mentionedJid: [peserta.id]
            }
        })

 
let duit = args[0] ? args[0] : 5000;
let token = args[1] ? args[1] : 200;
if (isNaN(duit)) return m.reply('Nominal harus berupa angka');
if (isNaN(token)) return m.reply('Nominal harus berupa angka');
let money = duit * 1;
let limit = token * 1;
users.balance += money;
users.limit += limit;

        let cap = `Selamat kepada @${peserta.id.split('@')[0]} telah mendapatkan price give away.\n- ${money} Balance\n- ${limit} Limit`

        await conn.reply(m.chat, cap, null, {
            contextInfo: {
                mentionedJid: [peserta.id]
            }
        })
}
break

case 'listpremium':
      case 'listprem': {
        let user = global.db.data.users;
        var key = "";
        var i = 1;
        for (let jid in user) {
          if (user[jid].premium) {
            key += `\n\n${i}. @${jid.replace(/@.+/, "")}\n        *Expired* : ${msToDay(user[jid].expired - new Date() * 1)}`;
            i += 1;
          }
        }
        return conn.sendTextWithMentions(m.chat, `Pengguna Premium : ${i - 1}\n${key}`, m);
      }
      break

case "public": {
if (!isCreator) return reply(mess.owner)
conn.public = true
reply(mess.done)
}
break

case "self": {
if (!isCreator) return reply(mess.owner)
conn.public = false
reply(mess.done)
}
break

case "buatclaimprem": {
if (!isCreator) return reply(mess.owner)
if (isNaN(args[0])) return reply('Jumlah Kode claim prem')
for (let i = 0; i < Number(args[0]); i++) {
db.data.settings.claimprem.push(crypto.randomBytes(4).toString("hex"))
}
let teks = '\n'
db.data.settings.claimprem.forEach((e) => {
teks += `◦ ${e}\n`
})
reply(teks)
}
break

case 'resetredeem': {
global.db.data.redeemCounts = {}
db.data.respon = ''
delete global.db.jumlah[m.chat]
m.reply(`successful data reset`)
}
break

case 'createredeem': {
    if (!m.isGroup) return m.reply(mess.group);

    // Extract text and number
    const [txt, number] = text.split("|")
    if (!text) return m.reply(Func.example(prefix, command, "GhostXdzz|3"));
    if (isNaN(number)) return m.reply('Masukan Jumlah yang valid');

    // Store the response in the database
    db.data.respon = txt.toLowerCase();
    m.reply('Berhasil Membuat Code Redeem');

    // Update the global database with the number
    if (!global.db.jumlah) global.db.jumlah = {};  // Ensure jumlah object exists
    if (!global.db.jumlah[m.chat]) global.db.jumlah[m.chat] = 0;  // Initialize if not existing
    global.db.jumlah[m.chat] += parseInt(number);  // Add the number

    // Prepare the message to be quoted
    const q = {
        "key": {
            "remoteJid": "status@broadcast",
            "participant": "0@s.whatsapp.net",
            "fromMe": false,
            "id": ""
        },
        "message": {
            "conversation": "Redeem Code From Owner"
        }
    };

    // Get group and participant information
    let id = m.chat;
    let participantIds = groupMetadata.participants.map(a => a.id);

    // Prepare the redeem code message
    let hasil = `*[ REDEEM CODE ]*\n\nCode: ${txt}\n\nSilahkan ketik ${prefix}redeem Codenya\n${tTeks2}code hanya untuk ${global.db.jumlah[m.chat]} orang tercepat`;

    // Wait for 4 seconds before sending the message
    await sleep(4000);

    // Send the message to the group
    await conn.sendMessage(id, { text: hasil, mentions: participantIds }, { quoted: q });
};
break;

case 'getcase': {
const getCase = (cases) => {
return "case "+`'${cases}'`+fs.readFileSync("./conn.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
try{
if (!isCreator) return reply('ngapain')
if (!q) return reply(`contoh : ${prefix + command} antilink`)
let nana = await getCase(q)
reply(nana)
} catch(err){
console.log(err)
reply(`Case ${q} tidak di temukan`)
}
}
break 

case 'autojpm': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group) 
if (args.length < 1) return reply('ketik enable untuk mengaktifkan\nketik disable untuk menonaktifkan')
if (args[0] === "enable") {
if (chats.autojpm) return reply('Sudah Aktif')
chats.autojpm = true
reply('Succes menyalakan jpm di group ini 🌷')
} else if (args[0] === "disable") {
if (!chats.autojpm) return reply('Sudah Mati')
chats.autojpm = false
reply('Succes mematikan jpm di group ini 🌷')
} else {
reply('enable untuk mengaktifkan, disable untuk menonaktifkan')
}
}
break

case 'anticall':{
if (!isCreator) return reply('Fitur Khusus admin!')
if (args[0] === "enable") {
if (anticall) return reply(`activated`)
anticall = true
reply('Successfully Activate Anticall')
} else if (args[0] === "disable") {
if (!anticall) return reply(`it's deactivated`)
anticall = false
reply('Successfully Disabling Anticall')
} else {
reply(`${prefix+command} enable -- _mengaktifkan_\n${prefix+command} disable -- _Menonaktifkan_`)
}}
break

 case 'myip': {
if (!isCreator) return reply(mess.owner)
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
reply("🔎 My public IP address is: " + ip);
})
})
}
break

case 'readchange':
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Contoh ${prefix + command} enable/disable`)
if (q === 'enable') {
settings.autoread = true
m.reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'disable') {
settings.autoread = false
m.reply(`Berhasil mengubah autoread ke ${q}`)
}
break

 case 'cekasalmember': {
  if (!m.isGroup) return m.reply(mess.group)
  const participants = await conn.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  reply(replyMessage);
  }
  break

case 'listpc': {
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
}
conn.sendTextWithMentions(m.chat, teks, m)
}
break

case 'nowa': {
if (!isCreator) return reply (`mess.owner`)
if (!q) return reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = q
if (!noteks.includes('x')) return reply('lah?')
reply(mess.search)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await conn.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await conn.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
reply(`${nomerny}${no_bio}${no_watsap}`)
}
break

case 'delcase': {
if (!isCreator) return reply(`*Access Denied ❌*\n\n*Owners only*`)
if (!q) return reply('*Masukan nama case yang akan di hapus*')

dellCase('./conn.js', q)
reply('*Dellcase Successfully*\n\n© Dellcase By GhostXdzz')
}
break

case 'addcase': {
 if (!isCreator) return reply('lu sapa asu')
 if (!text) return reply('Mana case nya');
const fs = require('fs');
const namaFile = 'anyone.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return;
}
const posisiAwalGimage = data.indexOf("case 'addcase':");

if (posisiAwalGimage !== -1) {
const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
if (err) {
reply('Terjadi kesalahan saat menulis file:', err);
} else {
reply('Case baru berhasil ditambahkan.');
}
});
} else {
reply('Tidak dapat menambahkan case dalam file.');
}
});
}
break

case "setppbotpanjang": case "setpppanjang": {
if (!isCreator) return m.reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await conn.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await conn.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil Mengganti Foto Profil Bot ✅")
} else return m.reply('dengan mengirim foto')
}
break

case 'setbotname':{
if (!isCreator) return reply(`Khusus GhostXdzz`)
if (!text) return reply(`Dimana Namanya Tuan?\nExample: ${prefix + command} connBotz - MD`)
await conn.updateProfileName(text)
reply(`Berhasil Mengubah Nama Bot Tuan✅`)
}
break

        case 'listban': {
        if (!isCreator) return reply(mess.owner)
        let user = global.db.data.users;
        var key = "";
        var i = 1;
        for (let jid in user) {
          if (user[jid].banned) {
            key += `\n\n${i}. @${jid.replace(/@.+/, "")}\n`;
            i += 1;
          }
        }
        return conn.sendTextWithMentions(m.chat, `banned users  : ${i - 1}\n${key}`, m);
      }
      break

case 'unbanuser': case 'unban': {
if (!isCreator) return reply(mess.owner)
let user = global.db.data.users
function no(number) {
          return number.replace(/\s/g, "").replace(/([@+-])/g, "");
        }
if (m.quoted) {
    if (!m.quoted.sender) return conn.reply(m.chat, '🚩 Tags you want to ban bots', m)
    user[m.quoted.sender].banned = false
    m.reply(`s u c c e s s . . .`)
} else if (text) {
if (!text) return conn.reply(m.chat, `• *Example :* .${command} 628816609112`, m)
let who = no(text) + "@s.whatsapp.net"
if (!who) return conn.reply(m.chat, '🚩 Tags you want to ban bots', m)
user[who].banned = false
m.reply(`s u c c e s s . . .`)
} else {
conn.reply(m.chat, `• *Example :* .${command} 628816609112\n\nyou can also reply to the person`, m)
}
}
break

case 'banuser': case 'ban': {
if (!isCreator) return reply(mess.owner)
let user = global.db.data.users
function no(number) {
          return number.replace(/\s/g, "").replace(/([@+-])/g, "");
        }
if (m.quoted) {
    if (!m.quoted.sender) return conn.reply(m.chat, '🚩 Tags you want to ban bots', m)
    user[m.quoted.sender].banned = true
    m.reply(`s u c c e s s . . .`)
} else if (text) {
if (!text) return conn.reply(m.chat, `• *Example :* .${command} 628816609112`, m)
if (isNaN(text)) throw 'Only numbers are allowed👻.'; 
let who = no(text) + "@s.whatsapp.net"
if (!who) return conn.reply(m.chat, '🚩 Tags you want to ban bots', m)
user[who].banned = true
m.reply(`s u c c e s s . . .`)
} else {
conn.reply(m.chat, `• *Example :* .${command} 628816609112\n\nyou can also reply to the person`, m)
}
}
break

case "setppbot": {
if (!isCreator) return reply(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await conn.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(mess.done)
} else {
var memeg = await conn.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(mess.done)
}
}
break

case 'getbio':{
if (!isCreator) return reply(mess.owner)
try {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.quoted.sender ? m.quoted.sender : m.sender
let bio = await conn.fetchStatus(who)
lreply(bio.status)
} catch {
if (text) return reply(`bio is private or you haven't replied to the person's message!`)
else try {
let whoto = m.quoted ? m.quoted.sender : m.sender
let bio = await conn.fetchStatus(who)
reply(bio.status)
} catch {
return reply(`bio is private or you haven't replied to the person's message!`)
}
}
}
break

case 'delppbot': {
if (!isCreator) return reply(mess.owner)
await conn.removeProfilePicture(conn.user.id)
reply(mess.done)
}
break

case 'getname': {
if (!isCreator) return reply(mess.owner)
if (qtod === "true") {
namenye = await conn.getName(m.quoted.sender)
reply(namenye)
} else if (qtod === "false") {
conn.sendMessage(from, {text:"Reply orangnya"}, {quoted:kalgans})
}
}
break

case 'restart':
if (!isCreator) return reply('wuuu')
reply(`_Restarting Anyone MD . . ._`)
await sleep(3000)
process.exit()
break

case 'runtime': {
rin = Styles(`${botname} is active during ${runtime(process.uptime())}`)
reply(rin)
}
break

case "welcome": {
if (!isCreator) return m.reply('Ngapain ? Fitur Ini Khusus Tuan Saya😜')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
conn.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
}
}
break

case "jpmtesti": case "bcgroup": case "bcgc": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply(mess.wait)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await conn.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await conn.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await conn.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
await sleep(text.split('|')[1])
} else {
await conn.sendMessage(xnxx, { text: text.split('|')[0] })
await sleep(text.split('|')[1])
}}
reply(mess.done)
}
break

case 'bcgc': case 'bcgroup': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
conn.sendMessage(i, {text: `${text}`}, {quoted:kalgans})
}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
//BATAS OWNER MENU

//MAIN MENU
case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = +new Date
user.afkReason = text
reply(`💤 *${m.pushName}* Telah Afk${text ? ': ' + text : ''}`)
}
break

case "premium": case "buyprem": {
reply(`\n*💸 LIST HARGA USER PREMIUM*

* PAKET A*
*Harga Rp5.000*
◦ Gratis Balance $10.000.000.000
◦ Gratis Limit 10.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian

* PAKET B*
*Harga Rp10.000*
◦ Gratis Balance $30.000.000.000
◦ Gratis Limit 20.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian

* PAKET C*
*Harga Rp15.000*
◦ Gratis Balance $50.000.000.000
◦ Gratis Limit 30.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian


Hubungi owner bot untuk membeli paket *User Premium* dengan cara ketik .owner\n`)}
break

case 'redeem': {
    if (!m.isGroup) return m.reply(mess.group);
    
    let user = global.db.data.users[m.sender];
    let currentTime = new Date().getTime();

    if (!text) {
        return m.reply(Func.example(prefix, command, `anyone`));
    }
    
    let redeem = db.data.respon;
    
    // Check if the user has already claimed the current code
    if (user.lastRedeemedCode === redeem) {
        m.reply('Kamu sudah mengklaim kode ini dan tidak bisa mengklaim lagi.');
        return;
    }
    
    // Check if the redeem code has already reached its limit
    if (!global.db.data.redeemCounts) {
        global.db.data.redeemCounts = {};
    }
    
    if (!global.db.data.redeemCounts[redeem]) {
        global.db.data.redeemCounts[redeem] = 0;
    }

    // Ensure global.db.jumlah exists and m.chat is initialized
    if (!global.db.jumlah) {
        global.db.jumlah = {};
    }
    
    if (!global.db.jumlah[m.chat]) {
        global.db.jumlah[m.chat] = 0;
    }

    if (global.db.data.redeemCounts[redeem] >= global.db.jumlah[m.chat]) {
        await m.reply('Kode redeem ini telah mencapai batas maksimum pengklaiman.');
        return;
    }
    
    if (text.toLowerCase() === redeem.toLowerCase()) {
        let limits = randomInt(10, 25);
        let exps = randomInt(20000, 50000);
        let balances = randomInt(20000, 70000);
        user.lastredeem = currentTime;
        user.lastRedeemedCode = redeem; // Store the last redeemed code
        
        m.reply(`*REDEEM BERHASIL*
        
*[ HADIAH ]*
1. Limit: ${limits}
2. Money: ${formatIDR(balances)}
`);
        
        user.limit += limits;
        user.balance += balances;
        
        // Increment the redeem count
        global.db.data.redeemCounts[redeem]++;
    } else {
        m.reply('*[ INVALID REDEEM CODE ]*');
    }
};
break;

case "topglobal": {
reply(mess.wait)
let ubalance = Object.entries(global.db.data.users).map(([key, value]) => {return {...value, jid: key}})
let sortedbalance = ubalance.map(toNumber('balance')).sort(sort('balance'))
let usersbalance = sortedbalance.map(enumGetKey)
reply(`\n*🏆 LIST TOP GLOBAL BALANCE*\n\nKamu Top *${usersbalance.indexOf(m?.sender) + 1}* Balance dari *${usersbalance.length}* Users

${sortedbalance.slice(0, 10).map(({ jid, balance }, i) => `${i + 1}. *Nama :* @${db.data.users[jid].name}\n*Nomor :* ${jid.split("@")[0]}\n*Balance :* $${toRupiah(balance)}\n`).join('\n')}\n`)}
break

case 'botsystem': case 'systembot': {
// total group
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)

// list banned
let banned = Object.entries(global.db.data.users).sort((a, b) => b[1].banned - a[1].banned).map((v) => v[0]).length

//SPEED
let timestamp = speed
let latensi = speed - timestamp

// list premium 
let premium = Object.entries(global.db.data.users).sort((a, b) => b[1].premium - a[1].premium).map((v) => v[0]).length
 
 let gcName = await conn.groupMetadata(m.chat)
 
// RAM
let ram = `${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`


teks = ` – *B O T S T A T*

┌  ◦  ${Func.texted('bold', Func.formatNumber(anu.length))} Groups Joined
│  ◦  ${Func.texted('bold', Func.formatNumber(tosers))} Users In Database
│  ◦  ${Func.texted('bold', Func.formatNumber(toPrem))} Premium Users
│  ◦  ${Func.texted('bold', Func.formatNumber(chats.chat))} Total Chat In *${gcName.subject}*
│  ◦  ${Func.texted('bold', Func.formatter(totalFitur()))} Available Commands
│  ◦  Speed : ${Func.texted('bold',  latensi.toFixed(4))}
└  ◦  Runtime : ${Func.texted('bold', runtime(process.uptime()))}

–  *S Y S T E M*

┌  ◦  ${Func.texted('bold', chats.antibot ? '✓' : 'X')}  Antibot Mode
│  ◦  ${Func.texted('bold', chats.antiSticker ? '✓' : 'X')}  Anti Sticker Mode
│  ◦  ${Func.texted('bold', chats.antichanell ? '✓' : 'X')}  Anti Chanell Mode
│  ◦  ${Func.texted('bold', chats.simichat ? '✓' : 'X')}  Chat Simi
│  ◦  ${Func.texted('bold', settings.welcome ? '✓' : 'X')}  Welcome
│  ◦  ${Func.texted('bold', chats.antilink ? '✓' : 'X')}  Antilink Mode
│  ◦  ${Func.texted('bold', chats.antitoxic ? '✓' : 'X')}  Anti Toxic Mode
│  ◦  ${Func.texted('bold', settings.autoread ? '✓' : 'X')}  Always Online
│  ◦  ${Func.texted('bold', settings.game ? '✓' : 'X')}  Game Features
│  ◦  ${Func.texted('bold', anticall ? '✓' : 'X')}  Anti Call Online
└  ◦  ${Func.texted('bold', conn.public ? '✓' : 'X')}  Public Mode

${botname} System`
conn.sendMessage(m.chat, {
text: teks,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | B O T  S T A T`,
body: '',
thumbnailUrl: thumbnail,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
break

case 'sewabot':
if (!text) return reply(`*Contoh* :\n#sewabot 1 minggu `)
let cret = await conn.groupCreate(args.join(" "), [])
let ky = await conn.groupInviteCode(cret.id)
conn.sendMessage(m.chat, { text: `「 *Create Group Sewa* 」

Sewa Bot Selama *${text}* Sedang Dalam Prosess Silahkan Masuk Melalui Link Group Yang Sudah Di Sediakan..

_▸ Owner : ${botname}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${ky}
`, m})
reply('pesan dan link group khusus sudah terkirim di chat privasi anda')
break

case 'report': {
if (!text) return m.reply(`mau report erorr apa ke developer?\n\nanda juga bisa mengirim bukti erorr`)

if (/image/.test(mime)) {
if (!quoted) return reply(`reply image`)
if (!text) return reply(`mau report eror apa ke developer?`)

let img = await quoted.download()
let media = await uploadImage(img)
m.reply(`terimakasih atas masukan nya, report an anda akan di sampaikan ke developer`)

conn.sendImage(developer + "@s.whatsapp.net", media, `*[ system notice ]* ada yang report eror nih, dari @${m.sender.split("@")[0]}\nPesan : *${text}*\n`, m)
} else {
m.reply(`terimakasih atas masukan nya, report an anda akan di sampaikan ke developer`)
conn.reply(developer + "@s.whatsapp.net", `*[ system notice ]* ada yang report eror nih, dari @${m.sender.split("@")[0]}\nPesan : *${text}*\n`, m)
}
}
break

case 'bukavn': {
if (!isCreator) return reply(mess.owner)
if (!isQuotedViewonce) return reply('Reply viewonce')
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
var media = await downloadContentFromMessage(quotedType, type == "audioMessage" ? "audio" : "image")
let buffer = Buffer.from([])
for await (let chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/audio/.test(type)) {
await conn.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true}, {quoted: m})}
}
break

case 'buka': case 'readvo': {
if (!isCreator) return reply(mess.owner)
if (!m.quoted) return reply(`Reply view once message to use this command`)
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
var media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (let chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await conn.sendMessage(m.chat, { video: buffer, caption: quotedType.caption }, {quoted: kalgans })
} else if (/image/.test(type)) {
await conn.sendMessage(m.chat, { image: buffer, caption: quotedType.caption }, {quoted: kalgans })
}
}
break

case "buylimit": case "belilimit": {
if (!args[0]) return reply('100\n\nHarga 1 *limit* = $1000 *balance*')
if (isNaN(args[0])) return reply('20')
if ((args[0]).includes('.')) return reply('20')
let harga = 1000
let total = Number(parseInt(args[0]) * harga)
if (balancenya < total) return reply(`*Balance* kamu tidak cukup untuk membeli ${args[0]} *Limit!*\n\nDapatkan *Balance* dengan cara memainkan game`)
db.data.users[m?.sender].limit += Number(args[0])
db.data.users[m?.sender].balance -= total
reply(`Berhasil membeli *${args[0]}* limit, dengan *$${toRupiah(total)}* balance`)
}
break

case "pushkontak": {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!text) return m.reply("pesannya")
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
await conn.sendMessage(mem, {text: teks}, {quoted: kalgans})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break

case "pushkontak1": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
var [idnya, teks] = text.split("|")
var groupMetadataa
try {
groupMetadataa = await conn.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
await conn.sendMessage(mem, {text: teks}, {quoted: kalgans})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break

case "listgc": case "cekid": case"listgrup": {
let gcall = Object.values(await conn.groupFetchAllParticipating().catch(_=> null))
let listgc = `*｢ LIST ALL CHAT GRUP ｣*\n\n`
await gcall.forEach((u, i) => {
listgc += `*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
m.reply(listgc)
}
break

case "startjpm": {
if (!isCreator) return m.reply(mess.owner)
var teksnya = await fs.readFileSync("./database/teksjpm.js").toString()
if (teksnya.length < 1) return m.reply("Teks Jpm Tidak Ditemukan, Silahlan Isi/Edit Teks Jpm Didalam Folder database")
var teks = `${teksnya}`
let total = 0
let getGroups = await conn.groupFetchAllParticipating()
let usergc = await Object.keys(getGroups)
m.reply(`Memproses Mengirim Pesan  Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
await conn.sendMessage(jid, {text: teks}, {quoted: kalgans})
total += 1
} catch {}
await sleep(4000)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break

case "setteksjpm": {
if (!isCreator) return m.reply(mess.owner)
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync("./database/teksjpm.js", newteks.toString())
m.reply("Berhasil Mengganti Teks JPM ✅")
} else {
return m.reply("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*")
}}
break

case "teksjpm": {
if (!isCreator) return m.reply(mess.owner)
m.reply(fs.readFileSync("./database/teksjpm.js").toString())
}
break

case 'claim': {
let timeClaim = 3600000
let claimed = new Date(users.lastclaim + timeClaim)
let timeout = claimed - new Date()
let balance = Func.randomInt(1, 5000)
let limits = Func.randomInt(5, 20)
if (new Date - users.lastclaim >= timeClaim) {
reply(`🎉 Congratulations!, you got +${Func.formatNumber(balance)} balance and +${Func.formatNumber(limits)} limit.`)
users.balance += balance
users.limit += limits
users.lastclaim = new Date() * 1
} else {
reply(`*You have claimed, you can reclaim in the next hour.*\n\n*Timeout : [ ${Func.toTime(timeout)} ]*`)
}
}
break

case  'monthly': {
const limitfree = Func.randomInt(20, 40)
const limitprem = Func.randomInt(30, 50)
const moneyfree = Func.randomInt(20000, 50000)
const moneyprem = Func.randomInt(50000, 100000)
let user = global.db.data.users[m.sender]
if (!isRegistered) return reply(mess.regis)

let time = global.db.data.users[m.sender].lastmonthly + 2592000000
  if (new Date - global.db.data.users[m.sender].lastmonthly < 2592000000) return m.reply(`You've claimed, this monthly claim.\nwait for ${Func.toDate(time - new Date())} again`)
        global.db.data.users[m.sender].balance += isPremium ? moneyprem : moneyfree
        global.db.data.users[m.sender].limit += isPremium ? limitprem : limitfree
        conn.sendText(m.chat, `Congratulations you got it :\n\n+ ${isPremium ? moneyprem : moneyfree} Money\n+ ${isPremium ? limitprem : limitfree} Limit`, m)
        global.db.data.users[m.sender].lastmonthly = new Date * 1
    }
break

case "claimprem": {
if (!args[0]) return reply("Codenya")
if (args[0] !== args[0].toLowerCase()) return reply("*Code Claim Prem* wajib huruf kecil semua!")
if (db.data.settings.claimpremkadaluwarsa.includes(args[0])) return reply("*Code* tersebut sudah digunakan!")
if (!db.data.settings.claimprem.includes(args[0])) return reply("*Code* tidak valid!")
db.data.settings.claimpremkadaluwarsa.push(args[0])
var code = db.data.settings.claimprem.indexOf(args[0])
db.data.settings.claimprem.splice(code, 1)
let h1 = randomNumber(20000, 30000)
let h2 = randomNumber(10, 20)
let h3 = randomNumber(10, 20)
db.data.users[m?.sender].balance += h1
db.data.users[m?.sender].limit += h2
db.data.users[m?.sender].glimit += h3
db.data.users[m?.sender].premium = true
var teks = `Selamat kepada @${m?.sender.split("@")[0]} 🎉

kamu mendapatkan *Balance  $${toRupiah(h1)}* dan *${h2} Limit* dan *${h3} Limit Game* dari *Code Redeem "${args[0]}"*`
await reply(`Berhasil mengambil claim prem *$${toRupiah(h1)} Balance* dan *${h2} Limit* dan *${h3} Limit Game* dari *Code Redeem ${args[0]}*`).then(() => {
conn.sendMessage(m?.chat, {text: teks, contextInfo: {mentionedJid: [m?.sender], externalAdReply: { thumbnailUrl: ppuser, title: "© Message System Notifikasi", body: null, sourceUrl: linkchannel, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: kalgans})
})}
break

case 'tqto': {
let cu = `Hallo Sis, here are the names who have been registered in creating/helping in the development of this script

*BIG TAHNKS TO*

> tuhan
> ibu
> hp

d above is developer ${botname}
`
let cp = (cu)
conn.sendMessage(m?.chat, {
text: cp,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | ${botname}`,
body: '',
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
break

case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
reply(listCase())
}
break

case "ceklimit": case "limit": case "me":
case "balance": case "cekbalance": case "my": {
if (m.quoted) {
try {
ppuser = await conn.profilePictureUrl(pengirim, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}    
let teksnya = `
  ◦ Name : *${pushname}*
  ◦ Number : *@${m.sender.split('@')[0]}*
  ◦ Limit : *${limitnya}*
  ◦ Balance : *$${toRupiah(balancenya)}*`
conn.sendMessage(m.chat, {text: teksnya, 
contextInfo: {
externalAdReply: {
thumbnailUrl: thumbnail, 
title: '©User Info Message', 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`, 
mediaType: 1}}}, {quoted: kalgans})
} else {
let teksnya = `
  ◦ Name : *${pushname}*
  ◦ Number : *@${m.sender.split('@')[0]}*
  ◦ Limit : *${limitnya}*
  ◦ Balance : *$${toRupiah(balancenya)}*`
conn.sendMessage(m.chat, {text: teksnya, 
contextInfo: {
externalAdReply: {
thumbnailUrl: thumbnail, 
title: '©User Info Message', 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`, 
mediaType: 1}}}, {quoted: kalgans})
}}
break

case 'qc': {
if (limitnya < 1) return reply(mess.limit)
if (!q) return reply(`📌Example: ${prefix + command} hallo`)
let obj = {
type: 'quote',
format: 'png',
backgroundColor: '#ffffff',
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await conn.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: `${q}`,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
conn.sendImageAsSticker(m.chat, buffer, kalgans, { packname: `${global.packname}`, author: `${global.author}`})
uselimit()}
break

case 'qc2': {
if (!q) return reply(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return reply(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return reply('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await conn.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
conn.sendImageAsSticker(m.chat, buffer, kalgans, { packname: `${global.packname}`, author: `${global.author}`})
}
break

case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : kalgans })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break

case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!isPremium) return reply(mess.premium)
if (!q) return reply(`Example : ${prefix+command} connBotz`) 
reply(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
conn.sendMessage(m.chat, { image: { url: haldwhd }, caption: `success` }, { quoted: kalgans })
}
break

 case 'akira': case 'akiyama': case 'anachan': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kagachan': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'spacee': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (!isPremium) return reply(mess.premium)
reply(mess.search)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/anachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kagachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/spacee/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
conn.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: kalgans })
}
break

case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (limitnya < 1) return reply(mess.limit)
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsStickerAV(from, media, kalgans, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
uselimit()}
break

case 'smeme':
 if (!text) return reply (`Balas Image Dengan Caption ${prefix + command}`)
if (!quoted) return  reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
reply(mess.wait)
mee = await conn.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
conn.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
}
break

case 'cls': {
const { addExif } = require('./lib/exif')
if (!m?.quoted) return reply('Reply with a sticker!')
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m?.quoted.mimetype || ''
if (!/webp/.test(mime)) throw 'Reply with a sticker!'
let img = await m?.quoted.download()
if (!img) throw 'Failed to download sticker!'
stiker = await addExif(img, packname || global.packname, author || global.author )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else throw 'An error occurred: ' + e
} finally {
if (stiker) conn.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else throw 'Conversion failed'
}
}
break 

case 'tiktoksearch': case 'ttsearch':{
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} jj epep`)
let anu = await mann.search.tiktoks(text)
const capt = anu.title
const author = anu.author

let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender], 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: `${idchannel}`,
newsletterName: `${botname}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
}, 
body: proto.Message.InteractiveMessage.Body.create({
 text: (`*Author* : ${author}\n*Caption* : ${capt}`)
}),
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Simpel WhatsApp Bot Made By GhostXdzz`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: (`Tik Tok - Search`),
subtitle: `${ownername}`,
hasMediaAttachment: true,...(await prepareWAMessageMedia({ video: { url: anu.no_watermark } }, { upload: conn.waUploadToServer }))
}),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [ 
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"Next\",\"id\":\".tiktoksearch ${text}\"}`
},
]
})
})
}
}
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
uselimit()}
break

case'tiktoks': case'tiktoksearch': case'ttsearch2':{
  if (!text) return reply(`*Example :* .${command} jedag jedug`)
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await tiktoks(`${text}`)
  conn.sendMessage(m.chat, {
  video: {url: kemii.no_watermark},
  gifPlayback: true, 
  caption: '```Result from:```'+' `'+text+'`'
  }, {quoted: m})
  }
  break      

case 'ffstalk':{
if (!q) return reply(`Example ${prefix+command} 946716486`)
reply(mess.wait)
eeh = await ffstalk.ffstalk(`${q}`)
reply(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break

case'stalkwa':{
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
const PhoneNum = require('awesome-phonenumber');
let num = m.quoted?.sender || m.mentionedJid?.[0] || text;
if (!num) return m.reply(`*Example*: @tag / 628xxx`);
num = num.replace(/\D/g, '') + '@s.whatsapp.net';
if (!(await conn.onWhatsApp(num))[0]?.exists) return m.reply('User not exists');
let img = await conn.profilePictureUrl(num, 'image').catch(_ => 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png');
let bio = await conn.fetchStatus(num).catch(_ => {});
let name = await conn.getName(num);
let business = await conn.getBusinessProfile(num);
let format = PhoneNum(`+${num.split('@')[0]}`);
let country = regionNames.of(format.getRegionCode('international'));
let wea = `• *Whatsapp*\n\n• *Country :* ${country.toUpperCase()}\n*• Name :* ${name ? name : '-'}\n*• Format Number :* ${format.getNumber('international')}\n*• Url Api :* wa.me/${num.split('@')[0]}\n*• Mentions :* @${num.split('@')[0]}\n*• Status :* ${bio?.status || '-'}\n*• Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `\t\t\t\t• *Info Bussines*\n\n• BusinessId :* ${business.wid}\n*• Website :* ${business.website ? business.website : '-'}\n*• Email :* ${business.email ? business.email : '-'}\n*• Category :* ${business.category}\n*• Address :* ${business.address ? business.address : '-'}\n*• Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*• Description* : ${business.description ? business.description : '-'}` : 'Standard WhatsApp Account'}`;
if (img) {
await conn.sendMessage(m.chat, {
image: { url: img },
caption: wea,
mentions: [num]
}, { quoted: m });
} else {
reply(wea);
}
};
break

case 'toimage': case 'toimg': {
if (limitnya < 1) return reply(mess.limit)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
conn.sendMessage(from, { image: buffer }, {quoted:kalgans})
fs.unlinkSync(ran)
})
uselimit()}
break

 case 'hd': {
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			conn.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
			}
			break

case 'remini': {
if (!quoted) return reply(`Where is the picture?`)
if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
conn.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: kalgans})
}
break

case 'jarak': {
if (limitnya < 1) return reply(mess.limit)
var [me, to] = text.split`|`
if (!(from && to)) return reply(`example ${prefix + command} Yogyakarta|Jakarta`)
reply(mess.search)
var data = await jarakkota(me, to)
if (data.img) return conn.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: kalgans })
uselimit()}
break

case "translate": case "tr": {
let lang, text
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m.quoted && m.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m.quoted.text
} else return m.reply(`Ex: ${prefix + command} id hello i am robot`)
const trans = require('@vitalets/google-translate-api')
let res = await trans.translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return m.reply(`Error : Bahasa"${lang}" Tidak Support`)
m.reply(`*Terdeteksi Bahasa:* ${res.from?.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
}
break

case 'rate': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
reply(`Rate : ${q}\nJawaban : *${te}%*`)
}
break

case 'pin': {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} conn Izumo`)
let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
conn.sendMessage(from, {image: { url: result }, caption: mess.done},{quoted:kalgans})
uselimit()}
break

case 'pinterest2': case 'pin2': {
  if (!text) return reply(`• *Example:* ${prefix + command} kuro servamp`);
  
  
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: conn.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);
  
  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;
  
  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: tag2
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: '*Result*.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }
  
  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: foter1
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});
  
  await conn.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
}

break

case 'image': {
const { googleImage } = require('@bochilteam/scraper')
if (!text) return reply(`• *Example :* ${prefix}${command} cats`)
    const res = await googleImage(text)
    let image = pickRandom(res)
    let link = image
    
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.success
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: tag2
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: link } }, { upload: conn.waUploadToServer }))
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Next Image","id": ".${command} ${text}"}`
              }
           ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break

case 'ttsearch': case 'ttscroll': case 'tiktoksearch': {
if (!text) return reply("Masukan Query!")
    let old = new Date();
    let json;
    try {
        json = await fetchJson(`https://skizo.tech/api/tiktok-search?apikey=${skizo}&keywords=${text}`);
    } catch (err) {
        return m.reply(`Terjadi kesalahan saat mengambil data: ${err.message}`);
    }

    function pickRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    var hiasan = "=> ";

    // Ensure json has enough elements
    if (!json || json.length < 8) return m.reply('Data tidak lengkap untuk membuat scroll.');

    let json1 = pickRandom([json[0], json[1], json[3]]);
    let json2 = pickRandom([json[5], json[6], json[7]]);
    let json3 = pickRandom([json[8], json[2]]);
    let json4 = pickRandom([json[7], json[3], json[6]]);
    let json5 = pickRandom([json[4], json[0], json[1]]);

    async function video(url) {
        if (!url) throw new Error('URL video tidak tersedia.');
        const { videoMessage } = await generateWAMessageContent({
            video: {
                url
            }
        }, {
            upload: conn.waUploadToServer
        });
        return videoMessage;
    }

    try {
        let msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: `result from ${text}`
                            },
                            carouselMessage: {
                                cards: [
                                    {
                                        header: {
                                            videoMessage: await video(json1.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json1.duration || 'N/A'}\n${hiasan}*Play* : ${json1.play_count || 0}\n${hiasan}*Download* : ${json1.download_count || 0}\n${hiasan}*Share* : ${json1.share_count || 0}\n${hiasan}*Comment* : ${json1.comment_count || 0}\n${hiasan}*Like* : ${json1.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json2.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json2.duration || 'N/A'}\n${hiasan}*Play* : ${json2.play_count || 0}\n${hiasan}*Download* : ${json2.download_count || 0}\n${hiasan}*Share* : ${json2.share_count || 0}\n${hiasan}*Comment* : ${json2.comment_count || 0}\n${hiasan}*Like* : ${json2.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json3.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json3.duration || 'N/A'}\n${hiasan}*Play* : ${json3.play_count || 0}\n${hiasan}*Download* : ${json3.download_count || 0}\n${hiasan}*Share* : ${json3.share_count || 0}\n${hiasan}*Comment* : ${json3.comment_count || 0}\n${hiasan}*Like* : ${json3.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json4.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json4.duration || 'N/A'}\n${hiasan}*Play* : ${json4.play_count || 0}\n${hiasan}*Download* : ${json4.download_count || 0}\n${hiasan}*Share* : ${json4.share_count || 0}\n${hiasan}*Comment* : ${json4.comment_count || 0}\n${hiasan}*Like* : ${json4.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json5.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json5.duration || 'N/A'}\n${hiasan}*Play* : ${json5.play_count || 0}\n${hiasan}*Download* : ${json5.download_count || 0}\n${hiasan}*Share* : ${json5.share_count || 0}\n${hiasan}*Comment* : ${json5.comment_count || 0}\n${hiasan}*Like* : ${json5.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },

                                ],
                                messageVersion: 1,
                            },
                        },
                    },
                },
            },
            {}
        );

        await conn.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
        });
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mengirim pesan.');
    }
}
break;

case 'cekip': case 'ip': {
if (limitnya < 1) return reply(mess.limit)
if (args.length !== 1) {
return reply('Format salah! Penggunaan: cekip link');
}
const link = args[0];
dns.resolve4(link, (err, addresses) => {
if (err) {
return reply('Gagal melakukan DNS reverse lookup.');
}
if (addresses.length === 0) {
return reply('Tidak ada alamat IP yang ditemukan.');
}
const ip = addresses[0];
reply(`Alamat IP dari ${link} adalah: ${ip}`);
});
uselimit()}
break

    case 'server': {
    if (!isCreator) return reply(mess.owner)
    const response = await axios.get('http://ip-api.com/json/');
    const serverInfo = response.data;

    let serverMessage = `*S E R V E R - I N F O*\n\n`;
    const osInfo = Styles(os.platform(), 1);
    const totalRAM = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(1); // in GB
    const freeRAM = (os.freemem() / (1024 * 1024 * 1024)).toFixed(1); // in GB
    const uptime = os.uptime();
    const uptimeFormatted = formatUptime(uptime);
    const processor = Styles(os.cpus()[0].model, 1);
    const totalCores = os.cpus().length;

    serverMessage += `┌  ◦  *OS :* ${osInfo}\n`;
    serverMessage += `│  ◦  *RAM :* ${freeRAM} GB / ${totalRAM} GB\n`;
    serverMessage += `│  ◦  *Country :* ${serverInfo.country}\n`;
    serverMessage += `│  ◦  *CountryCode :* ${serverInfo.countryCode}\n`;
    serverMessage += `│  ◦  *Region :* ${serverInfo.region}\n`;
    serverMessage += `│  ◦  *RegionName :* ${serverInfo.regionName}\n`;
    serverMessage += `│  ◦  *City :* ${serverInfo.city}\n`;
    serverMessage += `│  ◦  *Zip :* ${serverInfo.zip}\n`;
    serverMessage += `│  ◦  *Lat :* ${serverInfo.lat}\n`;
    serverMessage += `│  ◦  *Lon :* ${serverInfo.lon}\n`;
    serverMessage += `│  ◦  *Timezone :* ${serverInfo.timezone}\n`;
    serverMessage += `│  ◦  *Isp :* ${serverInfo.isp}\n`;
    serverMessage += `│  ◦  *Org :* ${serverInfo.org}\n`;
    serverMessage += `│  ◦  *As :* ${serverInfo.as}\n`;
    serverMessage += `│  ◦  *Query :* ${serverInfo.query}\n`;
    serverMessage += `│  ◦  *Uptime :* ${uptimeFormatted}\n`;
    serverMessage += `└  ◦  *Processor :* ${processor} (${totalCores} Cores)`;
conn.sendMessage(m.chat, {
text: serverMessage,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: ` S E R V E R`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
break

case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed
                let latensi = speed - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(Styles(respon))
            }
            break

case 'get':
if (!/^https?:\/\//.test(text)) return reply(`'Awali *URL* dengan http:// atau https://`)
const ajg = await fetch(text);
if (ajg.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
throw `Content-Length: ${ajg.headers.get('content-length')}`;
}
const contentType = ajg.headers.get('content-type');
if (contentType.startsWith('image/')) {
return conn.sendMessage(m.chat, { image: { url: text } }, 'imageMessage', text, m);
}
if (contentType.startsWith('video/')) {
return conn.sendMessage(m.chat, { video: { url: text } }, 'videoMessage', text, m);
}
if (contentType.startsWith('audio/')) {
return conn.sendMessage(m.chat, { audio: { url: text } }, 'audioMessage', text, m);
}
let alak = await ajg.buffer();
try {
alak = util.format(JSON.parse(alak + ''));
} catch (e) {
alak = alak + '';
} finally {
reply(alak.slice(0, 65536));
}
break          

case 'cerpen': {
const mann = require('d-scrape')
const mannr = await mann.random.randomCerpen()
var yaya = `*[ R A N D O M  C E R P E N ]*\n\n*Judul:* ${mannr.judul}\n*Penulis:* ${mannr.penulis}\n\n${mannr.cerita}\n\n_${mannr.sumber}_`
reply(yaya)
}
break

case 'tambah':{
if (!text.includes('+')) return reply(`Gunakan dengan cara ${command} *angka* + *angka*\n\n_Contoh_\n\n${command} 1+2`)
arg = args.join(' ')
atas = arg.split('+')[0]
bawah = arg.split('+')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one + nilai_two}`)}
break
case 'kurang':{
if (!text.includes('-')) return reply(`Gunakan dengan cara ${command} *angka* - *angka*\n\n_Contoh_\n\n${command} 1-2`)
arg = args.join(' ')
atas = arg.split('-')[0]
bawah = arg.split('-')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one - nilai_two}`)}
break
case 'kali':{
if (!text.includes('*')) return reply(`Gunakan dengan cara ${command} *angka* * *angka*\n\n_Contoh_\n\n${command} 1*2`)
arg = args.join(' ')
atas = arg.split('*')[0]
bawah = arg.split('*')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one * nilai_two}`)}
break

case '"': case 'readviewonce': {
if (!m.quoted) return reply(`Reply view once message to use this command`)
reply(mess.wait)
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
var media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (let chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await conn.sendMessage(m.chat, { video: buffer, caption: quotedType.caption }, {quoted: kalgans })
} else if (/image/.test(type)) {
await conn.sendMessage(m.chat, { image: buffer, caption: quotedType.caption }, {quoted: kalgans })
}
}
break

case 'chord': {
	if (!text) return reply(`_Masukan Format Dengan Benar!_\n\n_Contoh_\n${prefix + command} mantra hujan`)
	reply(mess.search)
	let result = await chord(text)
	let teks = `_* Title:*_ ${result.title}
_*❃ Artist:*_ ${result.artist}
_*❃ Artist Url:*_ ${result.artistUrl}

_*❃ Chord:*_ 
${result.chord}
`
conn.sendMessage(m.chat, {
text: teks,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: ` C H O R D`,
body: '',
thumbnailUrl: `https://telegra.ph/file/9fc5c4e821f563ed71a1a.jpg`,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
break

case 'tourl': {
if (limitnya < 1) return reply(mess.limit)
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await conn.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
uselimit()}
break

case 'removebg':{
	    if (!quoted) return reply `Kirim/Reply Image Dengan Caption ${command}`
	    if (!/image/.test(mime)) return reply `Kirim/Reply Image Dengan Caption ${command}`
	    if (/webp/.test(mime)) return reply `Kirim/Reply Image Dengan Caption ${command}`
	    let { removeBg } = require('./lib/removeBG')
	    let img = await quoted.download()
	    let image = await removeBg(img)
	    let result = await Buffer.from(image, "base64")
	    
	    conn.sendImage(m.chat, result, mess.success, m)
}
break

case 'kapankah': {
                if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
                const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
                }
            break
            
case 'bisakah': {
                if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
                const ga = bisa[Math.floor(Math.random() * bisa.length)]
                reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
                }
                break
                
case 'apakah': 
 if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
conn.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted:kalgans })
	 
    break
    
        case 'bagaimanakah':
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted:kalgans })
       break



case "cekkodam": case "kodam": case "cekhodam": case "cekkhodam": {
                async function cekkhodam() {
                    const animals = [
                        "Kucing", "Tikus", "Kadal", "Kuda Nil", "Bunglon", "Siput", "Koala", "Kodok", "Monyet", "Anjing",
                        "Harimau", "Kuda", "Komodo", "Gajah", "Cicak", "Ular", "Kura-kura", "Lele", "Singa", "Zebra",
                        "Bebek", "Ayam", "Buaya", "Gorila", "Naga", "Ikan", "Ubu-ubur", "Cacing", "Semut", "Udang",
                        "Musang", "Kecoak", "Kupu-kupu", "Laba-laba", "Elang", "Sapi", "Kambing", "Kelinci", "Belut", 
                        "Berang-berang", "Hiu", "Paus", "Lumba-lumba", "Burung Hantu", "Kakaktua", "Merpati", "Bebek",
                        "Ayam Kalkun", "Kepiting", "Lobster", "Ular Piton", "Iguana", "Salamander", "Katak Pohon", 
                        "Burung Pelikan", "Burung Cendrawasih", "Rubah", "Serigala", "Beruang", "Babi Hutan", "Kijang",
                        "Antelop", "Kudanil", "Jerapah", "Gajah Afrika", "Kanguru", "Koala", "Wombat", "Platipus", 
                        "Tarsius", "Orangutan", "Simba", "Mandril", "Gelada", "Gorila Gunung", "Panda", "Harimau Siberia",
                        "Macan Tutul", "Cheetah", "Lynx", "Jaguar", "Ocelot", "Serval", "Kucing Hutan", "Karacal", 
                        "Puma", "Rakun", "Binturong", "Kuskus", "Tenggiling", "Luwak", "Civet", "Kangguru Pohon", 
                        "Anoa", "Babi Rusa", "Kancil", "Tarsius", "Bekantan", "Monyet Ekor Panjang", "Lutung", 
                        "Orangutan Kalimantan", "Burung Maleo", "Kasuar", "Kakaktua Raja", "Cendrawasih Kuning Besar"
                    ];
                    const behaviours = [
                        "Jawa", "Depresi", "Mekanik", "Metal", "Insom", "Skizo", "Klepto", "Bunting", "Birahi", 
                        "Sigma", "Raksasa", "Berkaki Seribu", "Sad boy", "Mewing", "Gyatt", "Yapper", "Ambis", 
                        "Dribble", "Ngesot", "Sunda", "Kalimantan", "Kutub", "Sumatera", "Yapper", "Skizo", 
                        "Mendengkur", "Berjalan", "Melompat", "Terbang", "Berenang", "Berkelahi", "Mengunyah", 
                        "Mendaki", "Mengendus", "Memburu", "Merayap", "Bersarang", "Menangis", "Tertawa", "Bersorak"
                    ];
                    const things = [
                        "Speaker JBL", "Toa Masjid", "Lemari 2 Pintu", "Kulkas", "Taplak Meja", "Pecel Lele", 
                        "Charger Iphone", "TWS", "Kalkulator", "Sendal Jepit", "Undur-undur Maju", "Bagas Dribble", 
                        "Sapu Lidi", "Gagang Pintu", "Tutup Toples", "Rice Cooker", "Gerobak Ketoprak", "Ban Motor", 
                        "Bakwan Jagung", "Rice Cooker", "Kompor Gas", "Laptop", "Handphone", "Televisi", "Kipas Angin", 
                        "Mesin Cuci", "Sepeda Motor", "Mobil", "Traktor", "Oven", "Microwave", "Blender", "Lampu",
                        "Kamera", "Proyektor", "Mesin Jahit", "Mesin Tik", "Printer", "Fax", "Kopi Mesin", 
                        "Dispenser", "Pemanggang Roti", "Penggorengan", "Cetakan Kue", "Mixer", "Juicer", 
                        "Senter", "Kipas Angin Listrik", "AC", "Heater", "Vakum Cleaner", "Setrika", "Panci", 
                        "Wajan", "Cerobong Asap", "Mesin Kasir", "Komputer", "Monitor", "Mouse", "Keyboard", 
                        "Speakers", "Headphones", "Microphone", "Peralatan Dapur", "Peralatan Makan", "Peralatan Tidur",
                        "Peralatan Mandi", "Peralatan Kebersihan", "Peralatan Taman", "Peralatan Bengkel", 
                        "Peralatan Kantor", "Peralatan Sekolah", "Mainan", "Alat Musik", "Peralatan Olahraga", 
                        "Alat Memancing", "Alat Berkebun", "Peralatan Camping", "Peralatan Pertukangan", 
                        "Alat Pancing", "Peralatan Membuat Kue", "Peralatan Menjahit"
                    ];
            
                    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
                    const randomBehaviour = behaviours[Math.floor(Math.random() * behaviours.length)];
                    const randomThing = things[Math.floor(Math.random() * things.length)];
                    const randomTest = Math.random() > 0.5;

const animalDescriptions = [
                        `Khodam ini menunjukkan keberanian dan ketangkasan dari ${randomAnimal} yang ${randomBehaviour}.`,
                        `${randomAnimal} yang ${randomBehaviour} membawa energi yang kuat dan melindungi Anda.`,
                        `Kombinasi dari ${randomAnimal} dan ${randomBehaviour} memberikan Anda kekuatan luar biasa.`,
                        `${randomAnimal} yang ${randomBehaviour} akan membantu Anda dalam mengatasi berbagai rintangan.`,
                        `Keberadaan ${randomAnimal} yang ${randomBehaviour} dalam diri Anda menunjukkan sifat kepemimpinan dan kebijaksanaan.`
                    ];
                    
                    const thingDescriptions = [
                      "mampu menghasilkan suara luar biasa", "membawa berkah dalam setiap doa", "menyimpan kenangan dalam pintunya", 
                      "menyegarkan suasana dengan dinginnya", "menambah keindahan meja makan", "menggugah selera dengan citarasa lezat", 
                      "menyimpan daya untuk waktu yang lama", "memutar musik dengan kualitas terbaik", "memecahkan masalah dengan perhitungan cepat", 
                      "menjadikan setiap langkah nyaman", "bergerak mundur dengan ketepatan", "memiliki keahlian dribble yang luar biasa", 
                      "membersihkan segala kotoran", "membuka pintu kesempatan", "menjaga kesegaran makanan", 
                      "memasak nasi dengan sempurna", "membawa makanan ketoprak lezat", "menggulung dengan kekuatan", 
                      "menggoreng makanan hingga matang", "memasak nasi dengan sempurna", "menyediakan gas untuk memasak", 
                      "menjalankan banyak aplikasi dengan cepat", "menghubungkan dengan dunia luar", "menampilkan gambar yang jelas", 
                      "menyediakan angin sejuk", "membersihkan pakaian dengan mudah", "mengantar ke berbagai tempat", 
                      "menyediakan transportasi pribadi", "membajak sawah dengan kekuatan", "memasak makanan dengan efisien", 
                      "memanaskan makanan dengan cepat", "menghaluskan bahan makanan", "menerangi ruangan", 
                      "mengabadikan momen", "menampilkan presentasi dengan jelas", "menjahit pakaian dengan rapi", 
                      "mengetik dokumen dengan cepat", "mencetak dokumen dengan jelas", "mengirim faksimile", 
                      "menyeduh kopi dengan cepat", "menyediakan air minum", "memanggang roti hingga renyah", 
                      "menggoreng makanan dengan cepat", "membuat kue dengan bentuk sempurna", "mengaduk bahan makanan dengan cepat", 
                      "menyajikan jus segar", "menyediakan penerangan", "menyediakan angin dingin", 
                      "menghangatkan ruangan", "membersihkan debu dengan efisien", "menghilangkan kerutan pada pakaian", 
                      "memasak dengan sempurna", "menyajikan makanan dengan indah", "menyaring udara kotor", 
                      "menghitung uang dengan cepat", "menjalankan program dengan cepat", "menampilkan gambar dengan jelas", 
                      "mengontrol pointer dengan presisi", "mengetik dengan cepat", "menghasilkan suara berkualitas tinggi", 
                      "menyajikan suara jernih", "mengabadikan suara dengan jelas", "menyediakan alat dapur lengkap", 
                      "menyajikan makanan dengan indah", "menyediakan tidur nyaman", "menyediakan mandi yang menyegarkan", 
                      "membersihkan rumah dengan mudah", "menyediakan alat taman lengkap", "menyediakan alat bengkel lengkap", 
                      "menyediakan alat kantor lengkap", "menyediakan alat sekolah lengkap", "menyediakan mainan yang menghibur", 
                      "menyediakan alat musik berkualitas", "menyediakan alat olahraga lengkap", "menyediakan alat memancing lengkap", 
                      "menyediakan alat berkebun lengkap", "menyediakan alat camping lengkap", "menyediakan alat pertukangan lengkap", 
                      "menyediakan alat pancing lengkap", "menyediakan alat membuat kue lengkap", "menyediakan alat menjahit lengkap"
                  ];
            
                    const description = randomTest 
                        ? animalDescriptions[Math.floor(Math.random() * animalDescriptions.length)]
                        : thingDescriptions[Math.floor(Math.random() * thingDescriptions.length)];
            
                    return {
                        khodam: randomTest ? `${randomAnimal} ${randomBehaviour}` : randomThing,
                        description
                    };
                }
            
                const result = await cekkhodam();
//KONTOL DARI ALOK
                if (text) {
                  if (!text) return m.reply(`masukan nama anda/seseorang`)
                  let txt = `- Khodam yang ada didalam diri ${text} adalah ${result.khodam}\n\n`
                  m.reply(txt)
                  res = await Tts(txt + `penjelasannya ${result.description}`, "id");
                  await conn.sendMessage(m.chat, { audio: res, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100, 0, 100, 0, 100, 0, 100] }, { quoted: m });
                } else if (m.quoted) {
                let txt = `- Khodam yang ada didalam diri \`@${m.quoted ? m.quoted.sender.split("@")[0] : m.sender.split("@")[0]}\` adalah ${result.khodam}\n\n`
                m.reply(txt)
                res = await Tts(txt + `penjelasannya ${result.description}`, "id");
                await conn.sendMessage(m.chat, { audio: res, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100, 0, 100, 0, 100, 0, 100] }, { quoted: m });
                } else {
                reply(`Enter someone's name, or you can also reply to the person`)
                }
              }
              
            break




case "play2": {
                if (!text) return m.reply("Masukkan judul lagu yang ingin dicari!")
                let se = require('./src/scrapyt')
                let res = await se.search(text)
                if (res.length === 0) return m.reply("Tidak ada hasil.")
let teks = `
${hiasan}*Title* : ${res[0].title}
${hiasan}*View* : ${res[0].view}
${hiasan}*Duration* : ${res[0].timestamp}
${hiasan}*Uploaded* : ${res[0].ago}
${hiasan}*Author* : ${res[0].author.name}
${hiasan}*Description* : ${res[0].description}`


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: global.idsal,
 newsletterName: powered, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*[ Y O U T U B E - P L A Y ]*\n`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: res[0].thumbnail } }, { upload: conn.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "quick_reply",
 "buttonParamsJson": `{\"display_text\":\"Audio\",\"id\":\".ytmp3v2 ${res[0].url}\"}`
 },
  {
 "name": "quick_reply",
 "buttonParamsJson": `{\"display_text\":\"Video\",\"id\":\".ytmp4v2 ${res[0].url}\"}`
 },
 ],
 })
 })
 }
 }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case "spotify": {
if (limitnya < 1) return reply(mess.limit)
                if (!text) return reply(`Example: ${prefix + command} pergilah kasih`)
                let res = await searchSpoti(text)
                if (res.length === 0) return reply('Not Found')
                await conn.sendList(m.chat, 'Spotify Search', 'Powered By GhostXdzz', {
                    title: 'Click Me :)',
                    sections: [
                        {
                            title: 'Result',
                            highlight_label: "Best Result",
                            rows: res.map(a => ({
                                title: a.name.toUpperCase(),
                                description: a.artist.toUpperCase(),
                                id: '.spotifydl ' + a.url
                            }))
                        }]
                })
            uselimit()}
                break
                
case "spotifydl": {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply('Masukkan Link')
const res = await downloadTrack(text);
await conn.sendMessage(m.chat, { audio: res, mimetype: 'audio/mp4' }, { quoted: kalgans });
uselimit()}
break

case "play":{
if (limitnya < 1) return reply(mess.limit)
const streamPipeline = promisify(pipeline);
if (!text) return reply(`*Example* : ${prefix}${command} Drunk Text`);
await conn.sendMessage(m.chat, {
react: {
text: "⏳",
key: m.key,
},
});
await conn.sendMessage(m.chat, {
react: {
text: "3️⃣",
key: m.key,
},
});
await conn.sendMessage(m.chat, {
react: {
text: "2️⃣",
key: m.key,
},
});
await conn.sendMessage(m.chat, {
react: {
text: "1️⃣",
key: m.key,
},
});
await conn.sendMessage(m.chat, {
react: {
text: "☑️",
key: m.key,
},
});
try {
let search = await yts(text);
let vid =
search.videos[Math.floor(Math.random() * search.videos.length)];
if (!search) return reply("Video Not Found, Try Another Title");
let { title, thumbnail, timestamp, views, ago, url } = vid;
let wm = "2024 © KyuuRzy";

const audioStream = ytdl(url, {
filter: "audioonly",
quality: "highestaudio",
});

// Get the path to the system's temporary directory
const tmpDir = os.tmpdir();

// Create writable stream in the temporary directory
const writableStream = fs.createWriteStream(
`${tmpDir}/${title}.mp3`,
);

// Start the download
await streamPipeline(audioStream, writableStream);

let doc = {
audio: {
url: `${tmpDir}/${title}.mp3`,
},
mimetype: "audio/mp4",
fileName: `${title}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
mediaType: 1,
mediaUrl: url,
title: title,
bodyh: "2024 © GhostXdzz",
sourceUrl: url,
thumbnail: await (await conn.getFile(thumbnail)).data,
},
},
};

await conn.sendMessage(m.chat, doc, { quoted: m });

// Delete the audio file
fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
if (err) {
console.error(`Failed to delete audio file: ${err}`);
} else {
console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
}
});
} catch (e) {
console.log(e);
reply(`Failed :(`);
}
uselimit()}
break

case 'daftar': case 'regis': case 'register': {
if (isRegistered) return reply('Kamu sudah terdaftar')
const serialUser = createSerial(20)
mzd = `───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ Nomor : @${m?.sender.split('@')[0]}
○ Nama : ${pushname}
○ Status : Sukses✅ 
○ Ns : ${serialUser}

Terimakasih ${pushname} Sudah
mendaftar di ${botname}
`
veri = m?.sender
addRegisteredUser(m?.sender, pushname, serialUser)
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: powered, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: mzd
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Anyone - MD | R E G I S T E R`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: '',
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/1990c2d9c2a8436eca55b.jpg" } }, { upload: conn.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "quick_reply",
 "buttonParamsJson": `{\"display_text\":\"All Menu\",\"id\":\".allmenu\"}`
 },
 ]
 })
 })
 }
 }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'ss': case 'ssweb': {
if (limitnya < 1) return reply(mess.limit)
const scp1 = require('./lib/myfunc') 
if (!q) return reply(`Example ${prefix+command} link`)
reply(mess.search)
let krt = await scp1.ssweb(q)
conn.sendMessage(from,{image:krt.result,caption: mess.success}, {quoted:kalgans})
uselimit()}
break
//BATAS MAIN MENU

case 'fajar':
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
case 'cnn':
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
case 'layarkaca':
if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
case 'cnbc':
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:kalgans })
})
break
case 'tribun':
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:kalgans })
})
break
case 'indozone':
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:kalgans })
})
break
case 'kompas':
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:kalgans })
})
break
case 'detik':
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:kalgans })
})
break
case 'daily':
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:kalgans })
})
break
case 'inews':
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
case 'okezone':
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:kalgans })
})
break
case 'sindo':
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
case 'tempo':
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:kalgans })
})
break
case 'antara':
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:kalgans })
})
break
case "kontan-news":
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:kalgans })
})
break
case "merdeka-news":
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
conn.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:kalgans })
})
break
case "jalantikus-meme":
var reis = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${reis}`
teks += ""
conn.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:kalgans })
break
// BATAS BERITA MENH

// DOWNLOAD MENU

case 'tt': {
if (!text) return reply(`masukan link tiktoknya`)

const dlt = require('./lib/scrape/tiktokdl.js')
let tiktuk = await dlt.DownloadTiktok(text)
if (tiktuk.result.images) {
tiktuk.result.images.forEach(async (k) => {
await conn.sendMessage(m.chat, { image: { url: k }}, { quoted: kalgans });
})
} else {
conn.sendMessage(m.chat, { video: { url: tiktuk.result.video }, caption: `[ T I K T O K - D O W N L O A D E R ]\n\n${hiasan}*Author* : ${tiktuk.result.author.nickname}\n${hiasan}*Desc* : ${tiktuk.result.desc}\n${hiasan}*Statistic* : ${tiktuk.result.statistic}\n${hiasan}*Fetching* : ${((new Date - old) * 1)} ms\n\n` }, { quoted: m })
}
}
break

case "shorturl": {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply("linknya")
if (!isUrl(text)) return reply(mess.linkvalid)
await reply(mess.wait)
const res = await fetchJson(`https://aemt.me/tinyurl?link=${text}`)
if (!res.status) return reply(mess.error)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: mess.done
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\" Copy Link Web\",\"id\":\"123456789\",\"copy_code\":\"${res.result}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Buka Web\",\"url\":\"${res.result}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: kalgans}) 
await conn.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
uselimit()}
break

case 'tiktok2': {
if (!text) return reply('Masukkan Query Link!')

         let json = await tiktok(text)
         let caption = `	◦  *Created* : ${json.taken_at}\n`
         caption += `	◦  *Username* : ${json.author.nickname}\n`
         caption += `	◦  *Duration* : ${(json.duration)}\n`
         caption += `	◦  *Like* : ${(json.stats.likes)}\n`
         caption += `	◦  *Comments* : ${(json.stats.comment)}\n`
         caption += `	◦  *Share* : ${(json.stats.share)}\n`
         caption += `	◦  *Views* : ${(json.stats.views)}\n`
         caption += `	◦  *Download* : ${(json.stats.download)}\n`
         caption += `	◦  *Caption* : ${json.title || '-'}\n\n`
         caption += `	◦  *Fetching* : ${((new Date - old) * 1)} ms\n\n` 
if (json.data[0].url.includes('.jpeg')) {
json.data.forEach(async (k) => {
await conn.sendMessage(m.chat, { image: { url: k.url }}, { quoted: fcall });
await sleep(1500)
})
} else {
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: global.idchanell,
 newsletterName: powered, 
 serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
 },
 body: proto.Message.InteractiveMessage.Body.create({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: caption
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `[ T I K T O K - D O W N L O A D ]\n\n`,
 subtitle: "Nine - MD",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ video: { url: json.data[2].url } }, { upload: conn.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "quick_reply",
 "buttonParamsJson": `{\"display_text\":\"AUDIO\",\"id\":\".tiktokaudio ${text}\"}`
 },
 ]
 })
 })
 }
 }
}, { quoted: m })

await conn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
}
break

case "ytreels": case "ytmp4":{
if (!text) return reply('Masukan Link Nya!!!')
reply(mess.wait)
downloadMp4(text)
}
break

case 'ytmp4v2': {
if (!text) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
let xeonplaymp4 = require('./lib/scrape/ytdl2')
let pl = await xeonplaymp4.mp4(text)
teks = `[ Y O U T U B E - V I D E O ]

${hiasan} *Title* : ${pl.title}
${hiasan} *Date* : ${pl.date}
${hiasan} *Duration* : ${pl.duration}
${hiasan} *Quality* : ${pl.quality}
${hiasan} *Channel* : ${pl.channel}

${foter2}
`
conn.sendMessage(m.chat, { video: { url: pl.videoUrl }, caption: teks, mimetype: 'video/mp4', fileName: `${pl.title}.mp4` })
}
break

case 'ytmp3v2': {
if (!text) return reply2(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
let xeonplaymp3 = require('./lib/scrape/ytdl2')
let pl = await xeonplaymp3.mp3(text)
let { fetchBuffer } = require("./lib/myfunc2")
conn.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: pl.meta.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title: pl.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl: text,
        }

    },
},{quoted:kalgans})
await fs.unlinkSync(pl.path)
}
break

case 'ytmp3': case 'youtubemp3': {
if (limitnya < 1) return reply(mess.limit)
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
reply(mess.wait)
downloadMp3(text)
uselimit()
}
break

 case 'fb': {
if (!text) return reply(`Enter the link!!!`)
if (!isUrl(args[0])) return replygcxeon(`Where is the link?`)
await conn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
try{
let anu = await fetchJson(`https://widipe.com/download/fbdown?url=${text}`)
conn.sendMessage(m.chat, { video: { url: anu.result.url.urls[0].hd }, caption: 'Here you go!' }, { quoted: m })
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await conn.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break

case 'instagram': {
if (limitnya < 1) return reply(mess.limit)
if (!text) throw `Example : ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`
reply(mess.wait)
let iganu = await igdl2(text)
conn.sendMessage(m.chat, { video: { url: iganu[0].url }, caption: mess.success })
uselimit()}
break

case 'igdl': {
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
let ig = await igdl(text)
let url = ig[0].download
if (url.includes('.jpg')) {
if (m.isGroup) {
ig.forEach(async (k) => {
await conn.sendMessage(m.sender, { image: { url: k.download }}, { quoted: m });
})

m.reply(`All photos have been sent to your private chat`)
} else {
ig.forEach(async (k) => {
await conn.sendMessage(from, { image: { url: k.download }}, { quoted: m });
})
}
} else {
conn.sendMessage(m.chat, { video: { url: ig[0].download }, caption: mess.done }, { quoted: m })
}
}
break

case 'mediafire': {
if (!args[0]) return reply(`Enter the mediafire link next to the command`)
if (!args[0].match(/mediafire/gi)) return reply(`Link incorrect`)
const { mediafiredl } = require('@bochilteam/scraper')
let full = /f$/i.test(command)
let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
conn.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
}
break

case 'git': case 'gitclone': {
if (!args[0]) return reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
reply(mess.search)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: kalgans }).catch((err) => reply('emror'))
}
break 

//BATAS DOWN MENU

//GROUP MENU
case "promote":{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text && !m.quoted) reply('masukkan nomor yang ingin di promote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'promote').catch(console.log)
}
break

case "leavegc2": case "leave2": {
if (!isCreator) return m.reply(mess.owner)
let gcall = await Object.values(await conn.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Contoh Cara Penggunaan :*\nKetik *${prefix + command}* Nomor Grupnya\n\n*List Semua Grup Chat :*\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += ` *Nomor Grup => ${i+1}*\n*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
m.reply(listgc)
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return m.reply("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await reply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await conn.groupLeave(`${gcall[leav].id}`)
}}
break

case 'acc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isCreator && !isAdmins) return m.reply('Khusus Admin & Owner')
if (!args[0]) return reply("*Perintah tidak valid.*\nGunakan:\n- *acc list*\n- *acc approve [number]*\n- *acc reject [number]*\n- *acc reject [JID]*\n- *acc reject/approve all* untuk menolak/menyetujui semua permintaan bergabung.");

try {
let groupId = m.chat;
let [subCommand, options] = args;
let joinRequestList = await conn.groupRequestParticipantsList(groupId);

    const formatDate = (timestamp) => new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date(timestamp * 1000));

if (subCommand === "list") {
            const formattedList = joinRequestList.length > 0 ?
                joinRequestList.map((request, i) => `*${i + 1}.*\n• Nomor: ${request.jid.split('@')[0]}\n• Metode Permintaan: ${request.request_method}\n• Waktu Permintaan: ${formatDate(request.request_time)}\n\n`).join('') :
                "Tidak ada permintaan bergabung yang tertunda.";
            reply(`*Daftar Permintaan Bergabung:*\n\n${formattedList}`);
            }

if (subCommand  === "reject" || "approve") {
            if (options === "all") {
                for (const request of joinRequestList) {
                    await conn.groupRequestParticipantsUpdate(groupId, [request.jid], subCommand);
                    console.log(`Meng-${subCommand} participant dengan JID: ${request.jid}`);
                }
                reply(`*${subCommand === 'approve' ? 'Menyetujui' : 'Menolak'} semua permintaan bergabung.*`);
            } else {
                const actions = options.split(" ").map(action => action.trim());
                const participants = actions.map(action => joinRequestList[parseInt(action) - 1]).filter(request => request);
                if (participants.length > 0) {
                    let formattedResponse = '';
                    for (const request of participants) {
                        const response = await conn.groupRequestParticipantsUpdate(groupId, [request.jid], subCommand);
                        const status = response[0].status === 'success' ? 'Gagal' : 'Berhasil';
                        formattedResponse += `*${participants.indexOf(request) + 1}.*\n• Status: ${status}\n• Nomor: ${request.jid.split('@')[0]}\n\n`;
                        console.log(`Meng-${subCommand} participant dengan JID: ${request.jid}`);
                    }
                    reply(`*${subCommand === 'approve' ? 'Menyetujui' : 'Menolak'} Permintaan Bergabung:*\n\n${formattedResponse}`);
                } else {
                    reply("Tidak ada anggota yang cocok untuk reject/approve.");
                }
            }
            }
            } catch (err) {
            console.log(jsonformat(err))
            }
    }
    break

case 'antilink': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return reply('Sudah Aktif')
ntilink.push(from)
reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
reply('Succes mematikan antilink di group ini 🌷')
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antilinkv2':
if (!isCreator) return reply(mess.owner)
if (args[0] == 'enable'){
if (chats.antilink) return reply('UDAH ON!')
chats.antilink = true
reply('Fitur antilink telah di aktifkan')
} else if (args[0] == 'disable'){
if (!chats.antilink) return reply('UDAH OFF!')
chats.antilink = false
reply('Fitur antilink telah di matikan')
} else reply('enable / disable')
break

case 'antichanell':
if (!isCreator) return reply(mess.owner)
if (args[0] == 'enable'){
if (chats.antichanell) return reply('UDAH ON!')
chats.antichanell = true
reply('Fitur antichanell telah di aktifkan')
} else if (args[0] == 'disable'){
if (!chats.antichanell) return reply('UDAH OFF!')
chats.antichanell = false
reply('Fitur antichanell telah di matikan')
} else reply('enable / disable')
break

case 'antitoxic': {
if (!isCreator) return reply(mess.owner)
if (args[0] == 'enable'){
if (chats.antitoxic) return reply('UDAH ON!')
chats.antitoxic = true
reply('Fitur anti toxic telah di aktifkan')
} else if (args[0] == 'disable'){
if (!chats.antitoxic) return reply('UDAH OFF!')
chats.antitoxic = false
reply('Fitur anti toxic telah di matikan')
} else reply('enable / disable')
}
break

case 'antisticker': {
if (!isCreator) return reply(mess.owner)
if (args[0] == 'enable'){
if (chats.antiSticker) return reply('UDAH ON!')
chats.antiSticker = true
reply('Fitur anti Sticker telah di aktifkan')
} else if (args[0] == 'disable'){
if (!chats.antiSticker) return reply('UDAH OFF!')
chats.antiSticker = false
reply('Fitur anti sticker telah di matikan')
} else reply('enable / disable')
}
break

case 'antibot': {
if (!isCreator) return reply(mess.owner)
if (args[0] == 'enable'){
if (chats.antibot) return reply('UDAH ON!')
chats.antibot = true
reply('Fitur anti Bot telah di aktifkan')
} else if (args[0] == 'disable'){
if (!chats.antibot) return reply('UDAH OFF!')
chats.antibot = false
reply('Fitur anti Bot telah di matikan')
} else reply('enable / disable')
}
break

case 'antisticker': {
if (!isCreator) return reply(mess.owner)
if (args[0] == 'enable'){
if (chats.antibot) return reply('UDAH ON!')
chats.antibot = true
reply('Fitur anti toxic telah di aktifkan')
} else if (args[0] == 'disable'){
if (!chats.antibot) return reply('UDAH OFF!')
chats.antibot = false
reply('Fitur anti toxic telah di matikan')
} else reply('enable / disable')
}
break

case "demote":{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text && !m.quoted) reply('masukkan nomor yang ingin di demote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'demote').catch(console.log)
}
break

case 'sendlinkgc': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await conn.groupInviteCode(from)
conn.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
conn.groupRevokeInvite(from)
break

case 'editdesk':{
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
if (!text) return reply(`Text Nya ?`)
await conn.groupUpdateDescription(from, text).then((res)).catch((err) => reply(jsonformat(err)))
}
break

case 'totag': {
if (!isCreator) return reply(mess.owner)
if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break       

case 'totalmem': {
let total = await conn.groupMetadata(m.chat).then((data) => {
    return data.participants.length
  })
  let subject = (await conn.groupMetadata(m.chat)).subject
  let allmem = await conn.groupMetadata(m.chat).then((data) => {
    return data.participants.map((v) => v.id)
  })
  let teks = `Total Member *${subject}* (${total})\n\n`
  conn.sendTextWithMentions(m.chat, teks + allmem.map((v, i) => `${i + 1}. @${v.split("@")[0]}`).join("\n"), m)
}
break

case 'closetime':
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.Badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
conn.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break

case "opentime": {
if (!m?.isGroup) return reply("Khusus Dalam Group")
if (!isAdmins && !isCreator) return reply("Khusus Admin Group")
if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Open Time ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
const nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
conn.groupSettingUpdate(m.chat, 'not_announcement')
reply(open)
}, timer)
}
break

case "creategc":{
if (!isCreator) return reply(mess.owner)
if (!text) return reply("Nama groupnya?")
let cret = await conn.groupCreate(text, [])
let response = await conn.groupInviteCode(cret.id)
let teks = `\`\`\`「  CREATION GROUP MESSAGE  」\`\`\`
▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
reply(teks) 
}, 7000)
setTimeout(() => {
conn.groupParticipantsUpdate(cret.id, [m.sender], "promote")
}, 5000)
setTimeout(() => {
conn.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 1000)
}
break

//SEARCH MENU

case  'yts': case 'ytsearch': {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`Example : ${prefix + command} Drunk Text`)
if (limitnya < 1) return reply(mess.limit)
reply(mess.wait)
let search = await yts(text)
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
conn.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: kalgans })
uselimit()}
break

case 'subfinder': {
if (!text) return m.reply(`input domain`)
let url = "https://api.manaxu.my.id/api/";
var { data } = await axios.get(url + "tools/scanner?q=" + text);
  var no = 1
  var result = "*SCAN DOMAIN*\n\n> *Total:* " + data.result.length + "\n"
for (let mannr of data.result) {
  result += `> *No:* ${no++}\n> *Domain:* ${mannr.domain}\n`
}
m.reply(result);
}
break

case 'subfinderv2': {
if (!text) return m.reply(`input domain`)
let url = "https://api.manaxu.my.id/api/";
var { data } = await axios.get(url + "tools/scanner?q=" + text);
let no = 1

conn.sendList(m.chat, `Total Subdomain: ${data.result.length}`, powered, {
                    title: `${text}`, sections: [{
                        title: `List Subdomain ${text}`,
                        rows: data.result.map(a => ({
                                title: `${no++}`,
                                description: a.domain,
                                id: ``
                        }))
                    }]
                })
}
break

case "google":{
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`Example : ${prefix + command} ${botname}`);
let google = require("google-it");
google({ query: text }).then((res) => {
let teks = `Google Search From : ${text}\n\n`;
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`;
teks += `⭔ *Description* : ${g.snippet}\n`;
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`;
}
reply(teks);
});
uselimit()}
break

case 'spotifysearch': {
if (!text) return reply(`Example : ${prefix + command} Rewrite The Stars`)
reply(mess.search)
let spotify = await fetchJson(`https://api.caliph.biz.id/api/search/spotify?query=${text}&apikey=${caliph}`)
let teks = ' Spotify Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of spotify.result) {
teks += `◦  No : ${no++}\n◦  Title : ${i.title}\n◦  Artist : ${i.artist}\n◦  Duration : ${i.duration}\n◦‎  Album : ${i.album}\n◦  Url : ${i.url}\n\n─────────────────\n\n`
}
conn.sendMessage(m.chat, {
text: teks,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | ${botname}`,
body: '',
thumbnailUrl: spotify.result[0].thumbnail,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
break

case 'gsmarena': {
if (!text) return reply(`Masukan Query \n\nContoh : \n${prefix + command} Poco x3 pro`)
if (!/https:\/\/carisinyal.com/.test(text)) {
let res = await spek(text)
let cap = res.map((v, i) => {
return `
_*${i + 1}. ${v.title}*_
❃ Harga: ${v.harga}
❃ Link: ${v.link}
`.trim()
}).join('\n\n')
reply(cap)
} else {
let { fitur, spek, img } = await speklengkap(text)
let cap1 = fitur.map(v => {
return v.desc
}).join('\n\n')
let cap2 = spek.map(v => {
return `
_*${v.name} :*_
${v.fitur}
`.trim()
}).join('\n\n')
conn.sendMessage(m.chat, { image: { url: img }, fileName: 'fotohp.jpg', mimetype: 'image/jpeg', caption: `_*Fitur Unggulan:*_ \n\n${cap1}\n\n_*Spesifikasi Lengkap:*_\n\n${cap2}` }, { quoted: kalgans })
}
}
break

case 'bukalapak':{
if (!isCreator) return reply(mess.owner)  
if (!text) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix+command} Vps`)
reply(mess.search)
let anu = await mann.search.BukaLapak(text)
let teks = ` *B U K A L A P A K - S E A R C H*\n\n`
anu.map((v, i) => {
teks += `${i+1}. `
teks += `*Produk* : ${v.title}\n`
teks += `*Rating* : ${v.rating}\n`
teks += `*Sold* : ${v.terjual}\n`
teks += `*Price* : ${v.harga}\n`
teks += `*Location* : ${v.store.lokasi}\n`
teks += `*NameLocation* : ${v.store.nama}\n`
teks += `*Link* : ${v.store.link}\n\n───────────────\n\n`
}).join('\n\n')
teks += `${foter2}`
conn.sendMessage(m.chat, {
text: teks,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `© G H O S T - MD | B U K A L A P A K`,
body: '',
thumbnailUrl: "https://telegra.ph/file/03dbd32dae736bca90780.jpg",
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
break

case 'gimage': {
if (!text) return reply(`Example: ${prefix + command} panda`)
reply(mess.search)
let { googleImage } = require('@bochilteam/scraper')
let json = await googleImage(text)
for (let i = 0; i < 3; i++) {
result = json[Math.floor(Math.random() * json.length)]   
conn.sendMessage(m.chat, { image: { url: result }, caption: `🍟 *Fetching* : ${foter1}`}, { quoted: kalgans })
await sleep(1500)
}
}
break

case 'owner': {
await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
const url = "https://telegra.ph/file/65469aa05e05c2543469c.jpg"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: conn.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {},
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *Halo Kak ${pushname}, Tekan Tombol Yang bertuliskan Chat Owner Untuk Menghubungi Nomor Owner ku*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

*TERIMAKASIH JIKA SUDAH MEMBACA SAMPAI SELESAIKAN😇*` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner ( YilziExe )","url":"https:\\/\\/wa.me\\/6281359123789","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *Halo Kak ${pushname}, Tekan Tombol Yang bertuliskan Chat Bot Untuk Bermain Bot Zxuann - MD*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

*TERIMAKASIH JIKA SUDAH MEMBACA SAMPAI SELESAIKAN😇*` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"💬  Chat Bot ( Zxuann - MD )","url":"https:\\/\\/wa.me\\/6281359123789","webview_presentation":null}',
                        },
                      ],
                    },
                  },

                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await conn.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break

case "add":{
if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('masukkan nomor yang ingin di tambahkan')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break

case "kick":{
if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('masukkan nomor yang ingin di kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break

case 'linkgroup': case 'linkgc': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
let response = await conn.groupInviteCode(from)
conn.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'tagall': {
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: kalgans })
}
break

case "setppgc": {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botadmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (/image/g.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
m.reply(mess.done)
} else return m.reply('dengan mengirim foto')
}
break

case 'biochange':
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q == 'enable') {
autobio = true
reply(`Berhasil Mengubah AutoBio Ke ${q}`)
} else if (q == 'disable') {
autobio = false
reply(`Berhasil Mengubah AutoBio Ke ${q}`)
}
break   

case 'autobio': {
if (!isCreator) return reply(mess.owner)
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ''
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "[ *connMD – New Version* ]"
}),
header: proto.Message.InteractiveMessage.Header.create({
title: Styles(`click button *enable* to enable autobio\nclick button *disable* to disable autobio`),
subtitle: "rorr",
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".biochange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".biochange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'connchatt': {
if (!isCreator) return (mess.owner)
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ''
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "Simpel WhatsApp Bot Made By GhostXdzz "
}),
header: proto.Message.InteractiveMessage.Header.create({
title: (`click button *enable* to enable autobio\nclick button *disable* to disable autobio`),
subtitle: `${ownername}`,
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".connchatchange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".connchatchange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'connchatchangge':{
if (args[0] === "enable") {
if (db.data.chats[m.chat].conn) return reply(`activated`)
db.data.chats[m.chat].conn = true
reply('Successfully Activate Auto Chat conn')
} else if (args[0] === "disable") {
if (!db.data.chats[m.chat].conn) return reply(`it's deactivated`)
db.data.chats[m.chat].conn = false
reply('Successfully Disabling Auto Chat conn')
} else {
reply(`${prefix+command} enable -- _mengaktifkan_\n${prefix+command} disable -- _Menonaktifkan_`)
}}
break

case'bard':{
if (limitnya < 1) return reply(mess.limit)
if (!text) return m.reply(`*Example*: ${prefix + command} siapa kamu`)
let res = await bard(text)
conn.sendMessage(m.chat, {
text: res,
contextInfo: {
externalAdReply:{
title: `Bard-Ai`,
body: `Bard-Ai`,
thumbnailUrl: `https://telegra.ph/file/e93bdeb0ad6e6d22d57c4.jpg`,
sourceUrl: `https://google.com`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted: kalgans})
uselimit()}
break

case 'ai-rizzpiw': {
if (!text) return reply(`apa yang ingin kamu tanyakan`)
const { RizzPiwAI } = require('ai-rizzpiww');
try {
const chat = new RizzPiwAI(); 

chat.question({
model: "turbo",

content: text

}).then(response => {
reply(response.reply);
});
} catch (err) {
console.error(err.message)
}
}
break

case  'anyone-ai':{
async function chatWithGPT(messages, q) {
    try {
        const nonceValue = JSON.parse(cheerio.load(await (await axios.get(
            "https://chatgpt4online.org/chat"
        )).data)('.mwai-chatbot-container').attr('data-system')).restNonce;

        const {
            data
        } = await axios(
            "https://chatgpt4online.org//wp-json/mwai-ui/v1/chats/submit", {
                method: "post",
                data: {
                    botId: "default",
                    messages,
                    newMessage: q,
                    stream: false,
                },
                headers: {
                    "X-WP-Nonce": nonceValue,
                    "Content-Type": "application/json",
                },
            }
        );
        return data.reply;
    } catch (err) {
        console.log(err.response.data);
        return err.response.data.message;
    }
}
if (!text) return reply(`Apa yang pengen kamu tanyain?\n\nContoh: ${prefix + command} halo bot`);
try {
await conn.sendMessage(m.chat, { react: { text: "✉️",key: m.key,}})
 let d = new Date(new Date + 3600000)
let locale = 'id'
const jam = new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"});
let hari = d.toLocaleDateString(locale, { weekday: 'long' })
let tgl = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let json = await chatWithGPT(
        [
            {
                role: "assistant",
                content:
                    `Nama kamu adalah Zxuann-MD, kamu dibuat dan dikembangkan oleh YilziExe. YilziExe Itu Adalah Developer Bot WhatsApp Yang Hebat Nama Asli Dia Daffa Fauzan. Gunakan bahasa gaul seperti kata gue dan lu dalam menjawab semua pertanyaan orang. kamu cerdas. Gunakan emoji yang sesuai dalam setiap kalimat. Gunakan tanggal ${tgl}. Gunakan jam ${jam}. Gunakan hari ${hari}.`
            },
            {
                role: "user",
                content: text
            }
        ],
        text
    );
    await reply(` ${json}`);
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} catch (e) {
await conn.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
};
break

   case "luminai":{
  if (!text) return m.reply("mau nanya apa sama gambar itu?");
  try {
    if (quoted && /image/.test(quoted.mimetype)) {
      let anu = (await axios.post("https://luminai.siputzx.my.id/", { content: text, imageBuffer: await quoted.download(), user: sender })).data.result;
      m.reply(anu);
    } else {
      let anu = (await axios.post("https://luminai.siputzx.my.id/", { content: text, user: sender })).data.result;
      m.reply(anu);
    }
  } catch (e) {
    m.reply(e);
  }}
  break

case'geminni':{
if (!text) return reply(`*Example*: ${prefix + command} siapa kamu`)
let geminii = require('./lib/gemini')
let res = await geminii(text)
m.reply(res[0])
}
break

case 'aivoice': case 'aiv': {
if (!isRegistered) return reply(mess.regis)
if (!q) return reply(`Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia?`)
await conn.sendPresenceUpdate('recording', m.chat);
let result = await fetchJson(`https://skizo.tech/api/openai?text=${q}&apikey=${skizo}`)
const text = result.result;
var lang = text.split("--")[1]
if (!lang) lang = 'id'
long = 'id'
function tts(text, long = 'id') {
//console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(long)
let filePath = path.join(__dirname, './lib', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}

let res
try { res = await tts(text, long) }
catch (e) {
reply(e + '')
res = await tts(text)
} finally {
conn.sendMessage(m.chat, {
audio: res, 
mimetype: 'audio/mpeg', 
ptt: true,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `A I - V O I C E`,
body: '',
thumbnailUrl: "https://telegra.ph/file/db0fb173f6476fe4918d8.jpg",
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
}
)
}
}
break

case 'delsesi':
case 'clearsession':{
if (!isCreator) return reply(mess.owner)
fs.readdir("./session", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return reply(teks)
filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})
reply(teks)
await sleep(2000)
reply("Menghapus file sampah...")
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
reply("Berhasil menghapus semua sampah di folder session")
});
}
break

case 'setname': case 'setsubject': {
if (!text) return reply(`Text ?`)
await conn.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break

case 'esceh': case 'script': case 'sc': {
let Rawwwwr = `Script Ini Op? 20K Saja

*If you want to ask questions, please chat :*
> _https://wa.me/6281359123789_ (owner)

*Jika ingin Tahu Informasi Mengenai Bot Ini :*
> _-_

*Jika Ingin Memainkan Bot Ini :*
> _-_`
 conn.relayMessage(m.chat, {
requestPaymentMessage: {
lcurrencyCodeIso4217: 'IDR',
amount1000: 20000 * 20000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: `Sorry not open source code

*If you want to ask questions, please chat :*
> _https://wa.me/6281359123789_ (owner)

*Jika ingin Tahu Informasi Mengenai Bot Ini :*
> _-_

*Jika Ingin Memainkan Bot Ini :*
> _-_`,
contextInfo: {
mentionedJid: [owner[1] + '@s.whatsapp.net'],
externalAdReply: {
showAdAttribution: true
}
}
}
}
}
}, {})
}
break

case "done": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply("barang,harga\n\n*Contoh :* Panel Unlimited,2")
if (!text.split(",")) return m.reply("barang,harga\n\n*Contoh :* Panel Unlimited,2")
const [barang, harga] = text.split(",")
if (isNaN(harga)) return m.reply("Format Harga Tidak Valid")
var total = `${harga}000000`
var total2 = Number(`${harga}000`)
const teks = `*TRANSAKSI DONE BY ${ownername} ✅*

*📦 Barang :* ${barang}
*💸 Nominal :* Rp${toRupiah(total2)}
*⏰ Waktu :* ${time}

_*Terimakasih Sudah Mempercayai & Menggunakan Jasa Saya 🥳*_`
 conn.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: Number(total), requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `${teks}`, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}
break

case 'tunda':
text_trxpending = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 」

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥`
await conn.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxpending,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break

case 'batal':
text_trxbatal = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal2}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${time}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹`
await conn.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxbatal,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break

case "reqpanel":{
if (!isCreator) return reply(mess.owner)
ewe = `*بِسۡـــــــــمِ ٱللهِ ٱلرَّحۡـمَـٰنِ ٱلرَّحِـــــــيم*

Ram : 
Username :
Nomor Wa : 
▰▰▰▰▰▰▰▰
*Garansi 14 Day*
*Create ${tanggal2}*
*Hari Ini ${hariini}*`
await conn.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break

case 'pembayaran': case 'nopeconn': case 'payment':{
teks28 = `*❏––––––『 PAYMENT SAYA 』––––––❏*
 
⫹⫺ PAYMENT
Dana: 081359123789
Gopay: 081359123789
Jangan Lupa Send Bukti TF  😁`
conn.sendMessage(from, { image: { url: "https://telegra.ph/file/a059a6a734ed202c879d3.jpg" }, caption: teks28 }, { quoted: kalgans })
}
break

case'zanz':{
if (!text) return reply(`Ya Kamu Kah Panggil Aku? Kenapa Panggil Zanz Bang`)
function checkText(text) {
const lowerCaseText = text.toLowerCase();
if (lowerCaseText.includes('cariin') || lowerCaseText.includes('carikan') || lowerCaseText.includes('putarin') || lowerCaseText.includes('putarkan')) {
return 'ok';
} else {
return 'no';
}
}
 if (text.includes('grup') && text.includes('tutup')) {
if (!isBotAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
if (!isAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
    
await conn.groupSettingUpdate(m.chat, 'announcement')
reply(`Oke, grup telah ditutup. Semoga lebih teratur ya~ 😉`);
} else if (text.includes('grup') && text.includes('buka')) {
if (!isBotAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
if (!isAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
 
await conn.groupSettingUpdate(m.chat, 'not_announcement')
reply(`Oke, grup telah dibuka. Ayo kita beraktivitas bersama-sama! 😉`);
} else if (text.includes('kick') || text.includes('kik')) {
if (!isBotAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
        if (!isAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
 
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'remove')
reply(`Maaf Ya Terpaksa Aku Tendang 😖, Perintah Admin Sih..`)
} else if (checkText(text) === 'ok') {
async function findSong(text) {
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const tokens = tokenizer.tokenize(text.toLowerCase());

const keywords = ['putar', 'putarkan', 'putarlagu', 'lagu', 'cariin', 'carikan', 'mainkan', 'mainkanlagu', 'play', 'playmusic', 'playasong'];
const songKeywords = tokens.filter(token => keywords.includes(token));

if (songKeywords.length === 0) {
return "Maaf, tidak dapat menemukan permintaan lagu dalam teks tersebut.";}
let songTitle = tokens.slice(tokens.indexOf(songKeywords[0]) + 1).join(' ');
return songTitle}
const songName = await findSong(text)
reply(`Oke, tunggu sebentar ya~ Aku sedang mencari "${songName}" untukmu! 😉`);
await sleep(6000)
let res = await yts(text)
let vid = res.videos[0]
await conn.sendMessage(m.chat, { react: { text: "🧢",key: m.key,}
})  
if (!vid) return reply('Tidak di temukan, coba untuk membalikkan judul dan author nya')
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
reply(`Berikut adalah lagu yang kamu pilih: ${title}`)
const url = 'https://www.youtube.com/watch?v=' + videoId
const yt = await youtubedl(url).catch(async () => await youtubedlv2(url))
const link = await yt.audio['128kbps'].download()
try {
let doc = { 
audio: 
{ 
url: link 
}, 
mimetype: 'audio/mp4', 
fileName: `${title}`,
contextInfo: { 
externalAdReply: { 
showAdAttribution: true, 
renderLargerThumbnail: false,
mediaType:  1,
mediaUrl: url,
title: foter1,
body: foter1,
sourceUrl: "",
thumbnail: await(await conn.getFile(thumbnail)).data}}}
return conn.sendMessage(m.chat, doc, { quoted: kalgans })
     
} catch (e) {
console.error(e);
reply(`Maaf, terjadi kesalahan dalam mencari lagu. 😔`);
}
} else {
}}
break

case 'totalfitur': {
reply(`${totalFitur()} Features`)
}
break

break

// game menu
case 'modegame': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "[ *connBotz – New Version* ]"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: `click button *enable* to enable modegame\nclick button *disable* to disable modegame\n`,
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".gamechange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".gamechange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'gamechange':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} enable/disable`)
                if (q == 'enable') {
                    settings.game = true
                    reply(`Berhasil Mengubah ModeGame Ke ${q}`)
                } else if (q == 'disable') {
                    settings.game = false
                    reply(`Berhasil Mengubah ModeGame Ke ${q}`)
                }
                break   

case "tebakbomb": case "bomb": {
if (!m.isGroup) return reply(mess.group)
if (m.chat in conn.bomb) return conn.sendText(m.chat, "Masih ada game yang belum terselsaikan!", conn.bomb[m.chat][0]);
conn.bomb = conn.bomb ? conn.bomb : {};
let id = m.chat,
timeout = 180000;
const bom = ['💥', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'].sort(() => Math.random() - 0.5);
const number = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];
const array = bom.map((v, i) => ({
emot: v,
number: number[i],
position: i + 1,
state: false
}));
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
for (let i = 0; i < array.length; i += 3) teks += array.slice(i, i + 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += `\nWaktu : *${((timeout / 1000) / 60)} menit*\nHadiah : *Random Balance*\n\nApabila mendapat kotak yang berisi bom maka *Hadiah* tidak di berikan`;
let msg = await conn.sendText(m.chat, teks, conn.bomb[id] ? conn.bomb[id][0] : m);
let { key } = msg

let v;
conn.bomb[id] = [
msg,
array,
setTimeout(() => {
v = array.find(v => v.emot == '💥');
if (conn.bomb[id]) conn.sendText(m.chat, `*Waktu habis*\n\nKotak yang berisi bom ${v.number} tidak terbuka\nGame dihentikan!`, conn.bomb[id][0]);
delete conn.bomb[id];
}, timeout),
key
];
}
break

case 'casino': {
if (!m.isGroup) return reply(mess.group)
let buatall = 1
conn.casino = conn.casino ? conn.casino : {}
if (m.chat in conn.casino) return reply('Masih Ada Yang Melakukan Casino Disini, Tunggu Sampai Selesai!!')
else conn.casino[m.chat] = true
try {
let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
let Aku = (randomaku * 1)
let Kamu = (randomkamu * 1)
let count = args[0]
count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].balance / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (args.length < 1) return reply(`${prefix}casino <jumlah>\n${prefix}casino 1000`)
if (db.data.users[m.sender].balance >= count * 1) {
db.data.users[m.sender].balance -= count * 1
if (Aku > Kamu) {
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Kehilangan ${count} Balance`)
} else if (Aku < Kamu) {
db.data.users[m.sender].balance += count * 2
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Mendapatkan ${count * 2} Balance`)
} else {
ldb.data.users[m.sender].balance += count * 1
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Seri*\nKamu Mendapatkan ${count * 1} Balance`)
}
} else reply(`Balance Kamu Tidak Mencukupi Untuk Casino Silahkan *bermain game* Terlebih Dahulu!`)
} catch (e) {
console.log(e)
reply(mess.error)
} finally {
delete conn.casino[m.chat]
}
}
break

case 'caklontong':
//if(!isGroup) return m.reply(mess.group)
if (!settings.game) return m.reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click enable`) 
if (from in caklontong) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./media/game/caklontong.json')));
console.log(`Jawaban : ${jawaban}\n${deskripsi}`)
await m.reply(`*GAME CAK LONTONG*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) m.reply(`Waktu habis!\nJawabannya adalah: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}
break

case 'tebakgambar':
if (!settings.game) return m.reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click enable`) 
//if(!isGroup) return m.reply(mess.group)
if (from in tebakgambar2) return m.reply('Masih ada game yang belum diselesaikan');
var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await conn.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar2[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakgambar2[from]) m.reply(`Waktu habis!\nJawabannya adalah: ${tebakgambar2[from].jawaban}`);
delete tebakgambar2[from];
}, gamewaktu * 1000)
}
break

case 'family100': case 'f100':
//if(!isGroup) return m.reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await m.reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family100[from].jawaban
for (let i of jwb){teks += `\n${i}`}
m.reply(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}
break //Powered By alice & Darwin

case 'tebakbendera':
//if(!isGroup) return m.reply(mess.group)
if (!settings.game) return m.reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click enable`) 
if (from in tebakbendera) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await m.reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[from]) m.reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 1000)
}
break

case 'coin': {
if (!args || !args[0]) return reply(`🚩 Berikan argumen A atau B.`)
      let x = Func.ucword(args[0])
      if (x == 'A' || x == 'B') {
         var typeC = Func.random(['A', 'B'])
         if (Func.ucword(args[0]) == typeC) {
            let percent = Func.randomInt(5, 10)
            let reward = ((percent / 100) * users.balance)
            users.balance += reward
            let last = users.balance
            let teks = `  *W I N*\n\n`
            teks += `	*System* : ${typeC}, *You* : ${Func.ucword(args[0])}!\n`
            teks += `	*+ ${Func.formatNumber(reward)}*\n\n`
            teks += `• *Total* : ${Func.formatNumber(last)} Point\n\n`
            teks += `*NB : “Anti-Spam jeda ${global.gamewaktu} detik untuk eksekusi selanjutnya.”*`
            reply(teks)
         } else if (Func.ucword(args[0]) != typeC) {
            let percent = Func.randomInt(5, 15)
            let reward = ((percent / 100) * users.balance)
            users.balance -= reward
            let last = users.balance
            let teks = `  *L O S E*\n\n`
            teks += `	*System* : ${typeC}, *You* : ${Func.ucword(args[0])}!\n`
            teks += `	*- ${Func.formatNumber(reward)}*\n\n`
            teks += `• *Total* : ${Func.formatNumber(last)} Point\n\n`
            teks += `*NB : “Anti-Spam jeda ${global.gamewaktu} detik untuk eksekusi selanjutnya.”*`
            reply(teks)
         }
      } else {
         return reply(`🚩 Hanya terdapat argumen A dan B.`)
      }
}
break

case 'wwpc':
      case 'ww':
      case 'werewolf': {
        let jimp = require("jimp")
        const resize = async (image, width, height) => {
          const read = await jimp.read(image);
          const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
          return data;
        };
        let {
          emoji_role,
          sesi,
          playerOnGame,
          playerOnRoom,
          playerExit,
          dataPlayer,
          dataPlayerById,
          getPlayerById,
          getPlayerById2,
          killWerewolf,
          killww,
          dreamySeer,
          sorcerer,
          protectGuardian,
          roleShuffle,
          roleChanger,
          roleAmount,
          roleGenerator,
          addTimer,
          startGame,
          playerHidup,
          playerMati,
          vote,
          voteResult,
          clearAllVote,
          getWinner,
          win,
          pagi,
          malam,
          skill,
          voteStart,
          voteDone,
          voting,
          run,
          run_vote,
          run_malam,
          runprefixagi
        } = require('./lib/werewolf.js')

        // [ Thumbnail ] 
        let thumb = "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

        const {
          sender,
          from,
          chat
        } = m;
        conn.werewolf = conn.werewolf ? conn.werewolf : {};
        const ww = conn.werewolf ? conn.werewolf : {};
        const data = ww[chat];
        const value = args[0];
        const target = args[1];
        let byId = getPlayerById2(sender, parseInt(target), ww);
        // [ Membuat Room ]
        if (value === "create") {
          if (chat in ww) return m.reply("Group masih dalam sesi permainan");
          if (playerOnGame(sender, ww) === true)
            return m.reply("Kamu masih dalam sesi game");
          ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
          };
          await m.reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

          // [ Join sesi permainan ]
        } else if (value === "join") {
          if (!ww[chat]) return m.reply("Belum ada sesi permainan");
          if (ww[chat].status === true)
            return m.reply("Sesi permainan sudah dimulai");
          if (ww[chat].player.length > 16)
            return m.reply("Maaf jumlah player telah penuh");
          if (playerOnRoom(sender, chat, ww) === true)
            return m.reply("Kamu sudah join dalam room ini");
          if (playerOnGame(sender, ww) === true)
            return m.reply("Kamu masih dalam sesi game");
          let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
          };
          ww[chat].player.push(data);
          let player = [];
          let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
          for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
          }
          text += "\nJumlah player minimal adalah 5 dan maximal 15";
          conn.sendMessage(
            m.chat, {
              text: text.trim(),
              contextInfo: {
                externalAdReply: {
                  title: "W E R E W O L F",
                  mediaType: 1,
                  renderLargerThumbnail: true,
                  thumbnail: await resize(thumb, 300, 175),
                  sourceUrl: '',
                  mediaUrl: thumb,
                },
                mentionedJid: player,
              },
            }, {
              quoted: m
            }
          );

          // [ Game Play ]
        } else if (value === "start") {
          if (!ww[chat]) return m.reply("Belum ada sesi permainan");
          if (ww[chat].player.length === 0)
            return m.reply("Room belum memiliki player");
          if (ww[chat].player.length < 5)
            return m.reply("Maaf jumlah player belum memenuhi syarat");
          if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu belum join dalam room ini");
          if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
              clearAllVote(chat, ww);
              addTimer(chat, ww);
              return await run_vote(conn.chat, ww);
            } else if (ww[chat].time === "malem") {
              clearAllVote(chat, ww);
              addTimer(chat, ww);
              return await run_malam(conn.chat, ww);
            } else if (ww[chat].time === "pagi") {
              clearAllVote(chat, ww);
              addTimer(chat, ww);
              return await runprefixagi(conn.chat, ww);
            }
          }
          if (ww[chat].status === true)
            return m.reply("Sesi permainan telah dimulai");
          if (ww[chat].owner !== sender)
            return m.reply(
              `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
          let list1 = "";
          let list2 = "";
          let player = [];
          roleGenerator(chat, ww);
          addTimer(chat, ww);
          startGame(chat, ww);
          for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
          }
          for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
          }
          for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
              if (ww[chat].player[i].isdead != true) {
                var textt = `Hai ${conn.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                await conn.sendMessage(ww[chat].player[i].id, {
                  text: textt,
                  mentions: player,
                });
              }
              // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
              if (ww[chat].player[i].isdead != true) {
                let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${conn.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                await conn.sendMessage(ww[chat].player[i].id, {
                  text: texttt,
                  mentions: player,
                });
              }

              // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
              if (ww[chat].player[i].isdead != true) {
                let texxt = `Hai ${conn.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

                await conn.sendMessage(ww[chat].player[i].id, {
                  text: texxt,
                  mentions: player,
                });
              }

              // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
              if (ww[chat].player[i].isdead != true) {
                let teext = `Hai ${conn.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;

                await conn.sendMessage(ww[chat].player[i].id, {
                  text: teext,
                  mentions: player,
                });
              }
// [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
              if (ww[chat].player[i].isdead != true) {
                let textu = `Hai ${conn.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

                await conn.sendMessage(ww[chat].player[i].id, {
                  text: textu,
                  mentions: player,
                });
              }
            }
          }
          await conn.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
              externalAdReply: {
                title: "W E R E W O L F",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnail: await resize(thumb, 300, 175),
                sourceUrl: '',
                mediaUrl: thumb,
              },
              mentionedJid: player,
            },
          });
          await run(conn, chat, ww);
        } else if (value === "kill") {
          let byId = getPlayerById2(sender, parseInt(target), ww)
          if (dataPlayer(sender, ww).role !== "werewolf")
            return m.reply("Peran ini bukan untuk kamu");
          if (byId.db.role === "sorcerer")
            return m.reply("Tidak bisa menggunakan skill untuk teman");
          if (playerOnGame(sender, ww) === false)
            return m.reply("Kamu tidak dalam sesi game")
          if (dataPlayer(sender, ww).status === true)
            return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
          if (dataPlayer(sender, ww).isdead === true)
            return m.reply("Kamu sudah mati")
          if (!target || target.length < 1 || target.split('').length > 2)
            return m.reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
          if (isNaN(target))
            return m.reply("Gunakan hanya nomor")
          if (byId.db.isdead === true)
            return m.reply("Player sudah mati")
          if (byId.db.id === sender)
            return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
          if (byId === false)
            return m.reply("Player tidak terdaftar")
          m.reply("Berhasil membunuh player " + parseInt(target))
            .then(() => {
              dataPlayer(sender, ww).status = true;
              killWerewolf(sender, parseInt(target), ww);
            });
        } else if (value === "dreamy") {
          if (dataPlayer(sender, ww).role !== "seer")
            return m.reply("Peran ini bukan untuk kamu");
          if (playerOnGame(sender, ww) === false)
            return m.reply("Kamu tidak dalam sesi game")
          if (dataPlayer(sender, ww).status === true)
            return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
          if (dataPlayer(sender, ww).isdead === true)
            return m.reply("Kamu sudah mati")
          if (!target || target.length < 1 || target.split('').length > 2)
            return m.reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
          if (isNaN(target))
            return m.reply("Gunakan hanya nomor")
          let byId = getPlayerById2(sender, parseInt(target), ww)
          if (byId.db.isdead === true)
            return m.reply("Player sudah mati")
          if (byId.db.id === sender)
            return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
          if (byId === false)
            return m.reply("Player tidak terdaftar")
          let dreamy = dreamySeer(m.sender, parseInt(target), ww);
          m.reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`)
            .then(() => {
              dataPlayer(sender, ww).status = true;
            });
        } else if (value === "deff") {
          if (dataPlayer(sender, ww).role !== "guardian")
            return m.reply("Peran ini bukan untuk kamu");
          if (playerOnGame(sender, ww) === false)
            return m.reply("Kamu tidak dalam sesi game")
          if (dataPlayer(sender, ww).status === true)
            return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
          if (dataPlayer(sender, ww).isdead === true)
            return m.reply("Kamu sudah mati")
          if (!target || target.length < 1 || target.split('').length > 2)
            return m.reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
          if (isNaN(target))
            return m.reply("Gunakan hanya nomor")
          let byId = getPlayerById2(sender, parseInt(target), ww)
          if (byId.db.isdead === true)
            return m.reply("Player sudah mati")
          if (byId.db.id === sender)
            return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
          if (byId === false)
            return m.reply("Player tidak terdaftar")
          m.reply(`Berhasil melindungi player ${target}`).then(() => {
            protectGuardian(m.sender, parseInt(target), ww);
            dataPlayer(sender, ww).status = true;
          });
        } else if (value === "sorcerer") {
          if (dataPlayer(sender, ww).role !== "sorcerer")
            return m.reply("Peran ini bukan untuk kamu");
          if (playerOnGame(sender, ww) === false)
            return m.reply("Kamu tidak dalam sesi game")
          if (dataPlayer(sender, ww).status === true)
            return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
          if (dataPlayer(sender, ww).isdead === true)
            return m.reply("Kamu sudah mati")
          if (!target || target.length < 1 || target.split('').length > 2)
            return m.reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
          if (isNaN(target))
            return m.reply("Gunakan hanya nomor")
          let byId = getPlayerById2(sender, parseInt(target), ww)
          if (byId.db.isdead === true)
            return m.reply("Player sudah mati")
          if (byId.db.id === sender)
            return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
          if (byId === false)
            return m.reply("Player tidak terdaftar")
          let sorker = sorcerer(sesi(m.sender), target);
          m.reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`)
            .then(() => {
              dataPlayer(sender, ww).status = true;
            });
        } else if (value === "vote") {
          if (!ww[chat]) return m.reply("Belum ada sesi permainan");
          if (ww[chat].status === false)
            return m.reply("Sesi permainan belum dimulai");
          if (ww[chat].time !== "voting")
            return m.reply("Sesi voting belum dimulai");
          if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu bukan player");
          if (dataPlayer(sender, ww).isdead === true)
            return m.reply("Kamu sudah mati");
          if (!target || target.length < 1)
            return m.reply("Masukan nomor player");
          if (isNaN(target)) return m.reply("Gunakan hanya nomor");
          if (dataPlayer(sender, ww).isvote === true)
            return m.reply("Kamu sudah melakukan voting");
          b = getPlayerById(chat, sender, parseInt(target), ww);
          if (b.db.isdead === true)
            return m.reply(`Player ${target} sudah mati.`);
          if (ww[chat].player.length < parseInt(target))
            return m.reply("Invalid");
          if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return m.reply("Player tidak terdaftar!");
          vote(chat, parseInt(target), sender, ww);
          return m.reply("✅ Vote");
        } else if (value == "exit") {
          if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
          if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu tidak dalam sesi permainan");
          if (ww[chat].status === true)
            return m.reply("Permainan sudah dimulai, kamu tidak bisa keluar");
          let exitww = `${sender.split("@")[0]} Keluar dari permainan`
          conn.sendMessage(
            m.chat, {
              text: exitww,
              contextInfo: {
                externalAdReply: {
                  title: "W E R E W O L F",
                  mediaType: 1,
                  renderLargerThumbnail: true,
                  thumbnail: await resize(thumb, 300, 175),
                  sourceUrl: '',
                  mediaUrl: thumb,
                },
                mentionedJid: sender,
              },
            }, {
              quoted: m
            }
          );
          playerExit(chat, sender, ww);
        } else if (value === "delete") {
          if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
          if (ww[chat].owner !== sender)
            return m.reply(
              `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
          m.reply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
          });
        } else if (value === "player") {
          if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
          if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu tidak dalam sesi permainan");
          if (ww[chat].player.length === 0)
            return m.reply("Sesi permainan belum memiliki player");
          let player = [];
          let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
          for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
          }
          conn.sendMessage(
            m.chat, {
              text: text,
              contextInfo: {
                externalAdReply: {
                  title: "W E R E W O L F",
                  mediaType: 1,
                  renderLargerThumbnail: true,
                  thumbnail: await resize(thumb, 300, 175),
                  sourceUrl: '',
                  mediaUrl: thumb,
                },
                mentionedJid: player,
              },
            }, {
              quoted: m
            }
          );
        } else {
          let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
          text += ` • ww create\n`;
          text += ` • ww join\n`;
          text += ` • ww start\n`;
          text += ` • ww exit\n`;
          text += ` • ww delete\n`;
          text += ` • ww player\n`;
          text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
          conn.sendMessage(
            m.chat, {
              text: text.trim(),
              contextInfo: {
                externalAdReply: {
                  title: "W E R E W O L F",
                  mediaType: 1,
                  renderLargerThumbnail: true,
                  thumbnail: await resize(thumb, 300, 175),
                  sourceUrl: '',
                  mediaUrl: thumb,
                },
              },
            }, {
              quoted: m
            }
          );
        }
      }
      break




case 'suit': {
if(!m.isGroup) return reply(mess.group)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) return reply(`Selesaikan suit mu yang sebelumnya`)
mark = `0@s.whatsapp.net`
if (!froms) return reply(`Siapa yang ingin kamu tantang?\nTag orangnya!\n\nContoh: *${command}* @${mark.split('@')[0]}`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(froms))) return reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :)`)
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu vote on`) 
var hadiah = Func.randomInt(bmin, bmax)
let poin = 1000
let poin_lose = 1000
let timeout = 60000
let id = 'suit_' + new Date() * 1
suit[id] = {
chat: await reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit dengan taruhan Saldo Rp. 2,000\n\n*Kirim (gas/gamau)* untuk bermain\n\n*Hadiah Pemenang :* Rp. 1,000\n*Hukuman Kalah* : - Rp. 1,000`),
id: id,
p: sender,
p2: froms,
status: 'wait',
hadiah: hadiah,
waktu: setTimeout(() => {
if (suit[id]) conn.sendMessage(from, {text: `_Waktu suit habis!_` })
delete suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break

case 'slot': {
if (!m.isGroup) return reply(mess.group)
let hadiah = randomNumber(2000, 3000)
let emojis = ["😹", "🧢", "🗿"]
let a = Math.floor(Math.random() * emojis.length)
let b = Math.floor(Math.random() * emojis.length)
let c = Math.floor(Math.random() * emojis.length)
let x = [],
y = [],
z = []
for (let i = 0; i < 3; i++) {
x[i] = emojis[a]
a++
if (a == emojis.length) a = 0
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b]
b++
if (b == emojis.length) b = 0
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c]
c++
if (c == emojis.length) c = 0
}
let end
if (a == b && b == c) {
end = `JACKPOT! *$${hadiah} point*`
db.data.users[m.sender].balance += hadiah
} else if (a == b || a == c || b == c) {
end = `Hampir Beruntung! *+1 Limits*`
db.data.users[m.sender].limit += 1
} else {
end = `LOSE! *-$${hadiah}*`
if (hadiah > db.data.users[m.sender].balance) {
ldb.data.users[m.sender].balance = 0
} else {
db.data.users[m.sender].balance -= hadiah
}
}
let teks = `  *S L O T S*\n\n`
teks += `	[ ${x[0]} ${y[0]} ${z[0]} ]\n`
teks += `	[ ${x[1]} ${y[1]} ${z[1]} ]\n`
teks += `	[ ${x[2]} ${y[2]} ${z[2]} ]\n`
teks += `\n${end}`
reply(teks)
}
break
case 'tictactoe': case 'ttt': case 'ttc': case 'xox':
if (!m.isGroup) return reply(mess.group)
if (from in tictactoe) return reply(`Masih ada game yang blum selesai`)
if (!froms) return reply(`Kirim perintah *${command}* @tag atau reply pesan orangnya!`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)
var hadiah = randomNumber(10, 20)
await reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} balance`)
tictactoe[from] = {
id: from,
status: null,
hadiah: hadiah,
penantang: sender,
ditantang: froms,
TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
}
break
case 'delttt': case 'delttc':
if (!m.isGroup) return reply(mess.group)
if (!(from in tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
if (isAdmins || isOwner) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].penantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].ditantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else {
reply(`Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`)
}
break
//TEXT PRO MENU
case 'sweet-candy':
case 'carved-wood':
case 'night-sky':
case 'butterfly':
case 'coffee-cup':
case 'picture-of-love':
case 'flower-typography':
case 'harry-potter':
case 'under-grass':
case 'metallic':
case 'naruto-maker':
case 'shadow-sky':
case 'flaming':{
if (!text) return m.reply(`Ex: ${prefix + command} ${botname}`)
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
conn.sendMessage(m.chat,{image: {url: `https://dsgner.vercel.app/api/photooxy/${command}?text=${text}`}, caption: mess.success },{quoted:m})
}
break



case 'fluffy': {
	if (!text) return m.reply(`*Example:* ${prefix + command} ${botname}`)
	var mann = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(text)}`
	conn.sendMessage(m.chat,{image:{url:mann},caption:'ini dia',forwardingScore: 9999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: idsal,
      serverMessageId: 101,
      newsletterName: tag2
    }},{quoted:m})
}
break

case 'avenger': case 'space': case 'ninjalogo': case 'marvelstudio': case 'lionlogo': case 'wolflogo': case 'steel3d': {
		    if (!text) return reply(`Example: ${prefix + command} Kayy|Offc`)
		    let txtt = text.split('|');
			if (txtt.length < 2) return reply(`Example: ${prefix + command} Kayy|Offc`)
			reply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${txtt[0]}&text2=${txtt[1]}`}, caption: `Type: ${command}\nText: ${args}\n\nCreated By ${botname}`}, { quoted: kalgans })
			}
			break
case 'pornhubmaker': 
if (args.length == 0) return reply(`Example: ${prefix + command} kayydev`)
reply(mess.wait)
conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/pornhub?apikey=${apikey}&text1=${args[0]}&text2=${args[1]}`}, caption: `Created By kayydev\n\n Type: ${command}\n\nText: ${args}`}, { quoted: kalgans })
break		
		case 'neon':
		case 'greenneon':
		case 'advanceglow':
		case 'futureneon':
		case 'sandwriting':
		case 'sandsummer':
		case 'sandengraved':
		case 'metaldark':
		case 'neonlight':
		case 'holographic':
		case 'text1917':
		case 'minion':
		case 'deluxesilver':
		case 'newyearcard':
		case 'bloodfrosted':
		case 'halloween':
		case 'jokerlogo':
		case 'fireworksparkle':
		case 'natureleaves':
		case 'bokeh':
		case 'toxic':
		case 'strawberry':
		case 'box3d':
		case 'roadwarning':
		case 'breakwall':
		case 'icecold':
		case 'luxury':
		case 'cloud':
		case 'summersand':
		case 'horrorblood':
		case 'thunder': {
			if (!isRegistered) return reply(mess.regis)
if (!q) return reply(`Example: ${prefix + command} kayydev`)
await loading()
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${q}` }, caption: `Type: ${command}\nText: ${q}\n\n*Created By KayyDev*`}, { quoted: kalgans })
			}
			break
case 'anonymhacker': case 'aovwall': case 'avatardota': case 'avatarlolnew': case 'cartoongravity': case 'fpslogo': case 'lighttext': case 'logogaming': case 'lolbanner': case 'pubgmaskot': case 'starsnight': case 'wooden3d':{
if (!isRegistered) return reply(mess.regis)
if (!q) return reply(`Example :${prefix+command} Lins`)
reply(mess.wait)
await sleep(1000)
let putrii23 =`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${q}`
conn.sendMessage(from, {image: { url: putrii23 }, caption: ``}, { quoted: kalgans})
}
break
//===PANEL MENU====//

//RPG MENU
case 'inv': case 'inventori': case 'inventory': case 'profile':{
if(!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
let teksehmazeh = `*INFO USER*
 *📝 Name* : ${pushname}
 *📱 Number* : ${nomore}
 *🎟️ Limit* : ${users.limit}
 *👩‍⚕️ Premium* : ${isPremium ? 'Premium':'Free'}
 *🕺🏻 Petualang* : ${isPetualang ? 'Petualang':'Bukan Petualang'}
 *RPG USER*
 *❤️ Blood* : ${getDarah(m.sender) ? getDarah(m.sender) : 0}
 *◻️️ Iron* : ${getBesi(m.sender) ? getBesi(m.sender) : 0}
 *🌟 Gold* : ${getEmas(m.sender) ? getEmas(m.sender) : 0}
 *🐲 Emerald* : ${getEmerald(m.sender) ? getEmerald(m.sender) : 0}
 *💎 Diamond* : ${getDm(m.sender) ? getDm(m.sender) : 0}
 *⏺️ Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(m.sender, limitCount, limit)}
 *💵 Saldo* : Rp. ${toRupiahh(users.balance)}
 *🧪 Potion* : ${getPotion(m.sender) ? getPotion(m.sender) : 0}
 *HUNT RESULT*
 *🐟 Fish* : ${getIkan(m.sender)}
 *🐔 Chicken* : ${getAyam(m.sender) ? getAyam(m.sender) : 0}
 *🐇 Rabbit* : ${getKelinci(m.sender) ? getKelinci(m.sender) : 0}
 *🐑 Sheep* : ${getDomba(m.sender) ? getDomba(m.sender) : 0}
 *🐄 Cow* : ${getSapi(m.sender) ? getSapi(m.sender) : 0}
 *🐘 Elephant* : ${getGajah(m.sender) ? getGajah(m.sender) : 0}
 🎢 *Coal* : ${getMiningcoal(m.sender) ? getMiningcoal(m.sender) : 0}
 🛑 *Stone* : ${getMiningstone(m.sender) ? getMiningstone(m.sender) : 0}
 ❄️ *Copper Ore* : ${getMiningore(m.sender) ? getMiningore(m.sender) : 0}
 🛠️ *Ingot Ore* : ${getMiningingot(m.sender) ? getMiningingot(m.sender) : 0}
 🪵 *Wood* : ${getNebangKayu(m.sender) ? getNebangKayu(m.sender) : 0}`
await conn.sendMessage(m.chat, {
text: teksehmazeh,
contextInfo: {
externalAdReply: {
title: `${pushname} PROFILE & BAG`, 
body: 'Play RPG Games With Your Friends',
thumbnailUrl: ppuser,
sourceUrl: `${global.idchannel}`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break

case 'ojek': case 'ngojek':{
if (!m.isGroup) return m.reply("Khusus Group")
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {
var hg = `
*—[ Hasil Ngojek ${pushname} ]—*
 ➕ 💹 Uang = [ ${money} ]
 ➕ ✨ Exp = [ ${adven} ] 
 ➕ 😍 Order Selesai = +1
`
 m.reply(hg)
}, 10000)
setTimeout( () => {
 m.reply(`
➕ 💹Menerima gaji....
`)
}, 9000)
setTimeout( () => {
 m.reply(`
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️


➕ Sampai di tujuan...
`)
}, 7000)
setTimeout( () => {
 m.reply(`
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️


➕ Mengantar ke tujuan....
`)
}, 5000) // 1000 = 1s,
setTimeout( () => {
 m.reply(`
Mendapatkan Orderan...
`)
}, 3000) // 1000 = 1s,
setTimeout( () => {
 m.reply(`Mencari Pelanggan...`)
}, 0) // 1000 = 1s,
users.exp += adven
users.balance += money
}
break

case 'mining': case 'mine':{
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return m.reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( async () => {
let caption = `_MINING RESULT_\n\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
await conn.sendMessage(m.chat, {image:{ url : 'https://telegra.ph/file/d17479f0a56cc52826101.jpg'}, caption: caption}, {quoted: m})
}, 7000)
setTimeout( async () => {
await conn.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Otw Mining`, m) 
}, 1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sender, emasnya)
addEmerald(m.sender, emeraldnya) 
}
break

case 'hunt': case 'hunting': {
if(!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return m.reply('Darahmu Habis, Coba Sembuhkan Menggunakan Ramuan') 
let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
if (lokasinya === 'Jungle') {
var image = 'https://telegra.ph/file/92967f55b1f437fdd55fe.jpg'
} else
if (lokasinya === 'Amazon forest') {
var image = 'https://telegra.ph/file/2b9b53837d9f109862224.jpg'
} else
if (lokasinya === 'Tropical forest') {
var image = 'https://telegra.ph/file/bd662563855328a1832e6.jpg'
} else
if (lokasinya === 'Meadow') {
var image = 'https://telegra.ph/file/66435cf783e308b19927e.jpg'
} else
if (lokasinya === 'African forest') {
var image = 'https://telegra.ph/file/c5996d581846f70ed1514.jpg'
} else
if (lokasinya === 'Mountains') {
var image = 'https://telegra.ph/file/ca8f84d91ca3e1d5efa59.jpg'
}
 setTimeout( async () => {
let teksehmazeh = `_HUNT RESULT_\n\n`
 teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
 teksehmazeh += `*🐔Chicken* : ${ayam}\n`
 teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
 teksehmazeh += `*🐑Sheep* : ${domba}\n`
 teksehmazeh += `*🐄Cow* : ${sapi}\n`
 teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
 teksehmazeh += `_INFO_\n`
 teksehmazeh += `*Location* : ${lokasinya}\n`
 teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
 teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
await conn.sendMessage(m.chat, {image:{ url: image }, caption: teksehmazeh}, {quoted: m})
}, 5000)
 setTimeout( () => {
conn.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`, m) 
}, 1000) 
 addIkan(m.sender, ikanmu) 
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
 
 case 'beli': case 'buy':{
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (!text) return m.reply(`Mau buy apa lu?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
var anu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return m.reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 users.balance -= noh
 var apalu = anu * 1
 addPotion(m.sender, apalu)
setTimeout( async () => {
 m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Potion* : ${getPotion(m.sender)}`)
}, 2000) 
 } else 
 if (args[0] === 'baitfood'){
let noh = 5000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return m.reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 users.balance -= noh
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
setTimeout( async () => {
 m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Bait Food* : ${getUmpan(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
let noh = 35000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return m.reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 users.balance -= noh
 var apalu = anu * 1
 addLimit(m.sender, apalu)
setTimeout( async() => {
 m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Limit* : ${getLimit(m.sender)}`)
}, 2000) 
} else { 
m.reply(`Mau buy apa lu?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)}
 }
 break
 
 case 'heal':{
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (!isCekDarah < 1) return m.reply('Anda Hanya Dapat Menyembuhkan Saat Darah Anda 0')
if (isCekDarah > 100) return m.reply('Darahmu Penuh')
if (isPotion < 1) return m.reply(`Anda Tidak Punya Ramuan, Coba Beli Dengan Cara #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
m.reply('Done! Darah mu dah full')
 }
 break
 
 case 'nebang':{
setTimeout( () => {
const oreo = Math.ceil(Math.random() * 20)
addKayu(m.sender, oreo)
 m.reply(`*Congratulation 🎊*${enter}${enter}kamu mendapatkan *${oreo}* kayu selama 2 menit`)
}, 2000); //2 minute
setTimeout( () => {
 m.reply('Sedang menebang, silahkan tunggu...')
}, 0) //1sec
}

break
 
 case 'sell': case 'sel': case 'jual':{
 if(!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
 if (!text) return m.reply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : ${prefix + command} fish 2`)
var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return m.reply(`Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
let monaynya = 1500 * anu
 users.balance += monaynya
setTimeout( async () => {
 m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa Ikan Fish : ${getIkan(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return m.reply(`Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
let monaynya = 2500 * anu
 users.balance += monaynya
setTimeout( async () => {
m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa Ayam* : ${getAyam(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return m.reply(`Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
let monaynya = 3000 * anu
 users.balance += monaynya
setTimeout( async () => {
 m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa kelinci* : ${getKelinci(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return m.reply(`Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
let monaynya = 5000 * anu
 users.balance += monaynya
setTimeout( async () => {
 m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa domba* : ${getDomba(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return m.reply(`Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
let monaynya = 10000 * anu
 users.balance += monaynya
setTimeout( async () => {
 m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa sapi* : ${getSapi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return m.reply(`Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
let monaynya = 15000 * anu
 users.balance += monaynya
setTimeout( async () => {
 m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa gajah* : ${getGajah(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return m.reply(`Anda Tidak Memiliki Cukup Besi Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
let monaynya = 16000 * anu
 users.balance += monaynya
setTimeout( async () => {
 m.reply(`Transaksi berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa besi* : ${getBesi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return m.reply(`Anda Tidak Memiliki Cukup Emas Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
let monaynya = 50000 * anu
 users.balance += monaynya
setTimeout( async () => {
 m.reply(`Transaksi berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa emas* : ${getEmas(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return m.reply(`Anda Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
let monaynya = 100000 * anu
 users.balance += monaynya
setTimeout( async () => {
 m.reply(`Transaksi berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa zamrud* : ${getEmerald(m.sender)}`)
}, 2000) 
 } else { 
 m.reply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : ${prefix + command} fish 2`)
 }

 }
 break
 
case 'mancing':{
if (!m.isGroup) return m.reply('[ System Notice ] Only for group')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
setTimeout( () => {
const fishing = Math.ceil(Math.random() * 10)
addIkan(m.sender, fishing)
 m.reply(`*FISH FISHED* kamu mendapatkan *${fishing}* Ikan selama 1 menit`)
}, 60000); //2 minute
setTimeout( () => {
 m.reply('Ikannya Terpancing!..' )
}, 20000) // 1000 = 1s,
setTimeout( () => {
 m.reply('🎣 Menarik Kail. . .' )
}, 7000) // 1000 = 1s,
setTimeout( () => {
let mancingnya = 'https://telegra.ph/file/4cc0b6bd2827a9b23a189.mp4'
conn.sendMessage(from, {video: {url:mancingnya}, caption: 'mulai memancing', gifPlayback: true},{quoted:m})
}, 0) // 1000 = 1s,
}
break

case 'luckyday':
case 'luckytime':{
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
users.balance += b
users.exp += ez
addEmas(m.sender, a)
addBesi(m.sender, c)
 m.reply(`🎰 *Lucky*\n┊ *Money:* $${b}\n┊ *Gold :* ${a}\n┊ *Iron :* ${c}\n┊ *XP :* ${ez}`)
}
break

case 'adventure':{
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ngab = ['Avalanche','Volcanic Eruption','Tsunami','Earthquake','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
var sesuatuu = dungeon[Math.floor(Math.random() * dungeon.length)]
hasm = "https://telegra.ph/file/ff94536d69e0f4f3e7b54.jpg"
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {
var hg = `「 DEATH 」\n\n *┊ Place* ${sesuatuu}\n ┊ *MONEY :* $${money}\n ┊ *EXP :* ${adven}Xp`
conn.sendMessage(m.chat, {image:{url:hasm}, caption: hg},{quoted:m})
}, 7000)
setTimeout( () => {
 m.reply(`Awass`)
}, 5000) // 1000 = 1s,
setTimeout( () => {
 m.reply(`Tiba-tiba Ada ${sesuatu}`)
}, 3000) // 1000 = 1s,
setTimeout( () => {
 m.reply(`${pushname} On an Adventure`)
}, 0) // 1000 = 1s,
users.exp += adven
users.balance += money
}
break

case 'slime':
case 'killslime':{
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 400)
users.exp += ez
a = randomNomor(55)
b = randomNomor(400)
c = randomNomor(80)
d = randomNomor(3)
users.exp += ez
users.balance += b
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufutI = "https://telegra.ph/file/c34a444fa8824d8bb6e18.jpg"
var hg = `*Misi kill Slime*\n\n🎁 *Hadiah untuk killing Slime*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
conn.sendMessage(m.chat, {image:{url:bufutI},caption: hg} , {quoted:m}) 
}
break
case 'goblin':
case 'killgoblin':{
 
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 500)
users.exp += ez
a = randomNomor(65)
b = randomNomor(500)
c = randomNomor(90)
d = randomNomor(5)
users.exp += ez
users.balance += b
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufo = "https://telegra.ph/file/19bdc38aaafda29f7afe1.jpg"
var hg = `*Misi kill Goblin*\n\n🎁 *Hadiah untuk killing Goblin*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
conn.sendMessage(m.chat, {image:{url:bufo}, caption: hg }, {quoted:m})
}
break
case 'devil':
case 'killdevil':{
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 600)
users.exp += ez
a = randomNomor(70)
b = randomNomor(600)
c = randomNomor(95)
d = randomNomor(6)
users.exp += ez
users.balance += b
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufas = "https://telegra.ph/file/dbecd2f871988f52bf555.jpg"
var hg = `*Misi kill Devil*\n\n🎁 *Hadiah untuk killing Devil*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
conn.sendMessage(m.chat, {image:{url: bufas}, caption: hg }, {quoted:m})
}
break
case 'behemoth':
case 'killbehemoth':{
 
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 700)
users.exp += ez
a = randomNomor(75)
b = randomNomor(600)
c = randomNomor(100)
d = randomNomor(7)
users.exp += ez
users.balance += b
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
batai = "https://telegra.ph/file/43259a7d8accff8b627c0.jpg"
var hg = `*Misi kill Behemoth*\n\n🎁 *Hadiah untuk kiling Behemoth*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
conn.sendMessage(m.chat, {image:{url: batai}, caption: hg }, {quoted:m})
}
break
case 'demon':
case 'killdemon':{
 
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 850)
users.exp += ez
a = randomNomor(90)
b = randomNomor(900)
c = randomNomor(120)
d = randomNomor(10)
users.exp += ez
users.balance += b
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bhuu = "https://telegra.ph/file/4a264a10ea2e5f18314f1.jpg"
var hg = `*Misi kill Demon*\n🎁 *Demon Kill Reward*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold*: ${a}\n ┊ *Diamond:* ${d}\n\n*Terima Kasih Telah Melaksanakan Misi Ini*`
conn.sendMessage(m.chat, {image: {url: bhuu}, caption: hg }, {quoted:m})
}
break
case 'demonking':
case 'killdemonking':{
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 1000)
users.exp += ez
users.balance += 1999
addEmas(m.sender, 99)
addBesi(m.sender, 99)
addDm(m.sender, 99)
bhuud = "https://telegra.ph/file/cdf482a8de192189057d8.jpg"
var hg = `*Misi kill DemonKing*\n\n🎁 *DemonKing Kill Reward*\n ┊ *Money* : $${b}\n ┊ *Iron :* ${c}\n ┊ *Gold :* ${a}\n ┊ *Diamond :* ${d}\n\n*Terima Kasih Telah Melaksanakan Misi Ini*`
conn.sendMessage(m.chat, {image:{url: bhuud}, caption: hg }, {quoted:m})
}
break

case 'sellikan':{
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return m.reply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 5 * jmlh
if (getFish(m.sender) < jmlh) return m.reply(`*Ikan Anda Tidak Cukup*`)
sellFish(m.sender, jmlh, balance)
users.balance += rp
 m.reply(`🛍️ *MARKET*\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Price/Fish : 5\n ┊ Status : Success\n ┊ Left FishPrice/Fish : ${await getFish(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break
case 'sellbesi':{
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return m.reply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 10 * jmlh
if (getBesi(m.sender) < jmlh) return m.reply(`Besi Tidak Cukup`)
sellBesi(m.sender, jmlh, balance)
users.balance += rp
 m.reply(`🛍️ MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Besi : 10\n ┊ Status : Sukses\n ┊ Sisa Besi : ${await getBesi(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break
case 'sellemas':{
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return m.reply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 25 * jmlh
if (getEmas(m.sender) < jmlh) return m.reply(`Emas Anda Tidak Cukup`)
sellEmas(m.sender, jmlh, balance)
users.balance += rp
 m.reply(`🛍️ MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Emas : 25\n ┊ Status : Sukses\n ┊ Sisa Emas : ${getEmas(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break 
case 'joinrpg':{
if (!m.isGroup) return m.reply("Khusus Group")
if (isPetualang) return m.reply('Kamu Telah join sebelumnya')
reqXp = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
_petualang.push(m.sender)
addInventoriDarah(m.sender, DarahAwal)
addInventori(m.sender)
addInventoriBuruan(m.sender)
fs.writeFileSync('./src/rpg/inventory.json', JSON.stringify(_petualang))
addLevelingId(m.sender) 
let itu = 'https://telegra.ph/file/a4ec01498e764ae42c8c4.jpg'
conn.sendMessage(m.chat, {image:{url: itu}, caption: 'Sukses join Rpg games' }, {quoted:m})
}
break
case 'jualcoal':{
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaCoal = 15000
const hasil2 = bayar * hargaCoal
if ( getMiningcoal(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} kamu tidak punya coal`)
if ( getMiningcoal(m.sender) >= 1 ) {
jualcoal(m.sender, bayar)
users.balance += hasil2
awaitm.reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Coal dijual:* ${bayar}${enter}*Uang didapat:* ${hasil2}${enter}${enter}*Sisa coal:* ${getMiningcoal(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'lebur':{
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaOre = 2
const hasil3 = bayar * hargaOre
if ( getMiningore(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} ore kamu belum cukup, minimal 2 ore`)
if ( getMiningore(m.sender) >= 1 ) {
jualore(m.sender, bayar)
addIngot(m.sender, hasil3)
awaitm.reply(`*「 LEBUR BERHASIL 」*\n\n*Jumlah Ore dilebur :* ${bayar}\n*Ingot didapat:* ${hasil3}\n\n*Sisa Ore:* ${getMiningore(m.sender)}`)
}
}
break
case 'jualstone':{
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaStone = 900
const hasil4 = bayar * hargaStone
if ( getMiningstone(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} stone kamu belum cukup, minimal 2 stone`)
if ( getMiningstone(m.sender) >= 1 ) {
jualstone(m.sender, bayar)
users.balance += hasil4
awaitm.reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Batu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil4}${enter}${enter}*Sisa Batu:* ${getMiningstone(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'jualingot':{
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaIngot = 35000
const hasil5 = bayar * hargaIngot
if ( getMiningingot(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} ingot kamu belum cukup, minimal 2 ingot`)
if ( getMiningingot(m.sender) >= 1 ) {
jualingot(m.sender, bayar)
users.balance += hasil5
awaitm.reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Ingot dijual:* ${bayar}${enter}*Uang didapat:* ${hasil5}${enter}${enter}*Sisa Ingot:* ${getMiningingot(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'jualkayu':{
if (!m.isGroup) return m.reply("Khusus Group")
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaKayu = 18000
const hasil6 = bayar * hargaKayu
if ( getNebangKayu(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} kayu kamu belum cukup, minimal 2 kayu`)
if ( getNebangKayu(m.sender) >= 1 ) {
jualkayu(m.sender, bayar)
users.balance += hasil6
awaitm.reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Kayu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil6}${enter}${enter}*Sisa Kayu :* ${await getNebangKayu(m.sender)}${enter}*Sisa uang:* ${await checkATMuser(m.sender)}`)
}
}
break
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if(!isCreator) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
conn.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
console.log(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
