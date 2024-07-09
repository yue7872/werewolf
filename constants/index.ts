export const appName = 'werewolf'
export const appDescription = 'werewolf'

export const GameStates = []

export enum identity {
  Werewolves = '狼人',
  Villager = '平民',
  Witch = '女巫',
  Seer = '预言家',
  Hunter = '猎人',
  Savior = '守卫',
}

// 阵营 神 金宝宝 狼
export enum factions {
  god = '神',
  goldBaby = '金宝宝',
  wolf = '狼',
}

// 身份组
export const IdentityArr: identity[] = Array.from({ length: 12 }, (_, index) => {
  if (index < 4)
    return identity.Villager
  if (index < 8)
    return identity.Werewolves
  else
    return [identity.Seer, identity.Witch, identity.Hunter, identity.Savior][index % 4]
})

