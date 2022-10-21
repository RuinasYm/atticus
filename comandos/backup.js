/*const Discord = require('discord.js');
const backup = require("discord-backup")

module.exports = {

  name: "backup", 
  alias: ["crear-backup"], 

  async execute (client, message, args) {

    if (message.author.id !== message.guild.ownerId) return message.reply(":no~2: \`|\` No eres el dueño del servidor")
 
    const msg = await message.reply({ content: "Escribe `confirmar` para crear la copia de seguridad\nEscribe `cancelar` para que no se cree la copia de seguridad"})
    const colect = await message.channel.awaitMessages({ filter:(m) => m.author.id, max: 1, time: 30000 });
    const content = colect.first().content;
    if (content === "confirmar") {
        backup.create(message.guild, {
            jsonBeautify: true,
        }).then((backupData) => {
            message.author.send(`:si: \`|\` Se ha creado una copia de seguridad del server\n\nSi quieres usarlo en tu servidor, ejecuta el siguiente comando: \n\`\`\`backup-load `+ backupData.id + "\n\`\`\`")
            message.channel.send(":si~1: \`|\` Se a creado una copia de suguridad mira tu md para ver la copia de seguridad")
        
        })
    } else if (content === "cancelar") {
        msg.edit(":si~1: \`|\` Se a cancelado el backup con exito")
    } else {
        return message.reply(":no~2: \`|\` Esa no es una opcion correcta")
    }
   }
}
*/