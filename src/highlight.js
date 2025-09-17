import { styleTags, tags as t } from "@lezer/highlight";

export const jsonHighlighting = styleTags({
  Number: t.number,
  "True False": t.bool,
  Null: t.null,
  ", :": t.separator,
  "[ ]": t.squareBracket,
  "{ }": t.brace,
  Quote: t.punctuation,
  StringValue: t.string,
  PropertyIdentifier: t.propertyName,
});
