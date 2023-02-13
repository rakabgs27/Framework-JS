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
    const linkHome = Link({ 
        href: "#home", 
        label: "Kembali ke Home", 
        Component: HomeScreen}
    );
    
    const text = document.createElement("p");
    text.textContent = "Welcome to About Page";
    
    const div = document.createElement("div");
    div.append(linkHome);
    div.append(text);

    return div;
}

function Link(props) {
    const link = document.createElement("a");
    link.href = props.href;
    link.textContent = props.label;
    //Fungsi On Click untuk Link
    link.onclick = function(event) {
        event.preventDefault();
        const component = props.Component();
        root.innerHTML = "";
        root.append(component);
        history.pushState(null,"",event.target.href)
    };

    return link;
}


function Navbar() {
    const linkHome = Link({ 
        href: "#home", 
        label: "Home", 
        Component: HomeScreen}
    );

    const linkAbout = Link({ 
        href: "#about", 
        label: "About", 
        Component: AboutScreen}
    );

    const div = document.createElement("div");
    div.append(linkHome);
    div.append(linkAbout);

    return div;
}