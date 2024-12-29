const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "8061938576,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_59_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgODgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDg5LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NyxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjksXG4gICAgICAgIDUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDg0LFxuICAgICAgICA2NixcbiAgICAgICAgMTI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDk2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDQxLFxuICAgICAgICA4NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA4LFxuICAgICAgICA3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNyxcbiAgICAgICAgODksXG4gICAgICAgIDYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMixcbiAgICAgICAgMjA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInREdEp0TlhBMjZodk9INHpvYUxWYitySVduT2U0REc4Wmd3SkRDdHdleGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA2MTkzODU3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkYyNzEyMkJDMENGMUNGNTgzREY3QzNBQjY2OTE5NDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1NDk1MTU1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndyVDg4OHYxUnBtTE4temtxQ0VYcndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTVhZWFhOTctMzQ2MC00MGJkLTkwYWEtY2JlMTBiYWM5ODVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDk1LFxuICAgICAgMTY4LFxuICAgICAgMzQsXG4gICAgICAyNTMsXG4gICAgICAyNDQsXG4gICAgICAyNTMsXG4gICAgICAxNjIsXG4gICAgICA5NSxcbiAgICAgIDIyOCxcbiAgICAgIDE1MyxcbiAgICAgIDIzMCxcbiAgICAgIDEzNSxcbiAgICAgIDE3MixcbiAgICAgIDEyLFxuICAgICAgMjAwLFxuICAgICAgNDIsXG4gICAgICAxNDcsXG4gICAgICA0NixcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgMjE2LFxuICAgICAgMjQxLFxuICAgICAgNDQsXG4gICAgICAxMDAsXG4gICAgICAxNDEsXG4gICAgICA3NixcbiAgICAgIDIxNyxcbiAgICAgIDIwNixcbiAgICAgIDk5LFxuICAgICAgMTkzLFxuICAgICAgNDIsXG4gICAgICAyMTIsXG4gICAgICA0NixcbiAgICAgIDUsXG4gICAgICAyMjEsXG4gICAgICAxMTcsXG4gICAgICA5MCxcbiAgICAgIDg3LFxuICAgICAgMjEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkUxNEdYMlZKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDYxOTM4NTc2OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDA3ODk2MTUxOTg0NTE6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnVjak5jREVPYWJ4cnNHR0E0Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNSUhaczU1TmhXakhmMTg3YzJXTEVHdEtXQndubFUrMmNoUXdvRzVTQmpNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkkrTjZiM2l0MkEraVBiSU5iNEZJU0piMzNTQndZeTVNL0ZJbzlaZHFwU2p1d01xdThmTFhlWkNIQnFpQ0l1ejAwKzF5QlR0WS9iblIwS3JNam1naERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRoQ0JwbThVcW5GZjhpQ0pmZWszOVE0Q2VGeVV4ekVubVRRcnZWSzZwaTA0eS9reDd0bFZMd1l6aW9pWjF4SmhrZXR2a1hHa2dXd3NQc0o1bGJFZkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjE5Mzg1NzY6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTQ5NTE1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9PTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT09MLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaG5yaTVoL21qQkE1bkMwdGZuZ1FCSUxVSTRGMko1ckY0dldPTHluaFNIYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5ODc5NTg4MTEsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDcsOV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
