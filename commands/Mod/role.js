const { Guild } = require("discord.js");

module.exports = {
	name: 'role',
	args: true,
	usage: '<user> <role>',
    guildOnly: true,
	execute(message, args) {
		const role = Guild.roles.cache.find(role => role.name === '<role name>');
const member = message.mentions.members.first();
member.roles.add(role);
	},
};