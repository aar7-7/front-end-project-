export function saveState(state) {
  localStorage.setItem("extensionState", JSON.stringify(state));
}
