const { MessageActionRow, MessageselectMenu, MessageEmbed, MessageButton} = require('discord.js');
module.exports = (client, message) => {

  const presence = [
    {
        name: "Mencioname! | v 1.0",
        type: 'PLAYING'
    },
  ]

  const random = presence[Math.floor(Math.random() * presence.length)]

  setInterval(() => {
    function presence(){
        client.user.setPresence({
            activities: [random],
            status: 'on'
        })
    }
    presence()

  }, 4000)
}


