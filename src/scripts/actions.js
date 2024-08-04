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

export { navAction };