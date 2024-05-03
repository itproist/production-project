type Mods = Record<string, boolean | string>;

export function ClassNames(cls: string, mods: Mods, additional: string[]) {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([ClassName, value]) => Boolean(value))
      .map(([ClassName]) => ClassName),
  ].join(" ");
}
