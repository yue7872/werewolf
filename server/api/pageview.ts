const startAt = Date.now()
let count = 0
// let survivalCount = {
//   goldBaby: 0,
//   werewolf: 0,
//   god: 0,
// }

export default defineEventHandler(() => ({
  pageview: count++,
  startAt,
}))
