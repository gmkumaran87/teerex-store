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