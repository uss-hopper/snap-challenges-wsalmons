function loadPosts() {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => {
			console.log(response)
			return response.json();
		})
		.then((myJson) => {
			const cards = myJson.map(index => {
				return `
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">${index.title}</h5>
    <p class="card-text">${index.body}</p>
  </div>
  </div>
    `
			});
			let html = document.getElementById("target")
			html.innerHTML = cards.join("\r\n")
		});
}
