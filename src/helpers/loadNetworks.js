import { fetchWithToken } from "./fetch"

export const loadNetworks = async (username) => {
    const res =  await fetchWithToken(`api/v1/networks/user/${username}`);
    const data = await res.json();
    return data;
}
