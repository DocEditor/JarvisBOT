const
	{
		WAConnection,
		ReconnectMode,
		MessageType,
		ProxyAgent,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const fs = require('fs')
const axios = require('axios')
const encodeUrl = require('encodeurl')
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const { simih, getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = jarvis = async (jarvis, anu) => {
	    if (!welkom.includes(anu.jid)) return
	    try {
        console.log(anu)
        const num = anu.participants[0]
        const mdata = await jarvis.groupMetadata(anu.jid)
        const pushnem = jarvis.contacts[num] != undefined ? jarvis.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : jarvis.contacts[num].notify || jarvis.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
        const thu = await jarvis.getStatus(anu.participants[0], MessageType.text)
        try {
        var ppus = await jarvis.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
         } catch (e) {
        var ppus = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        try {
        var ppgc = await jarvis.getProfilePicture(anu.jid)
         } catch (e) {
        var ppgc = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppus}`)
        shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
            if (anu.action == 'add') {
			myMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
			myDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
			var tgl = new Date();
			var day = tgl.getDate()
			var bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			const tanggalu = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
		    membr = mdata.participants.length
		    anu_user = jarvis.contacts[num]
            teks = `
┌───〔 Welcome 〕
┊
└───────────𔒝
ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ${mdata.subject}

🎈ɴᴀᴍᴇ : @${num.split('@')[0]}
🎈ʙɪᴏ : ${thu.status}
🎈ᴍᴇᴍʙᴇʀs : ${membr}
🎈ᴅᴀᴛᴇ : ${tanggalu}
🎈ʀᴇᴀᴅ ᴛʜᴇ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ ᴀɴᴅ 
sᴛᴀʏ ɪɴ ᴛʜᴇ ɢʀᴏᴜᴘ
`
        let buff = await getBuffer(ppus)
        jarvis.sendMessage(mdata.id, buff, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '919645694607-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName":`${pushnem}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;${num.split('@')[0]};;;\nFN:${num.split('@')[0]}\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}, contextInfo: {"mentionedJid": [num]}, caption: teks})
        }
        else if (anu.action == 'promote') {
        	const mdata = await jarvis.groupMetadata(anu.jid)
        	myMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
			myDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
			var tgl = new Date();
			var day = tgl.getDate()
			var bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			const tanggalu = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
			const num = anu.participants[0]
			anu_user = jarvis.contacts[num]
                memeg = mdata.participants.length
                try {
					ppimg = await jarvis.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `
┌───〔 ᴘʀᴏᴍᴏᴛɪᴏɴ 〕
┊
└───────────𔒝
ᴘʀᴏᴍᴏᴛᴇ ᴅᴇᴛᴇᴄᴛᴇᴅ ɪɴ ${mdata.subject}

🎈ɴᴀᴍᴇ : @${num.split('@')[0]}
🎈ʙɪᴏ : ${thu.status}
🎈ᴅᴀᴛᴇ : ${tanggalu}
🎈ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴs`
			jarvis.sendMessage(mdata.id, buff, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '919645694607-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName":`${pushnem}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;${num.split('@')[0]};;;\nFN:${num.split('@')[0]}\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}, contextInfo: {"mentionedJid": [num]}, caption: teks})
		} else if (anu.action == 'demote') {
			myMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
			myDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
			var tgl = new Date();
			var day = tgl.getDate()
			var bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			const tanggalu = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
			num = anu.participants[0]
		 anu_user = jarvis.contacts[num]
                memeg = mdata.participants.length
			try {
					ppimg = await jarvis.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `
┌───〔 ᴘʀᴏᴍᴏᴛɪᴏɴ 〕
┊
└───────────𔒝
ᴅᴇᴍᴏᴛᴇ ᴅᴇᴛᴇᴄᴛᴇᴅ ɪɴ ${mdata.subject}

🎈ɴᴀᴍᴇ : @${num.split('@')[0]}
🎈ʙɪᴏ : ${thu.status}
🎈ᴅᴀᴛᴇ : ${tanggalu}
🎈ʏᴏᴜ ᴀʀᴇ ɴᴏ ʟᴏɴɢᴇʀ ᴀɴ ᴀᴅᴍɪɴ`
			jarvis.sendMessage(mdata.id, buff, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '919645694607-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName":`${pushnem}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;${num.split('@')[0]};;;\nFN:${num.split('@')[0]}\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}, contextInfo: {"mentionedJid": [num]}, caption: teks})
            }
	} catch (e) {
		console.log(e)
	}
	if (!kickarea.includes(anu.jid)) return
	    const num = anu.participants[0]
		const mdata = jarvis.groupMetadata(anu.jid)
		const pushnem = jarvis.contacts[num] != undefined ? jarvis.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : jarvis.contacts[num].notify || jarvis.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
		console.log(anu)
		if (num.includes('91')) return
	    bule = `${num.split('@')[0]}`
		console.log(color('Kick bule', 'yellow'))
		teks= `\`\`\`@${num.split('@')[0]}, !\`\`\``
		jarvis.sendMessage(mdata.id, teks, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '919645694607-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName":`${pushnem}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;${num.split('@')[0]};;;\nFN:${num.split('@')[0]}\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}, contextInfo: { mentionedJid: [num] }})
		sleep(5000)
        jarvis.groupRemove(anu.jid, [num])
        }
