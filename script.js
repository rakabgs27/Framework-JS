const linkHome = document.getElementById("link-home");
const linkAbout = document.getElementById("link-about");
const root = document.getElementById("root");

//Fungsi On Click untuk Link 
linkHome.onclick = function(event) {
    event.preventDefault();
    root.textContent = "Welcome to Home Page"
    history.pushState(null,"",event.target.href)
};

//Fungsi On Click untuk Link 
linkAbout.onclick = function(event) {
    event.preventDefault();
    root.textContent = "Welcome to About Page"
    history.pushState(null,"",event.target.href)
};

//Fungsi Percabangan untuk melakukan pengisian manual pada URL
if (location.hash === "#about") {
    root.textContent = "Welcome to About Page";
} else if (location.hash === "#home") {
    root.textContent = "Welcome to Home Page";
}

