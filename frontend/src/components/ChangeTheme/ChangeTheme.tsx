export  function ChangeTheme() {
        // if(localStorage.theme === "dark") {
        //     localStorage.theme = "light";
        // } else {
        //     localStorage.theme = "dark";
        // }

        document.documentElement.classList.toggle('dark', localStorage.theme === 'dark');
}