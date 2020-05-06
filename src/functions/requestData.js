export default async function requestData(urlArray) {
  let productData = await Promise.all(
    urlArray.map(async url => {
      const response = await fetch(url);
      return await response.json();
    })
  );
  // if productData has only one item, return just the one item. Otherwise, return entire array.
  productData = productData.length === 1 ? productData[0] : productData;
  return productData;
}
