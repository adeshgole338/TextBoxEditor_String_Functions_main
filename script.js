		let userText = document.getElementById("userText");
		let word = document.getElementById('words');
		word.innerHTML='0'
		let character = document.getElementById('character');
		character.innerHTML='0'

		function fetchData() {
			let arr = userText.value.split(' ').length;
			word.innerHTML=arr;
			let strlngth = userText.value.length;
			character.innerHTML=strlngth
			
			let text = userText.value;
			let wordArray = text.match(/\b\w+\b/g);
			let charCount = text.length;

			words.innerHTML = wordArray ? wordArray.length : 0;
			characters.innerHTML = charCount;
		}
		function upperCase(){
			userText.value = userText.value.toUpperCase();
		}
		function lowerCase(){
			userText.value = userText.value.toLowerCase();
		}
		function reverseText() {
		    let text = userText.value;
		    let reversedText = text.split('').reverse().join('');
		    userText.value = reversedText;
		    fetchData(); // Call fetchData to update word and character counts
		}
		function clearText() {
            userText.value = '';
            fetchData(); // Call fetchData to update word and character counts
        }
        function capitalizeWords()
        {
		    userText.value = userText.value.replace(/\b\w/g, (char) => char.toUpperCase());
		    fetchData();
		}

		function removeWhitespace()
		{
		    userText.value = userText.value.replace(/\s/g, '');
		    fetchData();
		}
	