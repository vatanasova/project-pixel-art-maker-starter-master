// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function changeColor() {
    const color = $("#color-picker").val();
    $(this).css('background-color', color);
}

function clearColor() {
    $(this).css("background-color", "");
}

function destroyGrid() {
  $("#pixel-canvas").children().remove();
}

function makeGrid() {

   const height = $("#input-height").val();
   const width = $("#input-width").val();

    const table = document.getElementById('pixel-canvas');
    for (let i = 0; i < height; i++) {

        const row = table.insertRow(i);
        for (let j = 0; j < width; j++) {
            const cell = row.insertCell(j);

            cell.addEventListener("click", changeColor);
            cell.addEventListener("dblclick", clearColor);
        }
    }
}

$(document).ready(function() {

  const sizePicker = document.querySelector("#size-picker");

  sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();

    destroyGrid();
    makeGrid();
  });
});
