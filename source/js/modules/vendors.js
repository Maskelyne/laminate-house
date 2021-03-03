export function vendors () {

  $("#tel").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $('.minus').click(function () {
    var countner = $('.t-count').text();
    $('.t-count').text(countner/2);

    var total = $('.total-price').text();
    $('.total-price').text(total/2);

    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $('.plus').click(function () {
    var countner = $('.t-count').text();
    $('.t-count').text(countner*2);
    var total = $('.total-price').text();
    $('.total-price').text(total*2);

    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
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
