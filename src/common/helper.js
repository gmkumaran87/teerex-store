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