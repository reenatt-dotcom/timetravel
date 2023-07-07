$(document).ready(function() {
  console.log("document ready");

  var sliderValue = 0; // Initial slider value
  var maxSliderValue = 6; // Maximum slider value

  function showImage(index) {
    $('.time-period-image').removeClass('active');
    $('.time-period-image').eq(index).addClass('active');
  }

  function navigateToPage(value) {
    var linkUrl = getTimePeriodLink(value);
    if (linkUrl) {
      window.location.href = linkUrl;
    }
  }

  $('.time-period-link').on('click', function(e) {
    e.preventDefault();
    var value = parseInt($(this).attr('data-value'));
    navigateToPage(value);
  });

  $('#time-period-slider').on('input', function() {
    var value = parseInt($(this).val());
    sliderValue = value;
    showImage(value);
  });

  function updateSlider() {
    sliderValue = (sliderValue + 1) % (maxSliderValue + 1);
    $('#time-period-slider').val(sliderValue);
    showImage(sliderValue);
  }

  var intervalDuration = 3000; // Duration between automatic slider updates (in milliseconds)
  var intervalId = setInterval(updateSlider, intervalDuration);

  $('.time-period-image').on('click', function() {
    clearInterval(intervalId);
    var value = parseInt($(this).parent().attr('data-value'));
    navigateToPage(value);
  });

  showImage(sliderValue); // Display the first image initially
});

function getTimePeriodLink(value) {
  var linkUrls = {
    0: 'ancient-egypt.html',
    1: 'medieval-europe.html',
    2: 'renaissance.html',
    3: 'colonial-america.html',
    4: 'industrial-revolution.html',
    5: 'world-wars.html',
    6: 'modern-era.html'
    // Add more time periods with their respective links
  };
  return linkUrls[value];
}
