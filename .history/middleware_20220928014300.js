const asyncMiddleWareConcept = (store) => (next) => (action) => {
    if (action.type === 'todo/todoAdded') {
        setTimeout(() => {
            console.log(`${ store }, delaying the datas`)
            next(action)
        }, 2000);
        return;
    }
    return next(action)
}

module.exports({
    asyncMiddleWareConcept,
})