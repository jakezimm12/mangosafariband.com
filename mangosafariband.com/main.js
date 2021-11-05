$(document).ready(() => {

    $('#welcome-page').fadeIn(3000);
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    window.addEventListener("beforeunload", function(event) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

    /*class Item{

        Item(name){
            this.name = name;
            if(this.name === 'T-Shirt'){
                this.seeBack = true;
                this.color = true;
                this.size = true;
                this.cost = 15;
            }
            else if(this.name === 'Hat'){
                this.seeBack = false;
                this.color = true;
                this.size = false;
                this.cost = 15;
            }
            else if(this.name === 'Sticker'){
                this.seeBack = false;
                this.color = false,
                this.size = false,
                this.cost = 5;
            }
            else if(this.name === 'Hoodie'){
                this.seeBack = true;
                this.color = true;
                this.size = true;
                this.cost = 25;
            }
            else if(this.name === 'Poster'){
                this.seeBack = false;
                this.color = false,
                this.size = true,
                this.cost = 10;
            }
            else{
                this.seeBack = false;
                this.color = false;
                this.size = false;
                this.cost = 0;
            }
        }

        
      }*/

    $('#splashscreen').fadeIn(500);

    var images=new Array('mangOcean.jpg', 'mangO1.jpg', 'mangO2.jpg', 'mangO3.jpg', 'mangOpic.jpg');
    var nextimage=0;

    startSlideshow();

    function startSlideshow(){
        if(nextimage>=images.length){nextimage=0;}
         $('.safari-background')
        .css('background-image','url("'+images[nextimage++]+'")')
        .fadeIn(5000,function(){
            setTimeout(startSlideshow,10000);
        });
    }

    $( "#select-color-button" ).change(function() {
        if(document.getElementById('merch-display-text').innerHTML === 'T-Shirt' && ($('#select-color-button option:selected').val() != 'white' && $('#select-color-button option:selected').val() != '?')){
            alert('Sorry, we only have white right now!');
            $('#select-color-button option:selected').value='?';
        }
    });


    $('#cart-form-submit-button').click(function () {
        
        if($('#email-input').val() === ""){
            alert("Please fill in the email input.");
            evt.preventDefault();
            window.history.back();
        }
        if($('#merch-input').val() === ""){
            alert("There are no items in your cart.");
            evt.preventDefault();
            window.history.back();
        }
        else{
            var merchInput = document.getElementById('merch-input').value;  
            alert(merchInput);
        }

    });

    $('#enter-text').click(function () {
    
        $("#content-page").css("visibility","visible");
        $("#welcome-page").fadeOut(2000);
        $("#content-page").addClass('fade-in-animation');
        $("html").css("overflow","scroll");
        $("#main-title").addClass('main-title-ani');
        $(".fab").addClass('fab-ani');
    });
    
    var $viewCartButton = document.getElementById('view-cart-button');
    var $addToCartButton = document.getElementById('add-to-cart-button');
    $viewCartButton.innerHTML = 'See Cart: 0'
    var $cartItemsList = $('#cart-items');
    
    var $totalCost = 0;
    var totalCostText = document.getElementById('total-cost');
    var tShirtCost = 15;
    var hatCost = 15;
    var hoodieCost = 25;
    var posterCost = 10;
    var stickerCost = 5;


    $($addToCartButton).click(function () {
        var $color = $("#select-color-button option:selected").text();
        var $size = $("#select-size-button option:selected").text();
        var $merchDisplayText = document.getElementById('merch-display-text').innerHTML;
        if(($('#select-size-button option:selected').val() === '?' && ($merchDisplayText === 'T-Shirt' || $merchDisplayText === 'Hoodie' || $merchDisplayText === 'Poster'))
            || ($('#select-color-button option:selected').val() === '?' && ($merchDisplayText === 'T-Shirt' || $merchDisplayText === 'Hoodie' || $merchDisplayText === 'Hat'))){
            alert('All fields must be filled out to add to cart.');
        }
        else{
            var $itemToBeAdded;
            if($merchDisplayText==='T-Shirt'){
                $totalCost = $totalCost + tShirtCost;
                totalCostText.innerHTML = 'Total: '+$totalCost;
                var $itemToBeAdded = 'T-Shirt - Color:  ' + $color + " &nbsp;&nbsp;&nbsp;Size: " +  $size + " &nbsp;&nbsp;&nbsp;"+tShirtCost;
            }
            /*
            else if($merchDisplayText==='Hat'){
                
                $totalCost = $totalCost + hatCost;
                totalCostText.innerHTML = 'Total: '+$totalCost;
                var $itemToBeAdded = 'Hat - Color: '+ $color + " &nbsp;&nbsp;&nbsp;"+hatCost;
                
            }
            else if($merchDisplayText==='Sticker'){
                
                $totalCost = $totalCost + stickerCost;
                totalCostText.innerHTML = 'Total: '+$totalCost;
                var $itemToBeAdded = 'Sticker' + " &nbsp;&nbsp;&nbsp;"+stickerCost;
            }
            else if($merchDisplayText==='Hoodie'){
                $totalCost = $totalCost + hoodieCost;
                totalCostText.innerHTML = 'Total: '+$totalCost;
                var $itemToBeAdded = 'Hoodie - Color:  ' + $color + " &nbsp;&nbsp;&nbsp;Size: " +  $size + " &nbsp;&nbsp;&nbsp;"+hoodieCost;
            }
            else if($merchDisplayText==='Poster'){
                $totalCost = $totalCost + posterCost;
                totalCostText.innerHTML = 'Total: '+$totalCost;
                var $itemToBeAdded = 'Poster' + " &nbsp;&nbsp;&nbsp;"+posterCost;
            }
            */
           else{
               alert('Sorry! This item has not yet been added to the store. The only item we have right now is a T-Shirt. ')
           }
            $cartItemsList.append("<li>"+$itemToBeAdded+"</li>");
            var currentData = $('#merch_input').val();
            $('#merch_input').attr('value', currentData + '<br>' + $itemToBeAdded);
            var newCurrentData = $('#merch_input').val()
            $viewCartButton.innerHTML = 'See Cart: ' + $("#cart-items li").length;
            var deleteButton = $("<button class='delete-button'>Delete Item</button>").on('click', function(e) {
                
                var innerText = $(e.currentTarget).prev().html();
                
                if(innerText.substr(0,7) === 'T-Shirt'){
                    $totalCost = $totalCost - tShirtCost;
                    totalCostText.innerHTML = 'Total: '+$totalCost;
                }
                else if(innerText.substr(0,7) === 'Sticker'){
                    $totalCost = $totalCost - stickerCost;
                    totalCostText.innerHTML = 'Total: '+$totalCost;
                }
                else if(innerText.substr(0,6) === 'Poster'){
                    $totalCost = $totalCost - posterCost;
                    totalCostText.innerHTML = 'Total: '+$totalCost;
                }
                else if(innerText.substr(0,6) === 'Hoodie'){
                    $totalCost = $totalCost - hoodieCost;
                    totalCostText.innerHTML = 'Total: '+$totalCost;
                }
                else if(innerText.substr(0,3) === 'Hat'){
                    $totalCost = $totalCost - hatCost;
                    totalCostText.innerHTML = 'Total: '+$totalCost;
                }
                
                $(e.currentTarget).prev().remove();
                $(e.currentTarget).remove();
                $viewCartButton.innerHTML = 'See Cart: ' + $("#cart-items li").length;
            })
            $cartItemsList.append(deleteButton);
        }
   });

   $($viewCartButton).click(function () {
    $("#cart-page").css("visibility","visible");
    $("#cart-page").addClass('open-cart-page-ani').delay(1000).queue(function(next){
    $("#cart-page").removeClass('open-cart-page-ani');
        next();
    });
   });

   $('#cart-page-exit-button').click(function () {
    $("#cart-page").css("visibility","hidden");
   });

    $("a.menu-items").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position
        }, 700 );
    });

    $('a, #add-to-cart-button, #see-back-button').on('mouseenter', (event) => {
        $(event.currentTarget).animate({
            fontSize: '2rem'
        }, 300);
        $(event.currentTarget).css({color: "lightsalmon"});
    });
    $('a, #add-to-cart-button, #see-back-button').on('mouseleave', (event) => {
        $(event.currentTarget).animate({
            fontSize: '1.25rem'
        }, 300);
        $(event.currentTarget).css({color: "lightcyan"});
    });

    $('#view-cart-button').on('mouseenter', (event) => {
        $(event.currentTarget).css({color: "gold"});
    });
    $('#view-cart-button').on('mouseleave', (event) => {
        $(event.currentTarget).css({color: "lightcyan"});
    });
    
    $('.inner-container').on('mouseenter', (event) => {
        $(event.currentTarget).children('h3').removeClass("change-merch-text-back-animation");
        $(event.currentTarget).children('h3').addClass("change-merch-text-animation");
    });
    $('.inner-container').on('mouseleave', (event) => {
        $(event.currentTarget).children('h3').removeClass("change-merch-text-animation");
        $(event.currentTarget).children('h3').addClass("change-merch-text-back-animation");
    });
    
                
    var displayOpen = false;
    var clickDisabled = false;
    var tShirtFront = "t-shirt.jpg";
    var tShirtBack = "ex-back-t-shirt.jpg";
    var sticker = 'ex-sticker.jpg';
    var hatFront = "ex-hat.jpg";
    var hatBack = "ex-back-t-shirt.jpg";
    var hoodieFront = "ex-hoodie.jpg";
    var hoodieBack = "ex-back-hoodie.jpg";
    var poster = 'ex-poster.jpg';
    
    
    $('.inner-container').on('click', (event) => {
        if(!clickDisabled){
            clickDisabled = true;
            setTimeout(function(){clickDisabled = false;}, 3000);
            
            if(displayOpen){
                
                    $("#outter-container-two").removeClass('spongebob-ani');
                
                    $("#outter-container-two").addClass('spongebob-ani').delay(2000).queue(function(next){
                    $("#outter-container-two").removeClass('spongebob-ani');
                    next();
                    });                
                
                    $("#container-contents").fadeOut(1000).delay(1).queue(function(next){
                    
                    let currentButton = event.currentTarget;
                    next();
                    if(currentButton === document.getElementById('hat-inner-container')){
                        document.getElementById('merch-display-text').innerHTML = 'Hat';
                        document.getElementById('display-picture').src = hatFront;
                        document.getElementById("select-color-button").style.display = 'inline-block';
                        document.getElementById("select-size-button").style.display = 'none';
                        document.getElementById("select-select-button").style.display = 'inline-block';
                        document.getElementById('cost').innerHTML = '$'+hatCost;
                    }
                    else if(currentButton === document.getElementById('t-shirt-inner-container')){
                        document.getElementById('merch-display-text').innerHTML = 'T-Shirt';
                        document.getElementById('display-picture').src = tShirtFront;
                        document.getElementById("select-color-button").style.display = 'inline-block';
                        document.getElementById("select-size-button").style.display = 'inline-block';
                        document.getElementById("see-back-button").style.display = 'inline-block';
                        document.getElementById('cost').innerHTML = '$'+tShirtCost;
                        
                    }
                    else if(currentButton === document.getElementById('sticker-inner-container')){
                        document.getElementById('merch-display-text').innerHTML = 'Sticker';
                        document.getElementById('display-picture').src = sticker;
                        document.getElementById("select-color-button").style.display = 'none';
                        document.getElementById("select-size-button").style.display = 'none';
                        document.getElementById("see-back-button").style.display = 'none';
                        document.getElementById('cost').innerHTML = '$'+stickerCost;
                    }
                    else if(currentButton === document.getElementById('hoodie-inner-container')){
                        document.getElementById('merch-display-text').innerHTML = 'Hoodie';
                        document.getElementById('display-picture').src = hoodieFront;
                        document.getElementById("select-color-button").style.display = 'inline-block';
                        document.getElementById("select-size-button").style.display = 'inline-block';
                        document.getElementById("see-back-button").style.display = 'inline-block';
                        document.getElementById('cost').innerHTML = '$'+hoodieCost;
                    }
                    else if(currentButton === document.getElementById('poster-inner-container')){
                        document.getElementById('merch-display-text').innerHTML = 'Poster';
                        document.getElementById('display-picture').src = poster;
                        document.getElementById("select-color-button").style.display = 'none';
                        document.getElementById("select-size-button").style.display = 'inline-block';
                        document.getElementById("see-back-button").style.display = 'none';
                        document.getElementById('cost').innerHTML = '$'+posterCost;
                    }
                    else{
                        document.getElementById('merch-display-text').innerHTML = 'Coming Soon!';
                        document.getElementById('display-picture').src = 'mango.jpg';
                        document.getElementById("select-color-button").style.display = 'none';
                        document.getElementById("select-size-button").style.display = 'none';
                        document.getElementById("see-back-button").style.display = 'none';
                        document.getElementById("add-to-cart-button").style.display = 'none';
                        document.getElementById('cost').innerHTML = '$'+10000000000000000000;
                    }
                    next();
                });
            }
            else{
                
                    displayOpen = true;
                    let currentButton = event.currentTarget;
                    
                    if(currentButton === document.getElementById('hat-inner-container')){
                        document.getElementById('merch-display-text').innerHTML = 'Hat';
                        document.getElementById('display-picture').src = hatFront;
                        document.getElementById("select-color-button").style.display = 'inline-block';
                        document.getElementById("select-size-button").style.display = 'none';
                        document.getElementById("select-select-button").style.display = 'inline-block';
                        document.getElementById('cost').innerHTML = '$'+hatCost;
                    }
                    else if(currentButton === document.getElementById('t-shirt-inner-container')){
                        document.getElementById('merch-display-text').innerHTML = 'T-Shirt';
                        document.getElementById('display-picture').src = tShirtFront;
                        document.getElementById("select-color-button").style.display = 'inline-block';
                        document.getElementById("select-size-button").style.display = 'inline-block';
                        document.getElementById("see-back-button").style.display = 'inline-block';
                        document.getElementById('cost').innerHTML = '$'+tShirtCost;
                    }
                    else if(currentButton === document.getElementById('sticker-inner-container')){
                        document.getElementById('merch-display-text').innerHTML = 'Sticker';
                        document.getElementById('display-picture').src = 'ex-sticker.jpg';
                        document.getElementById("select-color-button").style.display = 'none';
                        document.getElementById("select-size-button").style.display = 'none';
                        document.getElementById("see-back-button").style.display = 'none';
                        document.getElementById('cost').innerHTML = '$'+stickerCost;
                    }
                    else if(currentButton === document.getElementById('hoodie-inner-container')){
                        document.getElementById('merch-display-text').innerHTML = 'Hoodie';
                        document.getElementById('display-picture').src = hoodieFront;
                        document.getElementById("select-color-button").style.display = 'inline-block';
                        document.getElementById("select-size-button").style.display = 'inline-block';
                        document.getElementById("see-back-button").style.display = 'inline-block';
                        document.getElementById('cost').innerHTML = '$'+hoodieCost;
                    }
                    else if(currentButton === document.getElementById('poster-inner-container')){
                        document.getElementById('merch-display-text').innerHTML = 'Poster';
                        document.getElementById('display-picture').src = 'ex-poster.jpg';
                        document.getElementById("select-color-button").style.display = 'none';
                        document.getElementById("select-size-button").style.display = 'inline-block';
                        document.getElementById("see-back-button").style.display = 'none';
                        document.getElementById('cost').innerHTML = '$'+posterCost;
                    }
                    else{
                        document.getElementById('merch-display-text').innerHTML = 'Coming Soon!';
                        document.getElementById('display-picture').src = 'mango.jpg';
                        document.getElementById("select-color-button").style.display = 'none';
                        document.getElementById("select-size-button").style.display = 'none';
                        document.getElementById("see-back-button").style.display = 'none';
                        document.getElementById("add-to-cart-button").style.display = 'none';
                        document.getElementById('cost').innerHTML = '$'+1,000,000,000;
                    }
                    
                    $("#outter-container-two").removeClass('spongebob-ani');
                    $("#container-contents").removeClass('fade-in-animation');
                
                    $("#outter-container-two").css("visibility","visible");
                    $("#outter-container-two").addClass('spongebob-ani').delay(2000).queue(function(next){
                    $("#outter-container-two").removeClass('spongebob-ani');
                        next();
                    });
                    
            }
            $("#container-contents").fadeIn(1500);
        }
    });
    
    var seeBackButton = document.getElementById('see-back-button');
    
    $(seeBackButton).click(function () {
        if(seeBackButton.innerHTML === 'See Back'){
            seeBackButton.innerHTML = 'See Front';
            if(document.getElementById('merch-display-text').innerHTML === 'T-Shirt'){
               document.getElementById('display-picture').src = tShirtBack;
           }
           else if(document.getElementById('merch-display-text').innerHTML === 'Hat'){
               document.getElementById('display-picture').src = hatBack;
           }
           else if(document.getElementById('merch-display-text').innerHTML === 'Hoodie'){
               document.getElementById('display-picture').src = hoodieBack;
           }
        }  
       else if(seeBackButton.innerHTML === 'See Front'){ 
           seeBackButton.innerHTML = 'See Back';
           if(document.getElementById('merch-display-text').innerHTML === 'T-Shirt'){
               document.getElementById('display-picture').src = tShirtFront;
           }
           else if(document.getElementById('merch-display-text').innerHTML === 'Hat'){
               document.getElementById('display-picture').src = hatFront;
           }
           else if(document.getElementById('merch-display-text').innerHTML === 'Hoodie'){
               document.getElementById('display-picture').src = hoodieFront;
           }
       }
   });
    
});

$('.enter_link').click(function () {
    $(this).parent('#splashscreen').fadeOut(500);
});