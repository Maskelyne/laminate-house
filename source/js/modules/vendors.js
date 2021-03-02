export function vendors () {

  $("#tel").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  // $('.plus').click(function () {
  //   var countner = $('.t-count').text();
  //   $('.t-count').text(countner/2);
  //
  //   var total = $('.total-price').text();
  //   $('.total-price').text(total/2);
  //
  //   var $input = $(this).parent().find('input');
  //   var count = parseInt($input.val()) - 1;
  //   count = count < 1 ? 1 : count;
  //   $input.val(count);
  //   $input.change();
  //   return false;
  // });

  // $('.minus').click(function () {
  //   var countner = $('.t-count').text();
  //   $('.t-count').text(countner*2);
  //   var total = $('.total-price').text();
  //   $('.total-price').text(total*2);
  //
  //   var $input = $(this).parent().find('input');
  //   $input.val(parseInt($input.val()) + 1);
  //   $input.change();
  //   return false;
  // });

}
