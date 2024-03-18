function firstChar(text) {
	if(text.length == 0){
		return ""
	}
	for(let i of text){
		if(i != ' '){
			return i
		}
	}
	return ""
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
