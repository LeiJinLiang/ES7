const _ajax = (url) => {
    const promise = new Promise((resolve, rejected) => {
        const handle = function () {
            if(this.readyState !== 4){
                return;
            }
            if(this.status == 200){
                resolve(this.responseText)
            }else{
                rejected(new Error(this.statusText))
            }
        }
        const xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.onreadystatechange = handle;
        xhr.send();
    })

    return promise
}

const _filter = () => {

}

const _bubble = () => {

}

const _reduce1 = () => {

}

const _reduce_filter =() => {

}

export { _ajax , _filter, _bubble, _reduce1, _reduce_filter }