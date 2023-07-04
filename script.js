// Pig Latin translation program
// Author: Svitlana Slonska
// Date: 07.03.2023

// Function to translate text to Pig Latin
function translateToPigLatin(text) {
    // Check if the input is empty or consists of only whitespace
    if (!text || text.trim().length === 0) {
      console.log("Input cannot be translated.");
      return;
    }
  
    // Split the input text into individual words
    const words = text.split(" ");
  
    // Initialize the Pig Latin translation
    let pigLatinText = "";
  
    // Iterate over each word in the input
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
  
      // Check if the word is a single letter
      if (word.length === 1) {
        console.log("Input cannot be translated.");
        return;
      }
  
      // Check if the word begins with a vowel
      if (isVowel(word[0])) {
        // If it does, append "way" to the word
        pigLatinText += word + "way";
      }
      // Check if the word begins with one consonant
      else if (isConsonant(word[0])) {
        // Check if the word begins with two consonants
        if (isConsonant(word[1])) {
          // If it does, move the first two consonants to the end and append "ay"
          pigLatinText += word.slice(2) + word.slice(0, 2) + "ay";
        } else {
          // If it begins with one consonant, move the consonant to the end and append "ay"
          pigLatinText += word.slice(1) + word[0] + "ay";
        }
      }
      // If the word doesn't match any rules, leave it unchanged
      else {
        pigLatinText += word;
      }
  
      // Add a space after each translated word
      if (i !== words.length - 1) {
        pigLatinText += " ";
      }
    }
  
    // Print the final Pig Latin translation
    console.log(pigLatinText);
  }
  
  // Function to check if a character is a vowel
  function isVowel(char) {
    return "aeiou".includes(char);
  }
  
  // Function to check if a character is a consonant
  function isConsonant(char) {
    return !isVowel(char);
  }
  
  // Example usage
  const input = prompt("Enter a sentence:");
  translateToPigLatin(input);