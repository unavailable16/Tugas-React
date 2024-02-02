import Project from "../Project";
const baseURL = "http://localhost:3002"
const url = `${baseURL}/Gpuamd`

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
    let Gpuamd = data.data.map(convertToProjectModel)
    return Gpuamd;
}

const convertToProjectModel = (item) => {
    return new Project(item)
}

const AmdAPI = {
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
    put(amd){
        return fetch(`${url}/${amd.id}`, {
            method: "PUT",
            body: JSON.stringify(amd),
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
        return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON).then(convertToProjectModel)
    },
};

export {AmdAPI}