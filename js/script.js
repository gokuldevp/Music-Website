let toggleNav = () => {
    const navbarItems = document.getElementById('navbarItems');
    const navIcon = document.getElementById('navicon');
    const forwardX = document.getElementById('forwardx');
    const backwardX = document.getElementById('backwardx');

    navIcon.classList.toggle('x-container');
    backwardX.classList.toggle('x-backward');
    backwardX.classList.toggle('bar');
    forwardX.classList.toggle('x-forward');
    forwardX.classList.toggle('bar');

    navbarItems.classList.toggle('show');
}
