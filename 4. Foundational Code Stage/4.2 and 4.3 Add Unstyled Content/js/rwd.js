jQuery(document).ready(function($){

  // Touch friendly expanded nav
  $('ul.navmenu li span').click(function(event){

    event.preventDefault();

    // get the child of the clicked menu switch
    var child_menu = $(this).parent().parent().children('ul');

    // get the parent link of the clicked menu switch
    var parent_link = $(this).parent();

    // check if it's currently open or closed
    if ( child_menu.hasClass('childopen') ) {
      // if it's open, close it

      // remove any "active" class from parent item
      $(parent_link).removeClass('active');
      // hide child menu
      $(child_menu).removeClass('childopen');
      // set this open menu switch to +
      $(this).html('+');

    } else {
      // if it's closed, open it

      // hide any open child menus
      $('ul.navmenu ul').removeClass('childopen');
      // set any open menu switch symbols back to +
      $('ul.navmenu li span').html('+');
      // remove any existing "active" class from menus
      $('.active').removeClass('active');

      // add "active" class to this parent item
      $(parent_link).addClass('active');
      // show correct child menu
      $(child_menu).addClass('childopen');
      // set this open menu switch to -
      $(this).html('-');

      return false;

    }

  });

  $('.navicon').click(function(){
    
    if ( $('.navmenu').css('display') == 'none' ) {

      $('.navmenu').addClass('show');
      $('.navicon').removeClass('closed').addClass('open');
      $('.navicon').children('.fa').removeClass('fa-navicon').addClass('fa-close');

    } else {

      $('.navmenu').removeClass('show');
      $('.navicon').removeClass('open').addClass('closed');
      $('.navicon').children('.fa').removeClass('fa-close').addClass('fa-navicon');

    }

  });

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