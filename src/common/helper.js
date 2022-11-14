export const wrapperPromise = (promise) => {
  let status = "pending";
  let result;

  const suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw result;
        case "success":
          return result;
        default:
          return result;
      }
    },
  };
};

export const createCheckboxItems = (products) => {
  const type = [...new Set(products.map((el) => el.type))];
  const typesArray = type.map((el, index) => ({
    id: index,
    name: el,
    isChecked: false,
  }));

  const price = [...new Set(products.map((el) => el.price))];
  const priceArray = price.map((el, index) => ({
    id: index,
    name: el,
    isChecked: false,
  }));

  const colors = [...new Set(products.map((el) => el.color))];

  const colorsArray = colors.map((el, index) => ({
    id: index,
    name: el,
    isChecked: false,
  }));

  return { typesArray, colorsArray, priceArray };
};

export const createFilteredProductsArray = (products, filterOptions, key) => {
  console.log("Filters in helper", filterOptions, key);
  let outArray = [];
  let product = [];
  const filters = filterOptions[key];

  /*if (filters.size === 0) {
    product = products?.filter((el) => el[key] === filters);
    outArray.push();
  } else {*/
  let setValues = filters.values();
  let iter = setValues.next().value;

  while (iter) {
    console.log("Filtering Products", { products, filters, setValues, iter });

    product = products?.filter((el) => el[key] === iter);
    outArray.push(...product);
    iter = setValues.next().value;
    // console.log("Inside WHILE", { product, iter, filteredProducts });
  }

  console.log("Filters in Helper", filters, outArray);
  return outArray;
};
