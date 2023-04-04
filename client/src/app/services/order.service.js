import httpService from "./http.service";

const orderEndpoint = "orders/";

const orderService = {
    getOrders: async () => {
        const { data } = await httpService.get(orderEndpoint);
        return data;
    },
    createOrder: async (payload) => {
        const { data } = await httpService.post(orderEndpoint, payload);
        return data;
    },
    removeOrder: async (id) => {
        const { data } = await httpService.delete(
            orderEndpoint + id
        );
        return data;
    },
    updateOrder: async (payload) => {
        const { data } = await httpService.patch(
            orderEndpoint + payload.id,
            payload
        );
        return data;
    }
};
export default orderService;
