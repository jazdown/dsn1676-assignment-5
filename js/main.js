var $form = $('form');
var $todo = $('.todo');
var $added = $('.added'); 
var $button = $('.addbutton');

$form.on('submit', function (e) {
  e.preventDefault();
  var $li = $('<li>');
  var $button = $('<button>');
  $button.html('x');
  $button.addClass('check');
  $button.on('click', function () {
      $li.remove(); 
  });   

  var $todoH2 = $('<h2>').html($todo.val());
  $todoH2.append($button);

  $todoH2.on('click', function () {
  $todoH2.addClass ('strikethrough') ();
  });

  $li.append($todoH2);
  $added.append($li);
  
});

$add.on("click","li", function () {
    $(this).toggleClass("js-highlight");
});