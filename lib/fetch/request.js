class seting {
    constructor(data) {
        this.data = data || {}
        this.data["protocol"] = "https:"
        this.data["headers"] = {}
    }
    aturLink(link) {
        this._link = new URL(link);
        this.data["hostname"] = this._link.host;
        this.data["path"] = this._link.pathname;
        this.data["hash"] = this._link.hash
        return this
    }
    metode(metode) {
        this.data["method"] = metode
        return this
    }
    protokol(protokol) {
        this.data["protocol"] = protokol
        return this
    }
    aturHeaders(headers) {
        this.data["headers"] = headers
        return this
    }
    esekusi() {
        return fetch(this._link.href, this.data)
    }
}

module.exports = {seting}