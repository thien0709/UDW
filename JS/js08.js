let button = document.querySelector("button");
button.addEventListener("click", function(){
    let string = document.querySelector("#chuoi").value;
    let chars = document.querySelector("#characters");
    let words = document.querySelector("#words");
    chars.innerHTML = "Characters: " + string.length;
    let size = string.split(/\s+/).filter(function(word) {
        return word.length > 0;
    }).length;
    words.innerHTML = "Words: " + size;
    character(string);
});

function character(string){
    let output = document.querySelector("#output");
    let charCount = {};
    
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char !== " ") {
            if (!charCount[char]) {
                charCount[char] = 1;
            } else {
                charCount[char]++;
            }
        }
    }

    for (let char in charCount) {
        output.innerHTML += "Character '" + char + "': " + charCount[char] + "<br>";
    }
}
