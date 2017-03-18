export default function validateSubstring({longString} = {}) {
  return (key, value) => {
    if (value === undefined || value == '') {
      return true;
    } else if (longString) {
      if (longString.includes(value)) {
        return true;
      }
    }
    return 'Note is not a substring of line';
    // validation logic
    // return `true` if valid || error message string if invalid
  };
}
