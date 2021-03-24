// Showing the add-to-cart pop up 
$('#bag').on("click", ()=>{
    // point to the class of the add to cart pop up card 
    $('.add-popup').fadeIn();

});

// Closing the add-to-cart pop up when you click on the cancel icon 
$('#items').on('click', ()=>{
    $('.add-popup').slideUp();
})
// Closing the pop up when you click anywhere on screen
// $('.midnav-container').on('click', ()=>{
//     $('.add-popup').css('visibility','hidden');
// })

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

// Updating the Quantity selector
$("#qty").change(function(){
    $("#displayqty").text($(this).val());
    // Quantity of items to show at nav bar also 
    $("#disp").text($(this).val());
});

// Displaying size of sweater
$("#size-selct").click(function(){
    $("#displaysize").text($(this).val());
    $("#disp-qty").text($(this).val());
});

// Dsiplaying Unit Price
// ******************************************
// Price on  product page
$("#price").text();
price = parseFloat($("#price").text()).toFixed(2);
// Price on pop up card
$("#pop-price").text(price);


// Displaying Quantity on pop up card 
// *******************************************
// Mehtod to get value from the product page then pass to
// the pop up card 
$("#qty").change(function(){
    $("#disp-qty").text($(this).val());
});











