'use strict';

angular.module('app').directive('pagination', function () {
    return {
        restrict : 'E',
        templateUrl: 'src/app/components/pagination/pagination.html',
        scope: {
            current: '=',
            total: '=',
            onclickFn: '&'
        },
        controller:['$scope', function($scope) {
            $scope.checkDisabled = function (arrow) {
                switch (arrow) {
                    case 'next': return $scope.total === $scope.current;
                    case 'prev': return $scope.current <= 1;
                }
            }
        }]
    }
});
