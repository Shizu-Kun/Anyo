module.exports = (m) => {
  const isNumber = x => typeof x === 'number' && !isNaN(x)
  try {
    let user = global.db.data.users[m.sender]
    if (typeof user !== 'object') global.db.data.users[m.sender] = {}
    if (user) {
      if (!('banned' in user)) user.banned = false
      if (!isNumber(user.limit)) user.limit = 50
      if (!isNumber(user.balance)) user.balance = 0
      if (!isNumber(user.exp)) user.exp = 0
      if (!isNumber(user.level)) user.level = 0
      if (!('registered' in user)) user.registered = false
      if (!('premium' in user)) user.premium = false
      if (!isNumber(user.hit)) user.hit = 0
      if (!isNumber(user.lastclaim)) user.lastclaim = 0
      if (!isNumber(user.expired)) user.expired = 0
      if (!isNumber(user.afkTime)) user.afkTime = -1
      if (!('afkReason' in user)) user.afkReason = ''
      if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
      if (!isNumber(user.lastseen)) user.lastseen = 0
      if (!isNumber(user.saving)) user.saving = 0
      if (!('saving_history' in user)) user.saving_history = []
      if (!('sn' in user)) user.sn = ''
      if (!isNumber(user.chat)) user.chat = 1
    } else global.db.data.users[m.sender] = {
      name: m.pushName,
      banned: false,
      limit: 50,
      daily: false,
      balance: 0,
      exp: 0,
      level: 0,
      registered: false,
      premium: false,
      hit: 0,
      lastclaim: 0,
      lastmonthly: 0,
      expired: 0,
      afkTime: -1,
      afkReason: '',
      lastseen: 0,
      saving: 0,
      saving_history: [],
      sn: '',
      chat: 0
    }
    let chat = global.db.data.chats[m.chat]
    if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
    if (chat) {
      if (!('nsfw' in chat)) chat.nsfw = false
      if (!('banned' in chat)) chat.banned = false
      if (!('autojpm' in chat)) chat.autojpm = false
      if (!('antilink' in chat)) chat.antilink = false
      if (!('antilinkK' in chat)) chat.antilinkK = false
      if (!('antilinkAll' in chat)) chat.antilinkAll = false
      if (!('antitoxic' in chat)) chat.antitoxic = false
      if (!('mute' in chat)) chat.mute = false
      if (!('antibot' in chat)) chat.antibot = false
      if (!('simichat' in chat)) chat.simichat = false
      if (!('autodl' in chat)) chat.autodl = false
      if (!('kayy' in chat)) chat.kayy = false
      if (!('subdo' in chat)) chat.subdo = false
      if (!('chatbot' in chat)) chat.chatbot = false
      if (!('antidelete' in chat)) chat.antidelete = false
      if (!('message' in chat)) chat.message = ''
      if (!isNumber(chat.chat)) chat.chat = 1
      if (!isNumber(chat.lastseen)) chat.lastseen = new Date() * 1
      if (!('autoSticker' in chat)) chat.autoSticker = false
      if (!('antiNsfw' in chat)) chat.antiNsfw = false
      if (!('antiFoto' in chat)) chat.antiFoto = false
      if (!('antiAudio' in chat)) chat.antiAudio = false
      if (!('antiSticker' in chat)) chat.antiSticker = false
      if (!('antichanell' in chat)) chat.antichanell = false
      if (!('viewonce' in chat)) chat.viewonce = false
    } else global.db.data.chats[m.chat] = {
      nsfw: false,
      banned: false,
      autojpm: false,
      antilink: false,
      antilinkK: false,
      antilinkAll: false,
      antitoxic: false,
      mute: false,
      antibot: false,
      simichat: false,
      autodl: false,
      kayy: false,
      subdo: false,
      chatbot: false,
      antidelete: false,
      message: '',
      chat: 1,
      lastseen: new Date() * 1,
      autoSticker: false,
      antiNsfw: false,
      antiFoto: false,
      antiAudio: false,
      antiSticker: false,
      antichanell: false,
      viewonce: false
    }
    let settings = global.db.data.settings
    if (settings) {
      if (!('autobio' in settings)) settings.autobio = false
      if (!('autoread' in settings)) settings.autoread = false
      if (!('game' in settings)) settings.game = false
      if (!isNumber(settings.hitstat)) settings.hitstat = 0
      if (!("welcome" in settings)) settings.welcome = true;
      if (!("levelup" in settings)) settings.levelup = true;
   } else global.db.data.settings = {
         autobio: false,
         autoread: false,
         game: false,
         hitstat: 0,
         welcome: true,
         levelup: true
        }
} catch (e) {
    console.error(e)
  }
}