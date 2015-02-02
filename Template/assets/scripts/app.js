var app = function()
{
    var slimmScroll = function()
    {
        //Initialing niceScroll. For more options visit http://areaaperta.com/nicescroll/
	var nice = $("html").niceScroll({
		scrollspeed:80,
		mousescrollstep:30,
		cursorwidth:10,
		cursorborderradius:0,
		cursorborder:0,
		autohidemode:false,
		cursoropacitymax:0.7
	});
    }
    
    var wowPlugin = function()
    {
        wow = new WOW(
	{
		animateClass: 'animated',
		offset:       100
	});
	wow.init();
    }
    return {
        init:   function()
        {
            slimmScroll();
            wowPlugin();
        }
    };
}();