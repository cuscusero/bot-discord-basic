const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./configs/config.json");

client.on("ready", () => {
    client.user.setActivity(config.StatusBOT),
    console.log("I am ready | Cuscusero#0001 | Thank you for downloading my code")
})

var prefix = config.prefix;

// Commands
var ip = "ip";
var support = "support";
var forum = "forum";
var web = "website";
var dev = "developer";

/////////////////////////////////////////////////////////////////

client.on("message", (message) => {
    if (message.content.startsWith(prefix + ip)) {
        message.channel.send({embed: {
            color: 3066993,
            author: {
                name: "Cuscusero | GitHub",
                icon_url: config.IconImage
            },
            title: "IP",
            url: config.DISCORDorWEBSITE,
            description: "IP server",
            thumbnail: {
                url: config.BigImage,
            },
            fields: [
            {
                name: "Server #1",
                value: "1.1.1.1"
            }
        ],
        timestamp: new Date(),
        // image: {
        //     url :"",
        // },
        footer: {
            icon_url: "",
            text: "Cuscusero#0001"
        }
        }
    });
    } else
    if (message.content.startsWith(prefix + support)) {
        message.channel.send({embed: {
        color: 3447003,
        author: {
            name: "Cuscusero | GitHub",
            icon_url: config.IconImage
        },
        title: "Support",
        url: config.DISCORDorWEBSITE,
        description: "Support \n ",
        thumbnail: {
            url: config.BigImage,
        },
        fields: [
            {
                name: "Write in a chat:",
                value: "`-new_ticket`"
            }
        ],
            // image: {
                //     url :"",
            // },
            footer: {
                icon_url: "",
                text: "Cuscusero#0001"
            }
        }
    });
    } else
    if (message.content.startsWith(prefix + forum)) {
        message.channel.send({embed: {
        color: 3447003,
        author: {
            name: "Cuscusero | GitHub",
            icon_url: config.IconImage
        },
        title: "Forum",
        url: config.DISCORDorWEBSITE,
        description: "Forum web \n ",
        thumbnail: {
            url: config.BigImage,
        },
        fields: [
            {
                name: "Join FORUM",
                value: "[Click here](https://github.com/cuscusero)"
            }
        ],
            // image: {
                //     url :"",
            // },
            footer: {
                icon_url: "",
                text: "Cuscusero#0001"
            }
        }
    });
    } else
    if (message.content.startsWith(prefix + web)) {
        message.channel.send({embed: {
        color: 3447003,
        author: {
            name: "Cuscusero | GitHub",
            icon_url: config.IconImage
        },
        title: "Website",
        url: config.DISCORDorWEBSITE,
        description: "WebSite \n ",
        thumbnail: {
            url: config.BigImage,
        },
        fields: [
            {
                name: "Join Website",
                value: "[Click here](https://github.com/cuscusero)"
            }
        ],
            // image: {
            //     url :"",
            // },
            footer: {
                icon_url: "",
                text: "Cuscusero#0001"
            }
        }
        });
    } else
    if (message.content.startsWith(prefix + dev)) {
        message.channel.send({embed: {
        color: 3447003,
        author: {
            name: "Cuscusero | GitHub",
            icon_url: config.IconImage
        },
        title: "Developer",
        url: config.DISCORDorWEBSITE,
        description: "Developer \n ",
        thumbnail: {
            url: config.BigImage,
        },
        fields: [
            {
                name: "Cuscusero#0001",
                value: "[GitHub](https://github.com/cuscusero) [Callejeros RP](https://callejerosrp.com) [discord](https://discord.gg/XwquhQ9)"
            }
        ],
            // image: {
            //     url :"",
            // },
            footer: {
                icon_url: "",
                text: "Cuscusero#0001"
            }
        }
        });
    }
});

client.login(config.token);
