// ============================================================
// B1 English Final Examination – Google Forms Auto-Creator
// ------------------------------------------------------------
// HOW TO USE:
//  1. Go to https://script.google.com
//  2. Click "+ New Project"
//  3. Delete any existing code and paste this entire script
//  4. Click the ▶ Run button (run "createB1ExamForm")
//  5. Grant permissions when prompted
//  6. Check "Execution log" for the link to your new Form
// ============================================================

function createB1ExamForm() {

  var form = FormApp.create('B1 English Final Examination');
  form.setDescription(
    'Instructions: Answer all questions. Write clearly. Use full sentences where needed.\n' +
    'Level: B1  |  Time limit: 90 minutes  |  Total Score: 80 points'
  );
  form.setCollectEmail(false);
  form.setShowLinkToRespondAgain(true);
  form.setIsQuiz(true);

  // ============================================================
  // SECTION 1 – GRAMMAR (16 points)
  // ============================================================
  form.addSectionHeaderItem()
    .setTitle('Section 1. Grammar')
    .setHelpText('16 points total');

  // A. Perfect Modals
  form.addSectionHeaderItem()
    .setTitle('A. Perfect Modals')
    .setHelpText('Complete each sentence with the best answer. (5 points)');

  var modalOptions = ["should've", "would've", "could've", "must've", "might've"];

  addMCQ(form, "1. We missed the start of the film. We __________ left home earlier.", modalOptions, "should've", 1);
  addMCQ(form, "2. If you'd asked me, I __________ helped you with the presentation.", modalOptions, "would've", 1);
  addMCQ(form, "3. We had an extra hour before the train, so we __________ stopped for coffee.", modalOptions, "could've", 1);
  addMCQ(form, "4. Their car isn't outside and the house is dark. They __________ gone out.", modalOptions, "must've", 1);
  addMCQ(form, "5. I'm not sure why Sara didn't reply. She __________ been asleep.", modalOptions, "might've", 1);

  // B. Intentions & Procrastination
  form.addSectionHeaderItem()
    .setTitle('B. Intentions and Procrastination')
    .setHelpText('Complete each sentence with the best phrase. (4 points)');

  var intentOptions = ["I've been meaning to", "I'd been thinking about it", "I kept putting it off", "Finally,"];

  addMCQ(form, "6. Sorry I still haven't called the dentist. __________________ make an appointment all week.", intentOptions, "I've been meaning to", 1);
  addMCQ(form, "7. Before I moved abroad, __________________ for months.", intentOptions, "I'd been thinking about it", 1);
  addMCQ(form, "8. The essay was due on Friday, but __________________ until Thursday night.", intentOptions, "I kept putting it off", 1);
  addMCQ(form, "9. After weeks of hesitation, __________________ I booked the ticket.", intentOptions, "Finally,", 1);

  // C. Conditionals
  form.addSectionHeaderItem()
    .setTitle('C. Conditionals')
    .setHelpText('Write the correct form of the verb in brackets. (7 points)');

  addShortAnswer(form, "10. If you heat ice, it __________ (melt).", 1);
  addShortAnswer(form, "11. If it rains tomorrow, we __________ (move) the meeting online.", 1);
  addShortAnswer(form, "12. If I had more free time, I __________ (join) the club.", 1);
  addShortAnswer(form, "13. If people __________ (not drink) enough water, they often feel tired.", 1);
  addShortAnswer(form, "14. If she finishes early tonight, she __________ (call) you.", 1);
  addShortAnswer(form, "15. If I were you, I __________ (not wait) until the last minute.", 1);
  addShortAnswer(form, "16. If you press this button, the machine __________ (stop).", 1);

  // ============================================================
  // SECTION 2 – VOCABULARY (24 points)
  // ============================================================
  form.addSectionHeaderItem()
    .setTitle('Section 2. Vocabulary')
    .setHelpText('24 points total');

  // Part 1. Spelling
  form.addSectionHeaderItem()
    .setTitle('Part 1. Check Spelling')
    .setHelpText('Complete the words with the missing letters. (8 points)');

  addShortAnswer(form, "17. str _ teg _", 1);
  addShortAnswer(form, "18. cult _ re", 1);
  addShortAnswer(form, "19. d _ ta", 1);
  addShortAnswer(form, "20. res _ lt", 1);
  addShortAnswer(form, "21. foc _ s", 1);
  addShortAnswer(form, "22. bud _ et", 1);
  addShortAnswer(form, "23. rel _ able", 1);
  addShortAnswer(form, "24. ins _ ght", 1);

  // Part 2. Synonyms
  form.addSectionHeaderItem()
    .setTitle('Part 2. Match the Word with the Synonym')
    .setHelpText('Choose the correct synonym. (8 points)');

  var synOptions = ['proof', 'plan', 'outcome', 'show', 'procedure', 'dependable', 'remarkable', 'study'];

  addMCQ(form, "25. strategy", synOptions, "plan", 1);
  addMCQ(form, "26. result", synOptions, "outcome", 1);
  addMCQ(form, "27. research", synOptions, "study", 1);
  addMCQ(form, "28. process", synOptions, "procedure", 1);
  addMCQ(form, "29. evidence", synOptions, "proof", 1);
  addMCQ(form, "30. reveal", synOptions, "show", 1);
  addMCQ(form, "31. reliable", synOptions, "dependable", 1);
  addMCQ(form, "32. extraordinary", synOptions, "remarkable", 1);

  // Part 3. Sentence Completion
  form.addSectionHeaderItem()
    .setTitle('Part 3. Sentence Completion')
    .setHelpText('Use the words in the box. Each word is used once.\n\nWord box: performance, decision, focus, require, productivity, assumption, budget, sustain');

  var sentOptions = ['performance', 'decision', 'focus', 'require', 'productivity', 'assumption', 'budget', 'sustain'];

  addMCQ(form, "33. Their __________ improved dramatically once they found the right people for the job.", sentOptions, "performance", 1);
  addMCQ(form, "34. Every important __________ started with getting the right people in the right seats.", sentOptions, "decision", 1);
  addMCQ(form, "35. Great companies __________ on one thing they could be the best at.", sentOptions, "focus", 1);
  addMCQ(form, "36. True transformation may __________ time, patience, and the right people.", sentOptions, "require", 1);
  addMCQ(form, "37. High __________ came from focused people doing the right work.", sentOptions, "productivity", 1);
  addMCQ(form, "38. The team challenged every __________, including the idea that great companies need bold leaders.", sentOptions, "assumption", 1);
  addMCQ(form, "39. Great companies allocated __________ to what aligned with their main goal.", sentOptions, "budget", 1);
  addMCQ(form, "40. The goal was not just great results, but to __________ them for many years.", sentOptions, "sustain", 1);

  // ============================================================
  // SECTION 3 – READING (20 points)
  // ============================================================
  form.addSectionHeaderItem()
    .setTitle('Section 3. Reading')
    .setHelpText(
      '20 points total\n\n' +
      'Read the passage and answer the questions.\n\n' +
      '─────────────────────────────────\n' +
      'CRAZY PAELLA! – Reading Passage\n' +
      '─────────────────────────────────\n' +
      'Daniel and Julia are brother and sister. They are both university students, and they share a house in London. ' +
      'Soon, they will travel to Barcelona as exchange students because they want to improve their Spanish. ' +
      'Their parents, Arthur and Sarah Bell, also speak Spanish, so they sometimes practise together at home.\n\n' +
      'Before the trip, everyone is busy getting ready. Julia feels excited, but she is also nervous about leaving home ' +
      'and travelling to another country. Their father wants to help, so he gives Daniel and Julia some money for the journey.\n\n' +
      'Then the family goes to the airport together. At the airport, Daniel notices that there are many businesspeople around them. ' +
      'After saying goodbye to their parents, Daniel and Julia prepare for their flight to Spain.'
    );

  addMCQ(form, "41. Daniel and Julia live in ___.",
    ["a. the same house in London", "b. different houses in London", "c. the same house in Barcelona", "d. different houses in Barcelona"],
    "a. the same house in London", 2.5);

  addMCQ(form, "42. Daniel and Julia are going to Barcelona because they want to ___.",
    ["a. find a new house", "b. improve their Spanish", "c. meet Daniel's friends", "d. start a business"],
    "b. improve their Spanish", 2.5);

  addMCQ(form, "43. Daniel and Julia's parents ___.",
    ["a. don't speak Spanish", "b. live in Barcelona", "c. speak Spanish and practise with them", "d. only speak English"],
    "c. speak Spanish and practise with them", 2.5);

  addMCQ(form, "44. What does their father give them before the trip?",
    ["a. a science fiction book", "b. a car", "c. money", "d. a map"],
    "c. money", 2.5);

  addMCQ(form, "45. During the trip to the airport, Julia feels ___.",
    ["a. nervous", "b. angry", "c. bored", "d. frightened"],
    "a. nervous", 2.5);

  addMCQ(form, "46. At the airport, there are a lot of ___.",
    ["a. children", "b. businesspeople", "c. Daniel's friends", "d. students from London"],
    "b. businesspeople", 2.5);

  addMCQ(form, "47. Julia is nervous mainly because she is ___.",
    ["a. hungry", "b. late for the plane", "c. travelling to another country", "d. angry with Daniel"],
    "c. travelling to another country", 2.5);

  addMCQ(form, "48. At the end of the passage, Daniel and Julia ___.",
    ["a. miss their flight", "b. return home", "c. say goodbye to their parents", "d. take a train to Spain"],
    "c. say goodbye to their parents", 2.5);

  // ============================================================
  // SECTION 4 – WRITING (20 points)
  // ============================================================
  form.addSectionHeaderItem()
    .setTitle('Section 4. Writing')
    .setHelpText(
      '20 points total — Marked by teacher\n\n' +
      'QUESTION: Do you think a person or company becomes stronger by focusing on one clear goal instead of trying to do too many things?\n\n' +
      'REQUIREMENTS:\n' +
      '• Mention Jim Collins\n' +
      '• Include the idea "Good is the enemy of great"\n' +
      '• Use linking words: Furthermore, However, Therefore\n' +
      '• Give at least two reasons\n' +
      '• Include one example\n\n' +
      'SCORING RUBRIC:\n' +
      '• Content – 8 pts\n' +
      '• Organization – 4 pts\n' +
      '• Language – 4 pts\n' +
      '• Task Completion – 4 pts'
    );

  form.addParagraphTextItem()
    .setTitle('49. Write your paragraph here. (120–150 words)')
    .setHelpText('Include: Jim Collins, "Good is the enemy of great", Furthermore, However, Therefore.')
    .setRequired(true);

  // ── Print links to Execution Log (NO SpreadsheetApp) ─────
  Logger.log('✅ DONE! Form created successfully.');
  Logger.log('');
  Logger.log('📋 Student link: ' + form.getPublishedUrl());
  Logger.log('✏️  Edit link:   ' + form.getEditUrl());
}

// ============================================================
// HELPER: Multiple Choice with auto-grading
// ============================================================
function addMCQ(form, questionText, options, correctAnswer, points) {
  var item = form.addMultipleChoiceItem();
  item.setTitle(questionText);
  item.setRequired(true);
  item.setPoints(points);
  var choices = options.map(function(opt) {
    return item.createChoice(opt, opt === correctAnswer);
  });
  item.setChoices(choices);
  return item;
}

// ============================================================
// HELPER: Short Answer (manual grading)
// ============================================================
function addShortAnswer(form, questionText, points) {
  var item = form.addTextItem();
  item.setTitle(questionText);
  item.setRequired(true);
  item.setPoints(points);
  return item;
}
