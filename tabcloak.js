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
    ixl: {
      title: "IXL | Dashboard",
      icon: "images/ixl.png"
    },
    clever: {
      title: "Clever | Portal",
      icon: "images/clever.png"
    },
    mcgrawhill: {
    title: "McGraw Hill",
    icon: "images/mcgrawhill.png"
  },
  kahoot: {
    title: "Kahoot!",
    icon: "images/kahoot.png"
  },
  gimkit: {
    title: "Gimkit",
    icon: "images/gimkit.png"
  },
  blooket: {
    title: "Blooket",
    icon: "images/blooket.png"
  },
  prodigy: {
    title: "Prodigy Math",
    icon: "images/prodigy.png"
  },
  sheets: {
    title: "Google Sheets",
    icon: "images/sheets.png"
  },
  canva: {
    title: "Canva",
    icon: "images/canva.png"
  },
  powerschool: {
    title: "PowerSchool",
    icon: "images/powerschool.png"
  },
  slides: {
    title: "Google Slides",
    icon: "images/slides.png"
  },
  zoom: {
    title: "Zoom",
    icon: "images/zoom.png"
  },
  edge: {
    title: "Microsoft Edge",
    icon: "images/edge.png"
  },
  safari: {
    title: "Safari",
    icon: "images/safari.png"
  },
  bing: {
    title: "Bing",
    icon: "images/bing.png"
  },
    new_tab: { title: "New Tab", icon: "images/newtab.png" },
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

document.addEventListener("DOMContentLoaded", () => {
  // Selects all elements with the game-card class
  const gameCards = document.querySelectorAll(".game-card");

  gameCards.forEach(card => {
    card.addEventListener("click", (e) => {
      // Prevents traditional links from taking over the active window
      e.preventDefault();

      // Finds the target link from a data attribute OR a nested 'a' tag
      let gameUrl = card.getAttribute("data-url");
      if (!gameUrl) {
        const fallbackLink = card.querySelector("a");
        if (fallbackLink) gameUrl = fallbackLink.getAttribute("href");
      }
      
      if (gameUrl) {
        // Spawns a completely empty tab free of Securly extension hooks
        const blankWindow = window.open("about:blank", "_blank");
        
        if (blankWindow) {
          const doc = blankWindow.document;
          
          // Establishes a clean, full-screen viewport style
          doc.body.style.margin = "0";
          doc.body.style.height = "100vh";
          doc.body.style.backgroundColor = "#000";
          doc.body.style.overflow = "hidden";
          
          // Compiles an isolated sandbox iframe
          const iframe = doc.createElement("iframe");
          iframe.style.border = "none";
          iframe.style.width = "100%";
          iframe.style.height = "100%";
          
          // Uses absolute pathing to ensure games pull correct relative folder files
          iframe.src = new URL(gameUrl, window.location.href).href;
          
          // Mounts the game canvas into the new browser instance
          doc.body.appendChild(iframe);
        } else {
          // Normal redirection fallback if Chrome blocks pop-ups
          window.location.href = gameUrl;
        }
      }
    });
  });
});
