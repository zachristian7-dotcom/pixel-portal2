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
  const gameCards = document.querySelectorAll(".game-card");

  function resolveUrl(url) {
    try {
      return new URL(url, window.location.href).href;
    } catch (e) {
      return url;
    }
  }

  function openGame(url) {
    const gameUrl = resolveUrl(url);

    // Try opening a new tab first
    const newTab = window.open("", "_blank");

    // If popup blocked → fallback immediately
    if (!newTab) {
      window.location.href = gameUrl;
      return;
    }

    // Build a clean document shell
    const doc = newTab.document;

    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Loading Game...</title>
          <style>
            html, body {
              margin: 0;
              padding: 0;
              height: 100%;
              background: black;
              overflow: hidden;
            }
            iframe {
              border: none;
              width: 100%;
              height: 100%;
            }
            #error {
              color: white;
              font-family: Arial;
              padding: 20px;
              display: none;
            }
          </style>
        </head>
        <body>
          <div id="error">
            Game failed to load. Try reopening or check the link.
          </div>

          <iframe id="gameFrame"></iframe>

          <script>
            const iframe = document.getElementById("gameFrame");
            const errorBox = document.getElementById("error");

            iframe.src = "${gameUrl}.html";

            // If iframe never loads properly, show fallback message
            let loaded = false;

            iframe.onload = () => {
              loaded = true;
            };

            setTimeout(() => {
              if (!loaded) {
                iframe.style.display = "none";
                errorBox.style.display = "block";
              }
            }, 8000);
          </script>
        </body>
      </html>
    `);

    doc.close();
  }

  gameCards.forEach(card => {
    card.addEventListener("click", (e) => {
      e.preventDefault();

      let gameUrl =
        card.getAttribute("data-url") ||
        card.querySelector("a")?.getAttribute("href");

      if (!gameUrl) return;

      openGame(gameUrl);
    });
  });
});