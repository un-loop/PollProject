# Polling App: Part 3

## Application Success

Great job! Professor Smith was able to get poll results for over 40 technologies!

## Requirements

The ability to add new technologies to the poll worked so well, that Professor Smith was able to add tons of new technologies to the poll!
However, she let us know that this has caused another problem. It is difficult for her to find technologies in the list. She wants to continue
using the app for the next conference, but really needs to find a solution for quickly finding technologies in the poll.

## Implementation

We think that two solutions should handle this nicely, and Professor Smith agreed. First, the technology results should be sorted. Professor Smith said that
she doesn't care about capitalization and she wants all related technologies to be shown together. So, anything starting with "J" should show together, regardless of 
case. This, then, should be a case-insensitive sort. 

We also suggested adding a filter, and she though this was a great idea. There should be a filter toggle (can be a button) that will initiate a "filter mode". While
filtering, any text entered into the input box will serve as a live filter on the technology list. Also, all other functionality (add, delete, increment, decrement) should
still function while the filter is active. Since she doesn't care about casing, the filter should be case-insensitive as well. There should be a "clear" button that shows when the filter is active that will turn filtering off.

## Notes

Frequently, when we have tables of data, we need to take certain steps in presenting that data to a user so that the data is easy to read and understand. Consider for instance, the follow:

| Name      | Count |
| --------  | ----- |
| JQuery    |     5 |
| React     |     5 |
| DOM       |     8 |
| Angular   |     3 |
| NodeJs    |    12 |
| HTML5     |     2 |
| Angular 2 |     3 |

It is note immediately clear when looking at the list that Angular and Angular 2 are listed out as separate items. We have to read every item in the list to determine this. Now, imagine that the list is 100's of items long! Not only are we sure to make mistakes, such a table is cumbersome to use. Two methods of addressing being able to quickly find items in a list are *sorting* and *searching*. A search typical invovles having one or more input controls to specify a search to complete, and some method of display the results of the search, usually in a table. Here, you have been asked to write a *filter*. A filter is simply a search that is performed, "in-place". That is to say, the search is applied on top of an already shown set of data to limit the data shown.

### Sorting

At some point in frontend React code, you are making a call to the database to retrieve a list of technologies. You make some call (via axios), and retrieve a responsed from the server, which has a "data" property containing the deserialized data that the server sent in the body of the response. That is, axios read the JSON in the body of the response, parsed it, and turned it into javascript objects for your convenience, putting this data onto the "data" property. Since the call to the polling app's Rest API returns an array, axios will supply a javascript array of objects.

This is good luck. Javascript has supplied a [sort method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) on the Array prototype that is exactly what we need. Take a look at the documentation. There are a couple of items of note. Firstly, sort() performs an in-place sorting of the array. Let's look at the following example:
```
var numArr = [3,1,2];
numArr.sort();
console.log(numArr);
```
When we run this code, we will see the value `[1, 2, 3]` logged to the console. What this tells us is that numArr was changed from the call to `sort()`. In addition, `sort()` will return the array, so that the sort method can conveniently be used in an expression. To continue the example:

```
var numArr = [3,1,2];
console.log(numArr.sort());
```

will cause `[1, 2, 3]` to be logged to the console.

The second item of note is how the sort is performed. The sort method expects to be given a compare function. A compare function is a simple function `function compare(a,b) { // some code }` that will return whether "a" is less than, greater than, or equal to "b". It is only by using this compare function that `sort()` is able to place the items in the array in order.  "But," you object, "I don't have to give sort a compare function! It works fine without one!" That is half true. You do not have to give a compare function to sort, but that doesn't mean it doesn't have one. If a compare function is not supplied, sort will use a default function.

`sort()` is defined on the array prototype and is written in the most generic way possible to be useful to all kinds of arrays. I might have an array of numbers, an array of strings, an array of objects. `sort()`, with a compare function, can handle all of these. Since this is Javascript, I can even have a array of mixed types, as in `let mixedArr = [3, "2", {one: true}]`. The developers who originally wrote the `sort()` function recognized that it would be a real pain if every time you called `sort()` you had to tell how to compare every type of array. They also recognized that it would be impossible to know beforehand how to sort every type. After all, it may be sorting some very special objects that only the end developer knows how to sort or that may be dependent on your program state. So, they struck a compromise. They developed a compare function that was "good enough" and that would handle the most cases.

The compromised they arrived at is this: Take the two items in the array being compared and turn them into strings, with 1 becomming "1", objects becomming "Object" and arrays becomming "Array". Now, take those strings and return which is greater, as a string. That means "11" comes before "5", since comparing strings is done one character at a time (the first character of "11", "1", comes before "5").

In our case, we are comparing technology objects that have a name and a count. We want to write a comapre function that will return whether the first technology's name is less than, equal to, or greater than, the second technology's name (by returning -1, 0, or 1). [The documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) for `sort()` has great examples of sorting on object. Remember, your sort needs to be caase in-sensisitive. Think about how you can massage your input so that you can compare the names without respect to their case.

###Filtering
Text to follow...

[Let us know](https://github.com/un-loop/PollProject/blob/master/PART4.md) when you are done.

