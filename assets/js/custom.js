$('.contless-button').click(function() {
    var $this = $(this);
    var $moreText = $this.closest('.biographies-text').find('.moretextt');
  
    $moreText.slideToggle();
    if ($this.text() == "Read More") {
      $this.text("Read Less");
    } else {
      $this.text("Read More");
    }
  });