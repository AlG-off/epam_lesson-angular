app.directive("todoList", ['GetTodoList', function (GetTodoList)
{
    return {
        restrict: 'E',
        templateUrl: 'js/directives/todo-table/todo-table.html',
        replace: true,
        controllerAs:'tableCtrl',
        controller: function($scope){
            var vm = $scope._linkTableCtrl = this;
            vm.method = GetTodoList;
            $scope.todoList = vm.method.getTasks();
            vm.edit = edit;
            vm.cancel = cancel;
            vm.add = add;
            vm.del = del;
            vm.sort = sort;
            vm.isSortUp = isSortUp;
            vm.isSortDown = isSortDown;
            vm.sortField = undefined;
            vm.reverse = false;
            vm.userList = vm.method.getUsers();
            vm.filter = {
                state: true,
                show: function () {
                    this.state = !this.state
                }
            };
            vm.visible = {
                state:false,
                show:function(){
                    this.state = true
                },
                hide:function(){
                    this.state = false
                }
            };

            function edit(task, index) {
                vm.visible.show();
                $scope.selectedTodo = {
                    todo: angular.copy(task),
                    index: index
                };
            }
            function cancel(){
                $scope.selectedTodo = {};
            }

            function add(task, additionForm){ 
                if(additionForm.$valid) {
                    vm.method.saveTask(task, $scope.selectedTodo.index);
                    vm.cancel()
                }
                
            }
            function del(index){
                var isDelete = confirm("Вы действидельно хотите безвозвратно удалить эту запись?")
                if(isDelete) vm.method.delTask(index);
                vm.cancel();
            }
            function sort(fieldName){
                if(vm.sortField === fieldName){
                    vm.reverse = !vm.reverse;
                }else{
                    vm.sortField = fieldName;
                    vm.reverse = false;
                }
            }
            function isSortUp(fieldName){
                return vm.sortField === fieldName && !vm.reverse;
            }
            function isSortDown(fieldName){
                return vm.sortField === fieldName && vm.reverse;
            }
        }
    }
}]);