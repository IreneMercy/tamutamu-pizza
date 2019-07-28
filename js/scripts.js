function Pizza(size,topping,crust, name){
  this.size = size;
  this.topping = topping;
  this.crust = crust;
  this.name = name;
}


$(document).ready(function(){
  $("form#myform").submit(function(event){
    event.preventDefault();
    var sizep = $("#sizes radio:checked").val();
    var topp = $("#toppings checkbox:checked").val();
    var crustp = $("#crusts checkbox:checked").val();
    var pname = $("#flavour checkbox:checked").val();
    var price =  0;
      switch (sizep) {
        case "small":
          price = 450;
          break;
        case "medium":
          price = 750;
          break;
        case "large":
          price = 1500;
          break;
        default:sizep

      }
  $("#add").submit(function(event){
    event.preventDefault();
    $(".psize").append(price);

  });
});


  $(".about-toggle").click(function(){
    $(".about").fadeToggle();
  });
  $(".order").click(function(){
    $("#add-pizza").fadeToggle();
  });
  $(".add-cart").click(function(){
    $(".card-add-cart").show();
  });
  $(".deliver").click(function(){
    var location = prompt("Enter Location");
    alert(" Your pizza will be delivered at "  + location + " once you checkout ");
  });



});
