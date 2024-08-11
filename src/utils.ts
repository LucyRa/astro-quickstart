function capitalise(text: string) {
  if (text) {
    let firstLetter = text.substring(0, 1)
    let remainingLetters =  text.substring(text.length - 1)

    firstLetter.toUpperCase()
    remainingLetters.toLowerCase()

    return `${firstLetter}${remainingLetters}`;
  } else {
    console.warn('Capitalise: no text.')
    return;
  }
}

export { capitalise }