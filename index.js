const hearingTime = 30;

// first iteration
const court1 = (yourName, numberOfJudges, otherNamesArray) => {
	const allNames = [...otherNamesArray.split(" "), yourName];
	const sortedNames = allNames.sort((a, b) => a[0].localeCompare(b[0]));
	const yourOrder = sortedNames.indexOf(yourName);
	return Math.floor(yourOrder / numberOfJudges) * hearingTime + hearingTime;
};

console.time('mark')
court1("Jules", 3, "Adam Betty Frank Mike");
court1("Zane", 1, "Mark Hank Ana Vivian");
court1("Andes", 2, "Mark Betty Frank Mike");
court1("Wrangler", 4, "Mark Hank Frank Vivian");
court1("Jules", 2, "Adam Betty Frank Mike");
court1("Zane", 3, "Mark Hank Ana Vivian");
court1("Andes", 4, "Mark Betty Frank Mike");
court1("Wrangler", 1, "Mark Hank Frank Vivian");
console.timeEnd('mark')

// final iteration
const court2 = (yourName, numberOfJudges, otherNamesArray) => {
	const allNames = otherNamesArray.split(" ");
	allNames.push(yourName);
	const sortedNames = allNames.sort();
	const yourOrder = sortedNames.indexOf(yourName);
	return Math.floor(yourOrder / numberOfJudges) * hearingTime + hearingTime;
};

console.time('mark2')
court2("Jules", 3, "Adam Betty Frank Mike");
court2("Zane", 1, "Mark Hank Ana Vivian");
court2("Andes", 2, "Mark Betty Frank Mike");
court2("Wrangler", 4, "Mark Hank Frank Vivian");
court2("Jules", 2, "Adam Betty Frank Mike");
court2("Zane", 3, "Mark Hank Ana Vivian");
court2("Andes", 4, "Mark Betty Frank Mike");
court2("Wrangler", 1, "Mark Hank Frank Vivian");
console.timeEnd('mark2')

// I played with different techniques but the thing is, by now browser's engine is so optimized that doing any additional movements on small datasets like this one (array of 5) is likely to increase time instead of saving it. And that's what I mainly saw. The only major speed increase between v1 and v2 is removing concatenation and pushing `yourName` instead which in this exact case doesn't have any downsides

// depending on the real task, it might be useful to get the first letter of `yourName` and in case it's "A" do a quick check if there are other "A"s in `otherNamesArray` - and if not, proceed to the answer thus skipping sorting (which is the most "heavy" operation here), but I'm not sure if it's worth it generally. Definitely not in our example and data samples, I tried. I would assume that you guys for search have a multi-layer search/sort based on every next character or something like that with popular exceptions that skip it.