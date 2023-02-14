import httpService from "./http.service";

const statisticEndpoint = "statistic/";

const statisticService = {
    getStatistics: async () => {
        const { data } = await httpService.get(statisticEndpoint);
        return data;
    },
    createStatistics: async (payload) => {
        const { data } = await httpService.post(statisticEndpoint, payload);
        return data;
    },
    removeStatistics: async (commentId) => {
        const { data } = await httpService.delete(
            statisticEndpoint + commentId
        );
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(
            statisticEndpoint + payload._id,
            payload
        );
        return data;
    }
};
export default statisticService;
