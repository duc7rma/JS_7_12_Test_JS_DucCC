function scaleFontSize(parent, scalingFactor) {
    const pTagList = parent.querySelectorAll("p");

    pTagList.forEach((tag) => {
        const regexp = /[0-9]/gi;

        const curFontSizePx = tag.style.fontSize
        const curFontSize = curFontSizePx.match(regexp).join("");
        const newFontSizePx = curFontSize * scalingFactor + "px"

        tag.style.fontSize = newFontSizePx
    });
}
document.body.innerHTML = `
    <div id = "textDiv">
      <p style="font-size: 40px;">Apple</p>
      <p style="font-size: 10px;">Pear</p>
    </div>
  `;

scaleFontSize(document.getElementById("textDiv"), 0.5);
console.log(document.body.innerHTML);
