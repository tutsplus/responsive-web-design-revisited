jQuery(document).ready(function($){

  // Responsive iframes
  function responsiveIframe() {
    $('iframe').each(function(){
      var iw = $(this).width();
      var ih = $(this).height();
      var ip = $(this).parent().width();
      var ipw = ip/iw;
      var ipwh = Math.round(ih*ipw);
      $(this).css({
        'width': ip,
        'height' : ipwh,
      });
    });
  }

  responsiveIframe();

  // Trigger video resize if browser is resized
  $(window).resize(function(){
    responsiveIframe();
  });

  // Watch body height to see if font size settings are changed
  var watch_el = $('body');
  var el_height = watch_el.innerHeight();

  window.setInterval(function(){
    var new_height = watch_el.innerHeight();
    if ( new_height != el_height ) {
      el_height = new_height;
      responsiveIframe();
    }
  }, 200);

});