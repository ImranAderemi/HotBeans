// JavaScript Documentconst form = document.querySelector('form');
const form = document.querySelector('form');

form.addEventListener('dragover', handleDragOver, false);
form.addEventListener('drop', handleFileDrop, false);

function handleDragOver(event) {
  event.preventDefault();
}

function handleFileDrop(event) {
  event.preventDefault();
  const files = event.dataTransfer.files;
  const fileInput = document.querySelector('#fileInput');
  fileInput.files = files;
}
const dropArea = document.getElementById("drop-area");

// Prevent default drag behaviors
dropArea.addEventListener("dragenter", (e) => {
  e.preventDefault();
  e.stopPropagation();
  dropArea.classList.add("highlight");
});

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.stopPropagation();
});

dropArea.addEventListener("dragleave", (e) => {
  e.preventDefault();
  e.stopPropagation();
  dropArea.classList.remove("highlight");
});

// Handle dropped files
dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  e.stopPropagation();
  dropArea.classList.remove("highlight");
  
  const file = e.dataTransfer.files[0];
  
  // display the filename in the box
  const fileDisplay = document.querySelector('.file-display');
  fileDisplay.innerHTML = `File name: ${file.name}`;
});
