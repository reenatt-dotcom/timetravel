$(document).ready(function() {
  console.log("document ready");

  var sliderValue = 0; // Initial slider value
  var maxSliderValue = 6; // Maximum slider value

  function showImage(index) {
    // Remove 'active' class from all images
    $('.time-period-image').removeClass('active');
    
    // Add 'active' class to the image corresponding to the current slider value
    $('.time-period-image').eq(index).addClass('active');
  }

  function navigateToPage(value) {
    var linkUrl = getTimePeriodLink(value);
    if (linkUrl) {
      window.location.href = linkUrl;
    }
  }

  // Click event for each time period link to navigate
  $('.time-period-link').on('click', function(e) {
    e.preventDefault(); // Prevent default link action
    var value = parseInt($(this).attr('data-value')); // Get the data-value (index) from the clicked link
    navigateToPage(value); // Navigate to the corresponding time period page
  });

  // Update the image when slider is moved
  $('#time-period-slider').on('input', function() {
    var value = parseInt($(this).val());
    sliderValue = value;
    showImage(value); // Show the image corresponding to the slider value
  });

  // Automatically move the slider and update images every 3 seconds
  function updateSlider() {
    sliderValue = (sliderValue + 1) % (maxSliderValue + 1); // Increment and loop back
    $('#time-period-slider').val(sliderValue); // Update slider value
    showImage(sliderValue); // Show the next image
  }

  // Set an interval for automatic slider updates
  var intervalDuration = 3000; // Duration between automatic slider updates (in milliseconds)
  var intervalId = setInterval(updateSlider, intervalDuration);

  // Clicking on an image will stop the automatic interval and navigate to the corresponding time period page
  $('.time-period-image').on('click', function() {
    clearInterval(intervalId); // Stop the automatic slider update
    var value = parseInt($(this).parent().attr('data-value')); // Get the data-value from the image's parent link
    navigateToPage(value); // Navigate to the corresponding time period page
  });

  showImage(sliderValue); // Display the first image initially
});

// Function to return the corresponding link for each time period index
function getTimePeriodLink(value) {
  var linkUrls = {
    0: 'ancient-egypt.html',
    1: 'medieval-europe.html',
    2: 'renaissance.html',
    3: 'colonial-america.html',
    4: 'industrial-revolution.html',
    5: 'world-wars.html',
    6: 'modern-era.html'
  };
  return linkUrls[value];
}
