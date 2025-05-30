import { extensionState } from "./state.js";
import { extensionData } from "../data/extonsionData.js";
let extensionHTML;
function removeExtension(extensionName) {
  let extension = document.querySelector(`.js-extension-${extensionName}`);
  let index = extensionState.findIndex(
    (ext) => ext.extensionName === extensionName
  );
  extensionState.splice(index, 1);
  extension.remove();
  localStorage.setItem("extension", JSON.stringify(extensionState));
}
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
            <button class="remove-active-extension-btn js-remove-extension-btn" data-remove-ext="${machingExtension.name}" >Remove</button>
            
          </div>
        </div>`;
  });
}
let activeContainer = document.querySelector(".active-extension-container");
let extensionGrid = document.querySelector(".extension-grid");
document.querySelector(".active-list").addEventListener("click", () => {
  // Reset extensionHTML before appending new content
  extensionHTML = "";
  findActiveExt();

  // Update the UI
  activeContainer.innerHTML = extensionHTML;
  activeContainer.style.display = "grid";
  extensionGrid.style.display = "none";

  // Attach click events to dynamically created remove buttons
  const removeButtons = activeContainer.querySelectorAll(
    ".js-remove-extension-btn"
  );
  removeButtons.forEach((button) => {
    const extName = button.dataset.removeExt;

    // Ensure extName exists before attaching handler
    if (extName) {
      button.addEventListener("click", () => {
        removeExtension(extName);
      });
    } else {
      console.warn("Missing data-remove-ext on button:", button);
    }
  });
});
document.querySelector(".all-list").addEventListener("click", () => {
  extensionGrid.style.display = "grid";
  activeContainer.style.display = "none";
});


