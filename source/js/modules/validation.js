import $ from "jquery-validation";

export function validation () {

  $('form').validate({
    ignore: ".ignore",
    messages: {
      user_phone: 'Введите номер телефона',
    },
    errorElement: 'span',
  });

}
