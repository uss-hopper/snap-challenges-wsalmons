/*
var array = [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":3,"id":30,"title":"a quo magni similique perferendis","body":"alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"},{"userId":4,"id":31,"title":"ullam ut quidem id aut vel consequuntur","body":"debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"},{"userId":5,"id":45,"title":"ut numquam possimus omnis eius suscipit laudantium iure","body":"est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem"},{"userId":5,"id":46,"title":"aut quo modi neque nostrum ducimus","body":"voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"}];


const result = array.filter(newArray => newArray.userId != 5);

console.log(result);
*/

const str = ("Fate protects fools, little children and ships named Enterprise. You're going to be an interesting companion, Mr. Data. Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. Why don't we just give everybody a promotion and call it a night - 'Commander'? Well, that's certainly good to know. Mr. Worf, you do remember how to fire phasers? A lot of things can change in twelve years, Admiral.");

function filterArray() {
	array = str.split(" ");
	return `array`.toLowerCase() != 'f';
}

console.log(filterArray());