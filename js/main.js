// AP Cargos — lightweight, dependency-free interactions
// Kept under 3KB unminified so it never blocks Core Web Vitals.

(function () {
  "use strict";

  var WHATSAPP_NUMBER = "919876543210"; // TODO: replace with live WhatsApp Business number

  function buildWhatsAppMessage(data) {
    var lines = [
      "Hi AP Cargos, I need a cargo quote.",
      "Name: " + data.name,
      "Phone: " + data.phone,
      "From: Mumbai",
      "To: " + data.destination,
      "Service: " + data.service
    ];
    if (data.notes) lines.push("Details: " + data.notes);
    return encodeURIComponent(lines.join("\n"));
  }

  function initLeadForms() {
    var forms = document.querySelectorAll("[data-lead-form]");
    forms.forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var statusEl = form.querySelector("[data-form-status]");
        var data = {
          name: (form.querySelector('[name="name"]') || {}).value || "",
          phone: (form.querySelector('[name="phone"]') || {}).value || "",
          destination: (form.querySelector('[name="destination"]') || {}).value || "",
          service: (form.querySelector('[name="service"]') || {}).value || "",
          notes: (form.querySelector('[name="notes"]') || {}).value || ""
        };

        if (!data.name || !data.phone) {
          if (statusEl) {
            statusEl.textContent = "Please enter your name and phone number.";
            statusEl.classList.add("show");
          }
          return;
        }

        // Primary conversion path: open WhatsApp with prefilled enquiry.
        var msg = buildWhatsAppMessage(data);
        var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg;

        if (statusEl) {
          statusEl.textContent = "Opening WhatsApp to confirm your request…";
          statusEl.classList.add("show");
        }

        // Fire conversion event for Google Ads / GA4 if gtag is present.
        if (typeof window.gtag === "function") {
          window.gtag("event", "generate_lead", {
            event_category: "lead_form",
            event_label: data.service || "general_enquiry"
          });
        }

        window.open(url, "_blank", "noopener");
        form.reset();
      });
    });
  }

  // UI: header scroll, reveal on scroll, counters
  function initUI() {
    var header = document.querySelector('.site-header');
    function onScroll() {
      if (!header) return;
      if (window.scrollY > 24) header.classList.add('scrolled'); else header.classList.remove('scrolled');
    }
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});

    // Reveal on scroll
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting) entry.target.classList.add('reveal--visible');
      });
    }, {threshold: 0.12});
    document.querySelectorAll('.reveal').forEach(function(el){ observer.observe(el); });

    // Simple counter animation for elements with data-count
    function animateCounter(el){
      var to = parseInt(el.getAttribute('data-count')||0,10);
      if (!to) return;
      var start = 0; var duration = 1200; var startTime = null;
      function step(ts){ if (!startTime) startTime=ts; var progress = Math.min((ts-startTime)/duration,1); el.textContent = Math.round(start + (to-start)*progress).toLocaleString(); if (progress<1) requestAnimationFrame(step); }
      requestAnimationFrame(step);
    }
    document.querySelectorAll('[data-count]').forEach(function(el){
      var cObserver = new IntersectionObserver(function(entries){ if(entries[0].isIntersecting){ animateCounter(el); cObserver.disconnect(); } }, {threshold:0.5});
      cObserver.observe(el);
    });
  }

  function initCallTracking() {
    document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
      link.addEventListener("click", function () {
        if (typeof window.gtag === "function") {
          window.gtag("event", "call_click", { event_category: "phone", event_label: link.getAttribute("href") });
        }
      });
    });
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
      link.addEventListener("click", function () {
        if (typeof window.gtag === "function") {
          window.gtag("event", "whatsapp_click", { event_category: "whatsapp" });
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLeadForms();
    initCallTracking();
    initUI();
  });
})();
