//Christopher McColgan
//This module fetches from the JSON file

const url = "http://localhost:8088"

const newsAPI = {
    getArticles: () => {
        return fetch(`${url}/articles`)
            .then(response => response.json())
    },
    getSingleArticle: (id) => {
        return fetch(`${url}/articles/${id}`)
            .then(response => response.json())
    },
    saveArticle: (newEntryObject) => {
        return fetch(`${url}/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        })
    },
    deleteArticle: (id) => {
        return fetch(`${url}/articles/${id}`, {
            method: "DELETE",
        })
    },
    editArticle: (id, editEntryObject) => {
        return fetch(`${url}/articles/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editEntryObject)
        })
    }
}

export default newsAPI