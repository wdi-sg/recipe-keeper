function setUpEvents() {

	let arrayOfIngredientDivs = document.querySelectorAll("#container div");
	let numberOfIngredients = arrayOfIngredientDivs.length;
	let arrayOfIngredientButtons = document.querySelectorAll("#removebutton");
	for (i=0; i<numberOfIngredients; i++) {
		arrayOfIngredientButtons[i].id = i;
		arrayOfIngredientButtons[i].addEventListener("click", removeField);
	}

	function removeField() {		
		buttonId = this.id;
		divToRemove = this.parentNode;
		this.parentNode.parentNode.removeChild(divToRemove);
	}

	let j = numberOfIngredients+1;
	function addField() {
		// let arrayOfIngredientDivs = document.querySelectorAll("#container div");
		let fieldset = document.getElementById("container");
		let div = document.createElement("div");
		
		let p1 = document.createElement("p");
		p1.innerHTML = `Ingredient ${j}: `;
		div.appendChild(p1);

		let ingredientInput = document.createElement("input");
		ingredientInput.type = "text";
		ingredientInput.name = "ingredient"+j;
		ingredientInput.placeholder ="water";
		div.appendChild(ingredientInput);

		let p2 = document.createElement("p");
		p2.innerHTML = "Quantity:";
		div.appendChild(p2);

		let qtyInput = document.createElement("input");
		qtyInput.type = "text";
		qtyInput.name = "qty"+j;
		qtyInput.placeholder ="10 ml";
		div.appendChild(qtyInput);

		let removeButton = document.createElement("button");
		removeButton.id = j-1;
		removeButton.innerHTML = "Remove Ingredient";
		removeButton.addEventListener("click", removeField);
		div.appendChild(removeButton);

		fieldset.appendChild(div);
		j++;
	}
	let button = document.getElementById("button");
	button.addEventListener("click", addField);

}

window.onload = function() {
	setUpEvents();	
};
