function Pizza(size,topping,crust, name){
  this.size = size;
  this.topping = topping;
  this.crust = crust;
  this.name = name;
}


$(document).ready(function(){
  $("form.myform").submit(function(event){
    event.preventDefault();
    var sizep = parseInt($("#sizes option:selected").val());
    var topp = parseInt($(".toppings input:checked").val());
    var crustp = parseInt($(".crusts input:checked").val());
    var deliveryp = parseInt($(".delivery input:checked").val());
    var quantity = parseInt($(".quantity").val());
    var total = parseInt(sizep + topp + crustp + deliveryp);
    var grandTotal = parseInt(total*quantity);

      $(".sprice").append(sizep);
      $(".tprice").append(topp);
      $(".cprice").append(crustp);
      $(".dprice").append(deliveryp);
      $(".total").append(total);
      $(".ptotal").append(grandTotal);

        alert("The total price is " + grandTotal)
        $(".myform").hide();

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
    var deliveryp = parseInt($(".delivery input:checked").val());
    alert("The delivery price is " + deliveryp);
    var location = prompt("Enter Location");
    var contact = prompt("Enter phone number")
    alert(" Your pizza will be delivered at "  + location + " once you checkout ");

  });
  $("#checkout").click(function(){
    $(".card-checkout").hide();
    location.reload();
  });


});
