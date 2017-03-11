// JavaScript Document


$(document).ready(function(){
var	wh=$(window).height();
var	ww=$(window).width();

$(".material input, .material select,.material textarea").each(function(){
   //alert($(this).val());
   var imgVal = $(this ).val();
   if(imgVal=='')
	{
		$( this ).parent().removeClass("active");
		//alert(12);
	}
	else
	{
		 $( this ).parent().addClass("active");
	//	alert(123);
	}
});




$( ".material input, .material select,.material textarea" ).focusin(function() {
  $( this ).parent().addClass("active");
});

$( ".material input, .material select,.material textarea" ).focusout(function() {
	var imgVal = $(this).val();
    if(imgVal=='')
    {
        $( this ).parent().removeClass("active");

    }
    return false;
});	
	
	$(".pop-bg,#close").click(function(){
		///alert(51364);
		$(".pop-bg").fadeOut(600);
		$(".pop-up").fadeOut(200);
		$("#content-wrap").html('');
		
	});

	$("body").on("click",'.pop-image', function(){
		//e.preventDefault();
	//	alert(13);
		var link = $(this).data('href');
		$("#content-wrap").html('<img  src="'+link+'" alt="images">');
		
		$("#content-wrap").fadeIn(400);
		//Open Popup
		$(".pop-bg").fadeIn(400);
		$(".pop-up").fadeIn(600);
		//$("html, body").animate({ scrollTop:scroll}, 1000);
		
		return false;
    });

});	