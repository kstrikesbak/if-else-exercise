function isItLong(str) {
  if (str.length>20) {
    return "That's a long string";
  }
}

function isItMedium(str) {
  if (str.length >= 10 && str.length <= 20) {
    return "That's a regular sized string!";
  }

}

function isItShort(str) {
  if (str.length < 10) {
    return "That's a small string!";
  }

}

function howLongIsMyString(str) {
  if (str.length > 20) {
    return "That's a long string";
  }
  else if (str.length >= 10 && str.length <= 20) {
    return "That's a regular sized string!";
  }
  else if (str.length < 10) {
    return "That's a small string!"; 
  }

}

function instructorHeight(str) {
  if (str === "Colin" || "colin") {
    return "62";
  }
  else if (str == "Mesuara") {
    return "67";
  }
  else {
    return "I don't know that instructor!"
  }
}

console.log(instructorHeight("Fred"))


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}