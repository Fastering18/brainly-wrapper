class Respon {
    constructor(res) {
        this.res = res
    }
    json() {
        return JSON.parse(this.res)
    }
    teks() {
        return String(this.res)
    }
    buffer() {
        return this.res
    }

}

module.exports = {
    respon: Respon
}