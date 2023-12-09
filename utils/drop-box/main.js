document.querySelectorAll('.drop_button').forEach(button => {

    button.addEventListener('click', () => {
   const dropContent = button.nextElementSibling;

   button.classList.toggle('drop_button--active');

   if (button.classList.contains('drop_button--active')) {
        dropContent.style.maxHeight = dropContent.scrollHeight + 'px';
   } else {
        dropContent.style.maxHeight = 0;
   }
             });
});