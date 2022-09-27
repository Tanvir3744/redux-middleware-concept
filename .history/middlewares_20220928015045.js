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
const getTodoMiddleware = (store) => (next) => (action) => {


}

module.exports = {
    delayMiddleWare,
    getTodoMiddleware,
}