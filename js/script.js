// Showing the add-to-cart pop up 
$('#bag').on("click", ()=>{
    // point to the class of the add to cart pop up card 
    $('.add-popup').slideDown();

});

// Anonymous function
// $("#bag").click(function(){
//     $(".add-popup").slideDown();

// })

// Closing the add-to-cart pop up when you click on the cancel icon 
$('#items').on('click', ()=>{
    $('.add-popup').slideUp();
})


// Closing the pop up when you click anywhere on screen
$('.midnav-container').click(function(){
    $('.add-popup').css('visibility','hidden');
})

// *****************************************************
// Picture changer 
$('#pic1').on('click', () => {
    $('#img1').css('visibility', 'visible');
    $('#img2').css('visibility', 'hidden');
    $('#img3').css('visibility', 'hidden');
})
$('#pic2').on('click', () => {
    $('#img2').css('visibility', 'visible');
    $('#img1').css('visibility', 'hidden');
    $('#img3').css('visibility', 'hidden');
})
$('#pic3').on('click', () => {
    $('#img3').css('visibility', 'visible');
    $('#img1').css('visibility', 'hidden');
    $('#img2').css('visibility', 'hidden');
})
// *****************************************************

// Thumbnail Activeness
$('#pic1').on('click', () => {
    $('#pic1').css('border', '2px solid #282846');
    $('#pic2').css('border', 'none');
    $('#pic3').css('border', 'none');
})
$('#pic2').on('click', () => {
    $('#pic2').css('border', '2px solid #282846');
    $('#pic1').css('border', 'none');
    $('#pic3').css('border', 'none');
})
$('#pic3').on('click', () => {
    $('#pic3').css('border', '2px solid #282846');
    $('#pic1').css('border', 'none');
    $('#pic2').css('border', 'none');
})
// *****************************************************

// Updating the Quantity selector
$("#qty").change(function(){
    // Assigning a variable to the this.val() function
    // let displayQuantity = $(this).val();
    // $("#displayqty").text(displayQuantity);
  $("#displayqty").text($(this).val());
    // Quantity of items to show at nav bar also 
    // $("#disp").text(displayQuantity);
    $("#disp").text($(this).val());
});
// *****************************************************

// Displaying size of sweater
$(".size-value").click(function(){
 // with the use of a variable :
//    let  display = $(this).text();
//     $("#displaysize").text(display);

// With the use of the keyword
    $("#displaysize").text($(this).text());

    // activeness
    $(this).css({"background-color": "#002b5c","color":"whitesmoke"});
    array.forEach(element => {      
    });

});

// Activeness of  size selcted 
// $(".size-value").on("click", ()=>{
//     $(this).css("background-color", "#002b5c");
//     $(this).css("color", "whitesmoke");
// })



// Dsiplaying Unit Price
// ******************************************
// Price on  product page
$("#price").text();
price = parseFloat($("#price").text()).toFixed(2);
// Price on pop up card
$("#pop-price").text(price);


// Displaying Quantity on pop up card 
// ***********************************************
// Mehtod to get value from the product page then pass to
// the pop up card 
$("#qty").change(function(){
    $("#disp-qty").text($(this).val());
});











