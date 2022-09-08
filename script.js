const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add(`flex-around`);

var menuLinks=[
    {text: "about", href: "/about"},
    {text: "catalog", href: "/catalog"},
    {text: "orders", href: "/orders"},
    {text: "account", href: "/account"}
]

menuLinks.forEach((obj) =>{
const a = document.createElement('a');
a.setAttribute(`href`,obj.href);
a.textContent = obj.text;
topMenuEl.appendChild(a);
});


const mainEl = document.querySelector(`main`);
mainEl.style.backgroundColor = "var(--main-bg)"
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add (`flex-ctr`);

