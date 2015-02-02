var nav;
var new_css;

if (typeof(Storage) != "undefined") 
{
    if(localStorage.getItem("nav") == null || localStorage.getItem("nav") == "")
    {
        nav ="";
    }
    else
    {
        nav = localStorage.getItem("nav");
        $(".navbar").addClass("navbar-fixed-top");
        $('.change_toolbox').val('navbar-fixed-top'); 
    }
    
    if(localStorage.getItem("theme-color") != null)
    {
        $(".eachcolor").removeClass('color-active');
        color = localStorage.getItem("theme-color");
        new_css = "assets/css/" + color + ".css";
        
        $('.eachcolor[data-color="' + color + '"]').addClass('color-active');
    }
    else
    {
        new_css = "assets/css/blue.css";  
    }
    $("#theme-color").attr('href', new_css);
} 
else 
{
    nav = "";
}

$(document).ready(function(){
    $(".tool").click(function(){
      $(".toolbox").toggleClass("activetool");
    });
  });


  function change_nav(value)
  {
      if(value == "")
      {
          $(".navbar").removeClass("navbar-fixed-top");
      }
      else
      {
          $(".navbar").addClass("navbar-fixed-top");
      }
      localStorage.setItem("nav", value);
  }
  
  
$(".eachcolor").click(function(){               
    var color = $(this).attr("data-color");  
    var hex_color = $(this).attr("hex-color"); 
    var new_css = "assets/css/" + color + ".css";
    $("#theme-color").attr('href', new_css);
    $(".eachcolor").removeClass('color-active');
    $(this).addClass('color-active');
    localStorage.setItem("theme-color", color);
});