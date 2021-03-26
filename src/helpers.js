export function shortString(string) {
  if (string.length > 95) {
    return string.slice(0, 95) + "...";
  } else {
    return string;
  }
}
