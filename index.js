const Discord = require('discord.js')
const moment = require('moment')

const token = '*******'

const discord = new Discord.Client()
discord.login(token)

discord.on('message', message => {

    const filter = (reaction, user) => {
        if (reaction.emoji.name === '✅' && message.content === 'Prisutni na casu?') {
            console.log(message.guild.member(user).displayName, '(' + moment().format('DD-MM-YYYY, HH:mm') + ')');
            return true;
        } else {
            return false;
        }
    };

    const collector = message.createReactionCollector(filter, { time: 60000 });

    collector.on('collect', (reaction, reactionCollector) => {
        //console.log(`Collected ${reaction.emoji.name}`);
    });

})