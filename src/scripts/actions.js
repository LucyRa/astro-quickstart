const actionHandler = (actionEl) => {
  let action = actionEl.dataset.action

  if (action) {
    switch (action) {
      case 'nav':
        actionEl.addEventListener('click', () => {
          navAction();
        })
        break;
    
      default:
        console.warn(`No matching action found: ${action}`)
        break;
    }
  } else {
    console.warn('Action handler: No action found.');
    return;
  }
}

/**
 * Nav Action
 * ---
 * 
 * @returns 
 */
const navAction = () => {
  const navTargetEl = document.querySelector('[data-action-target="nav"]')
  if (navTargetEl) {
    navTargetEl.classList.toggle('open')
    return;

  } else {
    console.warn('Nav Action: No target element found.');
    return;
  }
}

export { actionHandler };