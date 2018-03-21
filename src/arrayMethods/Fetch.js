class Fetch{
    constructor(url){
        this.init(url)
    }

    init(url) {
        this.url = url
        this.then = fetch(url,{credentials: 'include'}).then
    }
}


export default Fetch
