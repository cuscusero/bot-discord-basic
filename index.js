const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./configs/config.json");

client.on("ready", () => {
    client.user.setActivity("-developer | Cuscusero#0001 | GitHub"),
    console.log("I am ready | Cuscusero#0001 | Thank you for downloading my code")
})

var prefix = config.prefix;

client.on("message", (message) => {
    if (message.content.startsWith(prefix + "ip")) {
        message.channel.send({embed: {
            color: 3066993,
            author: {
                name: "Cuscusero | GitHub",
                icon_url: "https://avatars.githubusercontent.com/u/57831875?s=400&u=8eba9c155a4d7180e085b065e2ecce0682f2f42e&v=4"
            },
            title: "IP",
            url: "https://github.com/cuscusero",
            description: "IP server",
            thumbnail: {
                url: 'https://avatars.githubusercontent.com/u/57831875?s=400&u=8eba9c155a4d7180e085b065e2ecce0682f2f42e&v=4',
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
        // footer: {
        //     icon_url: "PUT HERE YOU BANNER",
        //     text: "Cuscusero#0001"
        // }
        }
    });
    } else
    if (message.content.startsWith(prefix + "support")) {
        message.channel.send({embed: {
        color: 3447003,
        author: {
            name: "Cuscusero | GitHub",
            icon_url: "https://avatars.githubusercontent.com/u/57831875?s=400&u=8eba9c155a4d7180e085b065e2ecce0682f2f42e&v=4"
        },
        title: "Support",
        url: "https://github.com/cuscusero",
        description: "Support \n ",
        thumbnail: {
            url: 'https://avatars.githubusercontent.com/u/57831875?s=400&u=8eba9c155a4d7180e085b065e2ecce0682f2f42e&v=4',
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
        // footer: {
        //     icon_url: "PUT HERE YOU BANNER",
        //     text: "Cuscusero#0001"
        // }
    }
});
} else
if (message.content.startsWith(prefix + "forum")) {
    message.channel.send({embed: {
    color: 3447003,
    author: {
        name: "Cuscusero | GitHub",
        icon_url: "https://avatars.githubusercontent.com/u/57831875?s=400&u=8eba9c155a4d7180e085b065e2ecce0682f2f42e&v=4"
    },
    title: "Forum",
    url: "https://github.com/cuscusero",
    description: "Forum web \n ",
    thumbnail: {
        url: 'https://avatars.githubusercontent.com/u/57831875?s=400&u=8eba9c155a4d7180e085b065e2ecce0682f2f42e&v=4',
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
        // footer: {
        //     icon_url: "PUT HERE YOU BANNER",
        //     text: "Cuscusero#0001"
        // }
    }
    });
    } else
    if (message.content.startsWith(prefix + "website")) {
        message.channel.send({embed: {
        color: 3447003,
        author: {
            name: "Cuscusero | GitHub",
            icon_url: "https://avatars.githubusercontent.com/u/57831875?s=400&u=8eba9c155a4d7180e085b065e2ecce0682f2f42e&v=4"
        },
        title: "Website",
        url: "https://github.com/cuscusero",
        description: "WebSite \n ",
        thumbnail: {
            url: 'https://avatars.githubusercontent.com/u/57831875?s=400&u=8eba9c155a4d7180e085b065e2ecce0682f2f42e&v=4',
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
            // footer: {
            //     icon_url: "PUT HERE YOU BANNER",
            //     text: "Cuscusero#0001"
            // }
        }
        });
    } else
    if (message.content.startsWith(prefix + "developer")) {
        message.channel.send({embed: {
        color: 3447003,
        author: {
            name: "Cuscusero | GitHub",
            icon_url: "https://avatars.githubusercontent.com/u/57831875?s=400&u=8eba9c155a4d7180e085b065e2ecce0682f2f42e&v=4"
        },
        title: "Developer",
        url: "https://github.com/cuscusero",
        description: "Developer \n ",
        thumbnail: {
            url: 'https://avatars.githubusercontent.com/u/57831875?s=400&u=8eba9c155a4d7180e085b065e2ecce0682f2f42e&v=4',
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
            // footer: {
            //     icon_url: "PUT HERE YOU BANNER",
            //     text: "Cuscusero#0001"
            // }
        }
        });
    }
});

client.login(config.token);