function Pizza(size,topping,crust, name){
  this.size = size;
  this.topping = topping;
  this.crust = crust;
  this.name = name;
}

$(document).ready(function(){
  $("form#myform").submit(function(event){
    event.preventDefault();
    var sizep = $("#sizes option:selected").val();
    var topp = $("#toppings option:selected").val();
    var crustp = $("#crusts option:selected").val();
    var pname = $("#flavour option:selected").val();

    $("#total").last().append("Total:" + pname);

  total()
  });
  $(".about-toggle").click(function(){
    $(".about").fadeToggle();
  });
});
