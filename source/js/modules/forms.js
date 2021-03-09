export function forms () {

  $(document).on('af_complete', function (event, response) {
    let form = response.form;

    if (form.attr('id') === 'contact-form') {
      let mailMessage = document.querySelector('.form-messege');
      mailMessage.style.display = 'flex';
      response.message = '';

    } else {
      console.log(response);
    }

  });

}
