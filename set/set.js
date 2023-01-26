const set = new Set([1,2,3])

// to add an value
set.add(4)

// to check if a value is present or not
console.log(set.has(3));

// delete
set.delete(4)

for (const key of set) {
    console.log(key);
}