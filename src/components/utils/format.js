export const trimLabel = (label, trimAt) => {
  return label.length >= trimAt ? `${label.substring(0, trimAt)}...` : label
}
