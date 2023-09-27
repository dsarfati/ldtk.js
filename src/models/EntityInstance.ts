import { EntityInstanceTile } from './EntityInstanceTile'
import { FieldInstance } from './FieldInstance'

export interface EntityInstance {
  /** Grid-based coordinates */
  __grid: [x: number, y: number]
  /** Entity definition identifier */
  __identifier: string
  /** Pivot coordinates (values are from 0 to 1) of the Entity */
  __pivot: [x: number, y: number]
  /**
   * Optional Tile used to display this entity (it could either be the default Entity tile,
   * or some tile provided by a field value, like an Enum).
   */
  __tile: EntityInstanceTile | null
  /** Reference of the **Entity definition** UID */
  defUid: number
  fieldInstances: Array<FieldInstance>
  /**
   * Pixel coordinates in current level coordinate space.
   *
   * Don't forget optional layer offsets, if they exist!
   */
  px: [x: number, y: number]
}
