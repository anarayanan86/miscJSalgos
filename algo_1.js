var numbers = [];
for (i = 1; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		numbers.push(i);
	}
}
var total = 0;
for (j = 0; j < numbers.length; j++) {
	total += numbers[j];
}
console.log(total)
