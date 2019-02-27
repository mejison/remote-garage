import config from './config';

let getHeader = () => {
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.token}`
    }
};

export default {
    check() {
        return fetch(`${config.api_url}/users/mejison/devices/${config.device_id}`, {
            method: "GET",
            headers: getHeader()
        }).then(res => res.json());
    },
    set(thing, value) {
        return fetch(`${config.api_url}/users/mejison/devices/${config.device_id}/${thing}`, {
            method: "POST",
            headers: getHeader(),
            body: JSON.stringify({"in": value})
        }).then(res => {
            fetch(`/server.php`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    thing: thing,
                    state: value
                })
            });
        });
    },
    get(thing) {
        return fetch(`/server.php?thing=${thing}`, {
            method: "GET"
        }).then(res => res.json());
    }    
}