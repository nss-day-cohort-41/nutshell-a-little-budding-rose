//Christopher McColgan
//This module makes the save, delete, and edit buttons for the News section work, and also contains the code to render everything to the DOM

import newsAPI from "./newsData.js"
import makeNewsEntryComponent from "./newsComponent.js"

const createNewsEntryObject = (url, title, synopsis, userId) => {
    return {
        url: url,
        title: title,
        synopsis: synopsis,
        userId: userId
    }
}

const clearNewsInputs = () => {
    document.querySelector("#news__articleID").value = ""
    document.querySelector("#newsUrlField").value = ""
    document.querySelector("#newsTitleField").value = ""
    document.querySelector("#newsSynopsisField").value = ""
}

const updateFormFields = (newsObj) => {
    const hiddenNewsArticleID = document.querySelector("#news__articleID")
    const newsTitleInput = document.querySelector("#newsTitleField")
    const newsUrlInput = document.querySelector("#newsUrlField")
    const newsSynopsisInput = document.querySelector("#newsSynopsisField")

    hiddenNewsArticleID.value = newsObj.id
    newsTitleInput.value = newsObj.title
    newsUrlInput.value = newsObj.url
    newsSynopsisInput.value = newsObj.synopsis
}

const renderNewsEntries = (articles) => {
    for (const article of articles) {
        if (article.userId === sessionStorage.getItem("activeUser")) {
            document.querySelector(".news__articles").innerHTML += makeNewsEntryComponent(article)
        }
    }
}

const showNewsEntries = () => {
    document.querySelector(".news__articles").innerHTML = ""
    newsAPI.getArticles()
        .then(renderNewsEntries)
}


const newsButtons = {
    // This makes the save button work
    save: () => {
        document.querySelector("#newsSave").addEventListener("click", clickEvent => {
        const IDVal = document.querySelector("#news__articleID").value
        const userIDVal = sessionStorage.getItem("activeUser")
        const urlVal = document.querySelector("#newsUrlField").value
        const titleVal = document.querySelector("#newsTitleField").value
        const synopsisVal = document.querySelector("#newsSynopsisField").value
        const newNewsObject = createNewsEntryObject(urlVal, titleVal, synopsisVal, userIDVal)

            if (urlVal === "") {
                alert("Please enter a URL")
            } else if (IDVal !== "") {
                newsAPI.editArticle(IDVal, newNewsObject)
                    .then(() => {
                        clearNewsInputs()
                        showNewsEntries()
                    })
            } else {
                newsAPI.saveArticle(newNewsObject)
                    .then(() => {
                        clearNewsInputs()
                        showNewsEntries()
                    })
            }
        })
    },
    // This makes the delete and edit button work
    deleteEdit: () => {
        document.querySelector(".news__articles").addEventListener("click", event => {
            if (event.target.id.startsWith("deleteNewsEntry--")) {
                const entryToDelete = event.target.id.split("--")[1]
                newsAPI.deleteArticle(entryToDelete)
                    .then(showNewsEntries)
            } else if (event.target.id.startsWith("editNewsEntry--")) {
                const entryToEdit = event.target.id.split("--")[1]
                newsAPI.getSingleArticle(entryToEdit)
                    .then(entryToEdit => updateFormFields(entryToEdit))
            }
        })
    }
}

export { newsButtons, showNewsEntries}