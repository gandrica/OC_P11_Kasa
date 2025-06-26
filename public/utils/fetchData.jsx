export async function fetchData(path) {
  const res = await fetch(path);
  const data = await res.json();
  return data;
}
