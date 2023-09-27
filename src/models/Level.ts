import { BgPos } from './BgPos'
import { LayerInstance } from './LayerInstance'
import { LevelBackgroundPosition } from './LevelBackgroundPosition'
import { NeighbourLevel } from './NeighbourLevel'

/**
 * This section contains all the level data.
 *
 * It can be found in 2 distinct forms, depending on Project current settings:
 * - If "*Separate level files*" is **disabled** (default):
 *
 * Full level data is *embedded* inside the main Project JSON file
 *
 * - If "*Separate level files*" is **enabled**:
 *
 * Level data is stored in *separate* standalone ".ldtkl" files (one per level).
 * In this case, the main Project JSON file will still contain most level data, except heavy sections, like the "layerInstances" array (which will be null).
 * The "externalRelPath" string points to the "ldtkl" file.  A "ldtkl" file is just a JSON file containing exactly what is described below.
 */
export interface Level {
  /** Background color of the level (same as "bgColor", except the default value is automatically used here if its value is "null") */
  __bgColor: string
  /** Position informations of the background image, if there is one. */
  __bgPos: LevelBackgroundPosition | null
  /** An array listing all other levels touching this one on the world map. In "linear" world layouts, this array is populated with previous/next levels in array, and "dir" depends on the linear horizontal/vertical layout. */
  __neighbours: Array<NeighbourLevel>
  /** Background color of the level. If "null", the project "defaultLevelBgColor" should be used. */
  bgColor: string | null
  /** Background image X pivot (0-1) */
  bgPivotX: number
  /** Background image Y pivot (0-1) */
  bgPivotY: number
  /**
   * An enum defining the way the background image (if any) is positioned on the level.
   *
   * See "__bgPos" for resulting position info.
   *
   * Possible values: "Unscaled", "Contain", "Cover", "CoverDirty"
   */
  bgPos: BgPos | null
  /** The *optional* relative path to the level background image. */
  bgRelPath: string | null
  /**
   * This value is not null if the project option "*Save levels separately*" is enabled.
   *
   * In this case, this **relative** path points to the level Json file.
   */
  externalRelPath: string | null
  /** Unique string identifier */
  identifier: string
  /**
   * An array containing all Layer instances.
   *
   * **IMPORTANT**: if the project option "*Save levels separately*" is enabled,
   * this field will be "null".
   *
   * This array is **sorted in display order**: the 1st layer is the top-most and the last is behind.
   */
  layerInstances?: Array<LayerInstance>
  /** Height of the level in pixels */
  pxHei: number
  /** Width of the level in pixels */
  pxWid: number
  /** Unique Int identifier */
  uid: number
  /** World X coordinate in pixels */
  worldX: number
  /** World Y coordinate in pixels */
  worldY: number
}
