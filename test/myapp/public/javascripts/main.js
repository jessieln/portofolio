const $cards = $('.card');

$cards.on('click', () => {
  if ($cards.hasClass('card-bottom')) {
    $cards.addClass('hidden');
    return;
  }

  $cards.removeClass('card-top');
  $cards.addClass('card-bottom');
});
