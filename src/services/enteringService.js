/***************** GUEST AUTH **********************/
export const signInGuest = (guest) => {
    return signInPOST('/api/login/', guest);
}

export const signOutGuest = (token) => {
    return signOutPOST(`/api/guests/logout/${token}` );
}

/***************** EMPLOYEE AUTH *****************/
export const signInEmployee = (guest) => {
    return signInPOST('/api/loginemployee', guest);
}

export const signOutEmployee = (token) => {
    return signOutPOST(`/api/deskclerk/logout/${token}`);
}

/********************* SIGN IN ******************/
const signInPOST = (url, data) => {
    return fetch(url,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .catch(err => console.log(err));
}
/******************** SIGN OUT ********************/
const signOutPOST = (url) => {
    return fetch(url,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch(err => console.log(err));
}