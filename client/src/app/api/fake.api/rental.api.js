const rental = [
    {
        id: 1,
        title: "Почувствуй это лето",
        product: "Сапборд",
        image: "img-sub.jpg"
    },
    {
        id: 2,
        title: "Почувствуй это лето",
        product: "Велосипед",
        image: "img-bicycle.jpg"
    }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(rental);
        }, 2000);
    });

export default {
    fetchAll
};
