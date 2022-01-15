    $(function(){

        $('ul img').on({
            mouseover: function(){
            $(this).css({
            'opacity': 1, 
        });
        }, 
                
        mouseout: function(){
            $(this).css({
            'opacity': 0.4, 
        });
        }, 	
        click: function(){
            var imgURL = $(this).attr('src');
            $('#mainImg').fadeOut(500, function(){
                $(this).attr('src' , imgURL);
            }).fadeIn(500);
        }
    })

// -------------------------------------------------------------------------

/*<!-- --------- 	-------Accordion  ----------------- -->*/



 $(".accordion").on("click", ".accordion-header", function() {
 	$(this).toggleClass("active").next().slideToggle();
 });

//!-- ----------------Tab styled ----------------- -//




 $(".tab-list").on("click", ".tab", function(e) {
     e.preventDefault();
 
     $(".tab").removeClass("active");
     $(".tab-content").removeClass("show");
     $(this).addClass("active");
     $($(this).attr("href")).addClass("show");
 });

 
})
