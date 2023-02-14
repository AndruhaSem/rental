import httpService from "./http.service";

const sliderEndpoint = "slider/";

const sliderService = {
    get: async () => {
        const { data } = await httpService.get(sliderEndpoint);
        return data;
    }
};
export default sliderService;
