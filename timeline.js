// $(document).ready(function(){
//   $("#2017_container").click(function(){
//     $("#2017_container").fadeOut(500);
//     $("#fadeOutC500ontent2017").fadeOut(500);
//     $("#2017_container").fadeIn("slow");
//     $("#fadeInC1000ontent2017").fadeIn("slow");
//     // $("#div2").fadeIn("slow");
//     // $("#div3").fadeIn(3000);
//   });
// });

$(document).ready(function(){
    $(window).scroll(function(){
		var hT = $('#timeline').offset().top;
		var hS = $(this).scrollTop();
		console.log(hT - hS);
		if(hT - hS < 100){
    		// $("#title_2019").fadeOut(500);
		    $("#img_2019").fadeIn(1000);
		}
		else{
		    $("#img_2019").fadeOut(500);
    		// $("#title_2019").fadeIn(1000);
		}

		if(hS - hT > 300){
    		// $("#title_2018").fadeOut(500);
		    $("#img_2018").fadeIn(1000);
		}
		else{
		    $("#img_2018").fadeOut(500);
    		// $("#title_2018").fadeIn(1000);
		}


		if(hS - hT > 600){
    		// $("#title_2016").fadeOut(500);
		    $("#img_2016").fadeIn(1000);
		}
		else{
		    $("#img_2016").fadeOut(500);
    		// $("#title_2016").fadeIn(1000);
		}


		if(hS - hT > 1000){
    		// $("#title_2015").fadeOut(500);
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