'use strict';

(function(){
    
    let phoneListCtrl = function($scope){
        let _this = this;

        $scope.name = "priyank patel"
        this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
        ];
        $scope.getPhones = function(){
            return _this.getPhones();
        }
    };
    phoneListCtrl.prototype.getPhones = function(){
        return [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    };

    angular.module("phoneList")
      .component("phoneList", {
        templateUrl: "common/phone-list/phone-list.template.html",
        controller:  phoneListCtrl
      });
}());