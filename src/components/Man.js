const decorateArmour = (target, key, descriptor) => {
    const method = descriptor.value
    let moreDef = 100
    let ret
    descriptor.value = (...args) => {
        args[0] += moreDef;
        ret = method.apply(target, args)
        return ret
    }
    return descriptor
}


class Man {
    constructor(def = 2,atk = 3,hp = 3){
        this.init(def, atk, hp)
    }
    init(def, atk, hp) {
        this.def = def;
        this.atk = atk;
        this.hp = hp;
    }
    toString() {
        return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
    }
}

new Promise((resolve, reject)=>{
    resolve(reject)
}).then((re)=>{
    console.log('re',re)
    re();
}).catch(()=>{
    console.log('=====')
})

export default Man