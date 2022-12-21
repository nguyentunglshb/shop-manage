export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatBreadscum(string: string) {
  return string
    .split("-")
    .map((s) => capitalizeFirstLetter(s))
    .join(" ");
}
