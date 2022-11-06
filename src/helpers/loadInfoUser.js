import { fetchWithToken } from "./fetch"

export const loadInfoUser = async (username) => {
    const res =  await fetchWithToken(`api/v1/auth/${username}`);
    const data = await res.json();
    return data;
}
