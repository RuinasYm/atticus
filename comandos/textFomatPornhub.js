const Discord = require('discord.js');

module.exports = {
  name: "tpornhub",
  permisos_bot: ["ADMINISTRATOR"],
  async execute (client, message, args) {



message.delete() 

const txt = args.join('%20');   

if (!txt) return message.channel.send("**<:x_:1030676024662442065> |  Debes escribir el Texto que quieres que aparezca! <:x_:1030676024662442065>**") 
  
let autor = message.author; 

let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${txt}&username=${autor.username}&raw=1`,'logo.png') 

message.channel.send({files: [attachment] })    

  }
}