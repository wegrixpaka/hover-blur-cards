const accordionItems = document.querySelectorAll('[data-accordion-item]');

accordionItems.forEach(item => {
  const button = item.querySelector('[data-accordion-button]');
  const icon = item.querySelector('[data-accordion-button-icon]');
  const content = item.querySelector('[data-accordion-content]');
  
  window.addEventListener('resize', () => {
    if (content.getAttribute('data-accordion-content') === 'open') {
      content.style.height = 'auto';
      
      const contentHeight = content.scrollHeight;
      content.style.height = `${contentHeight}px`;
    };
  });
  
  button.addEventListener('click', () => {
    if (content.getAttribute('data-accordion-content') !== 'open') {
      const contentHeight = content.scrollHeight;
    
      icon.setAttribute('data-accordion-button-icon', 'open');
      content.setAttribute('data-accordion-content', 'open');
      content.style.height = `${contentHeight}px`;
    } else {
      icon.setAttribute('data-accordion-button-icon', 'closed');
      content.setAttribute('data-accordion-content', 'closed');
      content.style.height = '0';
    };
  });
});