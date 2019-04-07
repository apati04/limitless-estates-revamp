export default str =>
  str
    .toString ()
    .toLowerCase ()
    .trim ()
    .replace (/\s+/g, '-')
    .replace (/[^\w\-]+/g, '')
    .replace (/\-\-+/g, '-');
