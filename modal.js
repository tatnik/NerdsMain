/* constants */
const contacts_button = document.querySelector('.contacts__button');
const modal = document.querySelector('.connection-modal');
const close_button = document.querySelector('.close-button');
const field_name = modal.querySelector('#name');
const field_email = modal.querySelector('#email');
const field_text = modal.querySelector('#text');

/* localStorage */
let isStorageSupport = true;
try {
  localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}


/* Show modal-form */
contacts_button.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal--show');
  field_text.value = "";
  if ( isStorageSupport ){
    field_name.value = localStorage.getItem("name");
    field_email.value = localStorage.getItem("email");
  }
  if (!field_name.value) {
    field_name.focus();
  }
  else {
    field_text.focus();
  }
});


/* Close modal-form by button*/
close_button.addEventListener('click', function () {
  modal.classList.remove('modal--show');
  modal.classList.remove('modal--error');
});

/* Close modal-form  by ESC*/
document.addEventListener('keydown', function (evt) {
  if (evt.code == 27) {
    modal.classList.remove('modal--show');
    modal.classList.remove('modal--error');
  }
});


/* Submit and Saving field's values */
document.addEventListener('submit', function (evt) {
  if (field_name.value && field_email.value && field_text.value) {
    console.log("*");
    modal.classList.remove('modal--show');
    modal.classList.remove('modal--error');
    if (isStorageSupport) {
      localStorage.setItem('name', field_name.value);
      localStorage.setItem('email', field_email.value);
    }
  }
  else {
    console.log("*********");
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  }
})
