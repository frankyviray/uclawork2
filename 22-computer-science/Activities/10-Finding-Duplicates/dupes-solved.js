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


// benchmark two independent loops
console.time("dupe2");

// we'll use an object to map the values to their counts
var map = {};

// so we only need to loop over the main array once
for (let i = 0; i < array.length; i++) {
	let value = array[i];

	// if the current value doesn't exist in our object, create it for the first time
	if (map[value] === undefined) {
		map[value] = 1;
	}
	// otherwise update it to keep track of how many times it appears
	else {
		map[value]++;
	}
}

// we'll still need to loop over the key/value pairs again, looking for the winner, but since this loop takes place OUTSIDE of the first loop, the time complexity is drastically reduced
mostValue = array[0];
mostCount = 0;

for (let key in map) {
	// check if current key/value is greater, and if so, update the winner info
	if (map[key] >= mostCount) {
		mostValue = key;
		mostCount = map[key];
	}
}

// done
console.log(`${mostValue} appears ${mostCount} times`);

console.timeEnd("dupe2");