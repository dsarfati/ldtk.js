/** Nearby level info */
export interface NeighbourLevel {
  /** A single lowercase character tipping on the level location ("n"orth, "s"outh, "w"est, "e"ast). */
  dir: 'n' | 's' | 'w' | 'e'
  levelUid: number
}
