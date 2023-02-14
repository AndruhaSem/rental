import httpService from "./http.service";

const bookingEndpoint = "booking/";

const bookingService = {
    get: async () => {
        const { data } = await httpService.get(bookingEndpoint);
        return data;
    }
};
export default bookingService;
