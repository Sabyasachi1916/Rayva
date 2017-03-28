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
		$("body").find('.carousel-3d-slider div').removeAttr('id');		
	});

	$("body").on("click",'.pop-image', function(){
		//e.preventDefault();
	//	alert(13);
		var link = $(this).data('href');
		$(this).parent().attr('id', 'im-next');
		var linkn = $('#im-next').next().children().data('href');
		var linkp = $('#im-next').prev().children().data('href');
		
		
		//$("#content-wrap").html('<img  src="'+link+'" alt="images">');
		
		
		if (linkn === undefined) {
			if (linkp === undefined) {
       			$("#content-wrap").html('<img  src="'+link+'" alt="images">');
			} else {
				$("#content-wrap").html('<img  src="'+link+'" alt="images"><div class="pop-image-prev"></div>');
			}
		}else{
			if (linkp === undefined) {
       			$("#content-wrap").html('<img  src="'+link+'" alt="images"><div class="pop-image-next"></div>');
			} else {
				$("#content-wrap").html('<img  src="'+link+'" alt="images"><div class="pop-image-prev"></div><div class="pop-image-next"></div>');
			}
		}
		
		$("#content-wrap").fadeIn(400);
		//Open Popup
		$(".pop-bg").fadeIn(400);
		$(".pop-up").fadeIn(600);
		//$("html, body").animate({ scrollTop:scroll}, 1000);
		
		return false;
    });
	
	
	$("body").on("click",'.pop-image-next', function(){
		//e.preventDefault();
		var link = $('#im-next').next().children().data('href');
		var linkn = $('#im-next').next().next().children().data('href');
		$("body").find('#im-next').next().attr('id', 'im-next');
		if (linkn === undefined) {
       		$("#content-wrap").html('<img  src="'+link+'" alt="images"><div class="pop-image-prev"></div>');
   		} else {
        	$("#content-wrap").html('<img  src="'+link+'" alt="images"><div class="pop-image-prev"></div><div class="pop-image-next"></div>');
    	}	
		$("body").find('#im-next').removeAttr('id', 'im-next');
		return false;
    });
	
	
	$("body").on("click",'.pop-image-prev', function(){
		//e.preventDefault();
		var link = $('#im-next').prev().children().data('href');
		var linkp = $('#im-next').prev().prev().children().data('href');
		
		$("body").find('#im-next').prev().attr('id', 'im-prev');
		$("body").find('#im-next').removeAttr('id', 'im-next');
		$("body").find('#im-prev').attr('id', 'im-next');
		$("body").find('#im-prev').removeAttr('id', 'im-prev');
		//alert(link);
		if (linkp === undefined) {
       		$("#content-wrap").html('<img  src="'+link+'" alt="images"><div class="pop-image-next"></div>');
   		} else {
			$("#content-wrap").html('<img  src="'+link+'" alt="images"><div class="pop-image-prev"></div><div class="pop-image-next"></div>');
    	}	
		return false;
    });
	
	
	
	
	$("ul.package li").click(function () {    
		console.log(localStorage.getItem("package"));    
	  	var tab_id = $(this).attr('data-tab');
	  	$(".tab-package").hide();
		
	  	$("#"+tab_id).fadeIn(600);
		
	  	$("ul.package li").removeClass('active');
	  	$(this).addClass('active');
		
		$(".tab-package").removeClass('active');
		$("#"+tab_id).addClass('active');

		var parentHere = $("ul.package li").closest('div').attr('id')
		console.log(parentHere);
		
		if (parentHere == "theme") {
			localStorage.setItem("package", $(".active div").get(0).innerHTML);
			localStorage.setItem("package_id",tab_id);
			if (tab_id == "tab1"){
				localStorage.setItem("price_package",78000);
			}
			if (tab_id == "tab2"){
				localStorage.setItem("price_package",150000);
			}
			if (tab_id == "tab3"){
				localStorage.setItem("price_package",250000);
			}
			if (tab_id == "tab4"){
				localStorage.setItem("price_package",500000);
			}
			console.log("price_selected",localStorage.getItem("price_package"));
		}
		if (parentHere == "room_size") {
			localStorage.setItem("room_size", $(".active div").get(0).innerHTML);
			localStorage.setItem("package_id_roomsize",tab_id);
			 var price = localStorage.getItem("price_package");

            console.log("price_",price);
            document.getElementById("tag").innerText = "$"+numberWithCommas(price)
            localStorage.setItem("price_room",price);
			
			document.getElementById("tag2").innerText = "$"+numberWithCommas(price)
            localStorage.setItem("price_room",price);

			document.getElementById("tag3").innerText = "$"+numberWithCommas(price)
            localStorage.setItem("price_room",price);

			document.getElementById("tag4").innerText = "$"+numberWithCommas(price)
            localStorage.setItem("price_room",price);

			document.getElementById("tag5").innerText = "$"+numberWithCommas(price)
            localStorage.setItem("price_room",price);
			
		}
	});
	
  
  $(".swiper-pagination-bullet swiper-pagination-bullet-active").click(function(){
     console.log("baseball selected");
    });
	
	
	
	
	window.getElementById("ac2-2").click();
   

	
	
	

});	