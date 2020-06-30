//Christopher McColgan
//This module contains the HTML that will be rendered to the DOM

const makeNewsEntryComponent = (newsEntry) => {
    const string =
        `<a href="${newsEntry.url}">${newsEntry.title}</a><span> | ${newsEntry.synopsis} </span>
        <button id="editNewsEntry--${newsEntry.id}" type="button">Edit</button>
        <button id="deleteNewsEntry--${newsEntry.id}" type="button">Delete</button>
        <br>
        `
    return string
}

export default makeNewsEntryComponent