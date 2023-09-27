import { EntityDefinition } from './EntityDefinition'
import { EnumDefinition } from './EnumDefinition'
import { LayerDefinition } from './LayerDefinition'
import { TilesetDefinition } from './TilesetDefinition'

/**
 * A interface containing all the definitions of this project If you're writing your own LDtk importer,
 * you should probably just ignore *most* stuff in the "defs" section,
 * as it contains data that are mostly important to the editor.
 *
 * To keep you away from the "defs" section and avoid some unnecessary JSON parsing,
 * important data from definitions is often duplicated in fields prefixed with a double underscore (eg. "__identifier" or "__type").
 *
 * The 2 only definition types you might need here are **Tilesets** and **Enums**.
 */
export interface Definitions {
  entities: Array<EntityDefinition>
  enums: Array<EnumDefinition>
  /** Note: external enums are exactly the same as "enums", except they have a "relPath" to point to an external source file. */
  externalEnums: Array<EnumDefinition>
  layers: Array<LayerDefinition>
  tilesets: Array<TilesetDefinition>
}
