new fullpage('#fullpage', {
    sectionsColor: ['#4285F4', '#34A853', '#FBBC05', '#EA4335'],
    navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['', '', '', ''],
      showActiveTooltip: false,
      slidesNavigation: false,
  });
  
  
   $(document).ready(function() {
    $("a").click(function(e) {
          e.preventDefault();
          if($(this).attr("href") == "https://blog.joeknittel.com/") {
            $link = $(this).attr("href");
            $("body").fadeOut(300,function(){
              window.location = $link; 
            });  
          }
        else {
            $link = $(this).attr("href");
            window.location = $link;
        }
      });
   });
  
  $(window).unload(function () { $(window).unbind('unload'); });
  
  $(window).bind('pageshow', function(event) {
      if (event.originalEvent.persisted) {
          window.location.reload() 
      }
  });