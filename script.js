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
    });
    
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
        history.pushState(null,"",event.target.href)
        render();
    };

    return link;
}


function Navbar() {
    const linkHome = Link({ 
        href: "#home", 
        label: "Home", 
    });

    const linkAbout = Link({ 
        href: "#about", 
        label: "About", 
    });

    const div = document.createElement("div");
    div.append(linkHome);
    div.append(linkAbout);

    return div;
}

function App() {
    const homeScreen = HomeScreen();
    const aboutScreen = AboutScreen();

    //Fungsi Percabangan untuk melakukan pengisian manual pada URL
    if (location.hash === "#about") {
       return aboutScreen;
    } else if (location.hash === "#home") {
        return homeScreen;
    }
}

function render() {
    const root = document.getElementById("root");
    const app = App();
    root.innerHTML = "";
    root.append(app);
}

render();