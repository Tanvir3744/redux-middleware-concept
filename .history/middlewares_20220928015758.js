const fetch = require('node-fetch')

const delayMiddleWare = (store) => (next) => (action) => {
    if (action.type === 'todo/todoAdded') {
        setTimeout(() => {
            console.log(`${ store }, delaying the datas`)
            next(action)
        }, 2000);
        return;
    }
    return next(action)
}


//get limited todos from api (json placeholder)
//https://jsonplaceholder.typicode.com/todos?_limit=5
const getTodoMiddleware = (store) => (next) =>async (action) => {

    if (action.type === 'todo/fetchTodo') {
        let url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
        const response = await fetch(url);
        const todos = response.json()

        store.dispatch({
            type: 'todo/todoLoaded',
            payload: todos
        })
        return;
    }

    return next(action)
}

module.exports = {
    delayMiddleWare,
    getTodoMiddleware,
}