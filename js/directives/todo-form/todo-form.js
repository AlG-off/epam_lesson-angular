app.directive("todoForm", function ()
{
    return {
        restrict: "E",
        replace:true,
        templateUrl: 'js/directives/todo-form/todo-form.html',
        controllerAs:'formCtrl',
        controller:function($scope){
            var self = this;
            self.add = function(todo){
                if($scope.selectedTodo.index === undefined) {
                    $scope.todoList.push(todo)
                }else {
                    $scope.todoList.splice($scope.selectedTodo.index, 1, todo)
                }
                self.cancel()
            };
            self.cancel = function(){
                $scope.selectedTodo = {};
            };
        }
    }
});