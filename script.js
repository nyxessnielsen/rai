<!-- scripts & google fonts. --><script>
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
</script><script type="text/javascript">
$(document).ready(function(){
   
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
 
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
 
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
 
})
</script><script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script><script src="https://static.tumblr.com/iuw14ew/VSQma1786/jquery.style-my-tooltips.js"></script><script> (function($){ $(document).ready(function() { $("a[title]").style_my_tooltips({ tip_follows_cursor:true, tip_delay_time:90, tip_fade_speed:600, attribute:"title" }); }); })(jQuery); </script><script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script><script src ="//static.tumblr.com/fwgzvyf/Oj1o08f6h/shythemes.vr.js"></script><link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"><link href="//solrainha.github.io/honeybee/honeybee.css" rel="stylesheet"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=ABeeZee:400,400italic|Lato:400,400italic,700,700italic" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Old+Standard+TT" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Shrikhand&display=swap" rel="stylesheet"><link rel="stylesheet" href="myProjects/webProject/icofont/css/icofont.min.css">