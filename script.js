document.addEventListener("DOMContentLoaded", function () {
  const resolver = {
    resolve: function resolve(options, callback) {
      const resolveString =
        options.resolveString ||
        options.element.getAttribute("data-target-resolver");
      const combinedOptions = Object.assign({}, options, {
        resolveString: resolveString,
      });

      function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function randomCharacter(characters) {
        return characters[getRandomInteger(0, characters.length - 1)];
      }

      function doRandomiserEffect(options, callback) {
        const characters = options.characters;
        const timeout = options.timeout;
        const element = options.element;
        const partialString = options.partialString;

        let iterations = options.iterations;

        setTimeout(() => {
          if (iterations >= 0) {
            const nextOptions = Object.assign({}, options, {
              iterations: iterations - 1,
            });
            if (iterations === 0) {
              element.textContent = partialString;
            } else {
              element.textContent =
                partialString.substring(0, partialString.length - 1) +
                randomCharacter(characters);
            }

            doRandomiserEffect(nextOptions, callback);
          } else if (typeof callback === "function") {
            callback();
          }
        }, options.timeout);
      }

      function doResolverEffect(options, callback) {
        const resolveString = options.resolveString;
        const characters = options.characters;
        const offset = options.offset;
        const partialString = resolveString.substring(0, offset);
        const combinedOptions = Object.assign({}, options, {
          partialString: partialString,
        });

        doRandomiserEffect(combinedOptions, () => {
          const nextOptions = Object.assign({}, options, {
            offset: offset + 1,
          });

          if (offset <= resolveString.length) {
            doResolverEffect(nextOptions, callback);
          } else if (typeof callback === "function") {
            callback();
          }
        });
      }

      doResolverEffect(combinedOptions, callback);
    },
  };

  const strings = [
    "<p class= welcome_to_my_portfolio> Where circuits and code converge into a symphony of innovation... ",
    "A passionate CE student invites you to explore his digital playground, where inspiration knows no bounds...</p>",
  ];
  //'Where circuits and code converge into a symphony of innovation... ',
  //  'A passionate CE student invites you to explore his digital playground, where inspiration knows no bounds...'
  let counter = 0;

  const options = {
    offset: 0,
    timeout: 5,
    iterations: 10,
    // Random characters to pick from
    characters: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "x",
      "y",
      "x",
      "#",
      "%",
      "&",
      "-",
      "+",
      "_",
      "?",
      "/",
      "\\",
      "=",
    ],
    resolveString: strings[counter],
    element: document.querySelector("[data-target-resolver]"),
  };

  function callback() {
    if (counter < strings.length - 1) {
      counter++;
      options.resolveString = strings[counter];
      setTimeout(function () {
        resolver.resolve(options, callback);
      }, 2500);
    } else
      setTimeout(function () {
        $("#overlay").fadeOut(1000, function () {});
        $(".page__style").addClass("animate_content");
        $(".page__description").fadeOut(100).delay(2800).fadeIn();

        setTimeout(function () {
          container.addClass("fadeIn");
          $(".home").addClass("fadeIn");
          $(".page__style").not(".home").removeClass("fadeIn");
        }, 1500);

        setTimeout(function () {
          $(".page__style").removeClass("animate_content");
        }, 3200);

        $("#overlay .holder").addClass("animate_content");
        $("#overlay .heading").fadeOut(100);

        setTimeout(function () {
          $("#overlay .holder").removeClass("animate_content");
        }, 3200);
      }, 1000);
  }

  resolver.resolve(options, callback);
});

const element = document.getElementById("thingymajigy");

function toggleOglitchAnimation() {
  element.classList.toggle("oglitch-animation");
}

setInterval(toggleOglitchAnimation, 4000);

const button = document.getElementById("myButton");

function restartAnimation() {
  button.classList.remove("NAME");
  void button.offsetWidth;
  button.classList.add("NAME");
}

setInterval(restartAnimation, 2000);

// Animation between pages

$(document).ready(function () {
  var container = $("#buttoncontainer");
  var isHomeSelected = true;
  var isProjectsSelected = false;
  var isAboutSelected = false;

  function handleLinkClick(targetContainer, elementToShow, elementsToHide) {
    if (targetContainer.hasClass("animate_content")) {
      return;
    }

    container.appendTo(targetContainer);

    $(".page__style").addClass("animate_content");
    $(".page__description").fadeOut(100).delay(2800).fadeIn();

    setTimeout(function () {
      container.addClass("fadeIn");
      elementToShow.addClass("fadeIn");
      elementsToHide.removeClass("fadeIn");
    }, 1500);

    setTimeout(function () {
      $(".page__style").removeClass("animate_content");
    }, 3200);

    isHomeSelected = elementToShow.hasClass("home");
    isProjectsSelected = elementToShow.hasClass("work");
    isAboutSelected = elementToShow.hasClass("about");
  }

  $(".home_link").click(function () {
    if (isHomeSelected) {
      return;
    }

    handleLinkClick(
      $(".target-container-home"),
      $(".home"),
      $(".page__style").not(".home")
    );
  });

  $(".projects_link").click(function () {
    if (isProjectsSelected) {
      return;
    }

    handleLinkClick(
      $(".target-container-projects"),
      $(".work"),
      $(".page__style").not(".work")
    );
  });

  $(".about_link").click(function () {
    if (isAboutSelected) {
      return;
    }

    handleLinkClick(
      $(".target-container-about"),
      $(".about"),
      $(".page__style").not(".about")
    );
  });
});
