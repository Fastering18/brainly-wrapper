const config = require("../../util/config")
const enums = require("../../util/enums")

function gantiBahasa(bhs) {
    if (!enums.language[bhs]) return TypeError(`Language ${bhs} is not supported.`)
    config.bahasa = enums.language[bhs]
    return true
}

module.exports = gantiBahasa
