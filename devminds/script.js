const carousel =
		document.querySelector(".carousel"),
	firstImg = carousel.querySelectorAll("img")[0],
	arrowIcons =
		document.querySelectorAll(".wrapper i");

let isDragStart = false,
	isDragging = false,
	prevPageX,
	prevScrollLeft,
	positionDiff;

const showHideIcons = () => {
	// showing and hiding prev/next icon according to carousel scroll left value
	let scrollWidth =
		carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
	arrowIcons[0].style.display =
		carousel.scrollLeft == 0 ? "none" : "block";
	arrowIcons[1].style.display =
		carousel.scrollLeft == scrollWidth
			? "none"
			: "block";
};

arrowIcons.forEach((icon) => {
	icon.addEventListener("click", () => {
		let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
		// if clicked icon is left, reduce width value from the carousel scroll left else add to it
		carousel.scrollLeft +=
			icon.id == "left"
				? -firstImgWidth
				: firstImgWidth;
		setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
	});
});

const autoSlide = () => {
	// if there is no image left to scroll then return from here
	if (
		carousel.scrollLeft -
			(carousel.scrollWidth -
				carousel.clientWidth) >
			-1 ||
		carousel.scrollLeft <= 0
	)
		return;

	positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
	let firstImgWidth = firstImg.clientWidth + 14;
	// getting difference value that needs to add or reduce from carousel left to take middle img center
	let valDifference =
		firstImgWidth - positionDiff;

	if (carousel.scrollLeft > prevScrollLeft) {
		// if user is scrolling to the right
		return (carousel.scrollLeft +=
			positionDiff > firstImgWidth / 3
				? valDifference
				: -positionDiff);
	}
	// if user is scrolling to the left
	carousel.scrollLeft -=
		positionDiff > firstImgWidth / 3
			? valDifference
			: -positionDiff;
};

const dragStart = (e) => {
	// updatating global variables value on mouse down event
	isDragStart = true;
	prevPageX = e.pageX || e.touches[0].pageX;
	prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
	// scrolling images/carousel to left according to mouse pointer
	if (!isDragStart) return;
	e.preventDefault();
	isDragging = true;
	carousel.classList.add("dragging");
	positionDiff =
		(e.pageX || e.touches[0].pageX) - prevPageX;
	carousel.scrollLeft =
		prevScrollLeft - positionDiff;
	showHideIcons();
};

const dragStop = () => {
	isDragStart = false;
	carousel.classList.remove("dragging");

	if (!isDragging) return;
	isDragging = false;
	autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener(
	"touchstart",
	dragStart
);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
$(function () {
	$("#show").on("click", function () {
		$(".card-reveal").slideToggle("slow");
	});

	$(".card-reveal .close").on(
		"click",
		function () {
			$(".card-reveal").slideToggle("slow");
		}
	);
});
function addToCart(name, price) {
	// Create list item for the cart
	const cartItem = document.createElement("li");
	cartItem.textContent = `${name} - ${price}`;

	// Append item to the cart
	const cart =
		document.getElementById("cart-items");
	cart.appendChild(cartItem);
}

// Example of adding product cards dynamically (replace with your actual product data)
const products = [
	{
		name: "Product 1",
		price: "$10",
		imageUrl:
			"images/1.jpg",
	},
	{
		name: "Product 2",
		price: "$15",
		imageUrl:
			"images/2.jpg",
	},
	{
		name: "Product 3",
		price: "$20",
		imageUrl:
			"images/3.jpg",
	},
	{
		name: "Product 4",
		price: "$25",
		imageUrl:
			"images/4.jpg",
	},
	{
		name: "Product 5",
		price: "$30",
		imageUrl:
			"images/5.jpg",
	},
	{
		name: "Product 6",
		price: "$35",
		imageUrl:
			"images/6.jpg",
	},
	{
		name: "Product 7",
		price: "$40",
		imageUrl:
			"images/7.jpg",
	},
	{
		name: "Product 8",
		price: "$45",
		imageUrl:
			"images/8.jpg",
	},
	{
		name: "Product 9",
		price: "$50",
		imageUrl:
			"images/9.jpg",
	},
	{
		name: "Product 10",
		price: "$55",
		imageUrl:
			"images/10.jpg",
	},
	// Add more products as needed
];

// Function to generate product cards
function generateProductCards(products) {
	const productsContainer =
		document.querySelector(".products");

	products.forEach((product) => {
		const productCard =
			document.createElement("div");
		productCard.classList.add("product-card");

		const image = document.createElement("img");
		image.src = product.imageUrl;
		image.alt = product.name;

		const name = document.createElement("h2");
		name.textContent = product.name;

		const price = document.createElement("p");
		price.textContent = product.price;

		const addToCartButton =
			document.createElement("button");
		addToCartButton.textContent = "Add to Cart";

		// Add click event listener to the button
		addToCartButton.addEventListener(
			"click",
			function (event) {
				// Handle adding product to cart
				addToCart(product.name, product.price);
			}
		);

		// Append elements to product card
		productCard.appendChild(image);
		productCard.appendChild(name);
		productCard.appendChild(price);
		productCard.appendChild(addToCartButton);

		// Append product card to container
		productsContainer.appendChild(productCard);
	});
}

// Call the function to generate product cards
generateProductCards(products);
  let cartItems = [];

	// Function to add product to cart
	function addToCart(name, price) {
		// Create cart item object
		const newItem = { name: name, price: price };

		// Add item to cartItems array
		cartItems.push(newItem);

		// Update cart display
		displayCart();
	}

	// Function to display cart items
	function displayCart() {
		const cartList =
			document.getElementById("cart-items");
		cartList.innerHTML = ""; // Clear previous content

		// Loop through cartItems and create list items
		cartItems.forEach((item) => {
			const cartItem =
				document.createElement("li");
			cartItem.textContent = `${item.name} - ${item.price}`;
			cartList.appendChild(cartItem);
		});
	}

	// Example of adding product cards dynamically (replace with your actual product data)
	const products = [
		{
			name: "Product 1",
			price: "$10",
			imageUrl:
				"images/photo_6197110846161795537_y.jpg",
		},
		{
			name: "Product 2",
			price: "$15",
			imageUrl:
				"images/photo_6197110846161795538_x.jpg",
		},
		{
			name: "Product 3",
			price: "$20",
			imageUrl:
				"images/photo_6197110846161795539_y.jpg",
		},
		{
			name: "Product 4",
			price: "$25",
			imageUrl:
				"images/photo_6197110846161795540_y.jpg",
		},
		{
			name: "Product 5",
			price: "$30",
			imageUrl:
				"images/photo_6197110846161795541_x.jpg",
		},
		{
			name: "Product 6",
			price: "$35",
			imageUrl:
				"images/photo_6197110846161795542_y (1).jpg",
		},
		{
			name: "Product 7",
			price: "$40",
			imageUrl:
				"images/photo_6197110846161795543_x (2).jpg",
		},
		{
			name: "Product 8",
			price: "$45",
			imageUrl:
				"images/photo_6197110846161795619_m.jpg",
		},
		{
			name: "Product 9",
			price: "$50",
			imageUrl:
				"images/photo_6197110846161795618_x.jpg",
		},
		{
			name: "Product 10",
			price: "$55",
			imageUrl:
				"images/photo_6197110846161795616_y.jpg",
		},
	];

	// Add more products as needed

	// Function to generate product cards
	function generateProductCards(products) {
		const productsContainer =
			document.querySelector(".products");

		products.forEach((product) => {
			const productCard =
				document.createElement("div");
			productCard.classList.add("product-card");

			const image = document.createElement("img");
			image.src = product.imageUrl;
			image.alt = product.name;

			const name = document.createElement("h2");
			name.textContent = product.name;

			const price = document.createElement("p");
			price.textContent = product.price;

			const addToCartButton =
				document.createElement("button");
			addToCartButton.textContent = "Add to Cart";

			// Add click event listener to the button
			addToCartButton.addEventListener(
				"click",
				function (event) {
					// Handle adding product to cart
					addToCart(product.name, product.price);
				}
			);

			// Append elements to product card
			productCard.appendChild(image);
			productCard.appendChild(name);
			productCard.appendChild(price);
			productCard.appendChild(addToCartButton);

			// Append product card to container
			productsContainer.appendChild(productCard);
		});
	}

	// Call the function to generate product cards
	generateProductCards(products);