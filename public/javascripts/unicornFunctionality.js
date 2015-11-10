$(document).ready(function(){
    $("#rating").click(function(){
    	var colors = {
    		1: "red",
    		2: "orange",
    		3: "yellow",
    		4: "#00FF00",
    		5: "#00FFCC",
    		6: "#14C4FF",
    		7: "#A366FF",
    		8: "#CC33FF",
    		9: "#FF0066",
    		10: "url('/images/rainbow.jpg')"
    	};
        var rating = $("#rating").val();
        console.log(rating);
        $("body").css("background", colors[rating]);
    });
});
