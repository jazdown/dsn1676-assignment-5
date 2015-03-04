var $form = $('form'); // $=search the html for the 'form.'
var $todo = $('.todo'); //input
var $added = $('.added'); //list 
var $button = $('.addbutton'); //button that adds

$form.on('submit', function (e) { //an action that should happen when we submit the form

    e.preventDefault();
    var $li = $('<li>'); //making new li
    var $button = $('<button>'); //making a new button
    $button.html('X');
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