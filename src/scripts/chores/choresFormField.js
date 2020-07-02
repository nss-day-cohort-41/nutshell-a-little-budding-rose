// This module contains the form fields
//*This section was created by Lacey Walker*/

        //getting the referance to input fields in the form
const updateFormFields = (choreObject) => {
    const hiddenChoreId = document.querySelector("#choresInputId").value;
    const choreNameInput = document.querySelector("#choresNameInput").value;
    const choreDateInput = document.querySelector("#date").value;

    hiddenChoreId = choreObject.id;
    choreNameInput = choreObject.choreName;
    choreDateInput = choreObject.choreDate;
}

export default updateFormFields;


