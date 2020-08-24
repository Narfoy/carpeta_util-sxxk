const Discord = require("discord.js")
const db = require("megadb")
let prefix_db = new db.crearDB('prefixes')

module.exports = {
  config: {
    nombre: "help",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: async (client, message, args) => {
    
  let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : process.env.PREFIX;
    
  let flecha = client.emojis.cache.get('736615523340648550');
  
  let categoria = args[0];
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`Comandos de ${client.user.username}`)
  .addField('Información', `Hola soy tu amiga Saek, soy un bot multifunción para Discord, cuento con \`19\` categorías y \`${client.commands.size}\` comandos, para ver más detalladamente los comandos de cada categoría puedes escribir \`${prefix}help <categoría>\`.`)
  .addField('Categorías',
  `Acción ${flecha} \`${prefix}help action\`\nAdministración ${flecha} \`${prefix}help administrator\`\nAnime ${flecha} \`${prefix}help anime\`\nBackups ${flecha} \`${prefix}help backups\`\nEconomía ${flecha} \`${prefix}help economy\`\nDiversión ${flecha} \`${prefix}help fun\`\nSorteos ${flecha} \`${prefix}help giveaways\`\nNiveles ${flecha} \`${prefix}help levels\`\nMatrimonio ${flecha} \`${prefix}help marriage\`\nModeración ${flecha} \`${prefix}help mod\`\nMúsica ${flecha} \`${prefix}help music\`\nReacción ${flecha} \`${prefix}help reaction\`\nBuscador ${flecha} \`${prefix}help search\`\nEstadísticas del servidor ${flecha} \`${prefix}help serverstats\`\nSugerencias ${flecha} \`${prefix}help suggestions\`\nEdición de texto ${flecha} \`${prefix}help text-edit\`\nBoletos ${flecha} \`${prefix}help tickets\`\nUtil ${flecha} \`${prefix}help util\``)
  .setColor('GREEN')
  .addField('Enlaces útiles', '[Servidor de soporte](https://discord.com/invite/zvCbehK)')
  .setFooter(`${client.user.username} versión 1.0.1`)
  
  const embedaction = new Discord.MessageEmbed()
  .setAuthor(`Comandos de ${client.user.username}`, client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```angry           baka            bite            cheeks          claps           cook            cuddle          feed            gaming          glare           handholding     heal            hi              highfive        hug             kickbutt        kill            kiss            laugh           lick            pat             poke            punch           scared          shoot           slap            spank           splash          spray           stare           tickle          tsundere     ```")
  .setColor('GREEN')
  
  const embedadministrator = new Discord.MessageEmbed()
  .setAuthor(`Comandos de ${client.user.username}`, client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```autolewd        autorole        disable         dj              enable          goodbyechannel  goodbyemsg      levelup         muterole        selfroles       serverconf      setprefix       settings        subscribe       suggestionch    unsubscribe     welcomechannel  welcomemsg      welcometype   ```")
  .setColor('GREEN')
  
  const embedanime = new Discord.MessageEmbed()
  .setAuthor(`Comandos de ${client.user.username}`, client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```awoo            crimson            fbi            jpose\nkemo            nani            neko            nekogif\npoi            rem            rero\ntrap            zawarudo```")
  .setColor('GREEN')
  
  const embedbackups = new Discord.MessageEmbed()
  .setAuthor('Comandos de Nagisa', client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```create-backup       delete-backup       info-backup        load-backup         purge-backups```")
  .setColor('GREEN')
  
  const embedeconomy = new Discord.MessageEmbed()
  .setAuthor('Comandos de Nagisa', client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```aaaa```")
  .setColor('GREEN')
  
  const embedfun = new Discord.MessageEmbed()
  .setAuthor('Comandos de Nagisa', client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```8ball           banana          delete          kitty           magik           pupper          roll            say             trivia```")
  .setColor('GREEN')
  
  const embedgiveaways = new Discord.MessageEmbed()
  .setAuthor(`Comandos de ${client.user.username}`, client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```create           end           reroll           start```")
  .setColor('GREEN')
  
  const embedlevel = new Discord.MessageEmbed()
  .setAuthor(`Comandos de ${client.user.username}`, client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```asdasd```")
  .setColor('GREEN')
  
  const embedlogger = new Discord.MessageEmbed()
  .setAuthor(`Comandos de ${client.user.username}`, client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```asdasd```")
  .setColor('GREEN')
  
  const embedmarriage = new Discord.MessageEmbed()
  .setAuthor(`Comandos de ${client.user.username}`, client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```asdasd```")
  .setColor('GREEN')
  
  const embedmod = new Discord.MessageEmbed()
  .setAuthor(`Comandos de ${client.user.username}`, client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```assign          ban             forceban        kick            lock            mute            purge           softban         tempban         unassign        unban           unlock          unmute```")
  .setColor('GREEN')
  
  const embedmusic = new Discord.MessageEmbed()
  .setAuthor(`Comandos de ${client.user.username}`, client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```asdasd```")
  .setColor('GREEN')
  
  const embedreaction = new Discord.MessageEmbed()
  .setAuthor(`Comandos de ${client.user.username}`, client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```banghead        blush           boom            bored           confused        cry             dab             dance           deredere        disgust         drunk           facepalm        fail            happy           like            nope            peek            pout            psycho          run             sad             scream          shrug           sing            sip             sleep           smug            teehee          think           thinking        vomit           wag             wasted          yandere        ```")
  .setColor('GREEN')
  
  const embedsearch = new Discord.MessageEmbed()
  .setAuthor(`Comandos de ${client.user.username}`, client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```asdasd```")
  .setColor('GREEN')
  
  const embedserverstats = new Discord.MessageEmbed()
  .setAuthor(`Comandos de ${client.user.username}`, client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```asdasd```")
  .setColor('GREEN')
  
  const embedsuggestions = new Discord.MessageEmbed()
  .setAuthor(`Comandos de ${client.user.username}`, client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```asdasd```")
  .setColor('GREEN')
  
  const embedtextedit = new Discord.MessageEmbed()
  .setAuthor(`Comandos de ${client.user.username}`, client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```asdasd```")
  .setColor('GREEN')
  
  const embedtickets = new Discord.MessageEmbed()
  .setAuthor(`Comandos de ${client.user.username}`, client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```asdasd```")
  .setColor('GREEN')
  
  const embedutil = new Discord.MessageEmbed()
  .setAuthor(`Comandos de ${client.user.username}`, client.user.avatarURL)
  .setDescription(`:cloud: Recuerda que puedes ver la información de un comando diciendo \`.help <comando>\`, yendo a la página oficial del bot o también en el servidor de soporte.`)
  .addField('Comandos',
  "```about           avatar          bugreport       changelog       channel         help            hex             invite          ping            prefix          role            roles           server          stats           suggestion      translate       userinfo```")
  .setColor('GREEN')
  
  if(categoria == 'angry') {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Información del comando ${categoria}`, client.user.displayAvatarURL())
    .setDescription('Este comando expresa que estás enfadado.')
    .addField('Uso', `\`${prefix}angry <member>\``, true)
    .addField('Ejemplos', `\`${prefix}angry @member\``, true)
    .addField('Enfríamiento', 'None')
    .setColor('GREEN')
    
    message.channel.send(embed)
  }
    
    if(categoria == 'action') {
	    message.channel.send(embedaction)
    }

    if(categoria == 'administrator') {
	    message.channel.send(embedadministrator)
    }

    if(categoria == 'anime') {
	    message.channel.send(embedanime)
    }

    if(categoria == 'backups') {
	    message.channel.send(embedbackups)
    }

    if(categoria == 'economy') {
	    message.channel.send(embedeconomy)
    }

    if(categoria == 'fun') {
	    message.channel.send(embedfun)
    }

    if(categoria == 'giveaways') {
	    message.channel.send(embedgiveaways)
    }

    if(categoria == 'level') {
	    message.channel.send(embedlevel)
    }

    if(categoria == 'logger') {
	    message.channel.send(embedlogger)
    }

    if(categoria == 'marriage') {
	    message.channel.send(embedmarriage)
    }

    if(categoria == 'mod') {
	    message.channel.send(embedmod)
    }
    
    if(categoria == 'music') {
	    message.channel.send(embedmusic)
    }

    if(categoria == 'reaction') {
	    message.channel.send(embedreaction)
    }

    if(categoria == 'search') {
	    message.channel.send(embedsearch)
    }

    if(categoria == 'serverstats') {
	    message.channel.send(embedserverstats)
    }

    if(categoria == 'suggestions') {
	    message.channel.send(embedsuggestions)
    }

    if(categoria == 'text-edit') {
	    message.channel.send(embedtextedit)
    }

    if(categoria == 'tickets') {
	    message.channel.send(embedtickets)
    }

    if(categoria == 'util') {
	    message.channel.send(embedutil)
    }
  
    if(args == ""){
      message.channel.send(embed)
    }
  }
}