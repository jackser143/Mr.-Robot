
const fs = require('fs')
const chalk = require('chalk')
global.ytname = "Not-yet"
global.socialm = "Instagram: _mr.fro_ud_"
global.location = "Asia, India, Kerala"
global.botname = '🤍⃞𝄟ꪶ𝐒͢ʏ᪳ᴀ͓ᴍ͎ ͢𝐒ᴇ͓ꪳʀ͎𖦻⃞🍓'
global.ownernumber = '13025449902'
global.ownername = '*✪⃝⸸ꜛꪶ͢𝐒𝐘͔𝐀𝐌 𝐒𝐄𝐑͢ꫂꜜ™*'
global.websitex = "http://wa.me/13025449902@s.whatsapp.net"
global.wagc = "http://api.whatsapp.com/send?phone=+13025449902&text=WHER3+IS+TH3+LINK"
global.themeemoji = '🪀'
global.wm = "🤍⃞𝄟ꪶ𝐒͢ʏ᪳ᴀ͓ᴍ͎ ͢𝐒ᴇ͓ꪳʀ͎𖦻⃞🍓 By ✪⃝⸸ꜛꪶ͢𝐒𝐘͔𝐀𝐌 𝐒𝐄𝐑͢ꫂꜜ™."
global.botscript = 'https://github.com/jackser143/Mr.-Robot' 
global.packname = "Syam-sir"
global.author = "Syam~Xer"
global.creator = "13025449902@s.whatsapp.net"
global.xprefix = ','
global.premium = ["13025449902","919947121619"]
global.hituet = 0
global.typemenu = 'v12'
global.typereply = 'v4' 
global.autoblocknumber = '212' 
global.antiforeignnumber = '91'
global.welcome = true 
global.anticall = false
global.autoswview = true 
global.groupevent = true 
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Ahm chambhikko😌🙌🏼',
    error: 'Ahm umfii🤣👍🏻!',
    success: '*Hey boyy😉!*'
}

global.thumb = "https://i.imgur.com/bHcmcvc.jpeg"


global.xbugtex = {
xtxt: 'Itz Godfather',
}
global.bimg = 'https://i.imgur.com/IQxUnPw.mp4'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
