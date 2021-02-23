export const convertData = (d) => {
  let arr = Object.entries(d).map(([key, value]) => {
    let listing = value["listings"] || null;
    return { id: key, listings: listing };
  });
  return arr;
};
