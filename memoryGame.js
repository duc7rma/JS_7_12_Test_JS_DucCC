

class Game {
  constructor() {
    this.result = "";
  }
  getResult() {
    return this.result;
  }
  setup(id) {
    let value = "A"

    const handleOnclick = (event) => {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const result = alphabet[Math.floor(Math.random() * alphabet.length)];

      event.target.innerHTML = result;
      !value.includes(result) && (value += result)

      console.log(value)
      return result;
    };
    return handleOnclick
  }
}



let gameObj = new Game();
const handleClick = gameObj.setup("game-matrix")

document.body.innerHTML = `
        <table table id = "game-matrix" >
        <tbody>
          <tr>
            <td
              class="item-00"
              onclick="handleClick(event)"
              style="background: red; font-size: 50px; padding: 20px"
            >
              A
            </td>
            <td
              class="item-10"
              onclick="handleClick(event)"
              style="background: yellow; font-size: 50px; padding: 20px"
            >
              A
            </td>
          </tr>
          <tr>
            <td
              class="item-01"
              onclick="handleClick(event)"
              style="background: orange; font-size: 50px; padding: 20px"
            >
              A
            </td>
            <td
              class="item-11"
              onclick="handleClick(event)"
              style="background: silver; font-size: 50px; padding: 20px"
            >
              A
            </td>
          </tr>
        </tbody>
      </table >`
// document.getElementsByTagName('td')[0].click();
// document.getElementsByTagName('td')[3].click();
// document.getElementsByTagName('td')[1].click();
// document.getElementsByTagName('td')[2].click();
console.log(gameObj.result); 
