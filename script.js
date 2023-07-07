// JavaScript code
const undoStack = []; // Undo stack
const redoStack = []; // Redo stack

// Function to perform "WRITE" operation
function write() {
    const inputText = document.getElementById("input-text").value;
    undoStack.push(inputText);
    updateOutput();
    clearInput();
    updateButtonStates();
}

// Function to perform "UNDO" operation
function undo() {
    if (undoStack.length > 0) {
        const lastInput = undoStack.pop();
        redoStack.push(lastInput);
        updateOutput();
        updateButtonStates();
    }
}

// Function to perform "REDO" operation
function redo() {
    if (redoStack.length > 0) {
        const nextInput = redoStack.pop();
        undoStack.push(nextInput);
        updateOutput();
        updateButtonStates();
    }
}

// Function to update the output container with the undo stack
function updateOutput() {
    const outputContainer = document.getElementById("output-container");
    outputContainer.innerHTML = undoStack.join(" ");
}

// Function to clear the input field
function clearInput() {
    document.getElementById("input-text").value = "";
}

// Function to update button states based on stack lengths
function updateButtonStates() {
    const undoButton = document.getElementById("undo-button");
    const redoButton = document.getElementById("redo-button");
    undoButton.disabled = undoStack.length === 0;
    redoButton.disabled = redoStack.length === 0;
}

// Event listeners
document.getElementById("write-button").addEventListener("click", write);
document.getElementById("undo-button").addEventListener("click", undo);
document.getElementById("redo-button").addEventListener("click", redo);
