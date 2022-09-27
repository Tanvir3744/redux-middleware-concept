const { createStore } = require("redux");

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
const store = createStore(todoReducer);

//subscribe store 
store.subscribe(store => {
    console.log(store.getState())
})