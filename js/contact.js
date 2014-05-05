$(function()
{
    $("#contact-us form").submit(function()
    {
        var form = $(this);
        var str = form.serialize();
        $.ajax(
        {
            type: "POST",
            url: "contact.php",
            data: str,
            success: function(msg)
            {
                $("#contact-us .result .alert").remove();
                msg = JSON.parse(msg);

                if(msg.status == 'OK')
                {
                    $('#contact-us .result').append('<div class="alert alert-success">Your message has been sent. Thank you!<button type="button" class="close" data-dismiss="alert">×</button></div');
                }
                else if(msg.text)
                {
                    $.each(msg.text, function(i, elem){
                        $('#contact-us .result').append('<div class="alert alert-error">' + elem + '<button type="button" class="close" data-dismiss="alert">×</button></div');
                    })
                }
                else
                {
                    $('#contact-us .result').append('<div class="alert alert-error">Error<button type="button" class="close" data-dismiss="alert">×</button></div');
                }
            }
        })
        return false;
    })
})