var Todo = angular.module('Todo', []);

//create function basic Controller, giving us access to scope
Todo.controller('TaskCtrl', ['$scope', TaskCtrl]);

function TaskCtrl($scope) {
  $scope.tasks = [
    {description: 'Take out the garbage'},
    {description: 'Call Bill'},
    {description: 'Complete homework'}
  ]
}
