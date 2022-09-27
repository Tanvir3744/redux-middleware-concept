const { createStore, applyMiddleware } = require("redux");
const {asynceMiddleWareConcept} = require('./middleware')
//initial state
const initialState = {
    todos :[],
}

//intialial reducer for todo
const todoReducer = (state = initialState, action) => {
 switch (action.type) {
    case 'todo/todoAdded':
        
         return {
             ...state,
             todos: [
                 ...state.todos,
                 {
                    //  title: 'Have to complete learn with sumit redux course as soon as possible',
                     title : action.payload,
                 }
             ]
         }
     
         case 'todo/todoLoaded':
        
            return {
                ...state,
                todos: [
                    ...state.todos,
                    ...action.payload,
                ]
           }
 
    default:
        return state;
 }
}

//create store 
const store = createStore(todoReducer, applyMiddleware(asynceMiddleWareConcept));

//subscribe store 
store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch({
    type: 'todo/todoAdded',
    payload: 'have to complete learn with sumit redux course'
})