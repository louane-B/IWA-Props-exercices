import Rank from "@types/RankEnum"
import LightSaberColor from "@types/LightSaberColorEnum"

interface ForceWeilder {
  name: string
  lightsaberColor: LightSaberColor
  rank: Rank
  forceLevel: number
}


export type { ForceWeilder }