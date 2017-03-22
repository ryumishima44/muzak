angular.module('muzak').service('muzakService',Servir); //muzakService es el nombre del servicio, Servir es la funcion que contiene el servicio

Servir.$inject=['$http'];

function Servir(httpParam){
    var service={
        fetchMuzak:getData,
    };

    function getData(){
        return httpParam.get('users.json'); //agregar aqui el campo del get para musica
    }

    return service;
}