import type { identity } from '~/constants'

export function shuffle(arr: identity[]) {
  let currentIndex = arr.length
  while (currentIndex !== 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ]
  }
}
