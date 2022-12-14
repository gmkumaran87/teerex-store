import { ITEMS_PER_PAGE } from "./constant";

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
    product = products?.filter((el) => el[key] === iter);
    outArray.push(...product);
    iter = setValues.next().value;
  }

  return outArray;
};

export const paginate = (data) => {
  const pages = new Map();

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  let inc = 0;
  let page = 1;

  while (page <= totalPages) {
    pages.set(page, data.slice(inc, inc + ITEMS_PER_PAGE));
    inc += ITEMS_PER_PAGE;
    page++;
  }
  return pages;
};
