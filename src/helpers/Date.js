export function formatDate(date) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    let formattedDate = new Date(date);
    return formattedDate.toLocaleDateString("en-US", options);;
  }