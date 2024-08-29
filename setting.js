/*
 * Base By Hw Mods
 * Created By Dii Offc
 * Created On 30/3/2024
 * Supported By KyuuRyz & KayyOffc & GhostXdzz
*/

const fs = require('fs')
const chalk = require('chalk')
const Fichan = require('./lib/functions')
const scra = new require('./src/func')
//=================================================//
// System
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Lollipop' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.rowner = [["595972980943", "", true], ["", "", true]];
global.owner = ['595972980943'] // ubah aja pake nomor lu
global.developer = [""] // jangan di gantibuat lapor fitur eror
global.botname = 'Lollipop' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'session' //Gausah Juga
global.idchannel = '120363294187887035@newsletter'
global.linkgc = 'https://whatsapp.com/channel/0029VadndB9It5rqJG6t4k2B'
global.foter1 = 'mmk'
global.foter2 = 'Bot WhatsApp Simple'
global.versi = '-'
global.autobio = true // AutoBio
global.autoread = false // ReadChat
global.Ghost = '`'
global.packname = 'lollipop - MD'
global.author = 'mmek'
global.tag2 = `mmek`
global.tTeks2 = '> '
global.email = 'mmek@gmail.com' //isi gmail saweria mu
//=================================================//
global.onlypc = false
global.onlygc = false
global.anticall = true
//=================================================//
//cpanel
global.domain = "-"
global.apikey = "-"
global.capikey = "-"
global.egg = "15"
global.loc = "1"

//TYLE
global.themeemoji = "乂"
global.hiasan = "- "
global.tag = `© 2028 | ${botname}`

//Send Pay
global.dana = "https://telegra.ph/file/f67a63dc947852f9131d3.jpg"
global.ovo = "https://telegra.ph/file/f67a63dc947852f9131d3.jpg"
global.gopay = "https://telegra.ph/file/f67a63dc947852f9131d3.jpg"
global.qris = "https://telegra.ph/file/f67a63dc947852f9131d3.jpg"

//FOTO PAYMENT
global.qrisUrl = "https://telegra.ph/file/f67a63dc947852f9131d3.jpg"
global.danaUrl = "https://telegra.ph/file/f67a63dc947852f9131d3.jpg"
global.ovoUrl = "https://telegra.ph/file/f67a63dc947852f9131d3.jpg"
global.gopayUrl = "https://telegra.ph/file/f67a63dc947852f9131d3.jpg"

global.Func = Fichan
global.scrape = scra
//ASSP.
global.powered = 'Powered By mmek'

//THUMBANIL
global.thumbnail = 'https://telegra.ph/file/f67a63dc947852f9131d3.jpg'
global.PetroUrl = 'https://telegra.ph/file/f67a63dc947852f9131d3.jpg'

//limit & balance
global.limitawal = 10
global.balanceawal = 10000

global.wlcm = []
global.wlcmm = []

global.delaypushkontak = 5500
global.delayjpm = 5500

// DATABASE GAME
global.family100 = {};
global.suit = {};
global.tictactoe = {};
global.tebakbendera = {};
global.caklontong = {};
global.tebakgambar2 = {};

//PAIKEY
global.skizo = "GhostXdzz"
global.caliph = `ya9UsFCX`
global.pitu = `3aa275992a`

//GAME WAKTU
global.gamewaktu = 60 // Game waktu
global.bmin = 1000 // Balance minimal 
global.bmax = 10000 // Balance maksimal
//Gausah Juga

global.panel = {
  satu_gb: {
    name: "PANEL RAM 1",
    price: "1000"
  },
  dua_gb: {
    name: "PANEL RAM 2",
    price: "2000"
  },
  tiga_gb: {
    name: "PANEL RAM 3",
    price: "3000"
  },
  empat_gb: {
    name: "PANEL RAM 4",
    price: "4000"
  },
  lima_gb: {
    name: "PANEL RAM 5",
    price: "5000"
  },
  enam_gb: {
    name: "PANEL RAM 6",
    price: "6000"
  },
  tujuh_gb: {
    name: "PANEL RAM 7",
    price: "7000"
  },
  unli: {
    name: "PANEL RAM UNLIMITED",
    price: "10000"
  }
}
global.serverCreate = {
  nestId: "5", //Nest Id panel lu
    eggId: "15", //Egg Id panel lu
  limits: {
    db: "5", //Mending ga usah diganti
    backups: "5", //Mending ga usah diganti
    allocation: "1" //Mending ga usah diganti
  },
  eggs: {
    environment: {
      "CMD_RUN": "npm start", //Sesuaiin sama eggs lu
      "GIT_ADDRESS": "",
      "BRANCH": "",
      "USERNAME": "",
      "ACCESS_TOKEN": ""
    }
  }
}

//mess
global.mess = {
    premium: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴘʀᴇᴍɪᴜᴍ!'),
    done: ('Doneee....'),
    owner: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ!'),
    wait: ('ᴘʀosᴇs...!'),
    group: 'κнusus ԍʀouᴘ cнᴀт!',
    admin: 'κнusus ᴀᴅмιɴ ԍʀouᴘ!',
    botAdmin: 'ʙoт нᴀʀus ᴀᴅмιɴ!',
    linkvalid: 'ʟιɴκ тᴀuтᴀɴ тιᴅᴀκ vᴀʟιᴅ!', 
    error: 'ᴇʀoʀ тᴇʀנᴀᴅι κᴇsᴀʟᴀнᴀɴ!',
    limit: `ʟιмιт κᴀмu suᴅᴀн нᴀʙιs!\nκᴇтικ .ʙuʏʟιмιт uɴтuκ мᴇмʙᴇʟι ʟιмιт`,
    regis: (`κᴀмu ʙᴇʟoм тᴇʀᴅᴀғтᴀʀ\nsιʟᴀнκᴀɴ ᴅᴀғтᴀʀ ᴅᴇɴԍᴀɴ cᴀʀᴀ .ᴅᴀғтᴀʀ`),
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})