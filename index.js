// Dvurechenskij Yevhenii for "Become A Developer 2023" (winter course)

function textAnalyst(text){

    // initialization of variables
    let wordArray = [];
    let charArrayNotFiltered = [];
    let charArray = [];
    let char;
    let firstLetter;
    let letterCount = 0;

    // transform the text to array and make all letters lowercase
    text = text.toLowerCase();
    let array = text.split(" ");

    for (let i = 0; i < array.length; i++) {

        //transform words array to letter arrays
        wordArray = array[i].split("");

        // search logic for the first unique letter at word
        for (let j = 0; j < wordArray.length+1; j++) {
            if(j <= wordArray.length-1){
                if(j === 0){
                    firstLetter = wordArray[0];
                }
                if(firstLetter === wordArray[j+1]){
                    letterCount++;
                    j = letterCount;
                    firstLetter = wordArray[letterCount];
                }
            }
            else{
                char = firstLetter;
            }
        }
        charArrayNotFiltered.push(char);
    }

    // filter
    switch (true) {
        case charArrayNotFiltered.includes("-"):
            charArrayNotFiltered = charArrayNotFiltered.filter(char => char !== "-");
        case charArrayNotFiltered.includes("\""):
            charArrayNotFiltered = charArrayNotFiltered.filter(char => char !== "\"");
        case charArrayNotFiltered.includes("("):
            charArrayNotFiltered = charArrayNotFiltered.filter(char => char !== "(");
        case charArrayNotFiltered.includes(")"):
            charArrayNotFiltered = charArrayNotFiltered.filter(char => char !== ")");
        case charArrayNotFiltered.includes(""):
            charArrayNotFiltered = charArrayNotFiltered.filter(char => char !== "");
        case charArrayNotFiltered.includes("+"):
            charArrayNotFiltered = charArrayNotFiltered.filter(char => char !== "+");
        case charArrayNotFiltered.includes("/"):
            charArrayNotFiltered = charArrayNotFiltered.filter(char => char !== "/");
        case charArrayNotFiltered.includes("*"):
            charArrayNotFiltered = charArrayNotFiltered.filter(char => char !== "*");
        case charArrayNotFiltered.includes("="):
            charArrayNotFiltered = charArrayNotFiltered.filter(char => char !== "=");
        default:
            charArray = charArrayNotFiltered;
            break;
    }


    // search logic for the first unique letter at array of letter
    for (let l = 0; l < charArray.length+1; l++) {
        if(l <= charArray.length-1){
            if(l === 0){
                firstLetter = charArray[0];
            }
            if(firstLetter === charArray[l+1]){
                letterCount++;
                l = letterCount;
                firstLetter = charArray[letterCount];
            }
        }
        else{
            char = firstLetter;
        }
    }

    // return result
    return console.log(char);
}

//call the function
textAnalyst("C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup");