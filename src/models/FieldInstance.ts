export interface FieldInstance {
  /** Field definition identifier */
  __identifier: string
  /** Type of the field, such as "Int", "Float", "Enum(myEnumName)", "boolean", etc. */
  __type: string
  /**
   * Actual value of the field instance.
   *
   * The value type may vary, depending on "__type" (Integer, booleanean, string etc.)
   *
   * It can also be an "Array" of those same types.
   */
  __value: unknown
  /** Reference of the **Field definition** UID */
  defUid: number
  /** Editor internal raw values */
  realEditorValues: Array<unknown>
}
