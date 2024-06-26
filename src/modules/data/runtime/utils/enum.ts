import config from "#build/enums.config.mjs";
import type { Enums } from "#build/types/enums.d.ts";
import type { EnumConfig } from "../../config";

const enums = config as Enums;

export type EnumTemplate = EnumConfig[keyof EnumConfig];
export type Enum = keyof Enums;
export type EnumData<E extends Enum> = Enums[E];
export type EnumDataItem<E extends Enum> = Enums[E][number];

export function useEnum<E extends Enum>(key: E) {
  return enums[key];
}
