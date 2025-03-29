import { stateEx } from "./state.js";
import { exData } from "../data/extonsionData.js";
let matchingItem = [];
let activeExtensionHTML = "";

exData.forEach((extension) => {
  stateEx.forEach((state) => {
    if (extension.name === state.exName) {
      matchingItem.push(extension);
    }
  });
});
console.log(matchingItem);
matchingItem.forEach((extension) => {
  activeExtensionHTML += `
<div class="extension-container">
          <div class="extension-container-top-content">
            <div>
              <img src="${extension.logo}" alt="${extension.name} logo" />
            </div>
            <div class="spacer"></div>
            <div>
              <h4>${extension.name}</h4>
              <p>
                ${extension.description}
              </p>
            </div>
          </div>
          <div class="ex-btn">
            <button>Remove</button>
            <div class="switch" data-ex-name="${extension.name}">
              <input type="checkbox" id="toggle-${extension.name}" />
              <label for="toggle-${extension.name}"></label>
            </div>
          </div>
        </div>`;
});
document.querySelector('.active-container').innerHTML = activeExtensionHTML;
document.addEventListener("DOMContentLoaded", () => {
  const allExtensions = document.querySelector(".extension-grid");
  const activeExtensions = document.querySelector(".active-container");
  const activeLink = document.querySelector('.manage-ex-link a:nth-child(2)'); // Select "Active" link

  if (activeLink) {
    activeLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior

      allExtensions.style.display = "none";  // Hide all extensions
      activeExtensions.style.display = "block"; // Show active extensions
    });
  }
});
