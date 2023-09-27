import { EnumValueDefinition } from './EnumValueDefinition'

export interface EnumDefinition {
  externalFileChecksum: string | null
  /** Relative path to the external file providing this Enum */
  externalRelPath: string | null
  /** Tileset UID if provided */
  iconTilesetUid: number | null
  /** Unique string identifier */
  identifier: string
  /** Unique Int identifier */
  uid: number
  /** All possible enum values, with their optional Tile infos. */
  values: Array<EnumValueDefinition>
}
