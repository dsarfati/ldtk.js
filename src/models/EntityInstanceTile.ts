/**
 * Optional Tile used to display this entity (it could either be the default Entity tile,
 * or some tile provided by a field value, like an Enum).
 *
 * Tile data in an Entity instance
 */
export interface EntityInstanceTile {
  /** An array of 4 Int values that refers to the tile in the tileset image */
  srcRect: [x: number, y: number, width: number, height: number]
  /** Tileset ID */
  tilesetUid: number
}
