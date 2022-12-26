function setup() {
  // Write your code here.
  const handleOnClick = (event) => {
    const tag = event.target

    const collection = document.getElementsByClassName("card");
    for (let i = 0; i < collection.length; i++) {
      collection[i].removeAttribute('active');
    }
    tag.setAttribute("active", "selected");

    const newCollection = document.getElementsByClassName("card");
    for (let i = 0; i < newCollection.length; i++) {
      newCollection[i].hasAttribute('active') ? (newCollection[i].innerHTML = "up") : (newCollection[i].innerHTML = "down")
    }
  }

  return handleOnClick
}

// Example case. 
document.body.innerHTML = `
  <table id="card-container">
    <tbody>
      <tr>
        <td class="card" onclick="setup()(event)" style="background: red; font-size: 50px; padding: 20px">down</td>
        <td class="card" active ="selected" onclick="setup()(event)" style="background: red; font-size: 50px; padding: 20px">up</td>
        <td class="card" onclick="setup()(event)" style="background: red; font-size: 50px; padding: 20px">down</td>
        <td class="card" onclick="setup()(event)" style="background: red; font-size: 50px; padding: 20px">down</td>
      </tr>
    </tbody>
  </table>`;

setup();

// document.getElementsByClassName("card")[0].click();
console.log(document.body.innerHTML);
