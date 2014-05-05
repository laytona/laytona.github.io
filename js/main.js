$(document).ready(function() 
{
    var options =
    {
        dropDownSpeed : 100,
        slideUpSpeed : 200,
        slideDownTabSpeed: 50,
        changeTabSpeed: 200
    }
    
    var methods = 
    {
        dropDownMenu : function(e)
        {  
            var body = $(this).find('> :last-child');
            var head = $(this).find('> :first-child');
            
            if (e.type == 'mouseover')
            {
                body.fadeIn(options.dropDownSpeed);
                head
            }
            else
            {
                body.fadeOut(options.dropDownSpeed);
            }
            
        },
        
        dropDownClick : function(e)
        {
            e.preventDefault();
            var dropdown = $(this).parents('.dropdown');
            var selected = dropdown.find('.dropmenu .selected');
            var newSelect = $(this).html();
            var body = dropdown.find('> :last-child');
            
            dropdown.find('.drop-selected').removeClass('drop-selected');
            $(this).addClass('drop-selected');
            selected.html(newSelect);
            body.fadeOut(options.dropDownSpeed);
        },
        
        //param slideFrom - side from where overlay will slide, target - parent element, that contains overlay
        overlayHover : function(e)
        {
            var overlay;
            var slideFrom = e.data.slideFrom;
            var content;
            
            if (typeof e.data.target == 'string')
            {   
                overlay = $(this).parents(e.data.target).find('.overlay-wrp');
                content = $(this).parents(e.data.target).find('.content-wrp');
            }
            else
            {
                overlay = $(this).find('.overlay-wrp');
                content = $(this).find('.content-wrp');
            }
            
            if ( (e.type == 'mouseover' && !overlay.hasClass('animating')) ||
                 (e.type == 'click' && !overlay.hasClass('animating') && !overlay.hasClass('active')) )
            {
                var animation = {};
                animation[slideFrom] = '0%';
                overlay.addClass('animating').addClass('active');
                overlay.stop().animate(animation, options.slideUpSpeed, function(){
                    overlay.removeClass('animating').addClass('active');
                });
                
                animation[slideFrom] = '100%';
                content.parent().css('height', content.parent().height());
                content.stop(true,true).animate(animation, options.slideUpSpeed);
            }
            else if (e.type == 'mouseleave' || (e.type == 'click' && !overlay.hasClass('animating')))
            {
                var animation = {};
                var animationContent = {};
                
                animationContent[slideFrom] = '0%';
                content.parent().css('height', content.parent().height());
                content.stop(true,true).animate(animationContent, options.slideUpSpeed, function()
                {
                    content.parent().css('height', '');
                });
                animation[slideFrom] = '-100%';
                overlay.removeClass('active');
                overlay.stop(true,true).animate(animation, options.slideUpSpeed);
            }
        }
    }

    $('.profile-wrp .profile-photo, .profile-wrp .overlay-wrp').on('click', {slideFrom : 'left', target : '.hover-left'}, methods.overlayHover);
    $('.hover-down').on('mouseover', {slideFrom : 'bottom'}, methods.overlayHover).on('mouseleave', {slideFrom : 'bottom'}, methods.overlayHover);
    $('.dropdown').on('mouseover', methods.dropDownMenu).on('mouseleave', methods.dropDownMenu);
    $('.dropdown .dropmenu-active a').on('click', methods.dropDownClick);
});




