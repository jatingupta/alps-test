const BASE_URL = "https://gist.githubusercontent.com/jatingupta";
export default (url, options = {}) => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}/${url}`, options)
            .then((response) => response.json())
            .then((response) => resolve(response))
            .catch((err) => reject(err))
    });
};