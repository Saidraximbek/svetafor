const click = document.getElementById("click")
const red = document.getElementById("red")
const del = document.getElementById("delete")
click.onclick = () => {
 console.log(1);
 red.style.display = "block";
 click.style.display = "none";
 del.style.display = "block"

}

del.onclick = () => {
 console.log(1);
 red.style.display = "none";
 click.style.display = "block";
 del.style.display = "none"

}