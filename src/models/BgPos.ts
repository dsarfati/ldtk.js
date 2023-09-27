/**
 * An enum defining the way the background image (if any) is positioned on the level.
 *
 * See "__bgPos" for resulting position info.
 *
 * Possible values: "Unscaled", "Contain", "Cover", "CoverDirty"
 */
export const enum BgPos {
  Contain = 'Contain',
  Cover = 'Cover',
  CoverDirty = 'CoverDirty',
  Unscaled = 'Unscaled',
}
