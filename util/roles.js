const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "roles",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: (client, message, args) => {
  let server = message.guild;
  
  let embed = new Discord.RichEmbed()
  .setAuthor(`Lista de Roles de ${server.name} [${server.roles.size}]`)
  .setDescription(`${message.guild.roles.map(roles => roles.name).join('\n')}`)
  .setColor('RANDOM')
  
  message.channel.send(embed)
}

}