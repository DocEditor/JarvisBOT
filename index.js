const { WAConnection } = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const time = moment().tz('Asia/Kolkata').format("HH:mm:ss")
const { banner } = require('./lib/functions')
require('./jarvis.js')
nocache('./jarvis.js', module => console.log(`'${module}' Updated!`))
nocache('./welcome.js', module => console.log(`'${module}' Updated!`))

async function starts() {
    const jarvis = new WAConnection()
    jarvis.version = [2, 2119, 6]
    console.log(banner.string)
    jarvis.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(`[ ${time} ] Scan Pack`)
    })

    jarvis.on('credentials-updated', () => {
        const authInfo = jarvis.base64EncodedAuthInfo()
        
        fs.writeFileSync('./jarvisbot.json', JSON.stringify(authInfo, null, '\t'))
    })
    
    fs.existsSync('./jarvisbot.json') && jarvis.loadAuthInfo('./jarvisbot.json')
    
    jarvis.connect();
    console.log(`Connected`)

	jarvis.on('group-participants-update', async (anu) => {
        require('./welcome.js')(jarvis, anu)
    })
    
	jarvis.on('message-new', async (mek) => {
        require('./jarvis.js')(jarvis, mek)
    })
    }
    
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()
