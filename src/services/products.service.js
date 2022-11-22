import axios from "axios";
import { wrapperPromise } from "../common/helper";

const BASE_URL =
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

/*const productsAPI = axios.create({
    baseUrl: BASE_URL,
    headers: { "Content-Type": "application/json" },
});*/

export const fetchData = () => {
    const prodcutPromise = fetchProducts();

    return {
        products: wrapperPromise(prodcutPromise),
    };
};

const fetchProducts = () => {
    try {
        const data = axios
            .get(BASE_URL)
            .then((res) => res.data)
            .catch((err) => console.log(err));

        return data;
    } catch (error) {
        console.log(error);
    }
};