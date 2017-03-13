/**
 * Created by adpac on 3/12/2017.
 */
(function () {
    'use strict';

    angular
        .module('gsApp.api')
        .config(configureUrlWhitelist);

    ////////////////////////////////////////

    configureUrlWhitelist.$inject = ['$httpProvider', '$sceDelegateProvider'];

    function configureUrlWhitelist($httpProvider, $sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allows loading data from trusted domains. Update as needed.
            'self',
            // 'https://devtd*.dev.indatacorp.com:444/**',
            // 'https://qatd*.qa.indatacorp.com:444/**'
        ]);

        //Response Interceptors.
        // $httpProvider.interceptors.unshift('requestApiBaseUrlInterceptor');
        // $httpProvider.interceptors.unshift('responseCamelCaseInterceptor');
        // $httpProvider.interceptors.unshift('responseAuthenticationRedirectInterceptor');
        // $httpProvider.interceptors.unshift('responseDataErrorCodeInterceptor');
    }
})();