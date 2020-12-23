// FULLPAGE

var myFullpage = new fullpage('#fullpage', {
    navigation: true,
    scrollOverflow: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About Me', 'Skills', 'Works', 'Contact'],
    css3: false
});

// LOADER

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("load").style.transform = "translateY(-200vh)";
}

// DARK MODE

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
// SAVE PREFERENCE TO LOCAL STORAGE
toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
// CHECK LOCAL STORAGE FOR PREFERENCE
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}