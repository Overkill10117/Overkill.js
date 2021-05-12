module.exports = {
	name: 'server',
	description: 'serverinfo',
	guildOnly: true,
	execute(message, args) {
		// First we use guild.members.fetch to make sure all members are cached
guild.members.fetch().then(fetchedMembers => {
	const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
	// We now have a collection with all online member objects in the totalOnline variable
	console.log(`There are currently ${totalOnline.size} members online in this guild!`)
});
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\n There are currently ${totalOnline.size} members online in this guild!`);
	},
};