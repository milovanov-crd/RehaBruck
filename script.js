var menu = document.getElementById('mobile-only-menu');
var close = document.getElementById('close');
var menuWindow = document.getElementById('modal');
var header = document.getElementById('header');

menu.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);
window.addEventListener('scroll', changeHeader);

function showMenu()
{
    menuWindow.style.opacity = 1;
    menuWindow.style.zIndex = 3;
}

function hideMenu()
{
    menuWindow.style.opacity = 0;
    menuWindow.style.zIndex = -3;
}

function changeHeader()
{
    var scroll = this.scrollY;

    if (scroll > 150)
    {
        header.style.backgroundColor = 'white'; //ovde umesto white staviš $gray ili koji god kod boje već da želiš
        header.style.padding = '1.875rem 0';
    }
        else
        {
            header.style.backgroundColor = 'transparent';
            header.style.padding = '3.75rem 0';
        }
}