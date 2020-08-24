const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "avatar",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  
  let embed = new Discord.MessageEmbed()
  .setTitle("Avatar de " + user.username)
  .addField('Imagen completa', `[click aquí](${user.avatarURL})`)
  .setImage(user.avatarURL)
  .setColor("FF9185")
  message.channel.send(embed);
}
}