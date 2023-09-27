import { EntityInstance } from './EntityInstance'
import { IntGridValueInstance } from './IntGridValueInstance'
import { TileInstance } from './TileInstance'

export interface LayerInstance {
  /** Grid-based height */
  __cHei: number
  /** Grid-based width */
  __cWid: number
  /** Grid size */
  __gridSize: number
  /** Layer definition identifier */
  __identifier: string
  /** Layer opacity as Float [0-1] */
  __opacity: number
  /** Total layer X pixel offset, including both instance and definition offsets. */
  __pxTotalOffsetX: number
  /** Total layer Y pixel offset, including both instance and definition offsets. */
  __pxTotalOffsetY: number
  /** The definition UID of corresponding Tileset, if any. */
  __tilesetDefUid: number | null
  /** The relative path to corresponding Tileset, if any. */
  __tilesetRelPath: string | null
  /** Layer type (possible values: IntGrid, Entities, Tiles or AutoLayer) */
  __type: string
  /**
   * An array containing all tiles generated by Auto-layer rules.
   *
   * The array is already sorted in display order (ie. 1st tile is beneath 2nd, which is beneath 3rd etc.).
   *
   * Note: if multiple tiles are stacked in the same cell as the result of different rules,
   * all tiles behind opaque ones will be discarded.
   */
  autoLayerTiles: Array<TileInstance>
  entityInstances: Array<EntityInstance>
  gridTiles: Array<TileInstance>
  intGrid: Array<IntGridValueInstance>
  /** Reference the Layer definition UID */
  layerDefUid: number
  /** Reference to the UID of the level containing this layer instance */
  levelId: number
  /**
   * X offset in pixels to render this layer, usually 0
   *
   * **IMPORTANT**: this should be added to the "LayerDef" optional offset, see "__pxTotalOffsetX"
   */
  pxOffsetX: number
  /**
   * Y offset in pixels to render this layer, usually 0
   *
   * **IMPORTANT**: this should be added to the "LayerDef" optional offset, see "__pxTotalOffsetY"
   */
  pxOffsetY: number
  /** Random seed used for Auto-Layers rendering */
  seed: number
}