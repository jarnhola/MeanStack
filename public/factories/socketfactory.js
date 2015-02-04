module.factory('SocketFactory',function($resource){
    
    var factory={};
    //Create client socket
     var socket = io();
    
    factory.notify;
    
    factory.getMessagesForUser = function(){
        
        return $resource('/app').get().$promise;
    }
    
    //Thuis will tirgger when server broadcasts message
    //broadcast_msg
    socket.on('broadcast_msg',function(data){
        
        factory.notify(data);
    });
    
    factory.sendMessage = function(data){
        
        socket.emit('new_message',data);
    }
    
    return factory;
});