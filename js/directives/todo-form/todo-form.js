app.directive("formTodo", function ()
{
    return {
        restrict: "E",
        templateUrl: 'js/directives/todo-form/todo-form.html',
        replace:true,
        store:{
            selectedTodo:'='
        }
    }
})