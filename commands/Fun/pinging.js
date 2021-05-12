
module.exports = {
	name: 'ping',
	description: 'ping',
	execute(message, args) {
		message.channel.send('LOL');
        message.channel.send('Pinging...').then(sent => {
	sent.edit(`Roundtrip latency: ${sent.createdTimestamp - message.createdTimestamp}ms`);
	
})}};