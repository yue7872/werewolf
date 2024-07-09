import { IdentityArr } from '~/constants'

export function initGame() {
  shuffle(IdentityArr)
  // eslint-disable-next-line no-console
  console.log({ IdentityArr })
}
