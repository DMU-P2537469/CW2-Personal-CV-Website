// ============== Dark/Light Mode Toggle ( Changes Class ) ==============

// ============== A variable is created under the name icon holding the Id "icon'. In the html documents, the icon is associated with an image, this image would display to the user which mode they are currently using (dark/light). When the icon is clicked a function would be activated in which the class "darktheme" would be toggled on the ".body" of the pages.  ==============

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("darktheme");

    // ============== A new variable named "theme" is created holding an "if" statement, this "if" statement checks to see if the "darktheme" class is present within the ".body" of the page in which it would print in the console if the page is "Light Mode" or "Dark Mode". If the page contains the class "darktheme" the theme variable will be updated to "Light" and the icon image "src" would be updated to the appropriate image, in this situation a "moon.png" (either a sun or a moon). "Else" if the ".body" does not contain the "darktheme" class the console would print "Dark Mode" and have the theme variable changed to "Dark" and update the icon image "src" to a "sun.png". ==============
    
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
    
    // ============== This script would take advantage of the user's local storage to hold data on if the page was left in Light or Dark mode and save the information. An item for the local storage is defined by the name "PageTheme" in which using JSON the theme would be stringified.  ==============
    
    localStorage.setItem("PageTheme", JSON.stringify(theme));

}

// ============== GetTheme would collect the data from "PageTheme" and print the result to the console. ==============

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);

// ============== If the theme stated previously is set to "Light" the body of the document would have a class list with "darktheme" and the icon images "src" would host the "moon.png" icon path. else it would hold the opposite "sun.png" and no "darktheme" class. ==============

if(GetTheme === "Light"){
    document.body.classList = "darktheme";
    icon.src ="Images/moon.png"; 
}else{
    icon.src ="Images/sun.png"; 
}
