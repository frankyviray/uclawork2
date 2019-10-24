// make array of random numbers
var arraySize = 5000;
var array = [];

for (let i = 0; i < arraySize; i++) {
	array.push(Math.round(Math.random() * arraySize));
}

// benchmark nested for loop
console.time("dupe1");

// keep track of the current "winner" in terms of the actual value and the number of times it appears
var mostValue = array[0];
var mostCount = 0;

for (let i = 0; i < array.length; i++) {
	// start inner count
	let count = 0;

	for (let j = 0; j < array.length; j++) {
		// every time the inner loop matches the outer loop, increase the count
		if (array[i] === array[j]) {
			count++;
		}
	}

	// check to see if the inner count is greater than the current "winner." if so, replace the winner with the new value AND count
	if (count >= mostCount) {
		mostCount = count;
		mostValue = array[i];
	}
}

// done
console.log(`${mostValue} appears ${mostCount} times`);

console.timeEnd("dupe1");


console.time("dupe2");

// the above algorithm isn't very efficient, because we have a nested for loop, which is never ideal. how could we solve this same problem without putting a for loop inside another for loop? if done correctly, we should be able to significantly reduce the time complexity.

// hint: there's nothing wrong with having two loops, as long as one isn't INSIDE the other

// second hint: maybe an object could help us track the values and their totals

console.timeEnd("dupe2");