(function () {
    'use strict';

    angular.module('cmRPurpose', [])

        .factory('dataAccessRequestResource', function ($resource, apiUrl) {
            return $resource(apiUrl + "dar", {},
                {post: {method: 'POST'}, headers: {'Content-Type': "application/json"}}
            );
        })

        .factory('dataAccessRequestManageResource', function ($resource, apiUrl) {
            return $resource(apiUrl + "dar/manage?userId=:userId", {},
                {
                    List: {method: 'GET', isArray: true,  params: {userId: '@userId'}}
                });
        })

        .factory('typeAheadDatasetsResource', function ($resource, apiUrl) {
            return $resource(apiUrl + "dataset/autocomplete/:partial", {},
                {get: {method: 'GET', isArray: true, params: {partial: '@partial'}}}
            );
        })

        .factory('typeAheadOntologiesResource', function ($resource, ontologyApiUrl) {
            return $resource(ontologyApiUrl + "autocomplete?q=:partial", {},
                {get: {method: 'GET', isArray: true, params: {partial: '@partial'}}}
            );
        })

        .factory('darConsent', function ($resource, apiUrl) {
            return $resource(apiUrl + "dar/find/:id/consent", {},
                {get: {method: 'GET'}, params: {id: '@id'}}
            );
        })
        .factory('darFields', function ($resource, apiUrl) {
            return $resource(apiUrl + "dar/find/:id", {},
                {get: {method: 'GET'}, params: {id: '@id', fields: '@fields'}}
            );
        })
        .factory('updateDataAccessRequestResource', function ($resource, apiUrl) {
            return $resource(apiUrl + "dar/:accessId", {}, {
                update: {method: 'PUT', params: {accessId: '@accessId'}}
            });
        })
        .factory('darModalSummary', function ($resource, apiUrl) {
            return $resource(apiUrl + "dar/modalSummary/:id", {},
                {get: {method: 'GET'}, params: {id: '@id'}}
            );
        })

        // Partial DAR Requests
        .factory('partialDataAccessRequestManageResource', function ($resource, apiUrl) {
            return $resource(apiUrl + "dar/partials/manage?userId=:userId", {},
                {
                    List: {method: 'GET', isArray: true,  params: {userId: '@userId'}}
                });
        })

        .factory('partialDataAccessRequestResource', function ($resource, apiUrl) {
            return $resource(apiUrl + "dar/partial/:darId");
        })

        .factory('postPartialDarResource', function ($resource, apiUrl) {
            return $resource(apiUrl + "dar/partial", {}, {
                post: {method: 'POST', headers: {'Content-Type': "application/json"}},
                update: {method: 'PUT', headers: {'Content-Type': "application/json"}}
            });
        })
})();
