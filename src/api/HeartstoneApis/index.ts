import axios from "axios";

const commonParams = {
    access_token: "EUggGGRAgDcGP1HWjVIsE6pKLMdTrDRh3H"
}

export const searchCards = axios.create({
    baseURL: "https://us.api.blizzard.com/hearthstone/cards",
    params: commonParams
});