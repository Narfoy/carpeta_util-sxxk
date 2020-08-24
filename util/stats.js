const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "stats",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setAuthor('Estadísticas de MsBot', client.user.avatarURL)
  .addField('Parámetros', `\`\`\`prolog\nServidores :: ${client.guilds.size.toLocaleString()}\nCanales :: ${client.channels.size.toLocaleString()}\nUsuarios :: ${client.users.size.toLocaleString()}\nMemoria :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``)
  .setColor('FF9185')
  .setFooter('Nagisa v1.0.0')
  
  message.channel.send(embed)
}
}