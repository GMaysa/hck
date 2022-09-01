const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true]

let makeAllCaps = (arr) => {
    return new Promise((resolve)=>{
        resolve(String.prototype.toUpperCase.apply(arr))
    })
}

let sortWords = (arr) => {

}

makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => consoe.log(result))
.catch(error => consoe.log(error))

makeAllCaps(complicatedArray)
.then(sortWords)
.then((result) => consoe.log(result))
.catch(error => consoe.loq(error))
