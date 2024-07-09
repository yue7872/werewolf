import { factions, identity } from '~/constants'

export function getIdentity(id: string) {
  switch (id) {
    case '狼人':
      return identity.Werewolves
    case '女巫':
      return identity.Witch
    case '预言家':
      return identity.Seer
    case '猎人':
      return identity.Hunter
    case '守卫':
      return identity.Savior
    case '平民':
      return identity.Villager
    default:
      break
  }
}

export function getFactions(idTop: identity, idBottom: identity) {
  if (idTop === identity.Werewolves || idBottom === identity.Werewolves) {
    return factions.wolf
  }
  if (idTop === identity.Villager && idBottom === identity.Villager) {
    return factions.goldBaby
  }
  return factions.god
}
