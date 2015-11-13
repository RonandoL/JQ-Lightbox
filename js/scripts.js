// PROBLEM: Click on image goes to dead end
// SOLUTION: Overlay with large image - Lightbox
//----------------------------------------------

// Variables
  var $overlay = $('<div id="overlay"></div>');
  var $image = $('<img>');
  var $caption = $("<p></p>")

// Add Overlay, Image, Caption
  $("body").append($overlay);
  // add image to Overlay
  $overlay.append($image);
  // add caption to overlay
  $overlay.append($caption);

// Click Event: capture the click event on a link to an image
  // Click Link & Show Overlay
    $("#imageGallery a").click(function(event) {
      event.preventDefault();
    // Show Overlay
      $overlay.show();

  // Setting the (new jq img src attr) to the (old html image href) location
    var imageLocation = $(this).attr("href");  // returns a string of the href
    $image.attr("src", imageLocation);  // set src attr to imageLocation

  // Grab alt text from link connect to overlay
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
  });

// Remove Overlay
  // Click and Hide
  $overlay.click(function() {
    $overlay.hide();
  })









//
