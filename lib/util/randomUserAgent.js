function random(min, max) {
    return Math.random() * (max - min) + min;
} 

function randomUserAgents() {
    const randomAngka = random(100, 550).toFixed(2)
    return `Mozilla/5.0 (Windows NT 6.1) AppleWebKit/${randomAngka} (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/${randomAngka}`
}

module.exports = {
    randomUserAgents: randomUserAgents,
    random: random
}
