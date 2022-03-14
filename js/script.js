const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".text-selected-text").forEach(c => c.classList.remove("text-selected-text"));
	
	document.querySelectorAll(".nav-link")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("text-selected-text");

}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})

btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});