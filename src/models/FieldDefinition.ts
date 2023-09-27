import { EditorDisplayMode } from './EditorDisplayMode'
import { EditorDisplayPos } from './EditorDisplayPos'

/**
 * This section is mostly only intended for the LDtk editor app itself.
 * You can safely ignore it.
 */

export interface FieldDefinition {
  /**
   * Human readable value type (eg. "Int", "Float", "Point", etc.).
   *
   * If the field is an array, this field will look like "Array<...>" (eg. "Array<Int>", "Array<Point>" etc.)
   */
  __type: string
  /**
   * Optional list of accepted file extensions for FilePath value type.
   *
   * Includes the dot: ".ext" */
  acceptFileTypes?: Array<string>
  /** Array max length */
  arrayMaxLength: number | null
  /** Array min length */
  arrayMinLength: number | null
  /**
   * TRUE if the value can be null.
   *
   * For arrays, TRUE means it can contain null values (exception: array of Points can't have null values). */
  canBeNull: boolean
  /** Default value if selected value is null or invalid. */
  defaultOverride: unknown
  editorAlwaysShow: boolean
  /** Possible values: "Hidden", "ValueOnly", "NameAndValue", "EntityTile", "PointStar", "PointPath", "RadiusPx", "RadiusGrid" */
  editorDisplayMode: EditorDisplayMode | null
  /** Possible values: "Above", "Center", "Beneath" */
  editorDisplayPos: EditorDisplayPos | null
  /** Unique string identifier */
  identifier: string
  /** TRUE if the value is an array of multiple values */
  isArray: boolean
  /** Max limit for value, if applicable */
  max: number | null
  /** Min limit for value, if applicable */
  min: number | null
  /**
   * Optional regular expression that needs to be matched to accept values.
   *
   * Expected format: "/someRegEx/g", with optional "i" flag.
   */
  regex: string | null
  /** Internal type enum */
  purpleType: unknown | null
  /** Unique Intidentifier */
  uid: number
}
