(function(){

    angular.module("muzak").controller('MainController',controladorMuzak);

    controladorMuzak.$inject=['muzakService'];

    function controladorMuzak(service){
        var vm=this;
        vm.msj='testService';

        service.fetchMuzak()
        .then(function(Muzak){
            vm.users=Muzak.data;
        })
        .catch(function(error){
            console.log('se fue a la versh');
        });
    }
}());