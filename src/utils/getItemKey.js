export default function getItemKey(item) {
  return item.repo || item.googleBookId || item.name;
}
