
class ArrayMethod {
    constructor(arr = [1,2,3,4,5]) {
        this.handleSplice(arr)
        this.init(arr)
        this.handleReduce(arr)
    }

    init(arr) {
        this.data = arr
    }

    handleReduce(arr) {
        this.count =  arr.reduce((prev, cur)=> {
            return prev + cur
        })
    }

    handleSplice(arr) {
         arr.splice(arr.length-1,1);

    }
    handleSlice(arr) {

    }
}


export default ArrayMethod