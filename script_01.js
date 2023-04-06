/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}

/*** Funktion mit Array als Parameter */
// mögliche Tests:

// output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));function getSentence(arr) {

    // const GAP = " ";
    // const PUNCT = ".";
    // let str = "";
    
    // for (let i = 0; i < arr.length; i++) {
    // if (i == arr.length-1) {
    // str += arr[i] + PUNCT;
    
    // } else {
    
    // str += arr[i] + GAP; 
    
    //  }
    
    // }
    
    // return str;
    
    // }

    function getSentence(words, type) {
        let sentence = words.join(" ");
        switch (type) {
          case "S":
            sentence += ".";
            break;
          case "Q":
            sentence += "?";
            break;
          case "E":
            sentence += "!";
            break;
          default:
            break;
        }
        return sentence;
      }
    
      
    output(getSentence(["Bist","du","Max"],"Q"));
    output(getSentence(["Ich","bin","Max"],"S"));
    output(getSentence(["Ich","bin"],"E"));
    output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));
    
    
    // Modul: Ausgabe in Konsole : Test
    // output("hi"); 
    function output(inputStr) {
        console.log(inputStr);
    }
    