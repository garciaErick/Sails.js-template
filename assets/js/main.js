$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

$(document).ready(function() {
  $('#example').DataTable();
} );

$(document).ready(function(){
  $('ul.tabs').tabs({
    'swipeable': true,
  });
});


function topNoty(type, text) {

  Noty.setMaxVisible(10);
  new Noty({
    type: type,
    layout: 'topCenter',
    theme: 'mint',
    text: text,
    timeout: 2500,
    progressBar: true,
    closeWith: ['click', 'button'],
    animation: {
      open: 'noty_effects_open',
      close: 'noty_effects_close'
    },
    id: false,
    force: false,
    killer: false,
    queue: 'global',
    container: false,
    buttons: [],
    sounds: {
      sources: [],
      volume: 1,
      conditions: []
    },
    titleCount: {
      conditions: []
    },
    modal: false
  }).show();
}
