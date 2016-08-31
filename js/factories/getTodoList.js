app.factory('GetTodoList', ['restFirebase', function (restFirebase) {
    var todoList = restFirebase.getRest().query();
    console.log(todoList)
    return {
        todoList: todoList
        }
}])