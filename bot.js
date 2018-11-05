const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", message => {

// Result in: If the user's message contains "ping" then

if(message.content === "ping"){

   // the robot answers pong!
   message.channel.send("Pong!");
  
};

});

client.login("NTA4NzE1NjA1MDEzMDM3MDY5.DsIjiw.XQenZO_1AQfQcXpo7_6oPZXyH0M");
