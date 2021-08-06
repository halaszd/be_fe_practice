// Global

// Functions

async function postToClick(e) {
	e.preventDefault();
	// a submit azért kellett, hogy a gombnyomásra a form értékeit érhessük el
	const inputs = e.target.querySelectorAll(".input"), values = {};

	const userFile = document.getElementById("userFile");

	for(const input of inputs){
		// input.name-et jelent
		values[`${input.name}`] = input.value;
	}

	const fd = new FormData();
	fd.append("userJson", JSON.stringify(values));
	fd.append('userFile', userFile.files[0], userFile.files[0].name)
	console.log(fd)

	await fetch('http://localhost:3000/',
		{
		method: 'Post',
		// headers: {
		// 	'Content-Type': 'multipart/form-data'
		// },
		body: fd
	}).then(response => response.text()).then(data => console.log(data));
}

// Main function
function _load() {
	const rootElement = document.getElementById("root");

	rootElement.insertAdjacentHTML("beforeend", 
	`
		<form> 
			<input name="firstname" class="input" placeholder="First Name" />
			<input name="lastname" class="input" placeholder="Last Name" />
			<input name="email" class="input" type="email" placeholder="Email" />
			<textarea name="message" class="input" placeholder="message" > </textarea>
			<div>File: <input multiple type="file" id="userFile" /></div>
			<button type="submit" id="send">send</button>
		</form>
	`)

	// document.getElementById("send").addEventListener("click", postToClick)
	// console.log("A frontend betöltődött")
	window.addEventListener("submit", postToClick)
};


window.addEventListener("load", _load);