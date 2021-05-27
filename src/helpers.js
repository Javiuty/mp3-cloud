export function shortString(string) {
  return string.length > 100 ? string.slice(0, 100) + "..." : string;
}

export function separateTags(tags) {
  return tags.split(",").join(" | ");
}

export function validateYoutubeUrl(url) {
  var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  if (url.match(p)) {
    return true;
  }
  return false;
}
