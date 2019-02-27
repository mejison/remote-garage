import config from './config';

let getHeader = () => {
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.token}`
    }
};

export default {
    set(thing, value) {
        return fetch(`https://api.thinger.io/v2/users/mejison/devices/enc28j60/${thing}`, {
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