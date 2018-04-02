$(document).ready(function() {
  //prevent the submit button from submitting
  $('#submit-btn').click(function(){
    event.preventDefault();

    //get the value of the input 
    var city = $('#city-type').val();
    $('#city-type').val('');
    //user to use upper or lowercase
    city = city.toLowerCase();

    // if the user inputs the city-type, will change the background image
    if(city == 'new york city' || city == 'nyc' || city == 'new york') {
      $('body').attr('class','nyc');
    }
    
    else if (city == 'sf' || city == 'san francisco' || city == 'bay area') {
      $('body').attr('class','sf');
    }
    
    else if (city == 'austin' || city == 'atx') {
      $('body').attr('class','austin');
    }
    
    else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').attr('class','la');
    }
    
    else if (city == 'sydney' || city == 'syd') {
      $('body').attr('class','sydney');
    }
  });
});