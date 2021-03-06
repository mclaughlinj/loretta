$( document ).ready(function() {

  var viewHeight = $( window ).height(),
  viewWidth = $( window ).width(),
  viewWidthQuarter = $( window ).width()/4,
  viewHeightHalf = $( window ).height()/2,
  position = $(window).scrollTop(),
  mainContentPosition = $( '.home__mainContent__div' ).offset(),
  $root = $('html, body'),
  pathName = window.location.pathname,
  url = window.location.href;

  var galleryTemplate = lg.templates['galleryContent'];
  var blogTemplate = lg.templates['blogContent'];
  var aboutTemplate = lg.templates['aboutContent'];
  var contactTemplate = lg.templates['contactContent'];


    //splash carousel
      var nIntervId;
      var splashEnd = false;
      var shadeStart = false;
      var shadeOpen = false;
      var requestData = {
        app: true
      }
      positionShades(function(status) {



        if (pathName === '/') {

          post('/gallery', requestData, function(response){
            var galLength = response.galleryItems.length;
            var galArray = [];
            for ( i = 0; i < galLength; i++ ) {
            	if (response.galleryItems[i].shade) {
            	  var galSplit = response.galleryItems[i].fileName.split('.');
            	  var twoTimes = galSplit[0] + '@2x.' + galSplit[1];
            	  galArray.push(twoTimes);
            	}
            }
            galArray.sort(
              function () { if (Math.random()<.5) return -1; else return 1; }
            );
            galLength = galArray.length;


            var numberOfBgs = galLength,
            transitionEnded = false,
            i = 0;
            j = 1;
            $(document).one('click', 'body', function(e) {
              splashEnd = true;
              if (!shadeOpen) {
                clearInterval(nIntervId);
                endShades();
              } else {
                closeShades(function(status) {
                  clearInterval(nIntervId);
                  endShades();
                });
              }
            });
            if (!splashEnd) {
              nIntervId = setInterval(function() {
              shadeStart = true;
              if (!splashEnd) {
                changeBg(galArray[j], function(status){
                    positionShades(function(status) {
                      if (!splashEnd) {
                        openShades(function(status) {
                          shadeOpen = true;
                          if (!splashEnd) {
                            changeShade(galArray[i], function(status){

                              positionShades(function(status) {
                                if (!splashEnd) {
                                  closeShades(function(status) {
                                  shadeOpen = false;
              //                       if (splashEnd) {
              //                         clearInterval(nIntervId);
              //                         endShades();
              //                       }
                                    i++;
                                    j++;
                                    if (j == galLength)  {
                                      j = 0;
                                    }
                                    if (i == galLength)  {
                                      i = 0;
                                    }
                                    console.log('i ' + i);
                                    console.log('j ' + j);
                                  });
                                }
                              });
                            });
                          }

                        });
                      }
                    });

                });
              }
              }, 4000);
            }

          });
        } else {
          $('.home__modal__div').hide();
          endShades();
        }


      });




  $(document).on('click', '.home__modal__div__close', function(e) {
    e.preventDefault();
    $('.home__modal__div').fadeOut();
  });

  $(document).on('click', '.page__nav__reveal__div', function(e) {
    e.preventDefault();
    $('.page__nav__reveal__div').addClass('hide');
    $('aside').addClass('show');
    $('body').css('cursor','pointer');
    $('body').click(function(e) {
      $('.page__nav__reveal__div').removeClass('hide')
      $('aside').removeClass('show');
      $('body').css('cursor','auto');
    });

  });




  $(document).on('click', '.home__aside__nav__li__gallery__a', function(e) {
    e.preventDefault();
    requestData = {
      app: true
    }
    positionShades(function(status) {
      closeShades(function(status) {
        post('/gallery', requestData, function(response){
          var galleryItems = response;
          $('.home__section__mainContent').html(galleryTemplate(galleryItems));
          endShades(function(status) {
          $('.home__columnShades__div').css('z-index','0');
          });
        });
      });
    });
  });

  $(document).on('click', '.gallery__image__a', function(e) {
    e.preventDefault();
    var imgUrl = $(this).prop('href'),
    imgTitle = $(this).children('img').prop('title'),
    imgDesc = $(this).children('img').prop('alt');
    showGalleryImg(imgUrl, imgTitle, imgDesc, function(status) {
    })
  });

  $(document).on('click', '.home__aside__nav__li__blog__a', function(e) {
    e.preventDefault();

    positionShades(function(status) {
      closeShades(function(status) {
        $('.home__section__mainContent').html(blogTemplate());
        endShades(function(status) {
          $('.home__columnShades__div').css('z-index','0');
        });
      });
    });
  });

  $(document).on('click', '.home__aside__nav__li__about__a', function(e) {
    e.preventDefault();

    positionShades(function(status) {
      closeShades(function(status) {
        $('.home__section__mainContent').html(aboutTemplate());
        endShades(function(status) {
          $('.home__columnShades__div').css('z-index','0');
        });
      });
    });
  });

  $(document).on('click', '.home__aside__nav__li__contact__a', function(e) {
    e.preventDefault();

    positionShades(function(status) {
      closeShades(function(status) {
        $('.home__section__mainContent').html(contactTemplate());
        endShades(function(status) {
          $('.home__columnShades__div').css('z-index','0');
        });
      });
    });
  });

  $(document).on('click', '.contact__content__form__submit', function(e) {
    e.preventDefault();
    var emailOptions = {
      email: $('input[name="email"]').val(),
      name: $('input[name="name"]').val(),
      special: $('textarea[name="special"]').val()
    };
    post('/contact', emailOptions, function(response){
      if(response.success) {
        $('.contact__content__form__inner__div').empty().html('<p>Thank you for your enquiry.  I\'ll be in touch shortly.</p><p><a href="/contact">Send me another message</a>.</p>');
      } else {
        $('.contact__content__form__inner__div').empty().html('<p>There was a problem sending your information. Please email me at <a href="mailto:leogarrison1@gmail.com">leogarrison1@gmail.com</a> or <a href="/contact">try again</a>.</p>');
      }
    });
  });

  $(document).on('click', '.modPsy__credit__symbol', function(e) {
    e.preventDefault();
    $('.modPsy__credit__symbol').fadeOut();
    $('.modPsy__credit__link').fadeIn();
    $(window).scroll(function() {
      $('.modPsy__credit__symbol').fadeIn();
      $('.modPsy__credit__link').fadeOut();
    });
  });


});

$( window ).resize(function() {
//   var viewWidth = $( window ).width(),
//   viewWidthQuarter = $( window ).width()/4,
//   viewHeight = $( window ).height(),
//   bgSize = 'auto, ' + viewHeight + 'px';
//   if (viewWidth < viewHeight) {
//     bgSize = 'cover';
//   } else {
//     bgSize = 'cover';
//   }
//   $('body').css({
//     'background-size' : bgSize
//   });
  positionShades(function(status) {});
});

function endShades() {
  $('.home__modal__div').fadeOut();
  $('.home__header__div, .home__mainContent__div, .modPsy__credit').show();
  $('body').css('cursor','auto');
  positionShades(function(status) {
    openShades(function(status) {
      $('.home__columnShades__div').css('z-index','0');
    });
  });
}

function changeBg(bg, callBack) {
  $('body').css({
    'background-image' : 'url("../img/gallery/' + bg +'")'// ,
//     'background-size' : 'cover'
  })
  .waitForImages(function() {
    callBack('BG Changed');
  }, $.noop, true);
}

function changeShade(bg, callBack) {
  $('.home__columnShades__div__columnOne, .home__columnShades__div__columnTwo, .home__columnShades__div__columnThree, .home__columnShades__div__columnFour').css({
    'background-image' : 'url("../img/gallery/' + bg +'")'
  })
  .waitForImages(function() {
    callBack('BG Changed');
  }, $.noop, true);
}

function hideShade(callBack) {
  $('.home__columnShades__div').css({
    'visibility' : 'hidden'
  });
  callBack('Shade hidden');
}

function showShade(callBack) {
  $('.home__columnShades__div').css({
    'visibility' : 'visible'
  });
  callBack('Shade shown');
}

function showGalleryImg(url, title, desc, callBack) {
  $('.home__modal__div__close').show();
  $('.home__modal__div__content').html('<img src="' + url +'" alt="' + desc + '" title="' + title + '" class="home__modal__div__gallery__img"><h5>' + title + '</h5><div class="home__modal__div__gallery__share"><a data-pin-do="buttonPin" data-pin-count="beside" href="https://www.pinterest.com/pin/create/button/?url=http://www.lorettagarrison.co.uk/gallery&media=' + url + '&description=' + desc + '" target="_blank"><img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_gray_20.png" /></a></div>').fadeIn();
  $('.home__modal__div').addClass('gallery').fadeIn();
//   $('.home__section__mainContent').addClass('noScroll');
  callBack('image shown');
}

function positionShades(callBack) {
  var viewWidth = $( window ).width(),
  viewWidthQuarter = $( window ).width()/4,
  viewHeight = $( window ).height(),
  bgSize = 'auto, ' + viewHeight + 'px';
  if (viewWidth < viewHeight) {
    bgSize = 'cover';
  } else {
    bgSize = viewWidth + 'px, auto';
  }
  $('body').css({
    'background-size' : bgSize
  });
  $('.home__columnShades__div__columnOne').css({
    'background-size' : bgSize
  });
  $('.home__columnShades__div__columnTwo').css({
    'background-position': '-' + viewWidthQuarter + 'px' + ' center',
    'background-size' : bgSize
  });
  $('.home__columnShades__div__columnThree').css({
    'background-position': '-' + viewWidthQuarter * 2 + 'px' + ' center',
    'background-size' : bgSize
  });
  $('.home__columnShades__div__columnFour').css({
    'background-position': '-' + viewWidthQuarter * 3 + 'px' + ' center',
    'background-size' : bgSize
  });
  if (callBack) {
    callBack('positioned');
  }
}


function openShades(callBack) {
  var viewWidth = $( window ).width(),
  viewWidthQuarter = $( window ).width()/4,
  transitionEnded = false;
  $('.home__columnShades__div__columnOne').css({
    'transform': 'scaleX(0)'
  });
  $('.home__columnShades__div__columnTwo').css({
    'transform': 'scaleX(0)'
  });
  $('.home__columnShades__div__columnThree').css({
    'transform': 'scaleX(0)'
  });
  $('.home__columnShades__div__columnFour').css({
    'transform': 'scaleX(0)'
  });

  $('.home__columnShades__div__columnOne').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
  function(e) {
    if (transitionEnded == false) {
      transitionEnded = true;
      callBack('opened');
    }
  });

}

function closeShades(callBack) {
  var viewWidth = $( window ).width(),
  viewWidthQuarter = $( window ).width()/4,
  transitionEnded = false;
  $('.home__columnShades__div').css('z-index','1599');
  $('.home__columnShades__div__columnOne').css({
    'transform': 'scaleX(1)'
  });
  $('.home__columnShades__div__columnTwo').css({
    'transform': 'scaleX(1)'
  });
  $('.home__columnShades__div__columnThree').css({
    'transform': 'scaleX(1)'
  });
  $('.home__columnShades__div__columnFour').css({
    'transform': 'scaleX(1)'
  });
  $('.home__columnShades__div__columnOne').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
  function(e) {
    if (transitionEnded == false) {
      transitionEnded = true;
      callBack('closed');
    }
  });
}

function succeeded(output) {
  alert(output);
}

function closeNav() {
  $('html').removeClass('tapable');
    $('nav').removeClass('page__nav__open');
    $('.page__nav__reveal__div').fadeIn( 400 );
}

function get(url, success, loadingMessage) {
  var startTime;
  $.ajax({
    dataType: 'json',
    type: 'GET',
    url: url,
    success: function(res) {
      if (loadingMessage) {
        setTimeout(function() {
          success(res);
          loadingDialogElement.remove();
        }, 1500 - (Date.now() - startTime));
      } else {
        success(res);
      }
    },
    error: function() {
      window.location.replace('/error');
    }
  });
}

function post(url, data, success, loadingMessage) {
  var startTime;
  $.ajax({
    dataType: 'json',
    type: 'POST',
    url: url,
    data: data,
    success: function(res) {
      if (loadingMessage) {
        setTimeout(function() {
          success(res);
          loadingDialogElement.remove();
        }, 1500 - (Date.now() - startTime));
      } else {
        success(res);
      }
    },
    error: function() {
      window.location.replace('/error');
    }
  });
}
