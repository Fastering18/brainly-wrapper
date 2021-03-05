const http = require("http")
const https = require("https")
const { respon } = require("./respon")
const { seting } = require("./request")
const graphql = require("./graphql/GraphQL")
const axios = require("axios")

function httpReq(setting) {
    return new Promise((terima, tolak) => {
        const req = http.request(setting, (res) => {
            res.on('data', (data) => {
                return terima(new respon(data))
            });
            res.on("error", (err) => {
                return tolak(err)
            });

        }).on('error', (err) => {
            return tolak(err);
        }).end()
    })
}
function httpsReq(setting) {
    return new Promise((terima, tolak) => {
        const req = https.request(setting, (res) => {
            let baseData = '';
            res.on('data', (data) => {
                baseData += data
            });
            res.on('end', () => {
                return terima(new respon(baseData))
            })
            res.on("error", (err) => {
                return tolak(err)
            });
        }).on('error', (err) => {
            return tolak(err);
        }).end()
    })
}

function setupOption(link, tambahan) {
    var uri = new URL(link)
    if (!tambahan["hostname"]) tambahan["hostname"] = uri.host;
    if (!tambahan["method"]) tambahan["method"] = "GET";
    if (!tambahan["path"]) tambahan["path"] = uri.pathname;
    return tambahan
} 

async function fetch(link, tambahan) {
    tambahan = typeof(tambahan) == "object" && tambahan.data != undefined ? tambahan.data : (typeof(link) == "object" && link["data"] != undefined) ? link : typeof(tambahan) == "object" ? tambahan : {}
    if (!tambahan.hostname) tambahan = setupOption(typeof(link) == "object" ? link._link.href : link, tambahan);
    return tambahan.protocol == "http:" ? httpReq(tambahan) : httpsReq(tambahan);
}

fetch.settings = seting
fetch.axios = axios
fetch.GraphQL = graphql
//fetch('https://blackerz.herokuapp.com').then(r => console.log(JSON.stringify(r.teks()))).catch(console.error)

module.exports = fetch;

/*console.log(postData)
fetch("https://brainly.co.id/graphql/id", 
{
    method: "POST",
    headers: {
        'User-Agent': "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
    },
    body: JSON.stringify(postData)
}
)
.then(res => console.log(res.teks())).catch(console.error)*/
