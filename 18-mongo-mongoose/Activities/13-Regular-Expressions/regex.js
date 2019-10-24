// find all instances of apple. the g flag means do a global search.
var test1 = "i like apples, but not apple pie".match(/apple/g);
console.log(test1);

// find all instances of ONLY apple. \b denotes a word ending, thus eliminating plural apples.
var test2 = "i like apples, but not apple pie".match(/apple\b/g);
console.log(test2);

// find all instances of apples OR bananas. the | character means or.
var test3 = "i like apples and bananas".match(/apples|bananas/g);
console.log(test3);

// find all strings where there is AT LEAST ONE character in between apple and banana. the dot means any character, and + means at least one.
var test4 = "i like apples and oranges and bananas".match(/apple.+banana/g);
console.log(test4);

// find apple.com. the dot is a regex character, so we need to escape it when literally looking for a dot.
var test5 = "my favorite website is apple.com, not to be confused with apple_com".match(/apple\.com/g);
console.log(test5);

// https://regex101.com is a useful website for quickly testing out regular expressions. use it to solve the following problems:

// 1. how could we verify that a string is an e-mail address? there are many regex examples of this online, but before you consult google, think about the different pieces that make up an e-mail.

// 2. how could we ensure that a username is AT LEAST five characters long and ONLY includes lowercase letters, numbers, and underscores? you might need some help from google on this one.