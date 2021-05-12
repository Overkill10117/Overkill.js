module.exports = {
	name: 'say',
	description: 'say',
	args: true,
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args[0] === 'gay') {
			return message.channel.send('YOUR gay');
		}

		message.channel.send(`${args[0]}`);
	},
};