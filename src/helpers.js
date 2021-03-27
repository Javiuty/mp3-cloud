export function shortString(string) {
  return string.length > 100 ? string.slice(0, 100) + "..." : string;
}

export function separateTags(tags) {
  return tags.split(",").join(" | ");
}
