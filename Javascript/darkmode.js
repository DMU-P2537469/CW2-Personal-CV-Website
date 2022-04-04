// ============== Dark/Light Mode Toggle ( Changes Class ) ==============

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("darktheme");

    var theme;

    if(document.body.classList.contains("darktheme")){
        console.log("Light Mode");
        theme = "Light";
        icon.src ="Images/moon.png"; 
    } else{
        console.log("Dark Mode");
        theme = "Dark"
        icon.src ="Images/sun.png"; 
    }



// ============== remembers current settings in local storage ==============
    
    localStorage.setItem("PageTheme", JSON.stringify(theme));

}

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);

if(GetTheme === "Light"){
    document.body.classList = "darktheme";
    icon.src ="Images/moon.png"; 
}else{
    icon.src ="Images/sun.png"; 
}
