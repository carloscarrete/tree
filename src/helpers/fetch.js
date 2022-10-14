const base_url = import.meta.env.VITE_URL_API

//fetch without token
export const fetchWithoutToken = (endpoint, data, method='GET')=>{
    const url = `${base_url}/${endpoint}`
    if(method==='GET'){
        return fetch(url);
    }else{
        return fetch(url, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}


//fetch with token
export const fetchWithToken = (endpoint, data, method='GET') => {
    const url = `${base_url}/${endpoint}`
    //const token = localStorage.getItem('token') || '';
    const token = localStorage.getItem('token') || '';

    if(method==='GET'){
        return fetch(url,{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
    }else{
        return fetch(url,{
            method,
            headers: {
                'Content-type' : 'application/json',
                'Authorization': `Bearer ${token}`,
                },
            body: JSON.stringify(data)
        })
    }
}