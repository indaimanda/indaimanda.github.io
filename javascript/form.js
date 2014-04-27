var submitted = false;

$('form#ss-form').on('submit', function () {
  submitted = true;
});

$('iframe').on('load', function () {
  if(submitted === true) {
    $('div#message')
      .text('Message sent successfully')
      .fadeIn()
      .fadeOut(5000);
  }
});