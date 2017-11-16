'use strict';
var injections = ['$http'];

function appService ($http) {
    let service = {};

    service.getContent = function(page) {
        page = !page ? 1 : page;

        return $http({
             method: 'GET',
             url: 'https://content.guardianapis.com/search',
             params: {
                 'api-key': 'test',
                 'page' : page
            }
        });
    };

    service.getDetailInfo = function(id) {
        return $http({
            method: 'GET',
            url: `https://content.guardianapis.com/${id}`,
            params: {
                'api-key': 'test',
                'show-blocks': 'body'
            }
        })
    };

    return service;
}

appService.$inject = injections;

angular.module('app').service('appService', appService);