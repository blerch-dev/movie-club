document.addEventListener('DOMContentLoaded', () => {
    const processForm = (e) => {
        if(e.preventDefault) { e.preventDefault(); }
        return false;
    }

    const form = document.getElementById("AuthForm");
    if(form.attachEvent) { form.attachEvent("submit", processForm); } 
    else { form.addEventListener("submit", processForm); }
});