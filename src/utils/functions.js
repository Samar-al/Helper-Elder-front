// takes a date string (in the format returned by API) and turns it into dd/mm/yyyy
export function formatDate(pDate) {
  const date = new Date(pDate);
  console.log(date);
  return date.toLocaleDateString("fr");
}
