function toFreud(myString) {
    return !myString
        ? "" // return an empty string if string is empty or no argument
        : myString
            .split(" ") // split string into words
            .map((word) => "sex") // replace each word with `"sex"`
            .join(" "); // put replaced words together
}