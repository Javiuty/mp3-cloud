export function shortString(string) {
  if (string.length > 100) {
    return string.slice(0, 100) + "...";
  } else {
    return string;
  }
}

export function separateTags(tags) {
  return tags.split(",").join(" | ");
}
