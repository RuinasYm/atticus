/*const Discord = require('discord.js');
const backup = require("discord-backup")

module.exports = {

  name: "backup-load", 
  alias: [], 

  async execute (client, message, args) {

    if (message.author.id !== message.guild.ownerId) return message.reply("<a:no:979941529047138365> \`|\` No eres el dueÃ±o del servidor")

    const backupId = args[0]
    if(!backupId) return message.reply("<a:no:979941529047138365> \`|\` Debes escribir la id del backup")

    const max = args[1]
    if(!max) return message.reply("<a:no:979941529047138365> \`|\` Debes decir un numero de mensajes que guardar en cada canal")

    if(isNaN(max) || max < 0 || max % 1 !=0) return message.reply("<a:no:979941529047138365> \`|\` Debes encionar un numero valido")

    const msg = await message.reply({ content: "Escribe `confirmar` para cargar la copia de seguridad\nEscribe `cancelar` para cancelar la copia de seguridad"})
    const colect = await message.channel.awaitMessages({ filter: (m) => m.author.id, max: 1, time: 3000 });
    const content = colect.first().content;
    if(content === "confirmar"){
        backup.load(backupId, message.guild, { maxMessagePerChannel: parseInt(max) }).then(() => {
            backup.remove(backupId);
        }).catch((err) => {
            return message.channel.send("<a:no:979941529047138365> \`|\` Ha ocurrido un error")
        }).catch((err) => {
            return message.channel.send("<a:no:979941529047138365> \`|\` No se ha encontrado esta ID: **`" + backupId + "`")
        })
    } else if (content === "cancelar"){
        msg.edit("<a:si:979941529219112970> \`|\` Se a cancelado con exito")
    } else {
        return message.reply("<a:no:979941529047138365> \`|\` Esa no es una opcion correcta")
    }
 }
} 
*/