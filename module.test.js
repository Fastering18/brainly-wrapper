const brainly = require("./module")

brainly.getQuestion("benar").then(r => console.log(JSON.stringify(r))).catch(console.error)
brainly.setServer("US")
brainly.getQuestion("true").then(console.log).catch(console.error)