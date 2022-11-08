const productsReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };

        default:
            throw new Error("No matching actions found");
    }
};

export default productsReducer;