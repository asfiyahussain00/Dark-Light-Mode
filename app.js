
const btn = document.getElementById("btn");

btn.onclick = () => {
    
    if (  document.body.style.backgroundColor=== "white") { 
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        btn.textContent = "Switch to Light Mode";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        btn.textContent = "Switch to Dark Mode";
    }
}














