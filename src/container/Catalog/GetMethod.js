import axios from "axios";
const baseURL = "http://localhost:8080/fish";

const getAllFish = async () => {
    let fishRes = await axios.get(baseURL)
        .then(res => {
            const fish = res.data;
            return fish;
        })
        return fishRes;
}

export const getFishById = async (id) => {
    let fishRes = await axios.get(baseURL + `/${id}`)
        .then(res => {
            const fish = res.data;
            return fish;
        })
        return fishRes;
}

export const getAllFishByPriceAndLeight = async (priceBottom, priceTop, leightBottom, leightTop) => {
    let fishRes = await axios.get(baseURL + `/priceBottom=${priceBottom}/priceTop=${priceTop}/leightBottom=${leightBottom}/leightTop=${leightTop}`)
        .then(res => {
            const fish = res.data;
            return fish;
        })
        return fishRes;
}

export default getAllFish;