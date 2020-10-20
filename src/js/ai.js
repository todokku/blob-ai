var ai = document.getElementById("blob");
const PREFIX = "hey blob";
var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-US";
recognition.start();

recognition.onresult = function(event) {
for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (!event.results[i][0].transcript.trim().startsWith(PREFIX)) return;
      $('#listen').html(event.results[i][0].transcript.toLowerCase());
      $('#blob').css("animation","listen 1s infinite");
      if (event.results[i].isFinal) {
      $('#blob').css("animation","none");
      var command = event.results[i][0].transcript.substring(PREFIX.length).split(" ");
      if(!command[1]){ $('#everything').html("Hey! How may I assist you?"); return;}
      var ytString = event.results[i][0].transcript.substring(PREFIX.length).slice("9");
      var googleString = event.results[i][0].transcript.substring(PREFIX.length).slice("8");

      switch(command[1].toLowerCase()){

      case "youtube" :
      if(!ytString){ $('#everything').html("oppsie!! no search text provided"); return;}
      $('#everything').html("redirecting to youtube...");
      setTimeout(function(){
        $('#website').attr("href","https://youtube.com/results?search_query="+ytString);
        document.getElementById("website").click();
      },400);
      break;

      case "google" :
      if(!ytString){ $('#everything').html("oppsie!! no search text provided"); return;}
      $('#everything').html("searching on google...");
      setTimeout(function(){
        $('#website').attr("href","https://www.google.com/search?q="+googleString);
        document.getElementById("website").click();
      },400);
      break;

      default :
      $('#everything').html("error");
      break;
      }
    }
}
};

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
