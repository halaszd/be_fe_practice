// Global

// Functions

async function postToClick(e) {
	await fetch('http://localhost:3000/',
		{
		method: 'Post',
		headers: {
			'Content-Type': 'html/text'
		},
		body: "Hello" // JSON.stringify( { title: [newTask] } )
	}).then(response => response.text()).then(data => console.log(data));
}

// Main function
function _load() {
	const rootElement = document.getElementById("root");

	rootElement.insertAdjacentHTML("beforeend", `
	<button id="send">HELLO</button>
	`)

	document.getElementById("send").addEventListener("click", postToClick)
	console.log("A frontend betöltődött")
};


window.addEventListener("load", _load);