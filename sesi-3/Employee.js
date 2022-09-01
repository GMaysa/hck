import fetch from "node-fetch"


// // class definition
// class Employee {
//     doWork(){
//         return "complete!"
//     }
//     constructor (name){
//         this._name = name
//     }
//     getName() {
//         return this._name
//     }
// }



// class Employee extends Person {
    //     doWork() {
        //         return this._name + " is working"
        //     }
        // }
        
        // call
        // let scott = new Employee("Scott Moss")
        // console.log(scott.getName())
        // console.log(scott.doWork())
        
// // constructor
// class Person {
//     constructor(name){
//         this._name = name
//     }
//     getName() {
//         return this._name
//     }
// }

// // method super
// class Employee extends Person {
//     constructor(name, title) {
//         super(name)
//         this._title = title
//     }
//     doWork() {
//         return this._name + " is working"
//     }
//     getTitle(){
//         return this._name + " is " +this._title
//     }
// }

// // call
// let scott = new Employee("Scott Moss", "Your Mother")
// console.log(scott.getName())
// console.log(scott.doWork())
// console.log(scott.getTitle())

// class Employee {
//     doWork() {
//         return "complete!"
//     }
// }

// export default Employee

// fetch('https://fake-tweets-api.herokuapp.com/posts')
// .then(response =>{
//     return response.json()
// }).then(tweets => {
//     console.log(tweets)
    // return tweets.filter(tweet => {
    //     return tweet.stars > 50
    // })
// })
// .then(tweets => {
//     return tweets.filter(tweet => {
//         return tweet.rts > 50
//     })
// }).catch(err => {
//     console.error('error')
// })

// fetch('https://fake-tweets-api.herokuapp.com/posts')
// .then(response =>response.json())
// .then(tweets => tweets.filter(tweet => tweet.stars > 50))
// .then(tweets => tweets.filter(tweet => tweet.rts > 50))
// .catch(err => {
//     console.log(err);
// })


// // New Promise
// setTimeout( () => {
//     console.log('Tick!')
// }, 1000)

// const doSomething = function(){
//     return new Promise((resolve, reject) => {

//     })
// }

// let doIt = doSomething()
// doIt.then(response => {

// })

// doIt.catch( error => {

// })

// const setTimeoutPromise = (duration) => 
//     new Promise((resolve, reject) => {
//         setTimeout(resolve, duration)
//     })

// setTimeoutPromise(500).then(() =>
// console.log("tick"))

// async/await
// fetch('https://fake-tweets-api.herokuapp.com/posts')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.error(err))

// const fetchTweets = async () => {
const response = await
fetch('https://fake-tweets-api.herokuapp.com/posts')
const tweets = await response.json()
let tweet = tweets.filter(tweet => tweet.author == 'JoshConstine')
console.log(tweet)
// }

// fetchTweets()
