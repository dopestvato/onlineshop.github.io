
function purchase(form){
				firstName = document.getElementById("firstName").value;
				lastName = document.getElementById("lastName").value;
				quantity = document.getElementById("quantity").value;
				email = document.getElementById("email").value;
				date = document.getElementById("date").value;
				street = document.getElementById("street").value;
				city = document.getElementById("city").value;
				postal = document.getElementById("postal").value;
				pay= document.getElementById("pay").value;
				shoes = quantity + " pairs of:";

				for (i = 0; i < form.Shoes.length; i++)
					if (form.Shoes[i].checked){
						shoes = shoes + "\n" + form.Shoes[i].value
					}

				confirm("Purchasing Form \n\nHi Mr./Mrs. " + firstName + " " + lastName +", \n" + "<" + email + ">" + 
						"\n\nWe would want to inform you that you purchased the following item/s:\n\nShoe Model\n" + shoes + 
						"\n\nDelivery Date is on " + date + "\n\nPurchased Item/s will be delivered at " + street + ", " + city + 
						" (" + postal + ")\n\nPayment Method: " + pay +"\n\nPlease Press OK to confirm.");
				alert("Thank you for Shopping!\nWe are Hoping for your next purchase.");
			}