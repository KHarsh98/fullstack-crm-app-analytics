import API_BASE from "constants/API_BASE";

const authProvider = {
    // called when the user attempts to log in
    login: ({ username, password }) => {

        const request = new Request(API_BASE + '/token/', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });

        return fetch(request).then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json();
        }).then(auth => {
            localStorage.setItem('accessToken', auth.access);
            localStorage.setItem('refreshToken', auth.refresh);

        }).catch(() => {
            throw new Error('Network Error');
        })
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ error }) => {
        if (error.status === 401 || error.status === 403) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');

            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};

export default authProvider;