//quotes
let quotes = ["Living is the art of getting used to what we didn't expect", "Never give up because great things take time", "Do good for others, it will come back in unexpected ways"]
//creating an index variable to store the index number 
//multiplying math.random() by 3 and rounding down to the nearest integer with math.floor to get an index from 0-2 to get any quote from the quotes array
let index = Math.floor(Math.random() * 3)
//creating a quote variable to store the array and random index number
let quote = quotes[index]
//displaying a random quote out of the three quotes to the console
console.log(quote)
