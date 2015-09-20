// JavaScript Document

/*
/*
$('#dc-banner-text-id h3:gt(0)').hide();
setInterval(function(){
    $('#dc-banner-text-id h3:first-child').fadeOut('fast')
     .next('h3').fadeIn('slow')
     .end().appendTo('#dc-banner-text-id');}, 
     5000);*/
	 //For animated text
	 
/*(function() {
    var curimagesId = 2;
    var numberOfImages = 5; // Change this to the number of background images
    window.setInterval(function() {
		$('.dc-banner-parameters').css('background-image','url(images/background' + curimagesId + '.jpg)');
		$('.dc-banner-parameters').fadeOut(250).fadeIn(200);
        curimagesId = (curimagesId + 1) % numberOfImages;
    }, 5 * 1000);
})();*/


/*function changeBackground() {
    var curimagesId = 2;
   	var numberOfImages = 5; // Change this to the number of background images
    $('.dc-banner-parameters').fadeOut(1500,function() {
        $('.dc-banner-parameters').css({
            'background-image' : "url('images/background" + curimagesId + ".jpg')"
        });
        $('.dc-banner-parameters').fadeIn(1500);
    });
    setTimeout(changeBackground, 5000);
	curimagesId = (curimagesId + 1) % numberOfImages;
}*/

/*$(document).ready(function() {
    setTimeout(changeBackground, 5000);  
}); */

// Just a help to change the background-image
var changeImage = function(id, image){
  
  $(id).css('background-image', 'url('+image+')');
};



//Auto change Background Image over time
$(window).load(function() {
	//Close the loading bar..
	$('.loader.center').hide();
    var images = [
       'images/background1-min.jpg', 
       'images/background2-min.jpg',
       'images/background3-min.jpg',
       'images/background4-min.jpg',
	   'images/background5-min.jpg',
       'images/background0-min.jpg', 
    ];
	
   // Your pretty counter
    var i = 0;
    
    // Init sequence, loading the first image
    $("#wrapper_bottom").css("opacity", 0);
    changeImage('#wrapper_bottom', images[i]);
    changeBackground();
    
    // Your function
    // TODO: you should declare this outside of this scope
    function changeBackground() {
      //$('#wrapper_bottom').fadeOut({queue: false, duration: 'slow'});
      $('#wrapper_bottom')
        .animate({"opacity": 1}, {
          duration:1000,
          complete:function(){
            changeImage('#hero', images[i], 1);
            if (++i >= images.length) { i = 0; } 
            $("#wrapper_bottom").css("opacity", 0);
            changeImage('#wrapper_bottom', images[i]);
          },
         step:function(){
          return 0.001;
         }

      });
    }//changeBackground
  
    setInterval(changeBackground, 6000);
});
