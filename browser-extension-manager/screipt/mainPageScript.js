import { exData } from "../data/extonsionData.js";
import { stateEx } from "./state.js";
let extensionHTML = '';
exData.forEach((extension)=>{
extensionHTML += `
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
document.querySelector('.extension-grid').innerHTML = extensionHTML;
toggle();
function toggle() {
  document.querySelectorAll(".switch input").forEach((toggleInput) => {
    toggleInput.addEventListener("change", () => {
      let extensionDiv = toggleInput.closest(".extension-container");
      let extensionName = toggleInput.closest(".switch").dataset.exName;
      let activeContainer = document.querySelector(".active-container");

      if (toggleInput.checked) {
        // Prevent duplicate entries in active container
        if (
          !activeContainer.querySelector(`[data-ex-name="${extensionName}"]`)
        ) {
          let clonedExtension = extensionDiv.cloneNode(true);
          activeContainer.appendChild(clonedExtension);
          toggle(); // Reattach event listeners to cloned elements
        }
      } else {
        let activeExtension = activeContainer.querySelector(
          `[data-ex-name="${extensionName}"]`
        );
        if (activeExtension) activeExtension.remove();
      }

      // Update the state array
      let existingIndex = stateEx.findIndex(
        (ext) => ext.exName === extensionName
      );
      if (existingIndex !== -1) {
        stateEx[existingIndex].exState = toggleInput.checked;
      } else {
        stateEx.push({ exName: extensionName, exState: toggleInput.checked });
      }
    });
  });
}