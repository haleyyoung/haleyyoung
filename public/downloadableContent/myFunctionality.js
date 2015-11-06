$(document).ready(function(){
    $("#submit").click(function(){
        var number = $("#number").val();
        $("#answer").text(number * 1 + 5);
    });
});
