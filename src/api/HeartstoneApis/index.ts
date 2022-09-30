import axios from "axios";

const commonParams = {
    access_token: "EUHSeM0VcpCIN1TPGgmcErAjiEHpATODL3"
}

export const searchCards = axios.create({
    baseURL: "https://us.api.blizzard.com/hearthstone/cards",
    params: commonParams
});