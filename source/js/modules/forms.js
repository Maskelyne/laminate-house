export function forms () {

  $(document).on('af_complete', function (event, response) {
    let form = response.form;

    if (form.attr('id') === 'contact-form') {
      response.message = '';

    } else {
      console.log(response);
    }

  });
}
