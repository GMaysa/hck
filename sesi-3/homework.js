const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true]

const sortWords = (arr) => {
    return arr.sort()
}

let makeAllCaps = (arr) => {
    return new Promise((resolve)=>{
        const result = arr.map((upCase) => {
            if (typeof upCase === "string")return upCase.toUpperCase()
            else return upCase
        })
        resolve(result)
    })
}

makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))

makeAllCaps(complicatedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))
