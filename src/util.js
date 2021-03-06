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

const _filter = (arr) => {
    let obj = {}
    arr.forEach((item)=> {
        if(!obj[item]){
            obj[item] = item
        }
    })
    return Object.keys(obj)
}

const _bubble = (arra) => {
   let temp;
    for(var i=0;i<arra.length;i++){ //比较多少趟，从第一趟开始
        for(var j=0;j<arra.length-i-1;j++){ //每一趟比较多少次数
            if(arra[j]>arra[j+1]){
                temp=arra[j];
                arra[j]=arra[j+1];
                arra[j+1]=temp;
            }
        }
    };
    return arra
}

const _reduce1 = (arr) => {
  return arr.reduce((prev, cur)=>{
      return prev.concat(cur)
  },[])
}

const _reduce_filter =(arr) => {
    let result = arr.sort().reduce((init, current)=>{
        if(init.length===0 || init[init.length-1]!==current){
            init.push(current);
        }
        return init;
    }, []);
    return result
}

Object.prototype.clone = function () {
    var o = this.constructor === Array? [] : {}
    for(var p in this){
        o[p] = typeof this[p] === 'object'?this[p].clone():this[p]
    }
    return o
}

const _deep_clone = obj => {
    let o = obj.constructor === Array ? [] : {}
    for(let e in obj){
        o[e] = typeof obj[e] === 'object'? _deep_clone(obj[e]) : obj[e]
    }
    return o
}


const _quick_sort = (arr) => {
    if(arr.length<= 1){
        return arr
    }
    const idx = Math.floor(arr.length/2)
    const prev = arr.splice(idx,1)[0]
    let left = [];
    let right = [];
    for(var i =0 ; i< arr.length; i++){
        if(arr[i]<prev){
           left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return _quick_sort(left).concat([prev],_quick_sort(right))
}

const decorator = f => a => f(a)



export { _ajax , _filter, _bubble, _reduce1, _reduce_filter, _quick_sort , decorator}