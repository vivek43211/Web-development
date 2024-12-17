//document.querySelector("h1").style.color = "green";
$("h1").css("color","red")

$(document).keypress(function(event){
    $("h1").text(event.key)
})

$(document).on("click" , function(){
    $("h1").css("color","purple")
})