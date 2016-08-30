app.controller('Homepage',['$scope', function($scope){
	$scope.todoList = [
		{name:"Ivan",task:"", date: new Date(2016,8,2,3,5),comment:""},
		{name:"Lena",task:"", date:new Date(2016,8,22,13,5),comment:""},
		{name:"Sasha",task:"", date:new Date(2016,8,12,3,5),comment:""}
	];

	$scope.selectedTodo = null;
	$scope.visible = {show:true}
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
		$scope.selectedTodo = null;
	};

}]);

