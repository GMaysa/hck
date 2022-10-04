
const initialState = {
    counter: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {counter: state.counter + 1}
        case "DECREMENT":
            return {counter: state.counter - 1}
        default:
            return state
    }
}

var store = Redux.createStore(counter)

var el = document.getElementById('counter')
const render = () => {
    el.innerHTML = store.getState().counter.toString()
}

render()
store.subscribe(render)

var inCre = document.getElementById('increment')
var deCre = document.getElementById('decrement')

inCre.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'})
})
deCre.addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'})
})