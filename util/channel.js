const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "cuddle",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: (client, message, args) => {
  let channel = message.mentions.channels.first()
  if(!channel) return message.channel.send('Ya sabes lo q debes hacer')
  
  let embed = new Discord.RichEmbed()
  .setDescription(`**Información del canal ${channel.name}**\n**ID**: ${channel.id}\n**Tipo**: ${channel.type}\n**Creado**: ${channel.createdAt}\n\n**Detalles**\n${channel.nsfw}`)
  .setColor('FF9185')
  message.channel.send(embed)
}
}