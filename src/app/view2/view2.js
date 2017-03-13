'use strict';

angular.module('gsApp.view2', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller : 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', [function() {

        var ctrl = this;

        ctrl.title = "";

        ctrl.contract = {
            title               : contract.title,
            effectiveDate       : contract.effectiveDate,
            shipperName         : contract.shipperName,
            term                : contract.term,
            acres               : contract.acres,
            acresAdjustment     : contract.acresAdjustment,
            cropType            : contract.cropType,
            growingSeason       : contract.growingSeason,
            harvesterName       : contract.harvesterName,
            coolerName          : contract.coolerName,
            contractAmountByArea: contract.contractAmountByArea,
            monetaryAdjustment  : contract.monetaryAdjustment,
            contractUpload      : contract.contractUpload,
            validated           : contract.validated,
            pending             : contract.pending
    }


    }
    ]);

//
// DocumentPropertiesCtrl.$inject = ['$uibModalInstance', 'document', 'toastNotification'];
//
// function DocumentPropertiesCtrl($uibModalInstance, document, toastNotification) {
//
//     var ctrl = this;
//
//     ctrl.document         = {
//         name              : document.name,
//         itemId            : document.itemId,
//         trialExhibitId    : document.trialExhibitId,
//         exhibitId         : document.exhibitId,
//         common            : document.common,
//         exhibitDescription: document.exhibitDescription,
//         pages             : document.pageCount,
//         type              : document.objectType
//     };
//     ctrl.originalDocument = document;
//     ctrl.save             = save;
//     ctrl.cancel           = cancel;
//     ctrl.type             = type;
//
//     console.log(ctrl.originalDocument);
//     //
//     function type() {
//         return document.objectType;
//     }
//
//     function cancel() {
//         $uibModalInstance.dismiss();
//     }