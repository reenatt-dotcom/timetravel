
    $(document).ready(function() {
        console.log("document ready")
  $('.slider').on('input', function() {
    var value = $(this).val();
    var imageUrl = getTimePeriodImageUrl(value);
    var timePeriodName = getTimePeriodName(value);
    var linkUrl = getTimePeriodLink(value);
    $('.time-period-image').attr('src', imageUrl);
    $('.time-period-name').text(timePeriodName);
    $('.time-period-link').attr('href', linkUrl);
  });
});

function getTimePeriodImageUrl(value) {
  var imageUrls = {
    0: 'images/ancientegypt.jpg',
    1: 'images/medievaleurope.webp',
    2: 'images/renaissance.jpg',
    3: 'images/colonialamerica.jpg',
    4: 'images/industrialrevolution.jpg',
    5: 'images/worldwars.jpg',
    6: 'images/modernera.jpg'
    // Add more time periods with their respective image URLs
  };
  return imageUrls[value];
}

function getTimePeriodName(value) {
  var timePeriodNames = {
    0: 'Ancient Egypt',
    1: 'Medieval Europe',
    2: 'Renaissance',
    3: 'Colonial America',
    4: 'Industrial Revolution',
    5: 'World Wars',
    6: 'Modern Era'
    // Add more time periods with their respective names
  };
  return timePeriodNames[value];
}

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
