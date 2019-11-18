// funzione per creare la griglia
function generateGrill() {
  for (var i = 0; i < 32; i++) {
    $('.grill').append('<div class="items"></div>');
  }
}

// Api
$(document).ready(function() {

  generateGrill();

  // selection cell
  var items = $('.items');

  items.click(showCell);

  function showCell() {
     var itemsClick = $(this);

     // ajax call
     $.ajax({
       url: "https://flynn.boolean.careers/exercises/api/random/int",
       method: 'GET',
       succes: function (data,condition) {
          // Se il numero è <= 5 diventa giallo
         if (data.response <= 5 && !itemsClick.hasClass('active')) {

           itemsClick.css('background-color', 'yellow').addClass('active').html(data.response);
           // se è > di 5 il quadrato diventa verde.
         }else if (data.response > 5 && !itemsClick.hasClass('active')) {

           itemsClick.css('background-color', 'green').addClass('active').html(data.response);

         }
       },

       error: function (request,condition,fault) {
         alert("Error. " + " " + request + " " + condition + " " + fault);
       }

     })

  }
});
