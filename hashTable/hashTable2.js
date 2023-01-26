class hashTable2{
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
        const index = this.hash(key)
        // this.table[index] = index
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key,value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0]=== key)
            if (sameKeyItem) {
                sameKeyItem[1]=value
            } else {
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index = this.hash(key)
        // return this.table[index]
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    delete(key){
        const index = this.hash(key)
        // this.table[index] = undefined
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0]===key )
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem,1))
            }
        }
    }
    display(){
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}

const table2 = new hashTable2(50)
table2.set("name","Roronova Zoro")
table2.set("mane","Vinsmoke Sanji")
table2.display()

//Complexity
// average time comlexity is constant