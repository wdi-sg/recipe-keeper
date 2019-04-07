function setUpEvents() {

	let i=2;
	function addField() {
		let fieldset = document.getElementById("container");
		let linebreak = document.createElement("br");

		fieldset.appendChild(document.createTextNode("Ingredient " + (i) + ": \n"));

		let ingredientInput = document.createElement("input");
		ingredientInput.type = "text";
		ingredientInput.name = "ingredient"+i;
		ingredientInput.placeholder ="water";
		ingredientInput.style = "white-space: pre;";

		let qtyInput = document.createElement("input");
		qtyInput.type = "text";
		qtyInput.name = "qty"+i;
		qtyInput.placeholder ="10 ml";
		qtyInput.style = "white-space: pre;";

		
		fieldset.appendChild(ingredientInput);
		fieldset.appendChild(document.createTextNode(" Quantity: "));
		fieldset.appendChild(qtyInput);
		fieldset.appendChild(linebreak);
		i++;
	}
	let button = document.getElementById("button");
	button.addEventListener("click", addField);

}

window.onload = function() {
	setUpEvents();	
};
