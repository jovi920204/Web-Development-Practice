console.log("hello");
$(".btn").click(function(){
    
    let id = +$(this).attr("id");
    console.log(id);
    let dots = "#dots"
    $("#dots"+id).toggleClass("hide");
    $("#more"+id).toggleClass("hide");
});