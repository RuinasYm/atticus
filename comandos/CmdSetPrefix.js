const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const prefix_db = new db.crearDB('prefix')

module.exports = {
  name: "setprefix", 
  alias: ["Setprefix"], 

 execute (client, message, args){

 if(!message.guild.me.permissions.has('MANAGE_GUILD')) {

  const embed1 = new Discord.MessageEmbed()
  .setTitle("I don't have permissions")
  .setDescription(" I don't have enough permissions to use this command.")
  .setFooter("Missing Permissions: MANAGE_GUILD")
  .setColor("RED")
  
return message.channel.send({ embeds: [embed1]});
}


if(!message.member.permissions.has('MANAGE_GUILD')) {

  const embed2 = new Discord.MessageEmbed()
  .setTitle("You don't have permissions")
  .setDescription(" You do not have sufficient permissions to use this command.")
  .setFooter("Missing Permissions: MANAGE_GUILD")
  .setColor("RED")
  
return message.channel.send({ embeds: [embed2]});
}

 if(!args[0]) {

  const embed2 = new Discord.MessageEmbed()
  .setDescription("You must write a new prefix")
  .setColor("RED")
  
  return message.channel.send({ embeds: [embed2]})

 }

 if(args.join(" ").match(/(<a?)?:\w+:(\d{18}>)?/g) || args.join(' ').match(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g)) {

  const embed2 = new Discord.MessageEmbed()
  .setDescription("You can't put emojis in the prefix")/////No puedes agregar emojis en el prefix
  .setColor("RED")
  
  return message.channel.send({ embeds: [embed2]})

 }

 let prefix = args.join(" ")
if(prefix.length > 5) {

  const embed2 = new Discord.MessageEmbed()
  .setDescription("You cannot set a prefix with more than 4 characters")////Para que el prefix no tenga mas de 4 caracteres
  .setColor("RED")
  
  return message.channel.send({ embeds: [embed2]})

 }

 prefix_db.establecer(message.guild.id, args[0])

 message.channel.send(`The new prefix is **${args[0]}**`)////Prefix Establecido

 }

}  
