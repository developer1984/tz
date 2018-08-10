$(document).ready(function () { 

    $('#load').click(function() {

        if ($('.line-new:hidden').length > 0) {  
//             $('.line-new:hidden:eq(0)').show();
            $('.line-new:hidden:eq(0)').css({display: "flex", height: "100%", transition: "0.5s"})
          } else {
              $(this).hide();
        }


    }) 

})
