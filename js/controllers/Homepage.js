app.controller('HomepageCtrl',['$scope', 'GetTodoList', function($scope, GetTodoList){
	//$scope.todoList = GetTodoList.todoList;
	$scope.selectedTodo = {};
	$scope.visible = {
		state:false,
		show:function(){
			this.state = true
		},
		hide:function(){
			this.state = false
		}
	};
	$scope.todoList = [
		{
			"name": "Ivan",
			"task": "",
			"date": new Date("2016-09-01T23:05:00.000Z"),
			"comment": ""
		},
		{
			"name": "Lena",
			"task": "",
			"date": new Date("2016-09-22T09:05:00.000Z"),
			"comment": ""
		},
		{
			"name": "Sasha",
			"task": "",
			"date": new Date("2016-09-11T23:05:00.000Z"),
			"comment": ""
		}
	];
}]);

