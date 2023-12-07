const turnBtn = document.getElementById("turn-btn");
const valueSize = document.getElementById("valueSize");
const valuePort = document.getElementById("valuePort");
let On = false;
turnBtn.addEventListener("click", function () {
  if (On) {
    On = false;
    console.log("OFF");
    valuePort.innerText = "";
    valueSize.innerText = "";
  } else {
    On = true;
    valueSize.innerText = "Resize";
    console.log("On");
  }
});

function widthResizer() {
  if (On) {
    let width = window.innerWidth;
    let height = window.innerHeight;
    valueSize.innerText = `${width} X ${height}`;
    if (width > 1201) {
      valuePort.innerText = "Extra Large Screens, TV";
    } else if (width > 1025 && width < 1200) {
      valuePort.innerText = "Desktop,Large Screens";
    } else if (width > 769 && width < 1024) {
      valuePort.innerText = "Small screens, Laptops";
    } else if (width > 481 && width < 768) {
      valuePort.innerText = "Ipads,Tablets";
    } else {
      valuePort.innerText = "Mobile Devices";
    }
  } else {
    valueSize.innerText = `"please turn on resize"`;
  }
}

// Getting the width of the browser whenever the screen resolution changes.
window.addEventListener("resize", widthResizer);

