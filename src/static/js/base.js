(function(){
    // use timeago
    $('.timeago').timeago();i

    $(window).bind("beforeunload",function(){
        // close socket before unload
        if(page && page.room && page.socket){
            page.room.socket.close();    
            page.room.socket = undefined;
        }
    }
}());
