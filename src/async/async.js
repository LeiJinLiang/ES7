const fetchApi = (url) => {
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4) {
               if(xhr.status >= 200 && xhr.status < 300) {
                    let response;
                    try {
                        response = JSON.parse(xhr.responseText)
                    }catch (e){
                        reject(e)
                    }
                    if(response){
                        resolve(response, xhr.status,xhr)
                    }
               }else{
                   reject(xhr)
               }
            }
        }
        xhr.open('GET',url, true)
        xhr.setRequestHeader('Content-Type','text/plain');
        xhr.send();
    })
}


export default fetchApi