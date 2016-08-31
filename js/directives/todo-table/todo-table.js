app.directive("tableTodo", [function ()
{
    return {
        restrict: "E",
        templateUrl: 'js/directives/todo-table/todo-table.html',
        replace:true,
        store:{
            todoList:'='
        }
    }
}])