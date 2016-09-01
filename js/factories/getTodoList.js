app.factory('GetTodoList', ['restFirebase', function (restFirebase) {
    var todoList = restFirebase.getRest().query();
    return {
        todoList: todoList
        }
}])