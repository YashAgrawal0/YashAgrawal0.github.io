$(document).ready(function(){
    $(window).scroll(function(){
		var hT = $('#timeline').offset().top;
		var hS = $(this).scrollTop();
		console.log(hS - hT);
		// console.log(elementClicked);
		project_top = $('#projects').offset().top;


		if(hS - hT > -100){
    		// $("#title_2019").fadeOut(500);
		    $("#img_2020").fadeIn(1000);
		}
		else{
		    $("#img_2020").fadeOut(500);
    		// $("#title_2019").fadeIn(1000);
		}

		if(hS - hT > 100){
    		// $("#title_2019").fadeOut(500);
		    $("#img_2019").fadeIn(1000);
		}
		else{
		    $("#img_2019").fadeOut(500);
    		// $("#title_2019").fadeIn(1000);
		}

		if(hS - hT > 600){
    		// $("#title_2018").fadeOut(500);
		    $("#img_2018").fadeIn(1000);
		}
		else{
		    $("#img_2018").fadeOut(500);
    		// $("#title_2018").fadeIn(1000);
		}


		if(hS - hT > 900){
    		// $("#title_2016").fadeOut(500);
		    $("#img_2016").fadeIn(1000);
		}
		else{
		    $("#img_2016").fadeOut(500);
    		// $("#title_2016").fadeIn(1000);
		}


		if(hS - hT > 1200){
    		// $("#titsle_2015").fadeOut(500);
		    $("#img_2015").fadeIn(1000);
		}
		else{
		    $("#img_2015").fadeOut(500);
    		// $("#title_2015").fadeIn(1000);
		}


		if(hS - hT > 1500){
    		// $("#title_2008").fadeOut(500);
		    $("#img_2008").fadeIn(1000);
		}
		else{
		    $("#img_2008").fadeOut(500);
    		// $("#title_2008").fadeIn(1000);
		}
    });
});