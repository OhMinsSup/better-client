import ModernError from "modern-errors";
import ErrorsSerialize from "modern-errors-serialize";
import ErrorsSwitch from "modern-errors-switch";

export const BaseError = ModernError.subclass("BaseError", {
  plugins: [ErrorsSerialize, ErrorsSwitch],
});
