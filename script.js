


document.addEventListener('DOMContentLoaded', function() {
  const resolver = {
    resolve: function resolve(options, callback) {
      // The string to resolve
      const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
      const combinedOptions = Object.assign({}, options, {resolveString: resolveString});
      
      function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      
      function randomCharacter(characters) {
        return characters[getRandomInteger(0, characters.length - 1)];
      };
      
      function doRandomiserEffect(options, callback) {
        const characters = options.characters;
        const timeout = options.timeout;
        const element = options.element;
        const partialString = options.partialString;
  
        let iterations = options.iterations;
  
        setTimeout(() => {
          if (iterations >= 0) {
            const nextOptions = Object.assign({}, options, {iterations: iterations - 1});
  
            // Ensures partialString without the random character as the final state.
            if (iterations === 0) {
              element.textContent = partialString;
            } else {
              // Replaces the last character of partialString with a random character
              element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
            }
  
            doRandomiserEffect(nextOptions, callback)
          } else if (typeof callback === "function") {
            callback(); 
          }
        }, options.timeout);
      };
      
      function doResolverEffect(options, callback) {
        const resolveString = options.resolveString;
        const characters = options.characters;
        const offset = options.offset;
        const partialString = resolveString.substring(0, offset);
        const combinedOptions = Object.assign({}, options, {partialString: partialString});
  
        doRandomiserEffect(combinedOptions, () => {
          const nextOptions = Object.assign({}, options, {offset: offset + 1});
  
          if (offset <= resolveString.length) {
            doResolverEffect(nextOptions, callback);
          } else if (typeof callback === "function") {
            callback();
          }
        });
      };
  
      doResolverEffect(combinedOptions, callback);
    } 
  }

  const strings = [
    'Where circuits and code converge into a symphony of innovation... ',
    'A passionate CE student invites you to explore his digital playground, where inspiration knows no bounds...'
  ];
  //'Where circuits and code converge into a symphony of innovation... ',
  //  'A passionate CE student invites you to explore his digital playground, where inspiration knows no bounds...'
  let counter = 0;
  
  const options = {
    // Initial position
    offset: 0,
    // Timeout between each random character
    timeout: 5,
    // Number of random characters to show
    iterations: 10,
    // Random characters to pick from
    characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
    // String to resolve
    resolveString: strings[counter],
    // The element
    element: document.querySelector('[data-target-resolver]')
  }
  
  function callback() { 
    if (counter < strings.length - 1) {
      counter++;
      options.resolveString = strings[counter];
      setTimeout(function() {
        resolver.resolve(options, callback);
      }, 2500); // Delay of 2500 milliseconds (2.5 seconds)
    } else 
    setTimeout(function() {
      $('#overlay').fadeOut(1000, function() {
        // Animation complete, you can perform any additional actions here
      });
      $('.page__style').addClass('animate_content');
      $('.page__description').fadeOut(100).delay(2800).fadeIn();
  
      setTimeout(function() {
        container.addClass('fadeIn');
        $('.home').addClass('fadeIn');
        $('.page__style').not('.home').removeClass('fadeIn');
      }, 1500);
      
      setTimeout(function() {
        $('.page__style').removeClass('animate_content');
      }, 3200);
      
      $('#overlay .holder').addClass('animate_content');
      $('#overlay .heading').fadeOut(100);
      
      setTimeout(function() {
        $('#overlay .holder').removeClass('animate_content');
      }, 3200);
    }, 1000); // Delay of 2000 milliseconds (1 second)
  }
  
  resolver.resolve(options, callback);
  
});



const element = document.getElementById('thingymajigy');

function toggleOglitchAnimation() {
  element.classList.toggle('oglitch-animation');
}

setInterval(toggleOglitchAnimation, 4000);







const button = document.getElementById('myButton');

function restartAnimation() {
  button.classList.remove('NAME');
  void button.offsetWidth; // Force reflow to restart the animation
  button.classList.add('NAME');
}

setInterval(restartAnimation, 2000);

$(document).ready(function() {
  var container = $('#buttoncontainer');
  $('.target-container-home').append(container);

  var isHomeSelected = true;
  var isProjectsSelected = false;
  var isAboutSelected = false;

  $('.home_link').click(function() {
    if (isHomeSelected) {
      return; // Do nothing if already selected
    }
  
    var container = $('#buttoncontainer');
    $('.target-container-home').append(container);

    $('.page__style').addClass('animate_content');
    $('.page__description').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
      container.addClass('fadeIn');
      $('.home').addClass('fadeIn');
      $('.page__style').not('.home').removeClass('fadeIn');
    }, 1500);

    setTimeout(function() {
      $('.page__style').removeClass('animate_content');
    }, 3200);

    // Update selected conditions
    isHomeSelected = true;
    isProjectsSelected = false;
    isAboutSelected = false;
  });

  $('.projects_link').click(function() {
    if (isProjectsSelected) {
      return; // Do nothing if already selected
    }
  
    var container = $('#buttoncontainer');
    $('.target-container-projects').append(container);

    $('.page__style').addClass('animate_content');
    $('.page__description').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
      container.addClass('fadeIn');
      $('.work').addClass('fadeIn');
      $('.page__style').not('.work').removeClass('fadeIn');
    }, 1500);

    setTimeout(function() {
      $('.page__style').removeClass('animate_content');
    }, 3200);

    // Update selected conditions
    isHomeSelected = false;
    isProjectsSelected = true;
    isAboutSelected = false;
  });

  $('.about_link').click(function() {
    if (isAboutSelected) {
      return; // Do nothing if already selected
    }
  
    var container = $('#buttoncontainer');
    $('.target-container-about').append(container);

    $('.page__style').addClass('animate_content');
    $('.page__description').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
      container.addClass('fadeIn');
      $('.about').addClass('fadeIn');
      $('.page__style').not('.about').removeClass('fadeIn');
    }, 1500);

    setTimeout(function() {
      $('.page__style').removeClass('animate_content');
    }, 3200);

    // Update selected conditions
    isHomeSelected = false;
    isProjectsSelected = false;
    isAboutSelected = true;
  });

  // Show home page on page load if it's not already selected
  if (!isHomeSelected) {
    $('.home_link').addClass('selected').click();
  }
});

