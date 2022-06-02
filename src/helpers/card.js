export const changeAlternatives = (card, alternatives) => {
  return new Promise((resolve, reject) => {
    let data = []
    switch (card) {
      case 'tres':
        for (const key in alternatives) {
          if (!alternatives[key].correct) {
            alternatives[key].inactive = true
          }
        }
        data = alternatives
        break

      case 'dois':
        for (const key in alternatives) {
          if (!alternatives[key].correct && key <= 2) {
            alternatives[key].inactive = true
          }
        }
        data = alternatives
        break

      case 'as':
        let items = []
        for (const key in alternatives) {
          if (!alternatives[key].correct) {
            items = [...items, alternatives[key]]
          }
        }
        let alternative = items[Math.floor(Math.random() * items.length)]
        alternative.inactive = true
        data = alternatives
        break
      case 'rei':
        data = alternatives
        break
      default:
        reject('Erro')
        break
    }
    resolve(data)
  })
}
