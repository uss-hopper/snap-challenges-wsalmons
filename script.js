/*
var array = [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":3,"id":30,"title":"a quo magni similique perferendis","body":"alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"},{"userId":4,"id":31,"title":"ullam ut quidem id aut vel consequuntur","body":"debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"},{"userId":5,"id":45,"title":"ut numquam possimus omnis eius suscipit laudantium iure","body":"est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem"},{"userId":5,"id":46,"title":"aut quo modi neque nostrum ducimus","body":"voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"}];


const result = array.filter(newArray => newArray.userId != 5);

console.log(result);

let str = ("Fate protects fools, little children and ships named Enterprise. You're going to be an interesting companion, Mr. Data. Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. Why don't we just give everybody a promotion and call it a night - 'Commander'? Well, that's certainly good to know. Mr. Worf, you do remember how to fire phasers? A lot of things can change in twelve years, Admiral.");

const array = str.toLowerCase().split(" ");

newArray = array.filter(index => !index.startsWith("f"));

console.log(newArray);


var posts = [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},{"userId":1,"id":4,"title":"eum et est occaecati","body":"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"},{"userId":1,"id":5,"title":"nesciunt quas odio","body":"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"}];

function loadPosts() {
	renderedPosts = posts.map((index) => {
		return `
		<div class="card">
			<div class="card-body">
			<h5 class="card-title">${index.title}</h5>
			<p class="card-text">${index.body}</p>
		</div>
		`
	});

	const target = document.getElementById('target');
	target.innerHTML = renderedPosts.toString();
}

*/

var posts = [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},{"userId":1,"id":4,"title":"eum et est occaecati","body":"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"},{"userId":1,"id":5,"title":"nesciunt quas odio","body":"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"}];

function loadPosts() {
	renderedPosts = posts.map((index) => {
		return `
			<div class="card">
				<div class="card-header">{$index.title}</div>
				<div class="card-body">
					<blockquote class="blockquote mb-0">
						<p></p>
					</blockquote>
				</div>
			</div>`
	})
}

const target = document.getElementById('target');
target.innerHTML = renderedPosts.toString();