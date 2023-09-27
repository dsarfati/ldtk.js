/** This interfaceure represents a single tile from a given Tileset. */
export interface TileInstance {
  /**
   * Internal data used by the editor.
   *
   * For auto-layer tiles: "[ruleId, coordId]".
   *
   * For tile-layer tiles: "[coordId]".
   */
  d: [ruleId: number, coordId: number] | [coordId: number]
  /**
   * "Flip bits", a 2-bits integer to represent the mirror transformations of the tile.
   * - Bit 0 = X flip<br/>
   * - Bit 1 = Y flip<br/>
   *
   * Examples:
   * - f == 0 -> no flip
   * - f == 1 -> X flip only
   * - f == 2 -> Y flip only
   * - f == 3 -> both flips
   */
  f: number
  /**
   * Pixel coordinates of the tile in the **layer**.
   *
   * Don't forget optional layer offsets, if they exist!
   */
  px: [x: number, y: number]
  /** Pixel coordinates of the tile in the **tileset** */
  src: [x: number, y: number]
  /** The *Tile ID* in the corresponding tileset. */
  t: number
}
