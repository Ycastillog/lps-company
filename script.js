const SITE_NAME = "LPS Company";

function trackAnalyticsEvent(eventName, params = {}) {
  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, {
    site_name: SITE_NAME,
    host_name: window.location.hostname,
    page_location: window.location.href,
    ...params,
  });
}

trackAnalyticsEvent("site_visit", {
  brand_name: "LPS Company",
  page_group: "Holding",
});

document.querySelectorAll("a[href]").forEach((link) => {
  link.addEventListener("click", () => {
    const href = link.getAttribute("href") || "";
    const action = link.dataset.analyticsAction || "link_click";
    const brand = link.dataset.analyticsBrand || "LPS Company";

    trackAnalyticsEvent(action, {
      brand_name: brand,
      link_text: link.textContent.trim().replace(/\s+/g, " ").slice(0, 80),
      link_url: href,
      destination_type: href.startsWith("mailto:")
        ? "email"
        : href.includes("lucianowash")
          ? "luciano_wash"
          : href.includes("snackeriado")
            ? "snackeria"
            : "external",
    });
  });
});
