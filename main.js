const token = 'YOUR_DISCORD_TOKEN'
const message = `YOUR_MESSAGE`;
let total_messages = 0;

const {Client} = require('discord.js-selfbot-v13');
const client = new Client({
    checkUpdate: false
});

client.on('ready', async () => {
    console.log(`Logged on as ${client.user.tag}`);
    const server = await client.guilds.fetch('SERVER_ID');
    console.log(`Server Name: ${server.name}`);
    const channel = await server.channels.fetch('CHANNEL_ID');
    console.log(`Channel Name: ${channel.name}`);
    const send_message = () => {
        channel.send(message);
    }
    setInterval(send_message, 15);
});

client.on('messageCreate', (message) => {
    if (message.author.id == client.user.id && message.channel.type !== 'DM') {
        total_messages += 1;
        console.log(`Sent: ${total_messages} messages`);
    }
    else if (message.channel.type === 'DM' && message.author.id != client.user.id) {
        console.log(`Received message from ${message.author.tag}: ${message.content}`);
    }
});

client.login(token);
