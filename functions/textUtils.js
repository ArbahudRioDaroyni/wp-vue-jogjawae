export function truncateText(text, maxLength) {
  const withoutTags = text.replace(/<[^>]+>/g, ''); // Hapus tag HTML
  if (withoutTags.length <= maxLength) {
    return withoutTags;
  } else {
    // Menghapus spasi ekstra jika kata terakhir terputus
    let truncatedText = withoutTags.substr(0, maxLength);
    truncatedText = truncatedText.substr(0, Math.min(truncatedText.length, truncatedText.lastIndexOf(" ")));
    return truncatedText + '';
  }
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}