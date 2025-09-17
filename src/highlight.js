import { styleTags, tags as t } from "@lezer/highlight";

export const jsonHighlighting = styleTags({
  Number: t.number,
  "True False": t.bool,
  PropertyName: t.propertyName,
  Null: t.null,
  ", :": t.separator,
  "[ ]": t.squareBracket,
  "{ }": t.brace,
  Quote: t.punctuation,
  StringContent: t.string,
});
