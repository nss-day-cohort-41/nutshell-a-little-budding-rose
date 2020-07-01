// This module contains the form fields
//*This section was created by Lacey Walker*/

        //getting the referance to input fields in the form
const updateFormFields = (choreObject) => {
    const hiddenChoreId = document.querySelector("#id");
    const choreNameInput = document.querySelector("#name");
    const choreDateInput = document.querySelector("#date");
    const choreCompleteInput = document.querySelector("#completed")

    hiddenChoreId = choreObject.id;
    choreNameInput = choreObject.choreName;
    choreDateInput = choreObject.choreDate;
    choreCompleteInput = choreObject.choreComplete;
}

export default updateFormFields;


