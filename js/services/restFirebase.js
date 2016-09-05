app.service('restFirebase', ['$resource', function ($resource) {
    this.getDB = function () {
        return $resource(':url/:list.json',{});
    }
}]);