const root = document.getElementById("root");

//Fungsi Percabangan untuk melakukan pengisian manual pada URL
if (location.hash === "#about") {
    const aboutScreen = AboutScreen();
    root.innerHTML = "";
    root.append(aboutScreen);
} else if (location.hash === "#home") {
    const homeScreen = HomeScreen();
    root.innerHTML = "";
    root.append(homeScreen);
}

//Fungsi untuk Home Screen
function HomeScreen() {
    const navbar = Navbar();

    const textPreview = document.createElement("p");
   
    const input = document.createElement("input");
    input.oninput = function (event) {
        textPreview.textContent = event.target.value;
    };
    input.placeholder = "Enter your name";
   
    const div = document.createElement("div");
    div.append(navbar);
    div.append(input);
    div.append(textPreview);

    return div;
}

//Fungsi untuk About Screen
function AboutScreen() {
    const linkHome = document.createElement("a");
    linkHome.href = "#home";
    linkHome.textContent = "Kembali ke Home";
    //Fungsi On Click untuk Link Home
    linkHome.onclick = function(event) {
        event.preventDefault();
        const homeScreen = HomeScreen();
        root.innerHTML = "";
        root.append(homeScreen);
        history.pushState(null,"",event.target.href)
    };
    const text = document.createElement("p");
    text.textContent = "Welcome to About Page";
    
    const div = document.createElement("div");
    div.append(linkHome);
    div.append(text);

    return div;
}

function Navbar() {
    const linkHome = document.createElement("a");
    linkHome.href = "#home";
    linkHome.textContent = "Home";
    //Fungsi On Click untuk Link Home
    linkHome.onclick = function(event) {
        event.preventDefault();
        const homeScreen = HomeScreen();
        root.innerHTML = "";
        root.append(homeScreen);
        history.pushState(null,"",event.target.href)
    };
    
    const linkAbout = document.createElement("a");
    linkAbout.href = "#about";
    linkAbout.textContent = "About";
    //Fungsi On Click untuk Link About
    linkAbout.onclick = function(event) {
        event.preventDefault();
        const aboutScreen = AboutScreen();
        root.innerHTML = "";
        root.append(aboutScreen);
        history.pushState(null,"",event.target.href)
    };

    const div = document.createElement("div");
    div.append(linkHome);
    div.append(linkAbout);

    return div;
}