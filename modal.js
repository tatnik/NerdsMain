/* constants */
const contacts_button = document.querySelector('.contacts__button');
const modal = document.querySelector('.connection-modal');
const close_button = document.querySelector('.close-button');
const field_name = modal.querySelector('#name');
const field_email = modal.querySelector('#email');
const field_text = modal.querySelector('#text');

const controls = document.querySelectorAll('.button-control');
const slides = document.querySelectorAll('.galery__item');
let active_slide = slides[0];
let active_control = controls[0];

/* Slider */
function makeListener(slide, control) {
  return function () {

    active_slide.classList.remove('galery__item--current');
    slide.classList.add('galery__item--current');

    let txt = slide.querySelector('.item-text');
    txt.classList.add('item-text--show');

    txt = active_slide.querySelector('.item-text');
    txt.classList.remove('item-text--show');

    active_slide = slide;

    active_control.classList.remove('current');
    control.classList.add('current');
    active_control = control;




  }
}
for (i = 0; i < controls.length; i++){
  controls[i].addEventListener('click', makeListener(slides[i], controls[i]));
}


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

    modal.classList.remove('modal--show');
    modal.classList.remove('modal--error');
    if (isStorageSupport) {
      localStorage.setItem('name', field_name.value);
      localStorage.setItem('email', field_email.value);
    }
  }
  else {

    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  }
})
