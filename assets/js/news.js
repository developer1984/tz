$(document).ready(function(){
    
//  pokazywanie i ukrywanie wstępu posta oraz ikony    
    $(".news-box-content").hover(function(){
        $(this).find('.news-description').show(300);        
    }, function(){
        $(this).find('.news-description').hide(300);
    });        
    $(".news-box-content").hover(function(){        
        $(this).find('.icons').show(300);
    }, function(){        
        $(this).find('.icons').hide(300);
    });     
    
    $(".news-box-content1").hover(function(){
        $(this).find('.news-description').show(300);        
    }, function(){
        $(this).find('.news-description').hide(300);
    });        
    $(".news-box-content1").hover(function(){
        $(this).find('.news-icons1 .icons').show(300);        
    }, function(){        
        $(this).find('.news-icons1 .icons').hide(300);        
    }); 
    
})
