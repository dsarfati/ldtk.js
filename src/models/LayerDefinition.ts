import { IntGridValueDefinition } from './IntGridValueDefinition'
import { Type } from './Type'

export interface LayerDefinition {
  /** Type of the layer (*IntGrid, Entities, Tiles, AutoLayer*) */
  __type: string
  autoSourceLayerDefUid: number | null
  /** Reference to the Tileset UID being used by this auto-layer rules */
  autoTilesetDefUid: number | null
  /** Opacity of the layer (0 to 1.0) */
  displayOpacity: number
  /** Width and height of the grid in pixels */
  gridSize: number
  /** Unique string identifier */
  identifier: string
  /** An array (using IntGrid value as array index, starting from 0) that defines extra optional info for each IntGrid value. */
  intGridValues: Array<IntGridValueDefinition>
  /** X offset of the layer, in pixels (IMPORTANT: this should be added to the "LayerInstance" optional offset) */
  pxOffsetX: number
  /** Y offset of the layer, in pixels (IMPORTANT: this should be added to the "LayerInstance" optional offset) */
  pxOffsetY: number
  /** If the tiles are smaller or larger than the layer grid, the pivot value will be used to position the tile relatively its grid cell. */
  tilePivotX: number
  /** If the tiles are smaller or larger than the layer grid, the pivot value will be used to position the tile relatively its grid cell. */
  tilePivotY: number
  /** Reference to the Tileset UID being used by this Tile layer */
  tilesetDefUid: number | null
  /** Type of the layer as an Enum Possible values: "IntGrid", "Entities", "Tiles", "AutoLayer" */
  purpleType: Type | null
  /** Unique Int identifier */
  uid: number
}
