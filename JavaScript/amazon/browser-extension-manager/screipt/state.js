export let extensionState = JSON.parse(localStorage.getItem("extension"));

export function activeExtension(extensionName, exState) {
  if (!exState) {
    // Modify the array in place using splice()
    let index = extensionState.findIndex(
      (ext) => ext.extensionName === extensionName
    );
    if (index !== -1) {
      extensionState.splice(index, 1); // Remove the unchecked extension
    }
  } else {
    // Add or update the extension state
    let existingExt = extensionState.find(
      (ext) => ext.extensionName === extensionName
    );
    if (existingExt) {
      existingExt.state = exState;
    } else {
      extensionState.push({
        extensionName: extensionName,
        state: exState,
      });
    }
  }

  console.log(extensionState);
  localStorage.setItem("extension", JSON.stringify(extensionState));
}
