app.controller('HomepageCtrl',['$scope', 'GetTodoList', function($scope, GetTodoList){
	$scope.todoList = GetTodoList.todoList;
	console.log($scope.todoList)
	$scope.selectedTodo = {};
	$scope.visible = {
		show:false,
		reverse: function(){
			this.show = !this.show
		}
	}
	$scope.edit = function(todo){
		$scope.selectedTodo = {
			todo: angular.copy(todo),
			index: this.$index
		}
	};
	$scope.add = function(todo){
		if(!$scope.selectedTodo.index) {
			$scope.todoList.push(todo)
		}else {
			$scope.todoList.splice($scope.selectedTodo.index, 1, todo)
		}
		$scope.cancel()
	};
	$scope.delete = function(){
		$scope.todoList.splice(this.$index,1);
		$scope.cancel();
	};
	$scope.cancel = function(){
		$scope.selectedTodo = {};
	};

}]);

