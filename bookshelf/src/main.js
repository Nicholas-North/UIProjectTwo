import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

document.getElementById("SearchBtn").addEventListener("click", Searching);

function Searching() 
{
  document.getElementById("tester").innerHTML = "Day: ";
  // Declare variables
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.outerHTML.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  document.getElementById("mySearch").style.display = "none";

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
      console.log("badTest");
    }
  }
}

export default app
