app.factory('GetTodoList', ['restFirebase',
/*    function (restFirebase) {

       return {
           todoList: function($scope) {
            restFirebase.getDB().get({url: '.', list: 'todoList'}, function (data) {
               $scope.todoList = data.todoList
           })
       }
       }
    }*/
    function(){
        var todos = {
            "tasks" : [ {
                "comment" : "",
                "date" : "2016-09-01T23:05:00.000Z",
                "name" : "Петров И.",
                "state": "",
                "task" : ""
            }, {
                "comment" : "",
                "date" : "2016-09-22T09:05:00.000Z",
                "name" : "Иванова Е.",
                "state": "",
                "task" : ""
            }, {
                "comment" : "",
                "date" : "2016-09-11T23:05:00.000Z",
                "name" : "Терпухов Е.",
                "state": "",
                "task" : ""
            } ],
            "users" : [ {
                "name" : "Петров И."
            }, {
                "name" : "Иванова Е."
            }, {
                "name" : "Терпухов Е."
            }, {
                "name" : "Петрова И."
            } ]
        };
        var str = JSON.stringify(todos);
        var todoList = JSON.parse(str, function(key, value) {
            if (key == 'date') return new Date(value);
            return value;
        });
        return {
            getTasks: getTasks,
            getUsers: getUsers,
            saveTask: saveTask,
            delTask: delTask,
            saveUser: saveUser
        };
        function getTasks(){
            return todoList.tasks
        }
        function getUsers(){
            return todoList.users
        }
        function saveTask(task, index){
            if(index === undefined) {
                todoList.tasks.push(task)
            }else {
                todoList.tasks.splice(index, 1, task)
            }
        }
        function delTask(index){
            todoList.tasks.splice(index,1);
        }
        function saveUser(user){
        }
    }
]);