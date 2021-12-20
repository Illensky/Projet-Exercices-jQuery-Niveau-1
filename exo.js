$("#hello").text("Hello World !!")
$('a').attr("href","https://developers.google.com/speed/libraries#jquery")
$("#size").css({
    "height" : "250px",
    "width" : "250px",
    "border" : "solid 1px black"
})

$("#size div").eq(1).text("texte ajouter en jQuerry")
alert($("#size div").eq(1).index())