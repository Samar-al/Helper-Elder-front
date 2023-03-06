// takes a date string (in the format returned by API) and turns it into dd/mm/yyyy
export function formatDate(pDate) {
  return (new Date(pDate)).toLocaleDateString('fr');
}
