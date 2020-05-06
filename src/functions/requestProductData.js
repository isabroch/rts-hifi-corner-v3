export async function requestProductData(idArray) {
  const productData = await Promise.all(
    idArray.map(async id => {
      const response = await fetch(
        `https://hifi-corner.herokuapp.com/api/v1/products/${id}`
      );
      return await response.json();
    })
  );
  return productData;
}
