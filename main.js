const Discord = require('discord.js');
var bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setAFK
    console.log("Connected");
    bot.user.setActivity("RushWay me développer", {type: "WATCHING"});
});

bot.login(process.env.BOT_TOKEN);

bot.on('message', function(message){
    if(message.content == 'Salut' || message.content == 'Wesh' || message.content == 'Hello' || message.content == 'Hey')
    {
        message.channel.send('Salut ' + message.author + ' :wave: \nComment vas-tu ? :heart: \nTu veux un café ? :coffee:');
        console.log("Un joueur a dit Salut et le bot lui a répondu");
    }

    if(message.content == prefix + "rushway")
    {
        message.channel.send(':clapper: Youtuber de 4K \n :computer: Développeur Java \n:heart: Le meilleur');
        console.log("Un joueur a fait la commande !rushway");
    }

    if(message.content == prefix + "youtube")
    {
        message.channel.send(':clapper: https://youtube.com/c/RushWayYT \n:heart: Abonne toi !');
        console.log("Un joueur a fait la commande !rushway");
    }
    }
)
