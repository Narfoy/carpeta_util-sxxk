const Discord = require("discord.js");
const superagent = require('superagent');

module.exports = {
  config: {
    nombre: "hex",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: async (client, message, args, ops) => {
  

    if(!args[0]) return message.reply("¡Por favor, proporciona un código hex válido, sin #!") //
    var isOk = /^[0-9A-F]{6}$/i.test(args[0])
    if (isOk === false) return message.reply("¡Por favor, proporciona un código hex válido, sin #!") //Si el usuario pone el código Hexcolor con #, hará return
    
    const { body } = await superagent
    .get(`https://api.alexflipnote.dev/color/` + args[0]);

    const embed = new Discord.RichEmbed()
    .setColor("#"+args[0]+"")
    .setTitle(body.name)
    .setDescription("Hex: " + body.hex + '\n' + "RGB: " + body.rgb)
    .setImage(body.image) 
    message.channel.send({embed});
}
}