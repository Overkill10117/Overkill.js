module.exports = {
	name: 'user',
	description: 'says the username, id, etc ',
	execute(message, args) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};