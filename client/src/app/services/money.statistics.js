import httpService from "./http.service";

const statisticEndpoint = "money/";

const moneyService = {
    get: async () => {
        const { data } = await httpService.get(statisticEndpoint);
        return data;
    }
};
export default moneyService;
