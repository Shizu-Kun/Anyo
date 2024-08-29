let FormData = require("form-data");
let Jimp = require("jimp");
var axios = require('axios');
var cheerio = require('cheerio');


const clean = e => (e = e.replace(/(<br?\s?\/>)/gi, " \n")).replace(/(<([^>] )>)/gi, "");
const ssweb = (url, device = 'desktop') => {
 return new Promise((resolve, reject) => {
const base = 'https://www.screenshotmachine.com'
const param = {
url: url,
device: device,
cacheLimit: 0
}
axios({url: base + '/capture.php',
 method: 'POST',
 data: new URLSearchParams(Object.entries(param)),
 headers: {
'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
 }
}).then((data) => {
 const cookies = data.headers['set-cookie']
 if (data.data.status == 'success') {
axios.get(base + '/' + data.data.link, {
 headers: {
'cookie': cookies.join('')
 },
 responseType: 'arraybuffer'
}).then(({ data }) => {
result = {
status: 200,
result: data
}
 resolve(result)
})
 } else {
reject({ status: 404, statuses: `Link Error`, message: data.data })
 }
}).catch(reject)
 })
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

async function shortener(e) {
  return e;
}

async function cai(query, character) {
  try {
    const response = await axios.post('https://boredhumans.com/api_celeb_chat.php', `message=${query}&intro=${character}&name=${character}`, {
      headers: {
        'User-Agent': 'Googlebot-News',
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
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

async function remini(urlPath, method) {
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
				if (err) reject();
				let data = [];
				res
					.on("data", function (chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	});
}

async function findSongs(text) {
    try {
        const {
            data
        } = await axios.get("https://songsear.ch/q/" + encodeURIComponent(text));
        const $ = cheerio.load(data);
        const result = {
            title: $("div.results > div:nth-child(1) > .head > h3 > b").text() + " - " + $("div.results > div:nth-child(1) > .head > h2 > a").text(),
            album: $("div.results > div:nth-child(1) > .head > p").text(),
            number: $("div.results > div:nth-child(1) > .head > a").attr("href").split("/")[4],
            thumb: $("div.results > div:nth-child(1) > .head > a > img").attr("src")
        };

        const {
            data: lyricData
        } = await axios.get(`https://songsear.ch/api/song/${result.number}?text_only=true`);
        const lyrics = lyricData.song.text_html.replace(/<br\/>/g, "\n").replace(/&#x27;/g, "'");

        return {
            status: true,
            title: result.title,
            album: result.album,
            thumb: result.thumb,
            lyrics: lyrics
        };
    } catch (err) {
        console.log(err);
        return {
            status: false,
            error: "Unknown error occurred"
        };
    }
}


async function cai(query, character) {
  try {
    const response = await axios.post('https://boredhumans.com/api_celeb_chat.php', `message=${query}&intro=${character}&name=${character}`, {
      headers: {
        'User-Agent': 'Googlebot-News',
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports =
 { ssweb,
  spek, 
  cai, 
  findSongs,
   pinterest, 
   ephoto,
   formatUptime,
    hentai,
    tiktok,
    cai,
    whisper,
    remini
     }