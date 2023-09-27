import { Definitions } from './Definitions'
import { Level } from './Level'
import { WorldLayout } from './WorldLayout'

/**
 * This is the root of any Project JSON file.
 *
 * It contains:
 * - the project settings,
 * - an array of levels,
 * - and a definition object (that can probably be safely ignored for most users).
 */
export interface Root {
  /** Project background color */
  bgColor: string
  /** A interfaceure containing all the definitions of this project */
  defs: Definitions
  /** If TRUE, one file will be saved the project (incl. all its definitions) and one file per-level in a sub-folder. */
  externalLevels: boolean
  /** File format version */
  jsonVersion: string
  /** All levels.
   *
   * The order of this array is only relevant in "LinearHorizontal" and "linearVertical" world layouts (see "worldLayout" value).
   *
   * Otherwise, you should refer to the "worldX","worldY" coordinates of each Level.
   */
  levels: Array<Level>
  /** Height of the world grid in pixels. */
  worldGridHeight: number
  /** Width of the world grid in pixels. */
  worldGridWidth: number
  /**
   * An enum that describes how levels are organized in this project (ie. linearly or in a 2D space).
   *
   * Possible values: "Free", "GridVania", "LinearHorizontal", "LinearVertical"
   */
  worldLayout: WorldLayout
}
