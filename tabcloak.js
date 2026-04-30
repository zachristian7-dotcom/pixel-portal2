(function () {

const DEFAULT_FAVICON = "images/favicon.png";

function setFavicon(icon) {
  document.querySelectorAll("link[rel*='icon']").forEach(el => el.remove());

  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = icon || DEFAULT_FAVICON;

  document.head.appendChild(link);
}

  function applyCloak(title, icon) {
    if (title) document.title = title;
    if (icon) setFavicon(icon);
  }

  // 🌐 GLOBAL CLOAKS
  window.cloaks = {
    google: {
      title: "Google",
      icon: "images/google.png"
    },
    classroom: {
      title: "Home - Classroom",
      icon: "images/classroom.png"
    },
    docs: {
      title: "Google Docs",
      icon: "images/docs.png"
    },
    drive: {
      title: "My Drive",
      icon: "images/drive.png"
    },
    gmail: {
      title: "Gmail",
      icon: "images/gmail.png"
    },
    youtube: {
      title: "YouTube",
      icon: "images/youtube.png"
    },
    calendar: {
      title: "Calendar",
      icon: "images/calendar.png"
    },
    meet: {
      title: "Meet",
      icon: "images/meet.png"
    },
    github: {
      title: "GitHub",
      icon: "images/github.svg"
    },
    pixelportal: {
  title: "Pixel Portal",
  icon: "images/favicon.png",
  reset: true
}
  };

  function applySavedCloak() {
    try {
      const customRaw = localStorage.getItem("cloak_custom");
      const preset = localStorage.getItem("cloak");

      if (customRaw) {
        const custom = JSON.parse(customRaw);
        if (custom && custom.title) {
          applyCloak(custom.title, custom.icon);
          return;
        }
      }

      if (preset && cloaks[preset]) {
        const c = cloaks[preset];
        applyCloak(c.title, c.icon);
      }
    } catch (e) {
      console.warn("cloak error:", e);
    }
  }

  // 🚀 APPLY ON LOAD
  applySavedCloak();
  window.addEventListener("load", applySavedCloak);

  // 🔁 SYNC BETWEEN TABS (FIXED)
  window.addEventListener("storage", (e) => {
    if (
      e.key === "cloak" ||
      e.key === "cloak_custom" ||
      e.key === "cloak_reset"
    ) {
      applySavedCloak();

      if (e.key === "cloak_reset") {
        applyCloak("Pixel Portal", "images/favicon.png");
      }
    }
  });

  // 🌐 GLOBAL FUNCTIONS

  window.setCloak = function(name){

  const c = cloaks[name];
  if (!c) return;

  // 🔥 special case: Pixel Portal acts like reset
  if (c.reset) {
    window.resetCloak();
    return;
  }

  localStorage.setItem("cloak", name);
  localStorage.removeItem("cloak_custom");

  applySavedCloak();
};

  window.resetCloak = function () {
  localStorage.removeItem("cloak");
  localStorage.removeItem("cloak_custom");

  localStorage.setItem("cloak_reset", Date.now());

  applyCloak("Pixel Portal", DEFAULT_FAVICON);
};

  window.applyCustomCloak = function(){
    const title = document.getElementById("customTitle")?.value;
    const icon = document.getElementById("customIcon")?.value;

    if (title) {
      localStorage.setItem("cloak_custom", JSON.stringify({ title, icon }));
      localStorage.removeItem("cloak");
      applySavedCloak();
    }
  };

})();