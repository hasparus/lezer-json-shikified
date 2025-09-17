import { ExternalTokenizer, InputStream } from "@lezer/lr";

// Token constants - these should match the grammar
export const PropertyNameStringContent = 1;
export const StringValueContent = 2;

// Character codes for efficiency
const QUOTE = 34; // "
const BACKSLASH = 92; // \
const SPACE = 32;
const TAB = 9;
const CR = 13;
const LF = 10;

function isWhitespace(ch) {
  return ch === SPACE || ch === TAB || ch === CR || ch === LF;
}

function isStringChar(ch) {
  return ch >= 32 && ch !== QUOTE && ch !== BACKSLASH;
}

function skipWhitespace(input) {
  while (isWhitespace(input.peek(0))) {
    input.advance();
  }
}

// Context detection helper
function detectContext(input) {
  // Save current position
  const startPos = input.pos;
  
  // Look backwards to find context
  // We need to determine if we're inside