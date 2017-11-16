'use strict';

angular.module('app').directive('accordion', function (appService) {
    return {
        restrict : 'E',
        templateUrl: 'src/app/components/accordion/accordion.html',
        scope: {
            news: '='
        },
        controller:['$scope', 'appService', '$q', function($scope, appService, $q) {
            clear();
            $scope.oneAtATime = true;
            $scope.isOpen = false;

            $scope.getInfo = function(index, id) {


                $q.when(appService.getDetailInfo(id)).then(res => {
                    $scope.bodyText =res.data.response.content.blocks.body[0].bodyTextSummary;
                })
            };

            $scope.isOpened = function(index) {
                return $scope.opened === index;
            };

            function clear() {
                $scope.bodyText = $scope.opened = '';
            }

            $scope.updateOpenStatus = function(){
                $scope.isOpen = $scope.news.some(function(item){
                    return item.isOpen;
                });
            }
        }]
    }
});