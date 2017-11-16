'use strict';
// module definition
angular.module('app', ["ngAnimate", "ui.bootstrap"]);

var injections = ['$scope', 'appService', '$q'];

function appController ($scope, appService, $q)  {
    $scope.news = $scope.current = $scope.max = '';

    $scope.getNews = function (page) {
        $q.when(appService.getContent(page)).then(res => {
            $scope.news = res.data.response.results;
            $scope.current = res.data.response.currentPage;
            $scope.max = res.data.response.pages;
        })
    };

    $scope.load = function () {
        $scope.getNews();
    };

    $scope.goToNextPage = function(arrow) {
        switch(arrow) {
            case 'prev':
                $scope.current -=1;
                break;
            case 'next':
                $scope.current +=1;
                break;
        }
        $scope.getNews($scope.current);
    }
}

appController.$inject = injections;
angular.module('app').controller('appController', appController);