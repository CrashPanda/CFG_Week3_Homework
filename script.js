function greeting() { // Welcome message method which also asks the user to input name
  const name = prompt("What's your name?");
  alert(`Hi ${name}, Welcome to the traveler's journal, by Samantha Williams.
  
You find a dusty book wedged underneath a loose floorboard in the bedroom that you're renovating.`);
}


greeting(); // Welcome message


let read = confirm("Would you like to read it?"); // Confirm method asking the user if they want to read the journal


if (read) { // Parent if else statement. If 'read' is true the loop is initiated
  
  const journalEntries = [ // An array declaring journal entries 
    "June 16, 2023: Today, Luke accompanied me to the Whispering Woods. It murmurs secrets in a language only I seem to be able to understand. He must think I'm mad.",
    "June 17, 2023: I've decided to go alone from now on. Time appears suspended on its precipice, reality blurred, the air crackles with a whisper of magic.",
    "June 18, 2023: After weeks of teetering on the wood's edge, today I've decided to succumb to curiosity explore its depths. An elusive shimmer has been beckoning.",
    "June 19, 2023: Yesterday's venture is hazy. My memories seem to be clouded by a veil. Yet today I feel an inexplicable pull to return.",
    "June 20, 2023: Its allure is strong. I keep returning. Fragments of moments resurface, like whispers of a forgotten melody.",
    "June 21, 2023: My memories are still delicate, like threads woven into a frayed and tattered tapestry. Yet, somehow, with each return, stronger strands are spun.",
    "June 22, 2023: I have fantastical recollections. Encounters with forgotten reflections and conversations with ancient secrets. It truly is a rich tapestry of lost wonders.",
    "June 23, 2023: Embarking deeper with each visit. Reality shaky. Vague notions. I am losing grasp of my thoughts, of myself...",
    "June 24, 2023: Immersing, converging, unfurling. I am boundless."
  ];

  let currentEntry = 0;
  
  let continueReading = true;

  while (continueReading) {  // Child loop for journal entries
    const journalEntry = journalEntries[currentEntry]; // Retrieve the current entry
    alert(journalEntry); // Alert that displays current entry
    if (currentEntry === journalEntries.length - 1) { // Check if it's the last entry
      const restart = confirm("That was the last entry. Do you want to start again from the beginning?");
      if (restart) {
        currentEntry = 0; // Reset currentEntry to 0 to start from the beginning
      } else {
        alert("Fascinated and in awe of what you've discovered. You're glad you took some time out to read it.");
        continueReading = false; // Set continueReading to false to stop further reading
      }
    } else {
      continueReading = confirm("Would you like to continue reading the journal?"); // Asks the user if they want to continue
      currentEntry++; // Move to the next entry
      if (!continueReading) { // Nested condition that breaks if user doesn't want to continue
        alert("Interesting find, But you glimpse at your watch as you close the book. You've wasted enough time. You need to get back to work!");
        break;
      }
    }
  }
} else {
  alert("You leave the book where you found it.");
}
