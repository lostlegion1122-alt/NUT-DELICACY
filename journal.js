document.querySelectorAll('[data-journal-topic]').forEach(button => {
  button.addEventListener('click', () => {
    const topic = button.dataset.journalTopic;
    document.querySelectorAll('[data-journal-topic]').forEach(b => b.setAttribute('aria-pressed',String(b===button)));
    document.querySelectorAll('[data-guide-topic]').forEach(card => { card.hidden = topic !== 'all' && card.dataset.guideTopic !== topic; });
  });
});
