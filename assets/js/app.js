$(document).ready(function(){
  var imgItems = $('.slider li').length;
  var imgPos = 1;

  for (var i = 1; i <= imgItems; i++) {
    $('.pagination').append('<li class="glyphicon glyphicon-stop"></li>');  
  }

  $('.slider li').hide();
  $('.slider li:first').show();
  $('.pagination li:first').css({'color' : 'MidnightBlue'});

  $('.pagination li').click(pagination);
  $('.right span').click(nextSlider);
  $('.left span').click(prevSlider);

  setInterval(function(){
    nextSlider();
  }, 4000);

  function pagination(){
    var paginationPos = $(this).index() + 1;
    
    $('.slider li').hide();
    $('.slider li:nth-child('+ paginationPos +')').fadeIn();

    $('.pagination li').css({'color' : 'slategray'});
    $(this).css({'color' : 'MidnightBlue'});

    imgPos = paginationPos;
  }

  function nextSlider(){
    if (imgPos >= imgItems) {
      imgPos = 1;
    } else {
      imgPos++;
    }
    $('.pagination li').css({'color' : 'slategray'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color' : 'MidnightBlue'});

    $('.slider li').hide();
    $('.slider li:nth-child('+ imgPos +')').fadeIn();

  }

  function prevSlider(){
    if (imgPos <= 1) {
      imgPos = imgItems;
    } else {
      imgPos--;
    }
    $('.pagination li').css({'color' : 'slategray'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color' : 'MidnightBlue'});

    $('.slider li').hide();
    $('.slider li:nth-child('+ imgPos +')').fadeIn();

  }
}); 