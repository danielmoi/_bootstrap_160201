(function () {
  var start = 'daniel',
    at = '@',
    middle = 'ampersandmoi',
    dot = '.',
    finish = 'com';
  $('.email-1').html(start + at + middle + dot + finish);
  $('.email-1').attr('href', 'mailto:' + start + at + middle + dot + finish);
  $('.email-2').attr('href', 'mailto:' + start + at + middle + dot + finish);
  
}());