function createB1ExamForm() {
  var form = FormApp.create('B1 English Final Examination');
  form.setIsQuiz(true);
  form.setDescription('Instructions: Answer all questions. Write clearly. Use full sentences where needed.\n\nTime limit: 90 minutes\nTotal: 80 points');

  // Basic Information
  form.addTextItem().setTitle('Name:').setRequired(true);
  form.addTextItem().setTitle('Class:').setRequired(true);
  form.addDateItem().setTitle('Date:').setRequired(true);

  // ==========================================
  // SECTION 1: GRAMMAR
  // ==========================================
  form.addPageBreakItem().setTitle('Section 1. Grammar (16 points)');

  form.addSectionHeaderItem().setTitle('A. Perfect Modals (5 points)').setHelpText('Complete each sentence with the best answer.');
  var modalsOptions = ['should’ve', 'would’ve', 'could’ve', 'must’ve', 'might’ve'];
  addMCQ(form, "1. We missed the start of the film. We __________ left home earlier.", modalsOptions, "should’ve", 1);
  addMCQ(form, "2. If you’d asked me, I __________ helped you with the presentation.", modalsOptions, "would’ve", 1);
  addMCQ(form, "3. We had an extra hour before the train, so we __________ stopped for coffee.", modalsOptions, "could’ve", 1);
  addMCQ(form, "4. Their car isn’t outside and the house is dark. They __________ gone out.", modalsOptions, "must’ve", 1);
  addMCQ(form, "5. I’m not sure why Sara didn’t reply. She __________ been asleep.", modalsOptions, "might’ve", 1);

  form.addSectionHeaderItem().setTitle('B. Intentions and Procrastination (4 points)').setHelpText('Complete each sentence with the best phrase.');
  var intentOptions = ['I’ve been meaning to', 'I’d been thinking about it', 'I kept putting it off', 'Finally,'];
  addMCQ(form, "6. Sorry I still haven’t called the dentist. I __________________ make an appointment all week.", intentOptions, "I’ve been meaning to", 1);
  addMCQ(form, "7. Before I moved abroad, I __________________ for months.", intentOptions, "I’d been thinking about it", 1);
  addMCQ(form, "8. The essay was due on Friday, but I __________________ until Thursday night.", intentOptions, "I kept putting it off", 1);
  addMCQ(form, "9. After weeks of hesitation, I __________________ booked the ticket.", intentOptions, "Finally,", 1);

  form.addSectionHeaderItem().setTitle('C. Conditionals (7 points)').setHelpText('Complete the sentences with the correct form of the verb.');
  addShortAnswer(form, "10. If you heat ice, it __________ (melt).", 1);
  addShortAnswer(form, "11. If it rains tomorrow, we __________ (move) the meeting online.", 1);
  addShortAnswer(form, "12. If I had more free time, I __________ (join) the club.", 1);
  addShortAnswer(form, "13. If people __________ (not drink) enough water, they often feel tired.", 1);
  addShortAnswer(form, "14. If she finishes early tonight, she __________ (call) you.", 1);
  addShortAnswer(form, "15. If I were you, I __________ (not wait) until the last minute.", 1);
  addShortAnswer(form, "16. If you press this button, the machine __________ (stop).", 1);

  // ==========================================
  // SECTION 2: VOCABULARY
  // ==========================================
  form.addPageBreakItem().setTitle('Section 2. Vocabulary (24 points)');

  form.addSectionHeaderItem().setTitle('Part 1. Check Spelling (8 points)').setHelpText('Complete the words with the missing letters.');
  addShortAnswer(form, "17. str _ teg _", 1);
  addShortAnswer(form, "18. cult _ re", 1);
  addShortAnswer(form, "19. d _ ta", 1);
  addShortAnswer(form, "20. res _ lt", 1);
  addShortAnswer(form, "21. foc _ s", 1);
  addShortAnswer(form, "22. bud _ et", 1);
  addShortAnswer(form, "23. rel _ able", 1);
  addShortAnswer(form, "24. ins _ ght", 1);

  form.addSectionHeaderItem().setTitle('Part 2. Match the Word with the Synonym (8 points)').setHelpText('Choose the correct synonym.');
  var synOptions = ['proof', 'plan', 'outcome', 'show', 'procedure', 'dependable', 'remarkable', 'study'];
  addMCQ(form, "25. strategy", synOptions, "plan", 1);
  addMCQ(form, "26. result", synOptions, "outcome", 1);
  addMCQ(form, "27. research", synOptions, "study", 1);
  addMCQ(form, "28. process", synOptions, "procedure", 1);
  addMCQ(form, "29. evidence", synOptions, "proof", 1);
  addMCQ(form, "30. reveal", synOptions, "show", 1);
  addMCQ(form, "31. reliable", synOptions, "dependable", 1);
  addMCQ(form, "32. extraordinary", synOptions, "remarkable", 1);

  form.addSectionHeaderItem().setTitle('Part 3. Sentence Completion (8 points)').setHelpText('Use the words in the box. Each word is used once.');
  var vocabOptions = ['performance', 'decision', 'focus', 'require', 'productivity', 'assumption', 'budget', 'sustain'];
  addMCQ(form, "33. Their __________ improved dramatically once they found the right people for the job.", vocabOptions, "performance", 1);
  addMCQ(form, "34. Every important __________ started with getting the right people in the right seats.", vocabOptions, "decision", 1);
  addMCQ(form, "35. Great companies __________ on one thing they could be the best at.", vocabOptions, "focus", 1);
  addMCQ(form, "36. True transformation may __________ time, patience, and the right people.", vocabOptions, "require", 1);
  addMCQ(form, "37. High __________ came from focused people doing the right work.", vocabOptions, "productivity", 1);
  addMCQ(form, "38. The team challenged every __________, including the idea that great companies need bold leaders.", vocabOptions, "assumption", 1);
  addMCQ(form, "39. Great companies allocated __________ to what aligned with their main goal.", vocabOptions, "budget", 1);
  addMCQ(form, "40. The goal was not just great results, but to __________ them for many years.", vocabOptions, "sustain", 1);

  // ==========================================
  // SECTION 3: READING
  // ==========================================
  var readingText = 'Crazy Paella! – Adapted Reading Passage\n\nDaniel and Julia are brother and sister. They are both university students, and they share a house in London. Soon, they will travel to Barcelona as exchange students because they want to improve their Spanish. Their parents, Arthur and Sarah Bell, also speak Spanish, so they sometimes practise together at home. Before the trip, everyone is busy getting ready. Julia feels excited, but she is also nervous about leaving home and travelling to another country. Their father wants to help, so he gives Daniel and Julia some money for the journey. Then the family goes to the airport together. At the airport, Daniel notices that there are many businesspeople around them. After saying goodbye to their parents, Daniel and Julia prepare for their flight to Spain.';
  
  form.addPageBreakItem().setTitle('Section 3. Reading (20 points)').setHelpText(readingText);

  // Note: Points set to 0 because Forms requires integers. You can adjust this manually in the Form settings later.
  addMCQ(form, "41. Daniel and Julia live in ___.", ["a. the same house in London", "b. different houses in London", "c. the same house in Barcelona", "d. different houses in Barcelona"], "a. the same house in London", 0);
  addMCQ(form, "42. Daniel and Julia are going to Barcelona because they want to ___.", ["a. find a new house", "b. improve their Spanish", "c. meet Daniel’s friends", "d. start a business"], "b. improve their Spanish", 0);
  addMCQ(form, "43. Daniel and Julia’s parents ___.", ["a. don’t speak Spanish", "b. live in Barcelona", "c. speak Spanish and practise with them", "d. only speak English"], "c. speak Spanish and practise with them", 0);
  addMCQ(form, "44. What does their father give them before the trip?", ["a. a science fiction book", "b. a car", "c. money", "d. a map"], "c. money", 0);
  addMCQ(form, "45. During the trip to the airport, Julia feels ___.", ["a. nervous", "b. angry", "c. bored", "d. frightened"], "a. nervous", 0);
  addMCQ(form, "46. At the airport, there are a lot of ___.", ["a. children", "b. businesspeople", "c. Daniel’s friends", "d. students from London"], "b. businesspeople", 0);
  addMCQ(form, "47. Julia is nervous mainly because she is ___.", ["a. hungry", "b. late for the plane", "c. travelling to another country", "d. angry with Daniel"], "c. travelling to another country", 0);
  addMCQ(form, "48. At the end of the passage, Daniel and Julia ___.", ["a. miss their flight", "b. return home", "c. say goodbye to their parents", "d. take a train to Spain"], "c. say goodbye to their parents", 0);

  // ==========================================
  // SECTION 4: WRITING
  // ==========================================
  form.addPageBreakItem().setTitle('Section 4. Writing (20 points)');
  
  var writingPrompt = 'Question: Do you think a person or company becomes stronger by focusing on one clear goal instead of trying to do too many things?\n\n' +
                      'Requirements:\n' +
                      '- mention Jim Collins\n' +
                      '- include the idea "Good is the enemy of great"\n' +
                      '- use these linking words: Furthermore, However, Therefore\n' +
                      '- give at least two reasons\n' +
                      '- include one example\n\n' +
                      '💡 Use from the Chapter\n' +
                      'Collins says great companies need a simple idea, not too many directions. He also says they must face the truth about what they can and cannot be best at. (Chapter 1, pp. 12–13)\n\n' +
                      'Useful Language & Speaking Structure\n' +
                      '1. I think that... — state your opinion first\n' +
                      '2. The first reason is that...\n' +
                      '3. The second reason is that...\n' +
                      '4. In the chapter, Collins says that...\n' +
                      '5. For example...\n' +
                      '6. However, some people may say that...\n' +
                      '7. So, in my opinion...';

  form.addParagraphTextItem()
      .setTitle('Short Thesis Paragraph (Write 120–150 words)')
      .setHelpText(writingPrompt)
      .setPoints(20);

  Logger.log('SUCCESS! Form created. Check your Google Drive.');
}

// Helper Function for Multiple Choice Questions
function addMCQ(form, title, options, correctChoice, points) {
  var item = form.addMultipleChoiceItem();
  item.setTitle(title);
  var choices = [];
  for (var i = 0; i < options.length; i++) {
    // True assigns it as the correct answer for the auto-grading key
    choices.push(item.createChoice(options[i], options[i] === correctChoice));
  }
  item.setChoices(choices);
  if(points > 0) {
      item.setPoints(points);
  }
}

// Helper Function for Short Answer Questions
function addShortAnswer(form, title, points) {
  var item = form.addTextItem();
  item.setTitle(title);
  if(points > 0) {
      item.setPoints(points);
  }
}
