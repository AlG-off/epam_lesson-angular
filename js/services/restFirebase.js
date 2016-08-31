app.service('restFirebase', ['$resource', function ($resource) {
    this.getRest = function () {
        return $resource('todoList.json');
    }
}])