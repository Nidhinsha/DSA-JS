class hashTable4{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
           total +=key.charCodeAt(i)
        }
        return total% this.size
    }
    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index]
        if (!bucket) {
            this.table[index] =[[key,value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index = this.hash(key)
        const bucket = this.table4[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    delete(){
        const index = this.hash(key)
        const bucket = this.table4[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem,1))
            }
            this.table4[index] = undefined
        }
    }
    
    display(){
        for (let i = 0; i < this.table.length; i++) {
           if (this.table[i]) {
            console.log(i,this.table[i]);
           }
            
        }
    }
}

const table4 = new hashTable4(50)
table4.set("name","Monkey")
table4.set("named","D")
table4.set("namess","Luffy")
table4.display()