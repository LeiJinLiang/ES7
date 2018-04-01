import fetchApi from '../async/async'

function sortNumbers () {
    return Array.prototype.slice.call(arguments).sort();
}

// const sortNumbers = (...values) => values.sort()


function mixins(...list) {
    return function (target) {
        Object.assign(target.prototype,...list)
    }
}

const Foo = {
    foo() { console.log('foo')}
}

@mixins(Foo)

class MyClass {}

const obj = new MyClass();
console.log(`obj`,obj)
//上面代码通过修饰器 mixins , 把Foo 对象的方法添加到MyClass 实例上面

const _url = 'https://api.douban.com/v2/user/aisk'

const getData = async (url) => {
  const response =  await fetchApi(url)
  const data = await response.text()
  console.log('data',data)
}

getData(_url);

const loadImageAsync = url => {
    return new Promise(function (reslove, reject) {
        const image = new Image()
        image.onload = function () {
           reslove(image)
        }
        image.onerror = function () {
            reject('error')
        }
        image.src = url
    })
}