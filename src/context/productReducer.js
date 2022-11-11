const productsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        fProducts: action.payload,
      };

    case "SET_FILTER_ORDER": {
      const filterOrder = state.filterOrder;
      const filter = action.payload;

      if (!filterOrder.get(filter)) {
        const currentSize = filterOrder.size;
        filterOrder.set(filter, currentSize + 1);
      }

      return {
        ...state,
        filterOrder: filterOrder,
      };
    }

    case "REMOVE_FILTER_ORDER": {
      const attribute = action.payload;
      const filterOrder = state.filterOrder;

      if (attribute === "color") {
        const colorSet = state.filterOptions.colors;

        if (colorSet.size === 0) {
          filterOrder.delete(attribute);
        }
      } else if (attribute === "gender") {
        const genderSet = state.filterOptions.gender;

        if (genderSet.size === 0) {
          filterOrder.delete(attribute);
        }
      } else if (attribute === "type") {
        const typeSet = state.filterOptions.type;

        if (typeSet.size === 0) {
          filterOrder.delete(attribute);
        }
      } else {
        const priceSet = state.filterOptions.price;

        if (priceSet.size === 0) {
          filterOrder.delete(attribute);
        }
      }

      return {
        ...state,
        filterOrder: filterOrder,
      };
    }

    case "SET_FILTER_OPTIONS": {
      const { attribute, value } = action.payload;

      let { colors, type, gender, price } = state.filterOptions;

      if (attribute === "color") {
        colors.add(value);
      } else if (attribute === "type") {
        type.add(value);
      } else if (attribute === "price") {
        price.add(value);
      } else {
        gender.add(value);
      }

      return {
        ...state,
        filterOptions: {
          type,
          price,
          gender,
          colors,
        },
      };
    }
    case "REMOVE_FILTER_OPTIONS": {
      const { attribute, value } = action.payload;

      let { colors, type, gender, price } = state.filterOptions;

      if (attribute === "color") {
        colors.delete(value);
      } else if (attribute === "type") {
        type.delete(value);
      } else if (attribute === "price") {
        price.delete(value);
      } else {
        gender.delete(value);
      }
      return {
        ...state,
        filterOptions: {
          type,
          price,
          gender,
          colors,
        },
      };
    }
    case "FILTER_PRODUCTS": {
      let { colors, type, gender, price } = state.filterOptions;

      let order = state.filterOrder;

      let filteredProducts = [];

      for (let keys of order.keys()) {
        console.log("Filter PRoducts", keys);
      }

      console.log("Filter Products", order);
      const filters = state.filterOptions.colors;

      if (filters.size === 0) {
        filteredProducts = state.products;
      } else {
        let setValues = filters.values();
        let iter = setValues.next().value;

        // console.log("Filtering Products", filters, setValues, iter);
        while (iter) {
          const product = state?.products?.filter((el) => el.color === iter);
          filteredProducts.push(...product);
          iter = setValues.next().value;
          // console.log("Inside WHILE", { product, iter, filteredProducts });
        }
      }

      return {
        ...state,
        fProducts: filteredProducts,
      };
    }
    case "REMOVE_FILTERS": {
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          colors: action.payload.value,
        },
      };
    }
    default:
      throw new Error("No matching actions found");
  }
};

export default productsReducer;
