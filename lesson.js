const catalog = window.lessonCatalog || {};
const requestedTopic = new URLSearchParams(window.location.search).get('topic') || 'python';
const topic = Object.hasOwn(catalog, requestedTopic) ? requestedTopic : 'python';
const lesson = catalog[topic];
const makeElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};

document.title = `${lesson.title} | Beverly Denton`;
document.querySelector('#lesson-title').textContent = lesson.title;
document.querySelector('#lesson-intro').textContent = lesson.intro;
document.querySelector('#lesson-category').textContent = lesson.category;
document.querySelector('#lesson-level').textContent = lesson.level;
document.querySelector('#lesson-duration').textContent = lesson.duration;

const objectives = document.querySelector('#lesson-objectives');
lesson.objectives.forEach((objective) => objectives.append(makeElement('li', '', objective)));

const notesContainer = document.querySelector('#lesson-notes');
lesson.sections.forEach((section) => {
  const article = makeElement('article', 'lesson-panel lesson-content');
  article.append(makeElement('h2', '', section.title));
  article.append(makeElement('p', '', section.text));
  if (section.bullets) {
    const list = makeElement('ul', 'lesson-bullets');
    section.bullets.forEach((bullet) => list.append(makeElement('li', '', bullet)));
    article.append(list);
  }
  if (section.code) {
    const pre = makeElement('pre', 'code-example');
    pre.append(makeElement('code', '', section.code));
    article.append(pre);
  }
  notesContainer.append(article);
});

const practice = document.querySelector('#lesson-practice');
practice.append(makeElement('p', 'eyebrow', 'Put it into practice'));
practice.append(makeElement('h2', '', lesson.practice.title));
practice.append(makeElement('p', 'panel-copy', lesson.practice.text));
const practiceList = makeElement('ol', 'practice-list');
lesson.practice.steps.forEach((step) => practiceList.append(makeElement('li', '', step)));
practice.append(practiceList);

const quizOptions = document.querySelector('#quiz-options');
quizOptions.append(makeElement('legend', '', lesson.quiz.question));
lesson.quiz.options.forEach((option, index) => {
  const label = makeElement('label', 'quiz-option');
  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'answer';
  input.value = String(index);
  input.required = true;
  label.append(input, makeElement('span', '', option));
  quizOptions.append(label);
});

document.querySelector('#quiz-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const selected = document.querySelector('input[name="answer"]:checked');
  const feedback = document.querySelector('#quiz-feedback');
  if (!selected) return;
  const correct = Number(selected.value) === lesson.quiz.answer;
  feedback.className = `quiz-feedback ${correct ? 'is-correct' : 'is-incorrect'}`;
  feedback.textContent = `${correct ? 'Correct. ' : 'Not quite. '}${lesson.quiz.explanation}`;
});

const notesKey = `beverly-lesson-notes-${topic}`;
const notesInput = document.querySelector('#learner-notes');
const notesStatus = document.querySelector('#notes-status');
try {
  notesInput.value = localStorage.getItem(notesKey) || '';
} catch {
  notesStatus.textContent = 'Browser storage is unavailable; download notes to keep them';
}
notesInput.addEventListener('input', () => {
  try {
    localStorage.setItem(notesKey, notesInput.value);
    notesStatus.textContent = 'Saved on this device';
  } catch {
    notesStatus.textContent = 'Could not save; download a copy to keep these notes';
  }
});
document.querySelector('#clear-notes').addEventListener('click', () => {
  notesInput.value = '';
  try {
    localStorage.removeItem(notesKey);
    notesStatus.textContent = 'Notes cleared';
  } catch {
    notesStatus.textContent = 'Cleared here, but browser storage could not be updated';
  }
});
document.querySelector('#download-notes').addEventListener('click', () => {
  const text = `${lesson.title}\n\n${lesson.intro}\n\nLESSON NOTES\n${notesInput.value || '(No personal notes yet.)'}\n`;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
  link.download = `${topic}-notes.txt`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
});
document.querySelector('#print-lesson').addEventListener('click', () => window.print());

document.querySelector('#question-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const questionText = document.querySelector('#learner-question').value.trim();
  const question = questionText.toLowerCase().replace(/[^\p{L}\p{N}%]+/gu, ' ');
  const response = document.querySelector('#question-response');
  const match = lesson.faqs
    .map((item) => ({
      item,
      score: item.keywords.reduce((score, keyword) => {
        const normalizedKeyword = keyword.toLowerCase().replace(/[^\p{L}\p{N}%]+/gu, ' ').trim();
        return score + (question.includes(` ${normalizedKeyword} `) || question.startsWith(`${normalizedKeyword} `) || question.endsWith(` ${normalizedKeyword}`) || question === normalizedKeyword ? normalizedKeyword.split(' ').length : 0);
      }, 0)
    }))
    .sort((left, right) => right.score - left.score)[0];
  response.replaceChildren();
  if (match && match.score > 0) {
    response.append(makeElement('p', 'answer-label', 'A helpful answer'));
    response.append(makeElement('p', '', match.item.answer));
  } else {
    const stopWords = new Set(['what', 'when', 'where', 'which', 'who', 'why', 'how', 'does', 'do', 'did', 'can', 'could', 'would', 'should', 'the', 'and', 'for', 'from', 'with', 'this', 'that', 'have', 'has', 'into', 'about', 'please', 'explain', 'tell', 'show', 'help', 'lesson']);
    const questionWords = new Set(question.split(/\s+/).filter((word) => word.length > 2 && !stopWords.has(word)));
    const relatedSection = lesson.sections
      .map((section) => {
        const content = [section.title, section.text, ...(section.bullets || []), section.code || ''].join(' ').toLowerCase();
        const score = [...questionWords].filter((word) => content.includes(word)).length;
        return { section, score };
      })
      .sort((left, right) => right.score - left.score)[0];

    if (relatedSection && relatedSection.score > 0) {
      response.append(makeElement('p', 'answer-label', `From “${relatedSection.section.title}”`));
      response.append(makeElement('p', '', relatedSection.section.text));
      if (relatedSection.section.bullets) {
        const list = makeElement('ul', 'lesson-bullets');
        relatedSection.section.bullets.forEach((bullet) => list.append(makeElement('li', '', bullet)));
        response.append(list);
      }
      if (relatedSection.section.code) {
        const code = makeElement('pre', 'code-example');
        code.append(makeElement('code', '', relatedSection.section.code));
        response.append(code);
      }
    } else {
      response.append(makeElement('p', 'answer-label', 'I couldn’t find that in this lesson yet.'));
      response.append(makeElement('p', '', `Your question is about ${lesson.title}. Choose a contact option below and include your question so Beverly can help.`));
    }
    response.append(makeElement('p', 'answer-label', 'Need more help? Ask Beverly directly:'));
  }

  const message = encodeURIComponent(`Hi Beverly, I have a question about ${lesson.title}: ${questionText}`);
  const contacts = [
    { label: 'Ask on WhatsApp', href: `https://wa.me/260975543128?text=${message}` },
    { label: 'Send email', href: `mailto:denwidwolf@gmail.com?subject=${encodeURIComponent(`Question about ${lesson.title}`)}&body=${message}` },
    { label: 'Message on Facebook', href: 'https://www.facebook.com/beverlydenton' }
  ];
  const contactActions = makeElement('div', 'question-contact-actions');
  contacts.forEach(({ label, href }) => {
    const link = makeElement('a', 'button button-lime', label);
    link.href = href;
    link.target = '_blank';
    link.rel = 'noreferrer';
    contactActions.append(link);
  });
  response.append(contactActions);
});

const courseNavigation = document.querySelector('#lesson-nav');
Object.entries(catalog).forEach(([key, item]) => {
  const link = makeElement('a', key === topic ? 'current-lesson' : '', item.title);
  link.href = `lesson.html?topic=${encodeURIComponent(key)}`;
  if (key === topic) link.setAttribute('aria-current', 'page');
  courseNavigation.append(link);
});