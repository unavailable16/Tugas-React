import Project from "../Project";
const baseURL = "http://localhost:3002"
const url = `${baseURL}/Gpunvidia`

const translateStatusToErrorMessage = (status) => {
    switch (status) {
        case 401:
            return "Please Login Again"
            
        case 403:
            return "You dont have a permission to view the project"
            

        default:
            return "There was an error retrieving the projects please try again"
    }
}

const checkStatus = (response) => {
    if (response.ok) {
        return response;
    } else {
        const httpErrorInfo = {
            status: response.status,
            statusText: response.statusText,
            url: response.url
        }
        console.log(`log server http error : ${JSON.stringify(httpErrorInfo)}`)

        let errorMsg = translateStatusToErrorMessage
            (httpErrorInfo.status)
        throw new Error(errorMsg);
    }
}

const parseJSON = (response) => {
    return response.json();
}

const delay = (ms) => {
    return (x) => {
        return new Promise(resolve => setTimeout(() => resolve(x), ms))
    }
}

const convertToProjectModels = (data) => {
    let Gpunvidia = data.data.map(convertToProjectModel)
    return Gpunvidia;
}

const convertToProjectModel = (item) => {
    return new Project(item)
}

const NvAPI = {
    get(page, limit) {
        return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name`)
        .then(delay(600))
        .then(checkStatus)
        .then(parseJSON)
        .then(convertToProjectModels)
        .catch((error) => {
            console.log("Log client error" + error);
            throw new Error(
                "There was an error retrieving the projects, please try again"
            );
        });
    },
    put(nvidia){
        return fetch(`${url}/${nvidia.id}`, {
            method: "PUT",
            body: JSON.stringify(nvidia),
            headers: {
                "Content-Type" : "application/json"
            }
        }).then(checkStatus).then(parseJSON).catch(error =>{
            console.log("Log client error" + error)
            throw new Error(
                "There was an error updating the project. Please try again"
            );
        });
    },

    find(id) {
        const fetchURL = `${url}/${id}`;
        return fetch(fetchURL)
            .then(checkStatus)
            .then(parseJSON)
            .then(convertToProjectModel)
            .catch((error) => {
                console.log(`Log client error: ${error}`);
                if (error instanceof Error) {
                    throw new Error(
                        "There was an error retrieving the project. Please try again"
                    );
                }
            });
    },
    
};

export {NvAPI}