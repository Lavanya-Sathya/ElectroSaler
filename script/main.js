// load header section
window.addEventListener("DOMContentLoaded", () => {
  const headerSection = document.getElementById("header-container");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "header.html", true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      headerSection.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
});

// load footer section
window.addEventListener("DOMContentLoaded", () => {
  const footerSection = document.getElementById("footer-container");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "footer.html", true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      footerSection.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
});
