import { createFilteredProductsArray } from "../common/helper";

const productsReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCT": {
      let products = [];
      if (!action.payload) {
        products = state.products;
      } else {
        const searchValue = action.payload?.toLowerCase();
        products = state.products.filter(
          (el) =>
            el.name?.toLowerCase().includes(searchValue) ||
            el.color?.toLowerCase().includes(searchValue) ||
            el.type?.toLowerCase().includes(searchValue)
        );
      }

      return {
        ...state,
        fProducts: products,
      };
    }
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
        const colorSet = state.filterOptions.color;

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

      let { color, type, gender, price } = state.filterOptions;

      if (attribute === "color") {
        color.add(value);
      } else if (attribute === "type") {
        type.add(value);
      } else if (attribute === "price") {
        price.add(value);
      } else if (attribute === "gender") {
        gender.add(value);
      }

      return {
        ...state,
        filterOptions: {
          type,
          price,
          gender,
          color,
        },
      };
    }
    case "REMOVE_FILTER_OPTIONS": {
      const { attribute, value } = action.payload;

      let { color, type, gender, price } = state.filterOptions;

      if (attribute === "color") {
        color.delete(value);
      } else if (attribute === "type") {
        type.delete(value);
      } else if (attribute === "price") {
        price.delete(value);
      } else if (attribute === "gender") {
        gender.delete(value);
      }
      return {
        ...state,
        filterOptions: {
          type,
          price,
          gender,
          color,
        },
      };
    }
    case "FILTER_PRODUCTS": {
      // let { color, type, gender, price } = state.filterOptions;
      const products = [...state.products];
      let order = state.filterOrder;

      let filteredProducts = [];

      if (order.size === 0) {
        filteredProducts = state.products;
      } else {
        // If we have filters
        for (let [key, value] of order.entries()) {
          if (value === 1) {
            filteredProducts = products;
          }

          filteredProducts = createFilteredProductsArray(
            filteredProducts,
            state.filterOptions,
            key
          );
        }

        // console.log("Filter Products", order);
        // const filters = state.filterOptions.color;
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
          color: action.payload.value,
        },
      };
    }
    case "ADD_ITEM": {
      const selectedItem = state.fProducts.filter(
        (el) => el.id === action.payload
      );
      const outArr = [...state.cartItems, ...selectedItem];
      return {
        ...state,
        cartItems: outArr,
      };
    }
    default:
      throw new Error("No matching actions found");
  }
};

export default productsReducer;
