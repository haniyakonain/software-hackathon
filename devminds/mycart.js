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
		imageUrl: "images/1.jpg",
	},
	{
		name: "Product 2",
		price: "$15",
		imageUrl: "images/2.jpg",
	},
	{
		name: "Product 3",
		price: "$20",
		imageUrl: "images/3.jpg",
	},
	{
		name: "Product 4",
		price: "$25",
		imageUrl: "images/4.jpg",
	},
	{
		name: "Product 5",
		price: "$30",
		imageUrl: "images/5.jpg",
	},
	{
		name: "Product 6",
		price: "$35",
		imageUrl: "images/6.jpg",
	},
	{
		name: "Product 7",
		price: "$40",
		imageUrl: "images/7.jpg",
	},
	{
		name: "Product 8",
		price: "$45",
		imageUrl: "images/8.jpg",
	},
	{
		name: "Product 9",
		price: "$50",
		imageUrl: "images/9.jpg",
	},
	{
		name: "Product 10",
		price: "$55",
		imageUrl: "images/10.jpg",
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
