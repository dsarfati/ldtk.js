/**
 * Position informations of the background image, if there is one.
 *
 * Level background image position info
 */
export interface LevelBackgroundPosition {
  /**
   * An array of 4 float values describing the cropped sub-rectangle of the displayed background image.
   *
   * This cropping happens when original is larger than the level bounds.
   *
   * Array format: "[ cropX, cropY, cropWidth, cropHeight ]"
   */
  cropRect: [cropX: number, cropY: number, cropWidth: number, cropHeight: number]
  /**
   * An array containing the "[scaleX,scaleY]" values of the **cropped** background image,
   * depending on "bgPos" option.
   */
  scale: [scaleX: number, scaleY: number]
  /**
   * An array containing the "[x,y]" pixel coordinates of the top-left corner of the **cropped** background image,
   * depending on "bgPos" option.
   */
  topLeftPx: [x: number, y: number]
}
