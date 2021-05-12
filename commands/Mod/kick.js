module.exports = {
	name: 'kick',
	description: 'you got fooled this is kick wish list hahahahahaha!',
    guildOnly: true,
	execute(message, args) {
		if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }
        const member = message.mentions.members.first();
member.kick();
        
        // Grab the "first" mentioned user from the message
        // This will return a `User` object, just like `message.author`
        const taggedUser = message.mentions.users.first();

        message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	},
};