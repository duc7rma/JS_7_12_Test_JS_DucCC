function setup() {
    // Write your code here.
    return {
        handleChangeText: (event) => {
            document.getElementById("comment").value = event.target.value
        },

        handlePostComment: (event) => {
            event.preventDefault();
            document.getElementById("comment").value && (document.getElementById("commentList").innerHTML += `<li>${document.getElementById("comment").value}</li>`)
            document.getElementById("comment").value = ""
        }
    }
}

// Example case. 
document.body.innerHTML = `
  <ul id='commentList'>
    <li>test</li>
  </ul>

  <form>
    <input type='text' id='comment' onchange = "setup().handleChangeText(event)"/>
    <input type='button' id='postComment' value='Post' onclick = "setup().handlePostComment(event)"/>
  </form>`;

setup()
// document.getElementById("comment").value = "test";
document.getElementById("postComment").click();
// console.log(document.body.innerHTML);
