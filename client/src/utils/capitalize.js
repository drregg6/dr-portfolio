export default function capitalize(str) {
  str = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

  return str;
}