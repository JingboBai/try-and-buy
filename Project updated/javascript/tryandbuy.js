

 // <!-- this part realized by tinycarousel -->
$(document).ready(function()
{
    $('#slider1').tinycarousel();

});
//tinycarousel End

//quality buttons
$(function(){
	$(".add").click(function(){
    var t=$(this).parent().find('input[class=text_box]');
		t.val(parseFloat(t.val())+1);
    setTotal();
	})
	$(".sub").click(function(){
      var t=$(this).parent().find('input[class=text_box]');
      if(t.val()>0){
      t.val(parseFloat(t.val())-1);
    }
    setTotal();
	});
});
function setTotal(){
var total=0;
var s=0;
var myArray;
$("#tab td").each(function(){
s=parseInt($(this).find('input[class=text_box]').val())*parseFloat($(this).find('span[class=price]').html());
$(this).find(".total").html(s.toFixed(2));
// var s = s.toFixed(2).replace(/[^0-9]/ig,"");
total+=$(this).find(".total").text()*1;
});
// myArray = $('.total');
// // alert(myArray)
// $('.total').each(function() {
//     total += myArray.html();
// });
    $(".allTotal").html(total);
  }

//quality End

//enlarge product pic
var timeoutId;
$(document).ready(function(){
$(".smallImg").hover(function(){
  var self = this;
  timeoutId=null;
  timeoutId=setTimeout(function(){
  $("p#addImage").append('<img id=bigImage src="'+ self.rel + '" alt="" />');
  $(self).find("img").stop().fadeTo("slow",0.5);}, 2000);
  }

  ,function(){
  window.clearTimeout(timeoutId);
  $(this).find("img").stop().fadeTo("slow",1);
  $("img#bigImage").remove();
  });
});


var flag=0;
$('#show-quick-cart-zone').mouseenter(function () {
   document.getElementById("show-quick-cart-zone").style.zIndex = "1";
    $('#quickcart').slideDown(500);
    return false;
});
$('#account-cart-div').mouseleave(function () {
    $('#quickcart').slideUp(500);
    return false;
});

//enlarge end



// shopping cart
$(function() {
    $('.chk_boxes').click(function() {
        $('.check').prop('checked', this.checked);
    });
});
