const axios = require('axios')
const fetch = require('node-fetch')
const cheerio = require('cheerio');
const jsobfus = require('javascript-obfuscator')
const FormData = require('form-data')
const https = require('https')
const fs = require('fs')
const WebSocket = require('ws')
const gtts = require('node-gtts')
const { JSDOM } = require('jsdom')
const qs = require("qs")
const baileys = require('@whiskeysockets/baileys')
const { URL_REGEX } = require('@whiskeysockets/baileys')

async function tiktokdl(url) {
  const response = await axios.post('https://ssstiktokio.com/wp-json/aio-dl/video-data/', {
    url
  });
  return response.data;
}
async function aioall(url) {
  let urlnya = q
  const {
    data
  } = await axios.post("https://allvideodownloader.cc/wp-json/aio-dl/video-data/", {
    url: urlnya
  });
  return data
}
async function gptPictures(q) {
  const axios = require("axios")
  let {
    data
  } = await axios.post("https://chat-gpt.pictures/api/generateImage", {
    "captionInput": q,
    "captionModel": "default"
  })
  return data
}
async function ChatBotz(text) {
  const response = await axios.post("https://ai.system.siputzx.my.id/api/gemini-sesi", {
    text: q,
    username: "KayyDev"
  });
  return response.data;
}

function Tts(text, lang = 'id') {
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath =  (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}    

async function igdl(url) {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://v3.igdownloader.app/api/ajaxSearch',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': '*/*'
      },
      data: qs.stringify({
        recaptchaToken: '',
        q: url,
        t: 'media',
        lang: 'en'
      })
    })

    const $ = cheerio.load(response.data.data)
    const result = []
    $('ul.download-box li').each((index, element) => {
      const thumbnail = $(element).find('.download-items__thumb img').attr('src')
      const options = []
      $(element).find('.photo-option select option').each((i, opt) => {
        options.push({
          resolution: $(opt).text(),
          url: $(opt).attr('value')
        })
      })
      const download = $(element).find('.download-items__btn a').attr('href')

      result.push({
        thumbnail: thumbnail,
        options: options,
        download: download
      })
    })

    return result
  } catch (error) {
    console.error(error)
  }
}

async function hentai() {
  return new Promise((resolve, reject) => {
    const page = Math.floor(Math.random() * 1153)
    axios.get('https://sfmcompile.club/page/' + page).then((data) => {
      const $ = cheerio.load(data.data)
      const hasil = []
      $('#primary > div > div > ul > li > article').each(function(a, b) {
        hasil.push({
          title: $(b).find('header > h2').text(),
          link: $(b).find('header > h2 > a').attr('href'),
          category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
          share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
          views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
          type: $(b).find('source').attr('type') || 'image/jpeg',
          video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
          video_2: $(b).find('video > a').attr('href') || ''
        })
      })
      resolve(hasil)
    })
  })
}

formatIDR = (amount) => {
    if (typeof amount !== 'number') {
        amount = parseFloat(amount);
        if (isNaN(amount)) {
            throw new Error("Input must be a number or a string that can be converted to a number");
        }
    }
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

async function hentaivid() {
  return new Promise((resolve, reject) => {
    const page = Math.floor(Math.random() * 1153)
    axios.get('https://sfmcompile.club/page/' + page).then((data) => {
      const $ = cheerio.load(data.data)
      const hasil = []
      $('#primary > div > div > ul > li > article').each(function(a, b) {
        hasil.push({
          title: $(b).find('header > h2').text(),
          link: $(b).find('header > h2 > a').attr('href'),
          category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
          share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
          views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
          type: $(b).find('source').attr('type') || 'image/jpeg',
          video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
          video_2: $(b).find('video > a').attr('href') || ''
        })
      })
      resolve(hasil)
    })
  })
}
async function generateGpt(q) {
  try {
    const nonceValue = JSON.parse(cheerio.load(await (await axios.get("https://gpt4free.io/chat")).data)('.mwai-chatbot-container').attr('data-system')).restNonce;
    const {
      data
    } = await axios("https://gpt4free.io/wp-json/mwai-ui/v1/chats/submit", {
      method: "post",
      data: {
        botId: "default",
        newMessage: q,
        stream: false,
      },
      headers: {
        "X-WP-Nonce": nonceValue,
        "Content-Type": "application/json",
      },
    });
    return data.reply;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data.message;
  }
}
async function streamBokepindo(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch data');
    const $ = cheerio.load(await response.text());
    const videoSrc = $('#bkpdo-player-container iframe').attr('src');
    return videoSrc;
  } catch (error) {
    console.error('Error fetching video src:', error);
    throw error;
  }
}
const phDl = (url) => new Promise((resolve, reject) => {
  console.log(`Get Pornhub metadata from ${url}`)
  phd.page(url, ['title', 'download_urls', 'thumbnail_url']).then((result) => resolve(result)).catch((err) => reject(err))
})
async function generateImages(inputText) {
  try {
    const apiUrl = `https://v2-guru-indratensei.cloud.okteto.net/scrape?query=${encodeURIComponent(inputText)}`;
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    if (responseData.image_links && responseData.image_links.length > 0) {
      return responseData.image_links;
    } else {
      throw "No image links found in the API response.";
    }
  } catch (error) {
    throw "Failed to fetch image links from the API.";
  }
}
async function pixivDl(query) {
  if (query.match(URL_REGEX)) {
    if (!/https:\/\/www.pixiv.net\/en\/artworks\/[0-9]+/i.test(query)) throw 'Invalid Pixiv Url'
    query = query.replace(/\D/g, '')
    let res = await pixiv.getIllustByID(query).catch(() => null)
    if (!res) throw `Pencarian "${query}" Tidak Ditemukan`
    let media = []
    for (let x = 0; x < res.urls.length; x++) media.push(await pixiv.download(new URL(res.urls[x].original)))
    return {
      artist: res.user.name,
      caption: res.title,
      tags: res.tags.tags.map(v => v.tag),
      media
    }
  } else {
    let res = await pixiv.getIllustsByTag(query)
    if (!res.length) throw `Pencarian "${query}" Tidak Di Temukan`
    res = res[~~(Math.random() * res.length)].id
    res = await pixiv.getIllustByID(res)
    let media = []
    for (let x = 0; x < res.urls.length; x++) media.push(await pixiv.download(new URL(res.urls[x].original)))
    return {
      artist: res.user.name,
      caption: res.title,
      tags: res.tags.tags.map(v => v.tag),
      media
    }
  }
}
async function Draw(propmt) {
  const Blobs = await fetch("https://api-inference.huggingface.co/models/prompthero/openjourney-v2", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer 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",
    },
    body: JSON.stringify({
      inputs: propmt
    }),
  }).then((res) => res.blob());
  const arrayBuffer = await Blobs.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return buffer;
}
async function bingimage(query) {
  return new Promise((resolve, reject) => {
    bingi.imageSearch({
      q: query,
      enforceLanguage: true
    }, function(err, resp) {
      if (err) {
        console.log(err)
      } else {
        const result = {
          status: 200,
          ...resp
        }
        resolve(result)
      }
    })
  })
}

async function bingsearch(query) {
  return new Promise((resolve, reject) => {
    bingi.search({
      q: query,
      enforceLanguage: true
    }, function(err, resp) {
      if (err) {
        console.log(err)
      } else {
        const result = {
          status: 200,
          ...resp
        }
        resolve(result)
      }
    })
  })
}
async function diff(data) {
  const response = await fetch("https://api-inference.huggingface.co/models/stablediffusionapi/lyrielv16", {
    headers: {
      Authorization: "Bearer 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"
    },
    method: "POST",
    body: JSON.stringify(data),
  })
  const result = await response.blob();
  let arrayBuffer = await result.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer, 'base64')
  return buffer
}
async function processing(urlPath, method) {
  return new Promise(async (resolve, reject) => {
    let Methods = ["enhance", "recolor", "dehaze"];
    Methods.includes(method) ? (method = method) : (method = Methods[0]);
    let buffer,
      Form = new FormData(),
      scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
    Form.append("model_version", 1, {
      "Content-Transfer-Encoding": "binary",
      contentType: "multipart/form-data; charset=uttf-8",
    });
    Form.append("image", Buffer.from(urlPath), {
      filename: "enhance_image_body.jpg",
      contentType: "image/jpeg",
    });
    Form.submit({
      url: scheme,
      host: "inferenceengine" + ".vyro" + ".ai",
      path: "/" + method,
      protocol: "https:",
      headers: {
        "User-Agent": "okhttp/4.9.3",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip",
      },
    }, function(err, res) {
      if (err) reject();
      let data = [];
      res.on("data", function(chunk, resp) {
        data.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(data));
      });
      res.on("error", (e) => {
        reject();
      });
    });
  })
}
async function ephoto(url, texk) {
  let form = new FormData
  let gT = await axios.get(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
    }
  })
  let $ = cheerio.load(gT.data)
  let text = texk
  let token = $("input[name=token]").val()
  let build_server = $("input[name=build_server]").val()
  let build_server_id = $("input[name=build_server_id]").val()
  form.append("text[]", text)
  form.append("token", token)
  form.append("build_server", build_server)
  form.append("build_server_id", build_server_id)
  let res = await axios({
    url: url,
    method: "POST",
    data: form,
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
      cookie: gT.headers["set-cookie"]?.join("; "),
      ...form.getHeaders()
    }
  })
  let $$ = cheerio.load(res.data)
  let json = JSON.parse($$("input[name=form_value_input]").val())
  json["text[]"] = json.text
  delete json.text
  let {
    data
  } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
      cookie: gT.headers["set-cookie"].join("; ")
    }
  })
  return build_server + data.image
}
async function igdl3(url) {
  let res = await axios("https://indown.io/");
  let _$ = cheerio.load(res.data);
  let referer = _$("input[name=referer]").val();
  let locale = _$("input[name=locale]").val();
  let _token = _$("input[name=_token]").val();
  let {
    data
  } = await axios.post("https://indown.io/download", new URLSearchParams({
    link: url,
    referer,
    locale,
    _token,
  }), {
    headers: {
      cookie: res.headers["set-cookie"].join("; "),
    },
  });
  let $ = cheerio.load(data);
  let result = [];
  let __$ = cheerio.load($("#result").html());
  __$("video").each(function() {
    let $$ = $(this);
    result.push({
      type: "video",
      thumbnail: $$.attr("poster"),
      url: $$.find("source").attr("src"),
    });
  });
  __$("img").each(function() {
    let $$ = $(this);
    result.push({
      type: "image",
      url: $$.attr("src"),
    });
  });
  return result;
}
async function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
  })
}
async function lookup(url) {
  let anu
  try {
    anu = await fetch(`https://api.api-ninjas.com/v1/dnslookup?domain=${url}`, {
      headers: {
        'X-Api-Key': 'E4/gdcfciJHSQdy4+9+Ryw==JHciNFemGqOVIbyv'
      },
      contentType: 'application/json'
    }).then(v => v.text())
    return JSON.stringify(JSON.parse(anu), null, 2)
  } catch (e) {
    console.log(e)
    anu = await fetch(`https://api.hackertarget.com/dnslookup/?q=${url}`).then(v => v.text())
    return anu
  }
}
async function ipinfo(ip) {
  let data = await fetch("https://api.sanzy.bar/api/tools?type=ipinfo&q=" + ip, {
    headers: {
      referer: "https://api.sanzy.bar"
    }
  });
  if (!data.ok) throw (await data.json()).error;
  return data.json();
}
async function gpt(text) {
  var currentTime = getFormattedDate();
  console.log(currentTime);
  const {
    data
  } = await axios("https://openai.sanzy.tech/api/openai/v1/chat/completions", {
      method: "post",
      data: {
        messages: [{
          role: "system",
          content: "\nYou are ChatGPT, a large language model trained by OpenAI.\nKnowledge cutoff: 2021-09\nCurrent model: gpt-3.5-turbo\nCurrent time: " + currentTime + "\n",
        }, {
          role: "user",
          content: text,
        }, ],
        stream: false,
        model: "gpt-3.5-turbo",
        temperature: 0.5,
        presence_penalty: 0,
        frequency_penalty: 0,
        top_p: 1,
      },
      headers: {
        authorization: "Bearer ${apikey}",
        "content-type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
        "Referer": "https://openai.sanzy.tech/",
        "Origin": "https://openai.sanzy.tech",
      },
    }),
    result = {
      model: data.model,
      data: data.choices[0].message.content,
    };
  return result;
}
capcut = async (url) => {
       return new Promise(async (resolve, reject) => {
       try {
       const { data: { status, title, size, url: responseUrl } } = await axios.post('https://api.teknogram.id/v1/capcut', { url }, { headers: { 'Content-Type': 'application/json; charset=UTF-8' } });
       resolve({ result: { status, title, size, url: responseUrl.replace("open.", "") }});
       } catch (error) {
       console.error("Error:", error);
       reject(error);
       }
       });
       };
       
async function sfileSearch(query, page = 1) {
  let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
  let $ = cheerio.load(await res.text())
  let result = []
  $('div.list').each(function() {
    let title = $(this).find('a').text()
    let size = $(this).text().trim().split('(')[1]
    let link = $(this).find('a').attr('href')
    if (link) result.push({
      title,
      size: size.replace(')', ''),
      link
    })
  })
  return result
}
async function sfiledown(link) {
  return new Promise((resolve, reject) => {
    axios.get(link).then(({
      data
    }) => {
      const $ = cheerio.load(data);
      const nama = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(2) > b').text();
      const size = $('#download').text().split('Download File');
      const desc = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(7) > center > h1').text();
      const type = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(4) > a:nth-child(3)').text();
      const upload = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(5)').text();
      const uploader = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(4) > a:nth-child(2)').text();
      const download = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(6)').text();
      const link = $('#download').attr('href');
      let other = link.split('/')[7].split('&is')[0];
      const format = {
        judul: nama + other.substr(other.length - 6).split('.')[1],
        size: size[1].split('(')[1].split(')')[0],
        type: type,
        mime: other.substr(other.length - 6).split('.')[1],
        desc: desc,
        uploader: uploader,
        uploaded: upload.split('\n - Uploaded: ')[1],
        download_count: download.split(' - Downloads: ')[1],
        link: link
      };
      const result = {
        creator: 'Hanya Orang Biasa',
        data: format
      };
      resolve(result);
    }).catch(error => reject(error));
  });
};
async function hitungmundur(bulan, tanggal) {
  let from = new Date(`${bulan} ${tanggal}, 2024 00:00:00`).getTime();
  let now = Date.now();
  let distance = from - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
}
async function sfileDl(url) {
  let res = await fetch(url)
  let $ = cheerio.load(await res.text())
  let filename = $('div.w3-row-padding').find('img').attr('alt')
  let mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
  let filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim()
  let download = $('#download').attr('href') + '&k=' + Math.floor(Math.random() * (15 - 10 + 1) + 10)
  return {
    filename,
    filesize,
    mimetype,
    download
  }
}
async function checkWeb(url) {
  let res = await (await fetchJson('https://trustpositif.kominfo.go.id/Rest_server/getrecordsname_home', {
    agent: new https.Agent({
      rejectUnauthorized: false
    }),
    method: 'post',
    body: new URLSearchParams(Object.entries({
      name: args.join('%0A')
    }))
  })).json()
  return res.values
}
async function html2img(html, css) {
  try {
    let a = await axios.post("https://htmlcsstoimage.com/demo_run", {
      "html": html,
      "console_mode": "",
      "url": "",
      "css": css ? css : "",
      "selector": "",
      "ms_delay": "",
      "render_when_ready": "false",
      "viewport_height": "",
      "viewport_width": "",
      "google_fonts": "",
      "device_scale": ""
    }, {
      headers: {
        "cookie": "_hcti_website_session=SFhp%2FC3qpFOizmifGuqCaeHU5CGGm3fe2AOrGjkgLzK5xmme5U87lIrQvaSAsTh%2BIiWePfEjeRS2mQSemfqXDkca4SBEq0VMfidbgOrve6Ijivp8iPzoyVIxsG4wHncopQ5gdPDe45sYPJUZ%2FWoNhiYfNKg6XpTIBTbu4OQ7VmDQ8mxaNMukgYSB2%2FtNim%2BcRoE%2B9woQBO0unxrNYy0oRf3bKQbqhCDVUJ5iRYm4Dd4yIOkj1nNv39VQrcebkAAp9sPPrbsMGguP%2Bp9eiXGqxQPS5ycYlqK%2B2Zz8FU8%3D--MJPaMU59qWTaoEzF--Wjee8Ftq%2B%2FChRFKnsVi2Ow%3D%3D; _ga_JLLLQJL669=GS1.1.1711473771.1.0.1711473771.0.0.0; _ga=GA1.2.535741333.1711473772; _gid=GA1.2.601778978.1711473772; _gat_gtag_UA_32961413_2=1",
        "x-csrf-token": "pO7JhtS8osD491DfzpbVYXzThWKZjPoXXFBi69aJnlFRHIO9UGP7Gj9Y93xItqiCHzisYobEoWqcFqZqGVJsow",
      }
    })
    return a.data.url
  } catch {
    return null
  }
}
async function GoogleBard(query) {
  const COOKIE_KEY = "awhDhy-7HHtxxRztpGSA13d3-DxQUe_b_mtNK4qzwkdnP85eNsq5RPSY5lvXLn8Wm7gKww.";
  const psidCookie = '__Secure-1PSID=' + COOKIE_KEY;
  const headers = {
    "Host": "bard.google.com",
    "X-Same-Domain": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "Origin": "https://bard.google.com",
    "Referer": "https://bard.google.com",
    'Cookie': psidCookie
  };
  const bardRes = await fetch("https://bard.google.com/", {
    method: 'get',
    headers
  });
  const bardText = await bardRes.text();
  const [snlM0e, blValue] = [bardText.match(/"SNlM0e":"(.*?)"/)?.[1], bardText.match(/"cfb2h":"(.*?)"/)?.[1]];
  const bodyData = `f.req=[null,"[[\\"${encodeURIComponent(query)}\\"],null,[\\"\\",\\"\\",\\"\\"]]\"]&at=${snlM0e}`;
  const response = await fetch(`https://bard.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate?bl=${blValue}&_reqid=229189&rt=c`, {
    method: 'post',
    headers,
    body: bodyData
  });
  const answer = JSON.parse(JSON.parse((await response.text()).split("\n").reduce((a, b) => (a.length > b.length ? a : b), ""))[0][2])[4][0][1];
  return answer;
};
async function GoogleBardApi(query) {
  const headers = {
    "Host": "api.azz.biz.id",
    "X-Same-Domain": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "Origin": "https://api.azz.biz.id",
    "Referer": "https://api.azz.biz.id"
  };
  const bardRes = await fetch(`https://api.azz.biz.id/api/bard?q=${query}&key=global`, {
    method: 'get',
    headers
  });
  const bardText = await bardRes.json();
  return bardText.respon;
};
async function spek(query) {
  return new Promise((resolve, reject) => {
    let result = axios.get('https://carisinyal.com/hp/?_sf_s=' + query).then(v => {
      let $ = cheerio.load(v.data)
      let list = $("div.oxy-posts > div.oxy-post")
      let index = []
      list.each((v, i) => {
        let title = $(i).find("a.oxy-post-title").text()
        let harga = $(i).find("div.harga").text()
        let link = $(i).find("a.oxy-post-image").attr('href')
        let res = {
          title: title,
          harga: harga,
          link: link
        }
        index.push(res)
      })
      return index
    })
    resolve(result)
  })
}
async function speklengkap(link) {
  return new Promise((resolve, reject) => {
    let result = axios.get(link).then(v => {
      let $ = cheerio.load(v.data)
      let fitur = []
      let spesifikasi = []
      let list = $("div#_dynamic_list-777-114924 > div.ct-div-block")
      list.each((v, i) => {
        let fitur_unggulan = $(i).find("span.ct-span").text()
        fitur.push({
          desc: fitur_unggulan
        })
      })
      let spek = $("div.ct-code-block > div > table.box-info")
      spek.each((v, i) => {
        let name = $(i).find("tr.box-baris > td.kolom-satu").text().trim()
        let fitur = $(i).find("tr.box-baris > td.kolom-dua").text().trim()
        spesifikasi.push({
          name: name,
          fitur: fitur
        })
      })
      let img = $("meta[name='twitter:image']").attr('content')
      return {
        fitur: fitur,
        spek: spesifikasi,
        img: img
      }
    })
    resolve(result)
  })
}
async function moewallsSearch(query) {
  const {
    data
  } = await axios.get('https://moewalls.com/?s=' + query)
  const $ = cheerio.load(data)
  let result = []
  const all = $('#primary > div > div > ul').each(function(a, b) {
    $(b).find('li > article .entry-featured-media > a').each(function() {
      result.push({
        title: $(this).attr('title'),
        thumb: $(this).find('div > img').attr('src'),
        url: $(this).attr('href')
      })
    })
  })
  return result
}
async function txt2imgApi(prompt) {
  return new Promise(async (resolve, reject) => {
    const api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTY0ODM4MzYsInVzZXJfaWQiOiI2NTFlNDlmYjE4ZDNiNzZjMDQyMjk3NzUifQ.gW46goA2PDifptjkK78J-envYirtRgolRncyehkbCA4";
    const url = "https://api.wizmodel.com/sdapi/v1/txt2img";
    const payload = JSON.stringify({
      "prompt": prompt,
      "steps": 100
    });
    const headers = {
      'content-type': 'application/json',
      'authorization': 'bearer ' + api_key
    };
  })
}
async function igdl2(url) {
  let res = await axios("https://indown.io/");
  let _$ = cheerio.load(res.data);
  let referer = _$("input[name=referer]").val();
  let locale = _$("input[name=locale]").val();
  let _token = _$("input[name=_token]").val();
  let {
    data
  } = await axios.post("https://indown.io/download", new URLSearchParams({
    link: url,
    referer,
    locale,
    _token,
  }), {
    headers: {
      cookie: res.headers["set-cookie"].join("; "),
    },
  });
  let $ = cheerio.load(data);
  let result = [];
  let __$ = cheerio.load($("#result").html());
  __$("video").each(function() {
    let $$ = $(this);
    result.push({
      type: "video",
      thumbnail: $$.attr("poster"),
      url: $$.find("source").attr("src"),
    });
  });
  __$("img").each(function() {
    let $$ = $(this);
    result.push({
      type: "image",
      url: $$.attr("src"),
    });
  });
  return result;
}
async function searchBokepindo(query) {
  try {
    const response = await fetch('https://bokepindo13.mom/?s=' + query);
    if (!response.ok) throw new Error('Failed to fetch data');
    const $ = cheerio.load(await response.text());
    return $('article[data-video-uid]').map((index, element) => ({
      videoUid: $(element).attr('data-video-uid'),
      postId: $(element).attr('data-post-id'),
      title: $(element).find('a').attr('title'),
      thumbnailSrc: $(element).find('img').attr('data-src'),
      hdVideo: $(element).find('.hd-video').text(),
      views: $(element).find('.views').text(),
      duration: $(element).find('.duration').text(),
      videoLink: $(element).find('a').attr('href'), // Menambahkan link video
    })).get();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/' + Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts', ''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers', ''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following', ''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}
async function moewallsUrl(url) {
  const {
    data
  } = await axios.get(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
    }
  })
  const $ = cheerio.load(data)
  const result = {}
  $('#secondary > div').find('div > ul > li').each(function(a, b) {
    const p = $(b).find('i').text()
    if (p) result[p] = $(b).text().replace(p, '').trim()
  })
  const preview = $('#content > article > div > div > div.player_responsive').find('div > video > source').attr('src')
  return {
    ...result,
    preview
  }
}
async function formatUptime(uptime) {
  let seconds = Math.floor(uptime % 60);
  let minutes = Math.floor((uptime / 60) % 60);
  let hours = Math.floor((uptime / (60 * 60)) % 24);
  let days = Math.floor(uptime / (60 * 60 * 24));
  let formattedUptime = '';
  if (days > 0) formattedUptime += `${days} days `;
  if (hours > 0) formattedUptime += `${hours} hours `;
  if (minutes > 0) formattedUptime += `${minutes} minutes `;
  if (seconds > 0) formattedUptime += `${seconds} seconds`;
  return formattedUptime;
}
async function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
async function rmbg(buffer) {
  let form = new FormData
  form.append("size", "auto")
  form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
  let res = await axios({
    url: "https://api.remove.bg/v1.0/removebg",
    method: "POST",
    data: form,
    responseType: "arraybuffer",
    headers: {
      "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
      ...form.getHeaders()
    }
  })
  return res.data
}
stickersearch = (query) => {
	return new Promise((resolve, reject) => {
		axios.get(`https://getstickerpack.com/stickers?query=${query}`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const source = [];
				const link = [];
				$('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
					source.push($(b).attr('href'))
				})
				axios.get(source[Math.floor(Math.random() * source.length)])
					.then(({
						data
					}) => {
						const $$ = cheerio.load(data)
						$$('#stickerPack > div > div.row > div > img').each(function(c, d) {
							link.push($$(d).attr('src').replace(/&d=200x200/g, ''))
						})
					let result = {
							status: 200,
							author: global.creator,
							title: $$('#intro > div > div > h1').text(),
							sticker_url: link
						}
						resolve(result)
					})
			}).catch(reject)
	})
}

amv1 = async () => {
    const url = 'https://shortstatusvideos.com/anime-video-status-download/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const videos = [];
    $('a.mks_button.mks_button_small.squared').each((index, element) => {
        const href = $(element).attr('href');
        const title = $(element).closest('p').prevAll('p').find('strong').text();
        videos.push({
            title,
            source: href
        });
    });
    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];
    return randomVideo;
}
amv2 = async () => {
    const url = 'https://mobstatus.com/anime-whatsapp-status-video/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const videos = [];
    const title = $('strong').text();
    $('a.mb-button.mb-style-glass.mb-size-tiny.mb-corners-pill.mb-text-style-heavy').each((index, element) => {
        const href = $(element).attr('href');
        videos.push({
            title,
            source: href
        });
    });
    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];
    return randomVideo;
}

rexdldownload = (url) => {
   return new Promise(async (resolve, reject) => {
      try {
         let html = await (await axios.get(url)).data
         let $ = cheerio.load(html)
         let data = []
         let start = await (await axios.get($('span.readdownload > a').attr('href'))).data
         let che = cheerio.load(start)
         let postInfo = {
            thumb: $('img[class="aligncenter lazy"]').attr('data-src'),
            name: $('h1.post-title').text().trim(),
            update: che('li.dl-update').text().split(':')[1].trim(),
            version: che('li.dl-version').text().split(':')[1].trim(),
            size: che('li.dl-size').text().split(':')[1].trim(),
            password: che('li.dl-key').text().split(':')[1].replace(/"/g, '').trim()
         }
         che('ul.dl').find('a').each(function(i, e) {
            let isUrl = $(e).attr('href')
            if (isUrl.endsWith('.apk') || isUrl.endsWith('.zip')) data.push({
               filename: isUrl.split('/')[isUrl.split('/').length - 1],
               url: isUrl
            })
         })
         if (data.length == 0) return resolve({
            creator: global.creator,
            status: false
         })
         resolve({
            creator: global.creator,
            status: true,
            ...postInfo,
            data
         })
      } catch (e) {
         console.log(e)
         return resolve({
            creator: global.creator,
            status: false
         })
      }
   })
}

dafontSearch = async (query) => {
const base = `https://www.dafont.com`
const res = await axios.get(`${base}/search.php?q=${query}`)
const $ = cheerio.load(res.data)
const hasil = []
const total = $('div.dffont2').text().replace(` fonts on DaFont for ${query}`, '') 
$('div').find('div.container > div > div.preview').each(function(a, b) {
$('div').find('div.container > div > div.lv1left.dfbg').each(function(c, d) { 
$('div').find('div.container > div > div.lv1right.dfbg').each(function(e, f) { 
let link = `${base}/` + $(b).find('a').attr('href')
let judul = $(d).text() 
let style = $(f).text() 
hasil.push({ judul, style, link, total}) 
}) 
}) 
}) 
return hasil
}

dafontDown = async (link) => {
const des = await axios.get(link)
const sup = cheerio.load(des.data)
const result = []
let style = sup('div').find('div.container > div > div.lv1right.dfbg').text() 
let judul = sup('div').find('div.container > div > div.lv1left.dfbg').text() 
try {
isi = sup('div').find('div.container > div > span').text().split('.ttf')
output = sup('div').find('div.container > div > span').eq(0).text().replace('ttf' , 'zip')
} catch {
isi = sup('div').find('div.container > div > span').text().split('.otf')
output = sup('div').find('div.container > div > span').eq(0).text().replace('otf' , 'zip')
}

let down = 'http:' + sup('div').find('div.container > div > div.dlbox > a').attr('href')
result.push({ style, judul, isi, output, down})
return result
}


async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `kayy`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

remini2 = (imageData, operation) => {
    return new Promise(async (resolve, reject) => {
        const availableOperations = ["enhance", "recolor", "dehaze"];
        if (availableOperations.includes(operation)) {
            operation = operation;
        } else {
            operation = availableOperations[0];
        }
        const baseUrl = "https://inferenceengine.vyro.ai/" + operation + ".vyro";
        const formData = new FormData();
        formData.append("image", Buffer.from(imageData), { filename: "enhance_image_body.jpg", contentType: "image/jpeg" });
        formData.append("model_version", 1, { "Content-Transfer-Encoding": "binary", contentType: "multipart/form-data; charset=utf-8" });

        const options = {
            method: 'POST',
            hostname: 'inferenceengine.vyro.ai',
            path: "/" + operation,
            protocol: 'https:',
            headers: {
                'User-Agent': 'okhttp/4.9.3',
                'Connection': 'Keep-Alive',
                'Accept-Encoding': 'gzip',
                ...formData.getHeaders()
            }
        };

        const req = https.request(options, function (res) {
            const chunks = [];
            res.on("data", function (chunk) {
                chunks.push(chunk);
            });
            res.on("end", function () {
                resolve(Buffer.concat(chunks));
            });
            res.on("error", function (err) {
                reject(err);
            });
        });

        formData.pipe(req);

        req.on('error', function (err) {
            reject(err);
        });

        req.end();
    });
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

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 15;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

async function msToDate(ms) {
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
async function msToDay(ms) {
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

async function googleImage(query) {
   const data = await got(`https://www.google.com/search?q=${query}&tbm=isch`, {
      headers: {
         accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
         'accept-encoding': 'gzip, deflate, br',
         'accept-language': 'en-US,en;q=0.9,id;q=0.8',
         'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36'
      }
   }).text();
   const $ = await cheerio.load(data);
   const pattern = /\[1,\[0,"(?<id>[\d\w\-_]+)",\["https?:\/\/(?:[^"]+)",\d+,\d+\]\s?,\["(?<url>https?:\/\/(?:[^"]+))",\d+,\d+\]/gm;
   const matches = $.html().matchAll(pattern);
   const decodeUrl = (url) => decodeURIComponent(JSON.parse(`"${url}"`));
   return [...matches]
      .map(({
         groups
      }) => decodeUrl(groups === null || groups === void 0 ? void 0 : groups.url))
      .filter((v) => /.*\.jpe?g|png$/gi.test(v));
}


async function deepAi(input) {
    const sys = fs.readFileSync('./src/promt.txt', 'utf-8')
    const messages = [
        { role: "system", content: sys },
        { role: "user", content: input }
    ];

    try {
        const response = await fetch("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
            method: "POST",
            headers: {
                Accept: "text/event-stream",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ messages }),
        });

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

/**
Putu Dev
**/

async function luminsesi(q, username) {
    try {
        const response = await axios.post("https://luminai.siputzx.my.id/sesi", {
            content: q,
            user: username
        });
        return response.data.result;
    } catch (error) {
        console.error('Error fetching:', error);
        throw error;
    }
}

async function bardChat(prompt) {
  try {
    const response = await axios.post('https://bard.rizzy.eu.org/backend/conversation', {
      ask: prompt
    }, {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    });
    return response.data.content;
  } catch (error) {
    console.error(error);
  }
}

async function generateSerpApiUrl(data) {
  const params = new URLSearchParams(data);
  const url = `https://serpapi.com/search.json?${params.toString()}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}

function pinterest(querry){
	return new Promise(async(resolve,reject) => {
		 axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
			headers: {
			"cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
		}
			}).then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		const hasil = [];
   		 $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
		});
   		result.forEach(v => {
		 if(v == undefined) return
		 hasil.push(v.replace(/236/g,'736'))
			})
			hasil.shift();
		resolve(hasil)
		})
	})
}

async function luminprompt(q, username, logic) {
    try {
        const response = await axios.post("https://luminai.siputzx.my.id/", {
            content: q,
            user: username,
            prompt: logic,
            webSearchMode: false // true = result with url
        });
        return response.data.result;
    } catch (error) {
        console.error('Error fetching:', error);
        throw error;
    }
}

async function chat(prompt) {
const { G4F } = require("g4f")
let g4f = new G4F()
  const messages = [
    { role: "system", content: "You are good component." },
    { role: "asistant", content: "Dann-Legacy adalah bot WhatsApp yang terbuat dari Nodejs, Python. Untuk membantu anda dalam mengerjakan dalam hal apapun." },
    { role: "user", content: prompt }
  ];
  let res = await g4f.chatCompletion(messages)
  return  res
}

/**
by Tio 
hapus yapit😹
**/
async function dytopia(query) {
    try {
        const response = await axios.post('https://boredhumans.com/apis/boredagi_api.php',
            `prompt=${query}&uid=lwle4nyomx5t0w6quo8&sesh_id=multistep-82cb1e26-d257-4dd0-b34b-1d35af1c712d&get_tool=false&tool_num=23`, {
                headers: {
                    'User-Agent': 'Googlebot-News',
                }
            });
        return response.data
    } catch (e) {
        return e
    }
}

async function soundMeme() {
  try {
    const url = 'https://www.myinstants.com/en/index/id/';
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const results = [];

    $('.instant').each((index, element) => {
      const title = $(element).find('.instant-link').text().trim();
      const soundLinkRelative = $(element).find('button.small-button').attr('onclick').match(/play\('(.+?)'/)[1];
      const soundLink = 'https://www.myinstants.com' + soundLinkRelative;
      const pageLink = 'https://www.myinstants.com' + $(element).find('.instant-link').attr('href');

      results.push({ title, soundLink, pageLink });
    });

    return results;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

async function gemini(txt) {
  try {
    var api = await axios.get(
      `https://hercai.onrender.com/gemini/hercai?question=${txt}`,
      {
        headers: {
          "content-type": "application/json",
        },
      },
    );
    return api.data;
  } catch (e) {
    console.log(e);
  }
}

async function textToImage(text) {
  try {
    const { data } = await axios.get(
      "https://tti.photoleapapp.com/api/v1/generate?prompt=" + text,
    );
    return data;
  } catch (err) {
    return null;
  }
}

let wss = "wss://openai-whisper.hf.space/queue/join";
const whisper = async (buffer) => {
  return new Promise(async (resolve, reject) => {
    let result = {};
    let send_data_payload = {
      fn_index: 0,
      data: [
        {
          name: "audio",
          data: "data:audio/wav;base64," + buffer.toString("base64"),
        },
      ],
      session_hash: "cwpo8hy02ed",
    };
    const ws = new WebSocket(wss);
    ws.onopen = function () {
      console.log("Connected to websocket");
    };
    ws.onmessage = async function (event) {
      let message = JSON.parse(event.data);
      ws.send(JSON.stringify(send_data_payload));
      switch (message.msg) {
        case "process_completed":
          result.text = message.output.data[0];
          break;
      }
    };

    ws.onclose = function (event) {
      if (event.code === 1000) {
        console.log("Process completed successfully");
      } else {
        m.reply("Err : WebSocket Connection Error:\n");
      }
      resolve(result);
    };
  });
};

async function Morse(input) {
  let res = await fetch(
    "http://api.funtranslations.com/translate/morse/audio?text=" +
      input +
      "&speed=0&tone=0",
    {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    },
  );
  let su = await res.json();
  let wavUrl = su.contents.translated.audio;
  let buffer = Buffer.from(wavUrl.split("base64,")[1], "base64");
  return buffer;
}

async function chatWithGPT(messages, q) {
  try {
    const nonceValue = JSON.parse(
      cheerio
        .load(await (await axios.get("https://zerogptai.org/")).data)(
          ".mwai-chatbot-container",
        )
        .attr("data-system"),
    ).restNonce;

    const { data } = await axios(
      "https://zerogptai.org/wp-json/mwai-ui/v1/chats/submit",
      {
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
      },
    );
    return data.reply;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data.message;
  }
}

async function Telesticker(url) {
return new Promise(async (resolve, reject) => {
if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi))
throw "Enther your url telegram sticker"
let packName = url.replace("https://t.me/addstickers/", "");
let data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`,
{ method: "GET", headers: { "User-Agent": "GoogleBot" } },
);
const hasil = [];
for (let i = 0; i < data.data.result.stickers.length; i++) {
let fileId = data.data.result.stickers[i].thumb.file_id;
let data2 = await axios(
`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`,
);
let result = {
status: 200,
author: "Xfarr05",
url:
"https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" +
data2.data.result.file_path,
};
hasil.push(result);
}
resolve(hasil);
});
}

async function Azure(input) {
  const fetch = require("node-fetch")
  const messages = [
    {
      role: "system",
      content: "Anda adalah asisten yang membantu.",
    },
    {
      role: "user",
      content: input,
    },
  ];
  const response = await fetch(
    "https://oai-4.openai.azure.com/openai/deployments/complete-4/chat/completions?api-version=2023-07-01-preview",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": "2e6532692d764b48b5454f0f4abf8c81",
      },
      body: JSON.stringify({
        messages,
      }),
    },
  );
  const data = await response.json();
  return data;
}


function reminii(url, method) {
  return new Promise(async (resolve, reject) => {
    let Methods = ["enhance", "recolor", "dehaze"]
    Methods.includes(method) ? (method = method): (method = Methods[0])
    let buffer,
    Form = new FormData(),
    scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method
    Form.append("model_version", 1, {
      "Content-Transfer-Encoding": "binary",
      contentType: "multipart/form-data charset=uttf-8",
    })
    Form.append("image", Buffer.from(url), {
      filename: "enhance_image_body.jpg",
      contentType: "image/jpeg",
    })
    Form.submit(
      {
        url: scheme,
        host: "inferenceengine" + ".vyro" + ".ai",
        path: "/" + method,
        protocol: "https:",
        headers: {
          "User-Agent": "okhttp/4.9.3",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
        },
      },
      function (err, res) {
        if (err) reject()
        let data = []
        res
        .on("data", function (chunk, resp) {
          data.push(chunk)
        })
        .on("end", () => {
          resolve(Buffer.concat(data))
        })
        res.on("error", (e) => {
          reject()
        })
      }
    )
  })
}

/*
WM By @Irull

Github: https://github.com/khrlmstfa


Don't delete this WM!

*/

async function igstalkk(username) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get("https://www.inststalk.com/search?user=" + username,
        );
        const $ = cheerio.load(data);
        const search = $("div.row > div.col-sm-6.col-md-4.col-lg-3")
          .map((_, el) => {
            return {
              username: $(el).find("a").attr("title"),
              img: $(el)
                .find("a > div.user-image > div.background.lazy")
                .attr("data-src"),
              url: "https://www.inststalk.com" + $(el).find("a").attr("href"),
            };
          })
          .get();
        if (search.length == 0) throw "User Not Found!";
        const response = await axios.get(search[0].url);
        const $$ = cheerio.load(response.data);
        const result = {
          profile: $$("div.user-info > figure > img").attr("src"),
          username: $$("div.user-info > div.article div.top div.title > h1")
            .text()
            .trim(),
          name: $$("div.user-info > div.article div.top div.title > h2")
            .text()
            .trim(),
          description: $$("div.user-info > div.article > div.description > p")
            .text()
            .trim(),
          posts: $$(
            "div.col-lg-5.separate-column > div.row > div.col > div.number-box > .count",
          )
            .eq(0)
            .text()
            .trim(),
          followers: $$(
            "div.col-lg-5.separate-column > div.row > div.col > div.number-box > .count",
          )
            .eq(1)
            .text()
            .trim(),
          following: $$(
            "div.col-lg-5.separate-column > div.row > div.col > div.number-box > .count",
          )
            .eq(2)
            .text()
            .trim(),
        };
        resolve(result);
      } catch (e) {
        console.log(e);
        reject({
          status: 300,
          message: "request failed",
        });
      }
    });
  };
  
///////
async function pinterest2(query) {
	if (query.match(URL_REGEX)) {
		let res = await fetch('https://www.expertsphp.com/facebook-video-downloader.php', {
			method: 'post',
			body: new URLSearchParams(Object.entries({ url: query }))
		})
		let $ = cheerio.load(await res.text())
		let data = $('table[class="table table-condensed table-striped table-bordered"]').find('a').attr('href')
		if (!data) throw 'Can\'t download post :/'
		return data
	} else {
		let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`)
		let json = await res.json()
		let data = json.resource_response.data.results
		if (!data.length) throw `Query "${query}" not found :/`
		return data[~~(Math.random() * (data.length))].images.orig.url
	}
}

async function shortUrl(url) {
	return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
}
////////
async function Ephoto(url, text) {
    let form = new FormData();
    let gT = await axios.get(url, {
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
        }
    });
    let $ = cheerio.load(gT.data);
    let token = $("input[name=token]").val();
    let build_server = $("input[name=build_server]").val();
    let build_server_id = $("input[name=build_server_id]").val();
    form.append("text[]", text);
    form.append("token", token);
    form.append("build_server", build_server);
    form.append("build_server_id", build_server_id);

    let res = await axios({
        url: url,
        method: "POST",
        data: form,
        headers: {
            Accept: "*/*",
            "Accept-Language": "en-US,en;q=0.9",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
            cookie: gT.headers["set-cookie"]?.join("; "),
            ...form.getHeaders() // Move the spread syntax here
        }
    });

    let $$ = cheerio.load(res.data);
    let json = JSON.parse($$("input[name=form_value_input]").val());
    json["text[]"] = json.text;
    delete json.text;

    let {
        data
    } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
            cookie: gT.headers["set-cookie"].join("; ")
        }
    });

    return build_server + data.image;
}

//////////
async function stalkff(text) {
  var datap = {
    "voucherPricePoint.id": 8050,
    "voucherPricePoint.price": "",
    "voucherPricePoint.variablePrice": "",
    "email": "",
    "n": "",
    "userVariablePrice": "",
    "order.data.profile": "",
    "user.userId": text,
    "voucherTypeName": "FREEFIRE",
    "affiliateTrackingId": "",
    "impactClickId": "",
    "checkoutId": "",
    "tmwAccessToken": "",
    "shopLang": "in_ID",
  }
  var epep = await axios({
    "headers": {
    "Content-Type": "application/json; charset\u003dutf-8"
    },
    "method": "POST",
    "url": "https://order.codashop.com/id/initPayment.action",
    "data": datap
  })
  return {
    id: text,
    nickname: epep.data["confirmationFields"]["roles"][0]["role"]
  }
}  

async function Tiktokdl(url) {
//async function tiktokdl(url) {
try {
function API_URL(aweme) {
return `https://api16-core-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${aweme}&version_name=1.0.4&version_code=104&build_number=1.0.4&manifest_version_code=104&update_version_code=104&openudid=4dsoq34x808ocz3m&uuid=6320652962800978&_rticket=1671193816600&ts=1671193816&device_brand=POCO&device_type=surya&device_platform=android&resolution=1080*2179&dpi=440&os_version=12&os_api=31&carrier_region=US&sys_region=US%C2%AEion=US&app_name=TikMate%20Downloader&app_language=en&language=en&timezone_name=Western%20Indonesia%20Time&timezone_offset=25200&channel=googleplay&ac=wifi&mcc_mnc=&is_my_cn=0&aid=1180&ssmix=a&as=a1qwert123&cp=cbfhckdckkde1`;
};
async function getAwemeId(url) {
// any :/
let result;
const Konto1 = /video\/([\d|\+]+)?\/?/;
const valid = url.match(Konto1);
if (valid) {
return valid[1];
}
else {
try {
const data = await got
.get(url, {
headers: {
"Accept-Encoding": "deflate",
},
maxRedirects: 0,
})
.catch((e) => e.response.headers.location);
const _url = data;
const _valid = _url.match(Konto1);
if (_valid) {
result = _valid[1];
}
}
catch (error) {
// console.log(error)
result = false;
}
}
return result;
};
const valid = await getAwemeId(url);
//if (!valid) return false // result = false
const data = await got
.get(API_URL(valid), {
headers: {
"Accept-Encoding": "deflate",
"User-Agent": "okhttp/3.14.9",
},
})
.catch((e) => e.response);
//if (!data) return false // result = false
const body = JSON.parse(data.body);
const obj = body.aweme_list.find((o) => o.aweme_id === valid)
const results = {
aweme_id: obj.aweme_id,
region: obj.region,
desc: obj.desc,
create_time: obj.create_time,
author: {
uid: obj.author.uid,
unique_id: obj.author.unique_id,
nickname: obj.author.nickname,
birthday: obj.author.birthday,
},
duration: obj.music.duration,
download: {
nowm: obj.video.play_addr.url_list[0],
wm: obj.video.download_addr.url_list[0],
music: obj.music.play_url.url_list[0],
music_info: {
id: obj.music.id,
title: obj.music.title,
author: obj.music.author,
is_original: obj.music.is_original,
cover_hd: obj.music.cover_hd.url_list[0],
cover_large: obj.music.cover_large.url_list[0],
cover_medium: obj.music.cover_medium.url_list[0],
},
},
};
return {
status: true,
result: results//data.body //valid
}
} catch (e) {
return { status: false, result: e }
}
}  
//////////  
const photoOxy = (url, text) => new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: url,
    headers: {
      'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
    }
  })
  .then(({ data, headers }) => {
    const token = /<input type="hidden" name="token" value="(.*?)" id="token">/.exec(data)[1]
    const build_server = /<input type="hidden" name="build_server" value="(.*?)" id="build_server">/.exec(data)[1]
    const build_server_id = /<input type="hidden" name="build_server_id" value="(.*?)" id="build_server_id">/.exec(data)[1]
    const cookie = headers['set-cookie'][0]
    const form = new FormData()
    if (typeof text === 'string') text = [text]
    for (let texts of text) form.append('text[]', texts)
    form.append('sumbit', 'GO')
    form.append('token', token)
    form.append('build_server', build_server)
    form.append('build_server_id', build_server_id)
    axios({
      method: 'POST',
      url: url,
      data: form,
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
        'cookie': cookie,
        ...form.getHeaders()
      }
    })
    .then(({ data }) => {
      const form_value = /<div.*?id = "form_value".+>(.*?)<\/div>/.exec(data)[1]
      axios({
        method: 'GET',
        url: 'https://photooxy.com/effect/create-image?' + queryString(JSON.parse(form_value)),
        headers: {
          'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
          'cookie': cookie
        }
      })
      .then(({ data }) => {
        resolve(build_server + data.image)
      })
      .catch(reject)
    })
    .catch(reject)
  })
  .catch(reject)
})

const photoOxyRadio = (url, text, radio) => new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: url,
    headers: {
      'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
    }
  })
  .then(({ data, headers }) => {
    const token = /<input type="hidden" name="token" value="(.*?)" id="token">/.exec(data)[1]
    const build_server = /<input type="hidden" name="build_server" value="(.*?)" id="build_server">/.exec(data)[1]
    const build_server_id = /<input type="hidden" name="build_server_id" value="(.*?)" id="build_server_id">/.exec(data)[1]
    const cookie = headers['set-cookie'][0]
    const form = new FormData()
    form.append('radio0[radio]', radio)
    if (typeof text === 'string') text = [text]
    for (let texts of text) form.append('text[]', texts)
    form.append('sumbit', 'GO')
    form.append('token', token)
    form.append('build_server', build_server)
    form.append('build_server_id', build_server_id)
    axios({
      method: 'POST',
      url: url,
      data: form,
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
        'cookie': cookie,
        ...form.getHeaders()
      }
    })
    .then(({ data }) => {
      const form_value = /<div.*?id = "form_value".+>(.*?)<\/div>/.exec(data)[1]
      axios({
        method: 'GET',
        url: 'https://photooxy.com/effect/create-image?' + queryString(JSON.parse(form_value)),
        headers: {
          'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
          'cookie': cookie
        }
      })
      .then(({ data }) => {
        resolve(build_server + data.image)
      })
      .catch(reject)
    })
    .catch(reject)
  })
  .catch(reject)
})
//////////  
async function TeleSticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) throw 'Enther your url telegram sticker'
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const hasil = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'Xfarr05',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            hasil.push(result)
        }
    resolve(hasil)
    })
}
  
//////////  
async function TikTok(url) {
  // Try using tiklydown.eu.org API first
  let tiklydownAPI = `https://api.tiklydown.eu.org/api/download?url=${url}`;
  let response = await axios.get(tiklydownAPI);
  return response.data;
}  
//////////  

const APIs = {
    1: 'https://apkcombo.com',
    2: 'apk-dl.com',
    3: 'https://apk.support',
    4: 'https://apps.evozi.com/apk-downloader',
    5: 'http://ws75.aptoide.com/api/7',
    6: "https://cafebazaar.ir"
}
const Proxy = (url) => (url ? `https://translate.google.com/translate?sl=en&tl=fr&hl=en&u=${encodeURIComponent(url)}&client=webapp` : '')
const api = (ID, path = '/', query = {}) => (ID in APIs ? APIs[ID] : ID) + path + (query ? '?' + new URLSearchParams(Object.entries({
    ...query
})) : '')

const tools = {
    APIs,
    Proxy,
    api
}

let apkcombo = {
    search: async function(args) {
        let res = (await fetch(tools.Proxy(tools.api(1, '/search/' + encodeURIComponent(args.replace(' ', '-'))))))
        let ress = []
        res = (await res.text())
        let $ = cheerio.load(res)
        let link = []
        let name = []
        $('div.content-apps > a').each(function(a, b) {
            let nem = $(b).attr('title')
            name.push(nem)
            link.push($(b).attr('href').replace('https://apkcombo-com.translate.goog/', 'https://apkcombo.com/').replace('/?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp', ''))
        })
        for (var i = 0; i < (name.length || link.length); i++) {
            ress.push({
                name: name[i],
                link: link[i]
            })
        }
        return ress
    },
    download: async function(url) {
        let res = (await fetch(url))
        res = (await res.text())
        let $ = cheerio.load(res)
        let img = $('div.app_header.mt-14 > div.avatar > img').attr('data-src')
        let developer = $('div.container > div > div.column.is-main > div.app_header.mt-14 > div.info > div.author > a').html()
        let appname = $('div.container > div > div.column.is-main > div.app_header.mt-14 > div.info > div.app_name > h1').text()
        let link1 = 'https://apkcombo.com' + $('div.container > div > div.column.is-main > div.button-group.mt-14.mb-14.is-mobile-only > a').attr('href')
        res = (await fetch(link1))
        res = (await res.text())
        $ = cheerio.load(res)
        let link = $('#best-variant-tab > div:nth-child(1) > ul > li > ul > li > a').attr('href') + '&fp=945d4e52764ab9b1ce7a8fba0bb8d68d&ip=160.177.72.111'
        return {
            img,
            developer,
            appname,
            link
        }
    }
}

let apkdl = {
    search: async function(args) {
        let res = (await fetch(tools.Proxy(tools.api(2, '/search', {
            q: args
        }))))
        res = (await res.text())

        let $ = cheerio.load(res)

        let link = []
        let name = []
        let ress = []
        $('a.title').each(function(a, b) {
            let nem = $(b).text()
            name.push(nem)
            link.push($(b).attr('href').replace('https://apk--dl-com.translate.goog/', 'https://apk-dl.com/').replace('?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp', ''))
        })
        for (var i = 0; i < (name.length || link.length); i++) {
            ress.push({
                name: name[i],
                link: link[i]
            })
        }
        return ress
    },
    download: async function(url) {
        let res = (await fetch(tools.Proxy(url)))
        res = (await res.text())
        let $ = cheerio.load(res)
        let img = $('div.logo > img').attr('src')
        let developer = $('div.developer > a').attr('title')
        let appname = $('div.heading > h1 > a').attr('title')
        let link2 = $('div.download-btn > div > a.mdl-button.mdl-js-button.mdl-button--raised.mdl-js-ripple-effect.fixed-size.mdl-button--primary').attr('href')
        res = (await fetch(link2))
        res = (await res.text())
        $ = cheerio.load(res)
        let link1 = $('head > meta:nth-child(11)').attr('content')
        link1 = link1.replace('0; url=', '')
        res = (await fetch(link1))
        res = (await res.text())
        $ = cheerio.load(res)
        let link = 'https:' + $('body > div.mdl-layout.mdl-js-layout.mdl-layout--fixed-header > div > div > div > div > div > div:nth-child(1) > div:nth-child(3) > a').attr('href')
        return {
            img,
            developer,
            appname,
            link
        }
    }
}

let aptoide = {
    search: async function(args) {
        let res = (await fetch(tools.api(5, '/apps/search', {
            query: args,
            limit: 1000
        })))

        let ress = {}
        res = (await res.json())
        ress = res.datalist.list.map(v => {
            return {
                name: v.name,
                id: v.package
            }
        })
        return ress
    },
    download: async function(id) {
        let res = (await fetch(tools.api(5, '/apps/search', {
            query: id,
            limit: 1
        })))

        res = (await res.json())
        return {
            img: res.datalist.list[0].icon,
            developer: res.datalist.list[0].store.name,
            appname: res.datalist.list[0].name,
            link: res.datalist.list[0].file.path
        }
    }
}

  
 ////////// 
async function npmstalking(packageName) {
  let stalk = await axios.get("https://registry.npmjs.org/"+packageName)
  let versions = stalk.data.versions
  let allver = Object.keys(versions)
  let verLatest = allver[allver.length-1]
  let verPublish = allver[0]
  let packageLatest = versions[verLatest]
  return {
    name: packageName,
    versionLatest: verLatest,
    versionPublish: verPublish,
    versionUpdate: allver.length,
    latestDependencies: Object.keys(packageLatest.dependencies).length,
    publishDependencies: Object.keys(versions[verPublish].dependencies).length,
    publishTime: stalk.data.time.created,
    latestPublishTime: stalk.data.time[verLatest]
  }
}  
//////////  
async function jarakk(dari, ke) {
var html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
var $ = cheerio.load(html), obj = {}
var img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
return obj
}  
  
//////////  
async function ttimg(link) {
    try {
        let url = `https://dlpanda.com/es?url=${link}&token=G7eRpMaa`;
        let response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        let imgSrc = [];
        $('div.col-md-12 > img').each((index, element) => {
            imgSrc.push($(element).attr('src'));
        });
        return { data: imgSrc };
    } catch (error) {
        console.error(error);
        return { data: [] };
    }
}
  
//////////  
const RemoVebg = (url, color) => {
  return new Promise(async (resolve, reject) => {
    const payload = {
      "image_file_b64": "",
      "image_url": url,
      "size": "preview",
      "type": "auto",
      "type_level": "1",
      "format": "auto",
      "roi": "0% 0% 100% 100%",
      "crop": false,
      "crop_margin": "0",
      "scale": "original",
      "position": "original",
      "channels": "rgba",
      "add_shadow": false,
      "semitransparency": true,
      "bg_color": color,
      "bg_image_url": ""
    }
    await axios({
      method: "POST", 
      url: "https://api.remove.bg/v1.0/removebg",
      data: payload,
      headers: {
        "accept": "application/json",
        "X-API-Key": "UgjxxGCBGrEy98UwMwziHLp2",
        "Content-Type": "application/json"
      }
    })
    .then(( res ) => {
      const buffer = Buffer.from(res.data.data.result_b64, "base64")
      resolve(buffer)
    })
    .catch((e) => {
      resolve(e?.response)
    })
  })
}  
 //////////  
function twitterUrl(link){
	return new Promise((resolve, reject) => {
		let config = {
			'URL': link
		}
		axios.post('https://twdown.net/download.php',qs.stringify(config),{
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "_ga=GA1.2.1388798541.1625064838; _gid=GA1.2.1351476739.1625064838; __gads=ID=7a60905ab10b2596-229566750eca0064:T=1625064837:RT=1625064837:S=ALNI_Mbg3GGC2b3oBVCUJt9UImup-j20Iw; _gat=1"
			}
		})
		.then(({ data }) => {
		const $ = cheerio.load(data)
		resolve({
				desc: $('div:nth-child(1) > div:nth-child(2) > p').text().trim(),
				thumb: $('div:nth-child(1) > img').attr('src'),
				video_sd: $('tr:nth-child(2) > td:nth-child(4) > a').attr('href'),
				video_hd: $('tbody > tr:nth-child(1) > td:nth-child(4) > a').attr('href'),
				audio: 'https://twdown.net/' + $('body > div.jumbotron > div > center > div.row > div > div:nth-child(5) > table > tbody > tr:nth-child(3) > td:nth-child(4) > a').attr('href')
			})
		})
	.catch(reject)
	})
}  
//////////    

//////////  
async function Cerpenn(category) {
	return new Promise(async (resolve, reject) => {
		let title = category.toLowerCase().replace(/[()*]/g, "")
		let length, judul = title.replace(/\s/g, "-")
		try {
			let res = await axios.get('http://cerpenmu.com/category/cerpen-'+judul)
			let $ = await cheerio.load(res.data)
			length = $('html body div#wrap div#content article.post div.wp-pagenavi a')
			length = length['4'].attribs.href.split('/').pop()
		} catch { length = 0 }
		let page = Math.floor(Math.random() * parseInt(length))
		axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
		.then((get) => {
			let $ = cheerio.load(get.data)
			let link = []
			$('article.post').each(function (a, b) {
				link.push($(b).find('a').attr('href'))
			})
			let random = link[Math.floor(Math.random() * link.length)]
			axios.get(random)
			.then((res) => {
				let $$ = cheerio.load(res.data)
				let hasil = {
					title: $$('#content > article > h1').text(),
					author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
					kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
					lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
					cerita: $$('#content > article > p').text()
				}
				resolve(hasil)
			})
		})
	})
}

//////////  
async function Spotifydl(text) {
  const response = await fetch(`https://api.caliph.biz.id/api/download/spotify?url=${text}&apikey=qnGcf9ft`);
  return response;
}
///////////
async function Spotify(text) {
  const response = await fetch(`https://api.caliph.biz.id/api/search/spotify?query=${text}&apikey=qnGcf9ft`);
  return response;
}

/////////////
const Gempa = () => new Promise((resolve, reject) => {
  axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg').then((response) => {
  const $ = cheerio.load(response.data)

  const urlElems = $('table.table-hover.table-striped')

  for (let i = 0; i < urlElems.length; i++) {
    const urlSpan = $(urlElems[i]).find('tbody')[0]

    if (urlSpan) {
      const urlData = $(urlSpan).find('tr')[0]
      var Kapan = $(urlData).find('td')[1]
      var Letak = $(urlData).find('td')[2]
      var Magnitudo = $(urlData).find('td')[3]
      var Kedalaman = $(urlData).find('td')[4]
      var Wilayah = $(urlData).find('td')[5]
      var lintang = $(Letak).text().split(' ')[0]
      var bujur = $(Letak).text().split(' ')[2]
      var hasil = {
        Waktu: $(Kapan).text(),
        Lintang: lintang,
        Bujur: bujur,
        Magnitudo: $(Magnitudo).text(),
        Kedalaman: $(Kedalaman).text().replace(/\t/g, '').replace(/I/g, ''),
        Wilayah: $(Wilayah).text().replace(/\t/g, '').replace(/I/g, '').replace('-','').replace(/\r/g, '').split('\n')[0],
     	Map: $('div.row > div > img').attr('src')
      }
      // We then print the text on to the console
      resolve(hasil);
    
    }
  }
  }).catch(err => reject(err))
})  
//////////
function Lirik(judul) {
    return new Promise(async (resolve, reject) => {
        try {
            let { data } = await axios.get(`https://www.musixmatch.com/search/${judul}`);
            const $ = cheerio.load(data);

            let limk = 'https://www.musixmatch.com';
            const link = limk + $('div.media-card-body > div > h2').find('a').attr('href');

            let { data: lyricsData } = await axios.get(link);
            const $$ = cheerio.load(lyricsData);

            let hasil = {
                thumb: 'https:' + $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src'),
                lirik: $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').find('span > p > span').text() + '\n' + $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').find('span > div > p > span').text()
            };

            resolve(hasil);
        } catch (error) {
            reject(error);
        }
    });
}
///////////////////
async function jadianime(url) {
  try {
    const { data } = await axios.post("https://tools.revesery.com/image-anime/convert.php", new URLSearchParams(Object.entries({
      "image-url": url
    })));
    return Buffer.from(data.image.split(",")[1], "base64");
  } catch (error) {
    console.error(error);
    throw 'Error in jadianime function';
  }
}
///////
async function swallpapercraft(query) {
	return new Promise((resolve, reject) => {
		axios.get('https://wallpaperscraft.com/search/?query=' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const result = [];
				$('span.wallpapers__canvas').each(function(a, b) {
					result.push($(b).find('img').attr('src'))
				})
				resolve(result)
			})
			.catch(reject)
	})
}
//////////
async function scariresep(query) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get('https://resepkoki.id/?s=' + query);
            const $ = cheerio.load(response.data);

            const recipes = [];

            $('article').each((index, element) => {
                const judul = $(element).find('header h3 a').text().trim();
                const link = $(element).find('div.archive-item-media a').attr('href');

                if (judul && link) {
                    recipes.push({ judul, link });
                }
            });

            const result = {
                creator: "Wudysoft",
                data: recipes
            };

            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

function servermc() {
    return new Promise((resolve, reject) => {
        axios.get(`https://minecraftpocket-servers.com/country/indonesia/`)
            .then(({ data }) => {
                const $ = cheerio.load(data);
                const hasil = [];

                $("tr").each(function (c, d) {
                    const ip = $(d).find("button.btn.btn-secondary.btn-sm").eq(1).text().trim().replace(':19132', '');
                    const port = '19132';
                    const versi = $(d).find("a.btn.btn-info.btn-sm").text().trim();
                    const player = $(d).find("td.d-none.d-md-table-cell > strong").eq(1).text().trim();

                    const Data = {
                        ip: ip,
                        port: port,
                        versi: versi,
                        player: player
                    };
                    hasil.push(Data);
                });

                resolve(hasil);
            })
            .catch(reject);
    });
}

async function lumin2(q, username = null, logic = null, webSearchMode = false) {
    try {
        const payload = { content: q };
        if (username !== null) payload.user = username;
        if (logic !== null) payload.prompt = logic;
        payload.webSearchMode = webSearchMode;

        const response = await axios.post("https://luminai.siputzx.my.id/", payload);
        return response.data.result;
    } catch (error) {
        console.error('Error fetching:', error);
        throw error;
    }
}

//WM by Rulzz Titenono ko hapus le😹🫵🏻

async function cekjnt(resi) {
  const response = await axios.get(`https://api.binderbyte.com/v1/track?api_key=4bda755e0c2db98f4ba36a8d14d94543a13313af7caa3bf89db6b3e948510db4&courier=jnt&awb=${resi}`);
   return response.data;
}

// Fungsi cepat
async function sicepat(resi) {
  const response = await axios.get(`https://api.binderbyte.com/v1/track?api_key=4bda755e0c2db98f4ba36a8d14d94543a13313af7caa3bf89db6b3e948510db4&courier=sicepat&awb=${resi}`);
   return response.data;
}

// Fungsi POST
async function post(resi) {
  const response = await axios.get(`https://api.binderbyte.com/v1/track?api_key=4bda755e0c2db98f4ba36a8d14d94543a13313af7caa3bf89db6b3e948510db4&courier=post&awb=${resi}`);
   return response.data;
}

// Funsi tiki
async function tiki(resi) {
  const response = await axios.get(`https://api.binderbyte.com/v1/track?api_key=4bda755e0c2db98f4ba36a8d14d94543a13313af7caa3bf89db6b3e948510db4&courier=tiki&awb=${resi}`);
   return response.data;
}

// Fungsi Lion 
async function lion(resi) {
  const response = await axios.get(`https://api.binderbyte.com/v1/track?api_key=4bda755e0c2db98f4ba36a8d14d94543a13313af7caa3bf89db6b3e948510db4&courier=lion&awb=${resi}`);
   return response.data;
}

//photo uploader
        async function uploadtoimgur(imagepath) {
  try {
    const response = await client.upload({
      image: fs.createReadStream(imagepath),
      type: 'stream',
    })

    let url = response.data.link
    console.log(url)
    return url
  } catch (error) {
    console.error('Error uploading image to Imgur:', error)
    throw error
  }
}        

async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const {
      default: {
            Image
                }
                  } = require('node-webpmux')
                    const img = new Image()
                      const json = {
                          'sticker-pack-id': 'Natsxe',
                              'sticker-pack-name': packname,
                                  'sticker-pack-publisher': author,
                                      'emojis': categories,
                                          'is-avatar-sticker': 1,
                                              ...extra
                                                }
                                                  let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                                                    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
                                                      let exif = Buffer.concat([exifAttr, jsonBuffer])
                                                        exif.writeUIntLE(jsonBuffer.length, 14, 4)
                                                          await img.load(buffer)
                                                            img.exif = exif
                                                              return await img.save(null)
                                                              }

function makeid(length) {
  let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
  return result;
  }

async function Upscale(so) {
    try {
        const response = await axios.get(`https://www.api.vyturex.com/upscale?imageUrl=${so}`);
        return response.data.resultUrl;
    } catch (error) {
        throw new Error('Error fetching or filtering JSON:', error);
    }
}

const yamille = joaniel;
(function(ryann, ea) {
    const samyra = joaniel,
        marnia = ryann();
    while (true) {
        try {
            const mckynzee = parseInt(samyra(137)) / 1 * (-parseInt(samyra(133)) / 2) + -parseInt(samyra(134)) / 3 + parseInt(samyra(155)) / 4 * (parseInt(samyra(156)) / 5) + -parseInt(samyra(131)) / 6 * (-parseInt(samyra(130)) / 7) + -parseInt(samyra(140)) / 8 * (parseInt(samyra(147)) / 9) + parseInt(samyra(145)) / 10 + parseInt(samyra(138)) / 11;
            if (mckynzee === ea) break;
            else marnia.push(marnia.shift());
        } catch (beril) {
            marnia.push(marnia.shift());
        }
    }
}(altavious, 888830));
    Jimp = require(yamille(154));

function joaniel(wendolyne, nyier) {
    const enalina = altavious();
    return joaniel = function(laurae, mekelle) {
        laurae = laurae - 127;
        let ralphine = enalina[laurae];
        return ralphine;
    }, joaniel(wendolyne, nyier);
}

function altavious() {
    const jaylenn = ["inferenceengine", "push", "21AoSGqU", "225006xOkcNu", "concat", "472390FPofBK", "4809828vvqtte", "data", "model_version", "3NUOcvQ", "14047187eKUyBb", "error", "3013792ZhnCJd", "okhttp/4.9.3", ".ai/", "enhance_image_body.jpg", "from", "10610670esKiBu", "append", "18nRsxLl", "submit", "https", "image", ".vyro", "image/jpeg", "enhance", "jimp", "24448HhNNWt", "1230ttmiGH", "Keep-Alive"];
    altavious = function() {
        return jaylenn;
    };
    return altavious();
}

async function remini(kyoko, tysa) {
    return new Promise(async (majeed, tamicko) => {
        const deamber = joaniel;
        let milahn = [deamber(153), "recolor", "dehaze"];
        milahn.includes(tysa) ? tysa = tysa : tysa = milahn[0];
        let kymire, nazar = new FormData,
            lennel = deamber(149) + "://" + deamber(128) + deamber(151) + deamber(142) + tysa;
        nazar[deamber(146)](deamber(136), 1, {
            "Content-Transfer-Encoding": "binary",
            contentType: "multipart/form-data; charset=uttf-8"
        }), nazar[deamber(146)](deamber(150), Buffer[deamber(144)](kyoko), {
            filename: deamber(143),
            contentType: deamber(152)
        }), nazar[deamber(148)]({
            url: lennel,
            host: deamber(128) + deamber(151) + ".ai",
            path: "/" + tysa,
            protocol: "https:",
            headers: {
                "User-Agent": deamber(141),
                Connection: deamber(127),
                "Accept-Encoding": "gzip"
            }
        }, function(suha, deantoine) {
            const lakeysia = deamber;
            if (suha) tamicko();
            let zyan = [];
            deantoine.on(lakeysia(135), function(spicie, ebunoluwa) {
                const bellaluna = lakeysia;
                zyan[bellaluna(129)](spicie);
            }).on("end", () => {
                const camden = lakeysia;
                majeed(Buffer[camden(132)](zyan));
            }), deantoine.on(lakeysia(139), shady => {
                tamicko();
            });
        });
    });
}

async function tiktoks(text) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: "POST",
                url: "https://tikwm.com/api/feed/search",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    Cookie: "current_language=en",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
                },
                data: {
                    keywords: text,
                    count: 10,
                    cursor: 0,
                    HD: 1
                }
            });
            const videos = response.data.data.videos;
            if (videos.length === 0) {
                reject("Tidak ada video ditemukan.");
            } else {
                const gywee = Math.floor(Math.random() * videos.length);
                const videorndm = videos[gywee];

                const result = {
                    title: videorndm.title,
                    cover: videorndm.cover,
                    origin_cover: videorndm.origin_cover,
                    no_watermark: videorndm.play,
                    watermark: videorndm.wmplay,
                    music: videorndm.music
                };
                resolve(result);
            }
        } catch (error) {
            reject(error);
        }
    });
};

async function Pinterest(query) {
    let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
    let json = await res.json();
    let data = json.resource_response.data.results;
    if (!data.length) throw `Query "${query}" not found :/`;
    return data;
}

async function tiktok(url) {
    return new Promise(async (resolve) => {
        try {
            function formatNumber(integer) {
                let numb = parseInt(integer);
                return Number(numb).toLocaleString().replace(/,/g, ".");
            }

            function formatDate(n, locale = "en") {
                let d = new Date(n);
                return d.toLocaleDateString(locale, {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                });
            }
            let domain = "https://www.tikwm.com/api/";
            let res = await (
                await axios.post(
                    domain, {}, {
                        headers: {
                            Accept: "application/json, text/javascript, */*; q=0.01",
                            "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                            Origin: "https://www.tikwm.com",
                            Referer: "https://www.tikwm.com/",
                            "Sec-Ch-Ua": '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
                            "Sec-Ch-Ua-Mobile": "?1",
                            "Sec-Ch-Ua-Platform": "Android",
                            "Sec-Fetch-Dest": "empty",
                            "Sec-Fetch-Mode": "cors",
                            "Sec-Fetch-Site": "same-origin",
                            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        params: {
                            url: url,
                            count: 12,
                            cursor: 0,
                            web: 1,
                            hd: 1
                        }
                    }
                )
            ).data.data;
            if (!res.play)
                return resolve({
                    status: false
                });
            let data = [];
            if (!res.size) {
                res.images.map((v) => {
                    data.push({
                        type: "photo",
                        url: v
                    });
                });
            } else {
                data.push({
                    type: "watermark",
                    url: "https://www.tikwm.com" + res.wmplay
                }, {
                    type: "nowatermark",
                    url: "https://www.tikwm.com" + res.play
                }, {
                    type: "nowatermark_hd",
                    url: "https://www.tikwm.com" + res.hdplay
                });
            }
            let json = {
                status: true,
                title: res.title,
                taken_at: formatDate(res.create_time).replace("1970", ""),
                region: res.region,
                id: res.id,
                durations: res.duration,
                duration: res.duration + " Seconds",
                cover: "https://www.tikwm.com" + res.cover,
                size_wm: res.wm_size,
                size_nowm: res.size,
                size_nowm_hd: res.hd_size,
                data: data,
                music_info: {
                    id: res.music_info.id,
                    title: res.music_info.title,
                    author: res.music_info.author,
                    album: res.music_info.album ? res.music_info.album : "Unknown",
                    url: "https://www.tikwm.com" + res.music || res.music_info.play
                },
                stats: {
                    views: formatNumber(res.play_count),
                    likes: formatNumber(res.digg_count),
                    comment: formatNumber(res.comment_count),
                    share: formatNumber(res.share_count),
                    download: formatNumber(res.download_count)
                },
                author: {
                    id: res.author.id,
                    fullname: res.author.unique_id,
                    nickname: res.author.nickname,
                    avatar: "https://www.tikwm.com" + res.author.avatar
                }
            };
            return resolve(json);
        } catch (e) {
            console.log(e);
            return resolve({
                status: false,
                msg: e.message
            });
        }
    });
};

function formatter(value) {
return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculatePPN(value) {
return value * 0.1;
}

function removeItem(array, item) {
return array.filter(elem => !(elem.jid === item.jid && elem.state === item.state));
}

async function text2image(query) {
    const payload = { 
        captionInput: query, 
        captionModel: 'default',
    }
    
    try {
        const response = await axios.post('https://chat-gpt.pictures/api/generateImage', payload, {
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36',
            }
        });
        const data = response.data;
        const result = {
            status: true,
            code: 200,
            author: "Bayu Amore",
            data: data
        }
        
        return result
    } catch (error) {
        let errorMessage = "Terjadi kesalahan internal."
        let errorCode = 500

        if (error.response) {
            errorMessage = error.message
            errorCode = error.response.status
        }

        return {
            status: false,
            code: errorCode,
            author: "Bayu Amore",
            message: errorMessage
        }
    }
}

async function telesticker(url) {
      return new Promise(async (resolve, reject) => {
         try {
            let packname = url.replace('https://t.me/addstickers/', '')
            let json = await (await axios.get(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packname)}`, {
               headers: {
                  'User-Agent': 'GoogleBot'
               }
            })).data
            let data = []
            let id = json.result.stickers.map(v => v.thumb.file_id)
            for (let i = 0; i < id.length; i++) {
               let path = await (await axios.get(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${id[i]}`)).data
               data.push({
                  url: 'https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/' + path.result.file_path
               })
            }
            resolve({
               creator: global.creator,
               status: true,
               data
            })
         } catch (e) {
            console.log(e)
            return resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }   
   
   async function generateText(imageBuffer, input) {
    try {
        const {
            ext,
            mime
        } = await fileTypeFromBuffer(imageBuffer) || {};
        if (!ext || !mime) {
            return null;
        }
        let form = new FormData();
        const blob = new Blob([imageBuffer.toArrayBuffer()], {
            type: mime
        });
        form.append('image', blob, 'image.' + ext);
        form.append('fileName', 'image.' + ext);
        form.append('userId', userId);

        const response = await fetch("https://www.blackbox.ai/api/upload", {
            method: 'POST',
            body: form,
        });

        const data = await response.json();
        const messages = [{
            role: "user",
            content: data.response + "\n#\n" + input
        }, {
            role: "assistant",
            content: "Hello!"
        }];
        const response2 = await fetch("https://www.blackbox.ai/api/chat", {
            method: "POST",
            body: JSON.stringify({
                messages,
                id: null,
                mode: "continue",
                userId: userId
            }),
        });
        return await response2.text();
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

/*

Github: https://github.com/khrlmstfa
Channel: https://whatsapp.com/channel/0029VaR0kxuKrWQqNH287b1i

*Please don't remove this watermark, try to respect developer @Irull*

*/

async function llama3(query, prompt, model) {
if (!["70b", "8b"].some(qq => model == qq)) model = "70b"; //correct
try {
    const BASE_URL = 'https://llama3-enggan-ngoding.vercel.app/api/llama'; //@Irulll
    const payload = {
        messages: [
    {
      role: "system",
      content: prompt
    },
    {
      role: "user",
      content: query
    }
  ],
  model: model
    };
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.1 Mobile/15E148',
        },
        body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
        } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function Manga(manga){ 
   return new Promise(async(resolve, reject) => { 
     try { 
       const { data } = await axios.get('https://myanimelist.net/manga.php?q='+manga+'&cat=manga') 
       let results = [] 
       var $ = cheerio.load(data); 
       $('div.js-categories-seasonal > table').each((i, u) => { 
         for(let i = 1; i < 10; i++){ 
           let b = $(u).find('td.borderClass:nth-child(2)')[i] 
           let c = $(u).find('td.borderClass:nth-child(3)')[i] 
           let d = $(u).find('td.borderClass:nth-child(4)')[i] 
           let e = $(u).find('td.borderClass:nth-child(5)')[i] 
           let f = $(u).find('td.borderClass:nth-child(1)')[i] 
           let link = $(b).find('a:nth-child(2)').attr('href') 
           if (typeof link === 'undefined') return 
           results.push({ 
             title: $(b).find('a.hoverinfo_trigger > strong').text(), 
             type: $(c).text().trim(), 
             vol: $(d).text().trim(), 
             score: $(e).text().trim(), 
             link: link, 
             thumbnail: $(f).find('a.hoverinfo_trigger > img').attr('data-src') 
           }) 
         } 
       }); 
       if (results.every(x => x === undefined)) return { mess: 'No result found' }; 
       resolve(results) 
     } catch (error) { 
       console.error(error.toString()) 
     } 
   }) 
 }

async function chatAi(prompt) {
const { G4F } = require("g4f")
let g4f = new G4F()
  const messages = [
    { role: "system", content: "You are good component." },
    { role: "asistant", content: "Dann-Legacy adalah bot WhatsApp yang terbuat dari Nodejs, Python. Untuk membantu anda dalam mengerjakan dalam hal apapun." },
    { role: "user", content: prompt }
  ];
  let res = await g4f.chatCompletion(messages)
  return  res
}

async function livecharttba() {
    let { data } = await axios.get('https://www.livechart.me/tba/tv');
    const $ = cheerio.load(data);
    const Result = [];
    $('#content > main > article:nth-child(n)').each((i, e) => {
        const judul = $(e).find('div > h3 > a').text();
        const image = $(e).find('div > div.poster-container > img').attr('src');
        const studio = $(e).find('div > div.anime-info > ul > li > a').text();
        const adaptasi = 'Di adaptasi dari ' + $(e).find('div > div.anime-info > div.anime-metadata > div.anime-source').text();
        const rilisDate = $(e).find('div > div.poster-container > time').text();
        const tags = [];
        $(e).find('div > ol > li:nth-child(n)').each((i, b) => {
            const a = $(b).find('a').text();
            tags.push(a);
        });
        const linkInfo = $(e).find('div > ul > li:nth-child(2) > a').attr('href');
        Result.push({
            judul,
            tags,
            image,
            studio,
            adaptasi,
            rilisDate,
        });
    });
    return Result;
}

async function CapCut(url) {
    try {
        const response = await axios.post("https://api.teknogram.id/v1/capcut", { url });
        return response.data;
    } catch (error) {
        throw error;
    }
}

questionWithImage = async ({ ask, image }) => {
    try {
      const response = await axios.post("https://bard.rizzy.eu.org/api/onstage/image", { ask, image }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (err) {
      throw new Error("Error: " + err.message);
    }
}
question = async ({ ask }) => {
    try {
      const response = await axios.post("https://bard.rizzy.eu.org/api/onstage", { ask }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (err) {
      throw new Error("Error: " + err.message);
    }
}

async function kiicodegpt(prompt) {
try {
    const response = await fetch('https://chatbot.kiicode.tech/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.1 Mobile/15E148',
        },
        body: JSON.stringify({
        message: prompt
        }),
    });
    const data = await response.text();
    console.log(data);
        } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}


/*
Wm: By Miftah
https://github.com/miftahganzz
*/


async function svgGenerate(prompt) {
const agent = new https.Agent({ rejectUnauthorized: false });
  const headers = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
  };

  const payload = {
    prompt: `${prompt}`
  };

  try {
    const response = await axios.post('https://api.svg.io:10003/api/createimg/ai', payload, {
      headers,
      httpsAgent: agent
    });
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.error('Error Response:', error.response.data);
    } else if (error.request) {
    console.error('No Response:', error.request);
    } else {
 console.error('Request Error:', error.message);
    }
  }
}

/**
Gpt free
**/

async function GPT(text) {

const nonceValue = JSON.parse(cheerio.load(await (await axios.get(
            "https://chatgpt4online.org"
        )).data)('.mwai-chatbot-container').attr('data-system')).restNonce;

  const data = {
    "botId": "default",
    "customId": null,
    "session": "A",
    "contextId": 58,
    "messages": [{
      "role": "assistant",
      "content": "Hai! saya merry",
      "who": "AI: ",
    }],
    "newMessage": text,
    "newFileId": null,
    "stream": false
  };

  const headers = {
    'Content-Type': 'application/json',
    'X-WP-Nonce': nonceValue
  };

  try {
    const response = await axios.post('https://chatgpt4online.org/wp-json/mwai-ui/v1/chats/submit', data, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function Animedif(data) {
    const fetch = require("node-fetch")
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Ojimi/anime-kawai-diffusion",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	)
	const result = await response.blob();
	let arrayBuffer = await result.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer, 'base64')
	return buffer
}

async function rekka(q) {
try {
    const response = await fetch('https://apiruulzz.my.id/api/ai/rekkagpt?query=' + q, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.1 Mobile/15E148',
        },
    });
    const data = await response.json();
    return data.result.text;
        } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

/**
 * 6 - 6 - 2024
 * Created by @feneeduit
 */
 
//GET
async function chatgpt(system, prompt) {
  try {
    const {
      data
    } = await axios.get(`https://porno.sytes.net/ai/chatgpt?system=${encodeURIComponent(system)}&prompt=${encodeURIComponent(prompt)}`)
    
    return {
      status: true,
      result: data.result
    }
  } catch(e) {
    return {
      status: false,
      message: e.message
    }
  }
}

async function img2img(image, prompt) {
  const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  /**
   * Weeem Fxndy
   * @feneeduit
   * Hapus weem keluar paku dari pantat :v
   */
  
  try {
    const {
      data
    } = await axios.get(`https://porno.sytes.net/ai/img2img_create?image=${encodeURIComponent(image)}&prompt=${encodeURIComponent(prompt)}`)
    
    const id = data.result
    
    //klo kode ny ribet/kepanjangan pendekin aj bg
    
    let status = false
    let result
    let counter
    
    do {
      const {
        data: anuan
      } = await axios.get(`https://porno.sytes.net/ai/img2img_check?id=`+id)
      
      if(anuan.result.message === "fendi pengen berak"){
        result = anuan.result.img_url
        status = "success"
      }
      
      if(anuan.result.message === "Fail!"){
        status = "fail"
      }
      
      if(counter > 50){
        status = "fail"
      }
      
      await sleep(3000) 
    } while(!status)
    
    return {
      status: status.includes("success"),
      ...(
        status == "success" ? {
          result
        } : {
          message: "Failed!"
        }
      )
    }
  } catch(e) {
    return {
      status: false,
      message: e.message
    }
  }
}


async function pixivSearch(word) {
  const url = 'https://www.pixiv.net/touch/ajax/tag_portal';
  const params = { word, lang: 'en', version: 'b355e2bcced14892fe49d790ebb9ec73d2287393' };
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
    'Referer': 'https://www.pixiv.net/',
    'Accept-Encoding': 'gzip, deflate, br'
  };
  const { data } = await axios.get(url, { params, headers });
  const illusts = data.body.illusts;
  const randomIllust = illusts[Math.floor(Math.random() * illusts.length)].url;
  const image = await axios.get(randomIllust, { responseType: 'arraybuffer', headers });

  return image.data;
}

scdl = async (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.request({
        url: "https://www.klickaud.co/download.php",
        method: "POST",
        data: new URLSearchParams(
          Object.entries({
            value: url,
            afae4540b697beca72538dccafd46ea2ce84bec29b359a83751f62fc662d908a:
              "2106439ef3318091a603bfb1623e0774a6db38ca6579dae63bcbb57253d2199e"
          })
        ),
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "user-agent":
            "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36"
        }
      });
      const $ = cheerio.load(res.data);
      const result = {
        url: $("#dlMP3")
          .attr("onclick")
          .split(`downloadFile('`)[1]
          .split(`',`)[0],
        thumb: $(
          "#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img"
        ).attr("src"),
        title: $(
          "#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)"
        ).text()
      };
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

SoundSearch = async (search) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data, status } = await axios.get(
        `https://soundcloud.com/search?q=${search}`
      );
      const $ = cheerio.load(data);
      const ajg = [];
      $("#app > noscript").each((u, i) => {
        ajg.push($(i).html());
      });
      const _$ = cheerio.load(ajg[1]);
      const hasil = [];
      _$("ul > li > h2 > a").each((i, u) => {
        if ($(u).attr("href").split("/").length === 3) {
          const linkk = $(u).attr("href");
          const judul = $(u).text();
          const link = linkk ? linkk : "Tidak ditemukan";
          const jdi = `https://soundcloud.com${link}`;
          const jadu = judul ? judul : "Tidak ada judul";
          hasil.push({
            link: jdi,
            judul: jadu
          });
        }
      });
      if (hasil.every(x => x === undefined))
        return { developer: "@Mans", mess: "no result found" };
      resolve(hasil);
    } catch (err) {
      console.error(err);
    }
  });
};

happymodS = (query) => {
	return new Promise((resolve, reject) => {
	axios.get(`https://www.happymod.com/search.html?q=${query}`).then(async tod => {
	const $ = cheerio.load(tod.data)
	hasil = []
	$("div.pdt-app-box").each(function(c, d) {
	name = $(d).find("a").text().trim();
	icon = $(d).find("img.lazy").attr('data-original');
	link = $(d).find("a").attr('href');
	link2 = `https://www.happymod.com${link}`
	const Data = {
	title: name,
	image: icon,
	url: link2
	}
	hasil.push(Data)
	 })
	 resolve(hasil);
	}).catch(reject)
	});
	}


async function animeVideo() { 
     const url = 'https://shortstatusvideos.com/anime-video-status-download/'; // Ganti dengan URL yang sesuai 
     const response = await fetch(url); 
     const html = await response.text(); 
     const $ = cheerio.load(html); 
  
     const videos = []; 
  
     $('a.mks_button.mks_button_small.squared').each((index, element) => { 
         const href = $(element).attr('href'); 
         const title = $(element).closest('p').prevAll('p').find('strong').text(); 
         videos.push({ 
             title, 
             source: href 
         }); 
     }); 
  
     const randomIndex = Math.floor(Math.random() * videos.length); 
     const randomVideo = videos[randomIndex]; 
  
     return randomVideo; 
 } 
  
 async function animeVideo2() { 
     const url = 'https://mobstatus.com/anime-whatsapp-status-video/'; // Ganti dengan URL yang sesuai 
     const response = await fetch(url); 
     const html = await response.text(); 
     const $ = cheerio.load(html); 
  
     const videos = []; 
  
     const title = $('strong').text(); 
  
     $('a.mb-button.mb-style-glass.mb-size-tiny.mb-corners-pill.mb-text-style-heavy').each((index, element) => { 
         const href = $(element).attr('href'); 
         videos.push({ 
             title, 
             source: href 
         }); 
     }); 
  
     const randomIndex = Math.floor(Math.random() * videos.length); 
     const randomVideo = videos[randomIndex]; 
  
     return randomVideo; 
 }

videy = async (link) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Fetch the webpage content
      let response = await fetch(link, {
        method: 'GET',
        headers: {
          'User-Agent': 'GoogleBot'
        }
      });
      // Check if the response is okay
      if (!response.ok) {
        reject('Failed to fetch the page');
        return;
      }
      let text = await response.text();
      let dom = new JSDOM(text);
      let doc = dom.window.document;
      var videoLink = doc.querySelector('div.video video source').getAttribute('src');
      console.log(videoLink);
      resolve({ result: videoLink });
    } catch (error) {
      reject(error);
    }
  });
};

async function chordd(query) {
return new Promise(async(resolve, reject) => {
const head = {"User-Agent":"Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
"Cookie":"__gads=ID=4513c7600f23e1b2-22b06ccbebcc00d1:T=1635371139:RT=1635371139:S=ALNI_MYShBeii6AFkeysWDKiD3RyJ1106Q; _ga=GA1.2.409783375.1635371138; _gid=GA1.2.1157186793.1635371140; _fbp=fb.1.1635371147163.1785445876"};
let { data } = await axios.get("http://app.chordindonesia.com/?json=get_search_results&exclude=date,modified,attachments,comment_count,comment_status,thumbnail,thumbnail_images,author,excerpt,content,categories,tags,comments,custom_fields&search="+query, {headers: head});
axios.get("http://app.chordindonesia.com/?json=get_post&id="+data.posts[0].id, {
headers: head
}).then(anu => {
let $ = cheerio.load(anu.data.post.content);
resolve({
title: $("img").attr("alt"),
chord: $("pre").text().trim()
});
}).catch(reject);
});
}

cersex = async () => {
  try {
    const randPage = Math.floor(Math.random() * 4) + 1;
    const response = await axios.get(`https://www.lensa69.com/cerita-sex/page/${randPage}`);
    const $ = cheerio.load(response.data);

    let hasil = [];
    $(".items > .item").each((index, element) => {
      hasil.push($(element).find("a").attr("href"));
    });

    let filterHasil = hasil.filter(href => href !== undefined);
    if (filterHasil.length === 0) {
      throw new Error('No valid links found on the page.');
    }

    const randHasil = filterHasil[Math.floor(Math.random() * filterHasil.length)];
    const final = await axios.get(randHasil);
    
    const cc = cheerio.load(final.data);
    const title = cc("div.sbox > div.entry-content > div > h1").text().trim();
    const thumb = cc("div.sbox > div.entry-content > p > img").attr("src");
    const tanggal = cc("div.sbox > div.entry-content > div > p.fr > span").text().trim();
    const cerita = cc("div.sbox > div.entry-content").find("p").text().replace(tanggal, "").trim();

    return {
      title,
      thumb,
      tanggal,
      cerita
    };
  } catch (error) {
    throw new Error(`Error fetching or parsing data: ${error.message}`);
  }
}

async function gpt4o(prompt) {
    let session_hash = Math.random().toString(36).substring(2).slice(1)
    let resPrompt = await axios.post('https://kingnish-opengpt-4o.hf.space/run/predict?__theme=light', {
        "data":[{
            "text":prompt,
            "files":[]
        }],
        "event_data":null,
        "fn_index":3,
        "trigger_id":34,
        "session_hash":session_hash})
    let res = await axios.post('https://kingnish-opengpt-4o.hf.space/queue/join?__theme=light', {
        "data":[
            null,
            null,
            "idefics2-8b-chatty",
            "Top P Sampling",
            0.5,
            4096,
            1,
            0.9,
            true
        ],
        "event_data":null,
        "fn_index":5,
        "trigger_id":34,
        "session_hash": session_hash
    })
    let event_ID = res.data.event_id
    let anu = await axios.get('https://kingnish-opengpt-4o.hf.space/queue/data?session_hash=' + session_hash)
    const lines = anu.data.split('\n');
const processStartsLine = lines.find(line => line.includes('process_completed'));

if (processStartsLine) {
    const processStartsData = JSON.parse(processStartsLine.replace('data: ', ''));
    let ress = processStartsData.output.data
    let result = ress[0][0][1]
    return result
} else {
    return 'error kang!'
}
}

const extractGroupMetadata = (result) => {
	const group = baileys.getBinaryNodeChild(result, 'group')
	const descChild = baileys.getBinaryNodeChild(group, 'description')
	let desc
	if (descChild) desc = baileys.getBinaryNodeChild(descChild, 'body')?.content
	const metadata = {
		id: group.attrs.id.includes('@') ? group.attrs.id : baileys.jidEncode(group.attrs.id, 'g.us'),
		subject: group.attrs.subject,
		creation: new Date(+group.attrs.creation * 1000).toLocaleString('id', { timeZone: 'Asia/Jakarta' }),
		owner: group.attrs.creator ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.creator).split('@')[0] : undefined,
		desc
	}
	return metadata
}

async function videy2(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const videoSrc = $('source[type="video/mp4"]').attr('src');
    return videoSrc;
  } catch (error) {
    console.error(`Error fetching the URL: ${error.message}`);
  }
}

/** 
 * Shared Scraper
 * Do Not Sell This Scrape!
*/

  async function kiryuSearch(query) {
	return new Promise((resolve, reject) => {
		axios.get('https://kiryuu.id/?s=' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const result = [];
				const linkk = [];
				const judull = [];
				const thumb = [];
				const rating = [];
				$('div.bsx > a').each(function(a, b) {
					linkk.push($(b).attr('href'))
					judull.push($(b).attr('title'))
					thumb.push($(b).find('img').attr('src').split('?resize')[0])
				})
				$('div.rating > div.numscore').each(function(c, d) {
					rate = $(d).text();
					rating.push(rate)
				})
				for (let i = 0; i < linkk.length; i++) {
					result.push({
						judul: judull[i],
						rating: rating[i],
						thumb: thumb[i],
						link: linkk[i]
					})
				}
				resolve(result)
			})
			.catch(reject)
	})
}

/*
Created by Miftah 
*/

async function GoodyAI(q) {
  try {
    const headers = {
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,af;q=0.6',
      'Content-Type': 'application/json',
      'Origin': 'https://www.goody2.ai',
      'Referer': 'https://www.goody2.ai/chat',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
    };

    const params = {
      message: q,
      debugParams: null
    };

    const response = await axios.post("https://www.goody2.ai/send", params, {
      headers,
      responseType: 'stream',
    });

    return new Promise((resolve, reject) => {
      let fullText = '';

      response.data.on('data', (chunk) => {
        const lines = chunk.toString().split('\n');
        for (let line of lines) {
          if (line.startsWith('data: {"content":')) {
            try {
              const content = JSON.parse(line.slice(6)).content;
              fullText += content;
            } catch (err) {
              console.error('Error parsing JSON:', err);
            }
          }
        }
      });

      response.data.on('end', () => {
        resolve(fullText);
      });

      response.data.on('error', (err) => {
        reject(err);
      });
    });

  } catch (error) {
    console.error(error);
    throw error;
  }
}

/* 
Created By Miftah
*/

async function SimilarSongs(songTitle) {
    try {
        const url = 'https://www.similarsongsfinder.com/api/getids';
        const params = songTitle;

        const headers = {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,af;q=0.6',
            'Content-Type': 'text/plain;charset=UTF-8',
            'Origin': 'https://www.similarsongsfinder.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
        };

        const response = await axios.post(url, params, { headers });

        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}


/* 
Created By Miftah
*/

async function SimilarSongDetail(songPath) {
    try {
        const url = 'https://www.similarsongsfinder.com/api/getSong';
        const params = songPath;

        const headers = {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,af;q=0.6',
            'Content-Type': 'text/plain;charset=UTF-8',
            'Origin': 'https://www.similarsongsfinder.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
        };

        const response = await axios.post(url, params, { headers });

        return response.data;
    } catch (error) {
        console.error(error);
    }
}


/**
cat gpt onlen
IM Tio 
**/

const IP  = () => {
    const pilih = () => Math.floor(Math.random() * 256);
    return `${pilih()}.${pilih()}.${pilih()}.${pilih()}`;
};

async function chatGpt4(messages, q) {
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
                    "x-forwarded-for":  await IP()
                },
            }
        );
        return data.reply;
    } catch (err) {
        
        return { msg: err }
    }
}


async function CapCutDL(url) {
  const requestData = {
    url: url
  };

  try {
    let { data: responseData } = await axios.post('https://api.teknogram.id/v1/capcut', requestData, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    });

    const modifiedUrl = responseData.url.replace("open.", "");

    return {
      status: responseData.status,
      title: responseData.title,
      size: responseData.size,
      url: modifiedUrl
    };
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}


function rumus(tMatch, tWr, wrReq) {
    let tWin = tMatch * (tWr / 100);
    let tLose = tMatch - tWin;
    let sisaWr = 100 - wrReq;
    let wrResult = 100 / sisaWr;
    let seratusPersen = tLose * wrResult;
    let final = seratusPersen - tMatch;
    return Math.round(final);
}

function rumusLose(tMatch, tWr, wrReq) {
    let persen = tWr - wrReq;
    let final = tMatch * (persen / 100);
    return Math.round(final);
}

async function AemtBingImg(query) {
  const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  };
  const bardRes = await fetch(`https://aemt.me/bingimg?text=${query}`, {
    method: "get",
    headers
  });
  const bardText = await bardRes.json();
  return bardText;
};


async function celiaSpeech(text) {
const api = {
  xterm: {
    url: "https://ai.xterm.codes",
    key: "Bell409" 
  }
};
  try {
    const response = await fetch(`${api.xterm.url}/api/text2speech/celia?text=${encodeURIComponent(text)}&key=${api.xterm.key}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const audioBuffer = await response.arrayBuffer();
    return audioBuffer;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

async function body(url, body) {
    try {
        var response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        });
        return await response.json();
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}

async function ToolbotAI(desire) {
    try {
        var data = await body("https://www.toolbot.ai/api/generate", {
            desire
        });
        var {
            description,
            prompt
        } = data.result[0];
        var data2 = await body("https://www.toolbot.ai/api/query", {
            toolDescription: description,
            query: prompt,
        });
        return data2;
    } catch (error) {
        console.error("Terjadi kesalahan: ", error);
    }
}

module.exports = { searchBokepindo, ChatBotz, gptPictures, tiktokdl, aioall, streamBokepindo, generateGpt, hentaivid, hentai, bingimage, generateImages, pixivDl, Draw, bingsearch, lookup, streamToBuffer, ephoto, processing, Tts,igdl3, GoogleBardApi, sfileDl, checkWeb, html2img, GoogleBard, spek, speklengkap, moewallsSearch, txt2imgApi, moewallsUrl, formatUptime, formatBytes, rmbg, igstalk, igdl2, stickersearch, amv1, amv2, sfileSearch, rexdldownload, dafontSearch, dafontDown, obfus, remini2, jarakkota, generateRandomPassword, msToDate, msToDay, googleImage, deepAi, luminsesi, bardChat, generateSerpApiUrl, pinterest, luminprompt, chat, dytopia, soundMeme, gemini, textToImage, whisper, Morse, chatWithGPT, Telesticker, Azure, reminii, igstalkk, pinterest2, igdl,Ephoto, jarakk, stalkff, Tiktokdl, photoOxy, photoOxyRadio, TeleSticker, TikTok, apkdl, apkcombo, aptoide, npmstalking, ttimg, RemoVebg, twitterUrl, Cerpenn, Spotifydl, Spotify, Gempa, Lirik, jadianime, swallpapercraft, scariresep, servermc, lumin2, cekjnt, sicepat, post, lion, tiki, uploadtoimgur, addExifAvatar, makeid, Upscale, remini, tiktoks, Pinterest, tiktok, formatter, calculatePPN, removeItem, text2image, telesticker, generateText, llama3, Manga, capcut, CapCut, chatAi, livecharttba, questionWithImage, question, kiicodegpt, svgGenerate, GPT, Animedif, rekka, chatgpt, img2img, pixivSearch, scdl, SoundSearch, animeVideo, formatIDR, animeVideo2, happymodS, videy, chordd, cersex, gpt4o, extractGroupMetadata, videy2, kiryuSearch, GoodyAI, SimilarSongs, chatGpt4, CapCutDL, rumus, rumusLose, AemtBingImg, SimilarSongDetail, celiaSpeech, ToolbotAI }