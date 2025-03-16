function createTable() {
    //Write your code here

	let rn = parseInt(prompt("Input number of rows"));
    let cn = parseInt(prompt("Input number of columns"));
	
	if(rn === NaN || cn === NaN || rn <=0 || cn <= 0){
		// console.log(rn, cn)
		alert("Please enter valid positive numbers for rows and columns.")
		return
	}

	let table = document.getElementById("myTable");
    table.innerHTML = ""; // Clear previous table
	
	for(let i=0; i<rn; i++){
		let row = table.insertRow();
		for(let j=0; j<cn; j++){
			let cell = row.insertCell();
			cell.textContent = `Row-${i} Column-${j}`;
		}
	}
  
}