// JavaScript Document


$(document).ready(function(){



	
	
$("ul.package li").click(function () {  
		console.log(window.selectedTheme);       
	  	var tab_id = $(this).attr('data-tab');
	  	$(".tab-package").hide();
		
	  	$("#"+tab_id).fadeIn(600);
		
	  	$("ul.package li").removeClass('active');
	  	$(this).addClass('active');
		
		$(".tab-package").removeClass('active');
		$("#"+tab_id).addClass('active');
		console.log($(".active div").get(0).innerHTML); 
		localStorage.setItem("theme", $(".active div").get(0).innerHTML);
	});
	

});	