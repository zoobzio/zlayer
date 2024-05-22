import { defineEnums } from "../config";

export default defineEnums({
  // common
  commonSize: ["small", "medium", "large"],
  // links
  linkTargets: ["_blank", "_self"],
  // buttons
  buttonTypes: ["button", "submit", "reset"],
  buttonVariants: ["primary", "tonal", "outlined", "text", "destructive"],
  // TODO: more enums here...
});