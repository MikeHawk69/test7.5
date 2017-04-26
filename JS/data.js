/**
 * Created by MikeHawk on 3/29/17.
 */

/** CLOSE QUICK LOOK
 * when X button is triggered product
 * is unselected from quick look
 */
$(document).ready(function() {
    $('#closebutton').click(function(){
        $('#quickview').slideUp("slow");
    });
});

/** EXPAND QUICK LOOK
 * when Quick Select is triggered
 * product is selected into quick look
 */
$(document).ready(function() {
    $('.btn-success').click(function(){
        $('.imageBox').html($('.boxclass').html());
    });
});

/** HIDE PRODUCT
 * take user to product page and
 * confirm if really wants to delete
 */
$(document).ready(function(){
    $('.btn-warning').click(function(){
       $(this).parents('.col-md-6').fadeOut("slow"); //hides product
        $('.imageBox').html('<h3 align="center">Product Data</h3>'  //restores imageBox to default text
            +'<p>data goes here</p>');
    });
});

//var files = document.getElementById('files');







