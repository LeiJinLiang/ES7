const fetchApi = (url) => {
 const myHeaders = new Headers();
 const config  = {
        method: 'GET',
        headers: myHeaders,
        mode: 'no-cors',
        cache: 'default'
 }
    return  fetch(url,config)
}


export default fetchApi