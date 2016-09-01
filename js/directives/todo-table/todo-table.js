app.directive("todoList", [function ()
{
    return {
        restrict: 'E',
        templateUrl: 'js/directives/todo-table/todo-table.html',
        replace:true,
        controllerAs:'tableCtrl',
        controller: function($scope){
            var self = this;
            self.edit = function(todo, index){
                $scope.visible.show()
                $scope.selectedTodo = {
                    todo: angular.copy(todo),
                    index: index
                };
            };
            self.delete = function(index){
                $scope.todoList.splice(index,1);
                self.cancel();
            };
            self.cancel = function(){
                $scope.selectedTodo = {};
            };
        }
    }
}]);