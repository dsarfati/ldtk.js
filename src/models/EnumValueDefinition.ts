export interface EnumValueDefinition {
  /** An array of 4 Int values that refers to the tile in the tileset image: "[ x, y, width, height ]" */
  __tileSrcRect: [x: number, y: number, width: number, height: number]
  /** Enum value */
  id: string
  /** The optional ID of the tile */
  tileId: number | null
}
