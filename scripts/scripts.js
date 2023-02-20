// when the user hovers over .tech-stack in the header, show #tech-stack
document.addEventListener("DOMContentLoaded", function () {
	const loadingScreen = document.createElement("div");
	loadingScreen.id = "loading-screen";
	loadingScreen.textContent = "Loading";
	document.body.appendChild(loadingScreen);

	// Show the loading screen
	loadingScreen.style.display = "flex";
	loadingScreen.style.opacity = 1;
	loadingScreen.style.display = "flex";

	// Disable scrolling
	document.body.style.overflow = "hidden";

	setTimeout(function () {
		// Step 4: Hide the loading screen
		loadingScreen.style.opacity = 0;
		loadingScreen.style.display = "none";

		// Re-enable scrolling
		document.body.style.overflow = "auto";

		// Show the body element
		document.getElementById("mainContent").style.display = "block";
	}, 3000);

	const techStack = document.querySelector(".tech-stack");
	const techStackDetails = document.querySelector("#tech-stack");

	techStack.addEventListener("mouseover", function () {
		techStackDetails.style.display = "block";
	});

	techStack.addEventListener("mouseout", function () {
		techStackDetails.style.display = "none";
	});

	// // update progress bar width
	// function updateProgressBar(event) {
	// 	const links = Array.from(document.querySelectorAll("nav a"));
	// 	const index = links.indexOf(event.target);
	// 	const progressBar = document.querySelector(".bar-progress");
	// 	const width = index * 20 - 1;

	// 	progressBar.style.width = `${width}%`;
	// }
	// // do the same thing but with a scroll event listener
	// window.addEventListener("scroll", updateProgressBarOnScroll);
	// function updateProgressBarOnScroll() {
	// 	const progressBar = document.querySelector(".bar-progress");
	// 	const scrollPosition = window.scrollY;
	// 	const totalHeight =
	// 		document.documentElement.scrollHeight - window.innerHeight;
	// 	const width = (scrollPosition / totalHeight) * 100;
	// 	progressBar.style.width = `${width}%`;
	// 	// console.log(scrollPosition);
	// }

	const workItems = document.querySelectorAll(".work-item");
	let activeImage = null;

	// Get the first image element and show it
	const firstImage = document.getElementById(workItems[0].id);
	firstImage.style.display = "block";
	activeImage = firstImage;

	workItems.forEach((item) => {
		const heading = item.querySelector("h3");
		const image = document.getElementById(item.id);

		heading.addEventListener("click", () => {
			if (activeImage) {
				activeImage.style.display = "none";
				const activeHeading = document.querySelector("h3.active");
				if (activeHeading) {
					activeHeading.classList.remove("active");
				}
			}

			image.style.display = "block";
			heading.classList.add("active");
			activeImage = image;
		});
	});

	var headerText = document.getElementById("header-text");
	var headerShadow = document.getElementById("head");

	window.onscroll = function () {
		if (window.pageYOffset > 0 && headerText.style.height !== "0px") {
			headerText.style.opacity = 0;
			headerText.style.height = "0px";

			headerShadow.style.boxShadow = "#8080802b -1px 7px 10px";
		} else if (window.pageYOffset === 0 && headerText.style.height === "0px") {
			headerText.style.opacity = 1;
			headerText.style.height = "40px";
			headerShadow.style.boxShadow = "none";
		}
	};

	const languages = {
		en: "Welcome!",
		es: "¡Bienvenidos!",
		fr: "Bienvenue!",
		ja: "ようこそ！",
		// Add more languages as needed
	};

	let currentLanguage = "en"; // Start with English

	function changeLanguage() {
		const greeting = document.querySelector("h2");
		greeting.textContent = `${languages[currentLanguage]} 🙂`;
		currentLanguage = getNextLanguage(currentLanguage);
	}

	function getNextLanguage(language) {
		const languageKeys = Object.keys(languages);
		const currentIndex = languageKeys.indexOf(language);
		const nextIndex = (currentIndex + 1) % languageKeys.length;
		return languageKeys[nextIndex];
	}

	setInterval(changeLanguage, 2000); // Call changeLanguage every 5 seconds

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			// console.log(entry);
			if (entry.isIntersecting) {
				entry.target.classList.add("show");
			} else {
				entry.target.classList.remove("show");
			}
		});
	});

	const hiddenElement = document.querySelectorAll(".hidden");

	hiddenElement.forEach((el) => observer.observe(el));
});
