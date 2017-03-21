(function(){
    'use strict';

    angular.module("app").controller('MainController',controladorMuzak);

    controladorMuzak.$inject=['muzakService']

    function controladorMuzak(service){
        var vm=this;
        vm.msj='testService';

        service.fetchMuzak()
        .then(function(Muzak){
            vm.toDos=Muzak.data;
        })
        .catch(function(error){
            console.log('se fue a la versh')
        });

    }


}());