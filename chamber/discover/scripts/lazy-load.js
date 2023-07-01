window.addEventListener('DOMContentLoaded', function() {
  var geoImage = document.getElementById('geo');
  var geoObserver;

  function lazyLoadImage() {
    geoImage.setAttribute('src', geoImage.getAttribute('data-src'));
    geoObserver.unobserve(geoImage);
  }

  function initializeObserver() {
    geoObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          lazyLoadImage();
        }
      });
    });

    geoObserver.observe(geoImage);
  }
geoImage.setAttribute('src', 'images/placeholder.webp');
window.addEventListener('scroll', initializeObserver);
});

window.addEventListener('DOMContentLoaded', function() {
  var mapImage = document.getElementById('map');
  var mapObserver;

  function lazyLoadImage() {
    mapImage.setAttribute('src', mapImage.getAttribute('data-src'));
    mapObserver.unobserve(mapImage);
  }

  function initializeObserver() {
    mapObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          lazyLoadImage();
        }
      });
    });

    mapObserver.observe(mapImage);
  }

  mapImage.setAttribute('src', 'images/placeholder.webp');

  window.addEventListener('scroll', initializeObserver);
});

window.addEventListener('DOMContentLoaded', function() {
  var flagImage = document.getElementById('flag');
  var flagObserver;

  function lazyLoadImage() {
    flagImage.setAttribute('src', flagImage.getAttribute('data-src'));
    flagObserver.unobserve(flagImage);
  }

  function initializeObserver() {
    flagObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          lazyLoadImage();
        }
      });
    });

    flagObserver.observe(flagImage);
  }

  flagImage.setAttribute('src', 'images/placeholder.webp');

  window.addEventListener('scroll', initializeObserver);
});

window.addEventListener('DOMContentLoaded', function() {
  var coatofarmsImage = document.getElementById('coat-of-arms');
  var coatofarmsObserver;

  function lazyLoadImage() {
    coatofarmsImage.setAttribute('src', coatofarmsImage.getAttribute('data-src'));
    coatofarmsObserver.unobserve(coatofarmsImage);
  }

  function initializeObserver() {
    coatofarmsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          lazyLoadImage();
        }
      });
    });

    coatofarmsObserver.observe(coatofarmsImage);
  }

  coatofarmsImage.setAttribute('src', 'images/placeholder.webp');

  
  window.addEventListener('scroll', initializeObserver);
});

window.addEventListener('DOMContentLoaded', function() {
  var umanayanaImage = document.getElementById('umana-yana');
  var umanayanaObserver;

  function lazyLoadImage() {
    umanayanaImage.setAttribute('src', umanayanaImage.getAttribute('data-src'));
    umanayanaObserver.unobserve(umanayanaImage);
  }

  function initializeObserver() {
    umanayanaObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          lazyLoadImage();
        }
      });
    });

    umanayanaObserver.observe(umanayanaImage);
  }

  umanayanaImage.setAttribute('src', 'images/placeholder.webp');

  window.addEventListener('scroll', initializeObserver);
});

