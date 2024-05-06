export function generateSrcset(sizes) {
  let srcset = '';
  for (const key in sizes) {
    if (sizes.hasOwnProperty(key)) {
      const size = sizes[key];
      srcset += `${size.source_url} ${size.width}w, `;
    }
  }
  return srcset.trim().slice(0, -1);
}