import { extensionData } from "../data/extonsionData.js";
import { activeExtension } from "./state.js";
let extensionHTML = "";

extensionData.forEach((extensionItem) => {
  extensionHTML += `
        <div class="extension-container js-extension-${extensionItem.name}">
          <div class="extension-container-top-content">
            <div>
              <img src="${extensionItem.logo}" alt="${extensionItem.name} logo" />
            </div>
            <div class="spacer"></div>
            <div>
              <h4>${extensionItem.name}</h4>
              <p>
                ${extensionItem.description}
              </p>
            </div>
          </div>
          <div class="ex-btn">
            <button class="extension-remove-btn js-remove-extension-btn" >Remove</button>
            <div class="switch" data-ex-name="${extensionItem.name}">
              <input type="checkbox" id="toggle-${extensionItem.name}"data-extension-name="${extensionItem.name}" />
              <label for="toggle-${extensionItem.name}"></label>
            </div>
          </div>
        </div>`;
});

document.querySelector(".extension-grid").innerHTML = extensionHTML;
document.querySelectorAll(".switch input").forEach((checkbox) => {
  let extensionName = checkbox.dataset.extensionName;

  checkbox.addEventListener("click", () => {
    let exState = checkbox.checked;
    activeExtension(extensionName, exState);
  });
});
