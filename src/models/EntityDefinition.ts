import { FieldDefinition } from './FieldDefinition'
import { LimitBehavior } from './LimitBehavior'
import { RenderMode } from './RenderMode'
import { TileRenderMode } from './TileRenderMode'

export interface EntityDefinition {
  /** Base entity color */
  color: string
  /** Array of field definitions */
  fieldDefs: Array<FieldDefinition>
  /** Pixel height */
  height: number
  /** Unique string identifier */
  identifier: string
  /** Possible values: "DiscardOldOnes", "PreventAdding", "MoveLastOne" */
  limitBehavior: LimitBehavior | null
  /** Max instances per level */
  maxPerLevel: number
  /** Pivot X coordinate (from 0 to 1.0) */
  pivotX: number
  /** Pivot Y coordinate (from 0 to 1.0) */
  pivotY: number
  /** Possible values: "Rectangle", "Ellipse", "Tile", "Cross" */
  renderMode: RenderMode | null
  /** Display entity name in editor */
  showName: boolean
  /** Tile ID used for optional tile display */
  tileId: number | null
  /** Possible values: "Stretch", "Crop" */
  tileRenderMode: TileRenderMode | null
  /** Tileset ID used for optional tile display */
  tilesetId: number | null
  /** Unique Int identifier */
  uid: number
  /** Pixel width */
  width: number
}
