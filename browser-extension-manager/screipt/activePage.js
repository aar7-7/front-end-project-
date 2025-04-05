import { extensionState } from "./state.js";
import { extensionData } from "../data/extonsionData.js";
let extensionHTML;
function findActiveExt() {
  extensionState.forEach((extState) => {
    let machingExtension;
    extensionData.forEach((extData) => {
      if (extState.extensionName === extData.name) {
        machingExtension = extData;
      }
    });
    extensionHTML += `
        <div class="extension-container js-extension-${machingExtension.name}">
          <div class="extension-container-top-content">
            <div>
              <img src="${machingExtension.logo}" alt="${machingExtension.name} logo" />
            </div>
            <div class="spacer"></div>
            <div>
              <h4>${machingExtension.name}</h4>
              <p>
                ${machingExtension.description}
              </p>
            </div>
          </div>
          <div class="ex-btn">
            <button class="remove-active-extension-btn js-remove-extension-btn"  >Remove</button>
            
          </div>
        </div>`;
  });
}
let activeContainer = document.querySelector(".active-extension-container");
let extensionGrid = document.querySelector(".extension-grid");
document.querySelector(".active-list").addEventListener("click", () => {
  findActiveExt();

  activeContainer.innerHTML = extensionHTML;
  activeContainer.style.display = "grid";
  extensionGrid.style.display = "none";
});
document.querySelector(".all-list").addEventListener("click", () => {
  extensionGrid.style.display = "grid";
  activeContainer.style.display = "none";
});
function removeExtension(extensionName) {
  let container = document.querySelector(`.js-extension-${extensionName}`);
  document
    .querySelector(".remove-active-extension-btn")
    .addEventListener("click", () => {
      container.remove();
    });
}
