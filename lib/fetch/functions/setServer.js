const config = require("../../util/config")
const enums = require("../../util/enums")

/**
 * 
 * @param {string} bhs - Country code as string, example: ID, US 
 * @returns {bool}
 */
function gantiBahasa(bhs) {
    if (typeof(bhs)!=="string") return TypeError(`#1 parameter must be string`);
    if (!enums.language[bhs.toUpperCase()]) return TypeError(`Language ${bhs} is not supported.`);
    config.bahasa = enums.language[bhs.toUpperCase()];
    return true;
}

module.exports = gantiBahasa;
