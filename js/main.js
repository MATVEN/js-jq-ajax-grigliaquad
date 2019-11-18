// funzione per creare la griglia
function generateGrill() {
  for (var i = 0; i < 32; i++) {
    $('.grill').append('<div class="items"></div>');
  }
}

// Api
$(document).ready(function() {
  generateGrill();
})
