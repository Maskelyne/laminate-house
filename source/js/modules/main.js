export function main () {

  $('.dec').click(function() {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    if (count > 0) {
      var countner = $('.t-count').text();
      $('.t-count').text(countner / 2);
      var total = $('.total-price').text();
      $('.total-price').text(total / 2);
    } else {
      count = 1;
    }
    $input.val(count);
    $input.change();
    return false;
  });

  $('.inc').click(function() {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();

    var countner = $('.t-count').text();
    $('.t-count').text(countner++);
    var total = $('.total-price').text();
    $('.total-price').text(total * 2);
    return false;
  });

  let btnPhone = document.querySelectorAll('.show-phone');

  if (btnPhone) {

    let boxPhone = document.querySelectorAll('.phone-hide');

    btnPhone.forEach(function (item, i) {
      btnPhone[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        btnPhone[i].classList.toggle('btn-active');

        boxPhone.forEach(function (item, i) {
          boxPhone[i].classList.toggle('phone-active');
        });
      });
    });
  }
}
