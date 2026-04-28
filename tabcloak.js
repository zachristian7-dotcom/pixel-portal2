function cloakTab(title, icon) {
  if (title) document.title = title;

  if (icon) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = icon;
  }
}

const cloaks = {
  google: {
    title: "Google",
    icon: "https://www.google.com/favicon.ico"
  },

  classroom: {
    title: "Home - Classroom",
    icon: "https://ssl.gstatic.com/classroom/favicon.png"
  },

  docs: {
    title: "Google Docs",
    icon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico"
  },

  drive: {
    title: "My Drive",
    icon: "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png"
  },

  gmail: {
    title: "Gmail",
    icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
  },

  youtube: {
    title: "YouTube",
    icon: "https://www.youtube.com/favicon.ico"
  },

  calendar: {
    title: "Calendar",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAolBMVEVHcEybvezqQzVChfT8vQMWZtMXgDVBhfRChfUzp1IYgDgZZ9LQzLXuOTU3hMfAo1/3ohZzj0v/vVNChfX////8vQMzqFMxffEYZ9IYgDjL2/zS4Pwdo0XP6db8uADtPDX+6sGzy/YAYtsAbOh3o+/Ao1wUfyQ0g8d6ikj3nRMAV+UtnUwWfjbi6/w7g+r3+v7/7cEcdeq3zvbc5/sdmj5ele1sIxchAAAAEnRSTlMA+dh1ra63rba2fW7t2LaspqxaQiwsAAAAwUlEQVQ4jb3Saw+CIBiGYai0Mu0wMUo7GXSi1NT6/38t2LLeprjamtfX594YDISa0e6WGNLgtbsldKYURU8XGH8OKJRulc8A+4C9U0YwoAEBNitP6vwccOZGcuW+JuBxzhkJ2DbUH5ELkmWxNkg4C2VF9QGO7/UBIcKvCVJOApHXBBETAssjmP4WUfLtS149GAwPCl4C9kkZPwNzr9wWwHEtOcWfNOfS5TwFVNBC9cF7rw7AjqyKwEGQZUp9aIIa9ADTiDit4B4HoAAAAABJRU5ErkJggg=="
  },

  meet: {
    title: "Meet",
    icon: "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-64dp/logo_meet_2020q4_color_1x_web_64dp.png"
  },

  github: {
    title: "GitHub",
    icon: "https://github.githubassets.com/favicons/favicon.svg"
  },

  default: {
    title: "Default",
    icon: "https://zachristian7-dotcom.github.io/pixel-portal/images/favicon.png"
  }
};

function setCloak(name) {
  const c = cloaks[name];
  if (c) {
    cloakTab(c.title, c.icon);
    localStorage.setItem("cloak", name);
  }
}

function resetCloak() {
  cloakTab("Pixel Portal – Library", "images/favicon.png");
  localStorage.removeItem("cloak");
}

function applyCustomCloak() {
  const title = document.getElementById("customTitle").value;
  const icon = document.getElementById("customIcon").value;

  cloakTab(title, icon);
  localStorage.setItem("cloak_custom", JSON.stringify({ title, icon }));
}

/* APPLY ON LOAD */
window.addEventListener("load", () => {
  const saved = localStorage.getItem("cloak");
  const custom = localStorage.getItem("cloak_custom");

  if (saved && cloaks[saved]) {
    cloakTab(cloaks[saved].title, cloaks[saved].icon);
  }

  if (custom) {
    const c = JSON.parse(custom);
    cloakTab(c.title, c.icon);
  }
});