var Todo = angular.module('Todo', []);

Todo.controller('TaskCtrl', ['$scope', TaskCtrl]);

function TaskCtrl($scope) {
    $scope.tasks = [
        {
            description: 'some task description - task 1',
            done: false
        },
        {
            description: 'some task description - task 2'
        }
    ]
}
