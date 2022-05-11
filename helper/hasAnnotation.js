export const hasAnnotation = (annots) => {
  let has = false;
  Object.keys(annots).map((key, i) => (annots[key] ? (has = true) : null));

  return has;
};
