/**
 * The "Tileset" definition is the most important part among project definitions.
 *
 * It contains some extra informations about each integrated tileset.
 *
 * If you only had to parse one definition section, that would be the one.
 */
export interface TilesetDefinition {
  /**
   * The following data is used internally for various optimizations.
   *
   *  It's always synced with source image changes.
   */
  cachedPixelData?: { [i: string]: unknown }
  /** Unique string identifier */
  identifier: string
  /** Distance in pixels from image borders */
  padding: number
  /** Image height in pixels */
  pxHei: number
  /** Image width in pixels */
  pxWid: number
  /** Path to the source file, relative to the current project JSON file */
  relPath: string
  /** Array of group of tiles selections, only meant to be used in the editor */
  savedSelections: Array<{ [i: string]: unknown }>
  /** Space in pixels between all tiles */
  spacing: number
  tileGridSize: number
  /** Unique Intidentifier */
  uid: number
}
