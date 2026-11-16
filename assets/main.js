/* WhatsApp Number Configuration:
   EMPTY state (""): buttons link to #book whose text informs user number is coming soon.
   FILLED state ("92300..."): buttons link to https://wa.me/<number>?text=<prefilled message>.
*/
const RAUNAQ_WHATSAPP_NUMBER = "923281728103";

(function() {
  // 1. Mark JS active
  document.documentElement.classList.add('js-active');

  function initInteractive() {
    // 2. Wire WhatsApp Two-State Logic
    var isFilled = typeof RAUNAQ_WHATSAPP_NUMBER === 'string' && RAUNAQ_WHATSAPP_NUMBER.trim().length > 0;
    var cleanNumber = isFilled ? RAUNAQ_WHATSAPP_NUMBER.trim().replace(/[^0-9]/g, '') : '';

    if (isFilled && cleanNumber.length > 0) {
      document.querySelectorAll('.wa-booking-btn').forEach(function(el) {
        var pkg = el.getAttribute('data-package') || 'Full Wedding';
        var msg = "Assalam-o-Alaikum! I want to book Raunaq for our wedding celebration (" + pkg + " package). Please share availability.";
        el.href = "https://wa.me/" + cleanNumber + "?text=" + encodeURIComponent(msg);
        el.target = "_blank";
        el.rel = "noopener";
      });

      document.querySelectorAll('.wa-partner-btn').forEach(function(el) {
        var msg = "Assalam-o-Alaikum! I would like to partner with Raunaq for wedding bookings.";
        el.href = "https://wa.me/" + cleanNumber + "?text=" + encodeURIComponent(msg);
        el.target = "_blank";
        el.rel = "noopener";
      });
    } else {
      document.querySelectorAll('.wa-booking-btn, .wa-partner-btn').forEach(function(el) {
        el.href = "#book";
        el.removeAttribute('target');
        el.removeAttribute('rel');
      });
    }

    // 3. Scroll reveals & Sticky Header
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add('is-revealed'); } });
      }, { threshold: 0.12 });
      document.querySelectorAll('.reveal-item').forEach(function(el) { observer.observe(el); });

      var header = document.getElementById('stickyHeader');
      var hero = document.getElementById('hero');
      if (header && hero) {
        var headerObserver = new IntersectionObserver(function(entries) {
          header.classList.toggle('visible', !entries[0].isIntersecting);
        }, { threshold: 0.1 });
        headerObserver.observe(hero);
      }
    } else {
      document.querySelectorAll('.reveal-item').forEach(function(el) { el.classList.add('is-revealed'); });
    }
  }

  // Defer non-critical DOM query and intersection observer work to idle time
  // Run purely when idle with no forced timeout deadline, or on user interaction/load
  function scheduleInteractive() {
    if (typeof requestIdleCallback === 'function') {
      requestIdleCallback(initInteractive);
    } else {
      setTimeout(initInteractive, 200);
    }
  }

  if (document.readyState === 'complete') {
    scheduleInteractive();
  } else {
    window.addEventListener('load', scheduleInteractive, { once: true });
  }
})();
