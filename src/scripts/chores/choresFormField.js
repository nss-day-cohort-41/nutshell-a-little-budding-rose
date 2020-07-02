// This module contains the form fields
//*This section was created by Lacey Walker*/

        //getting the referance to input fields in the form
const updateFormFields = (choreObject) => {
    const hiddenChoreId = document.querySelector("#choreInputId").value;
    const choreNameInput = document.querySelector("#choreNameInput").value;
    const choreDateInput = document.querySelector("#choreDateInput").value;

    hiddenChoreId = choreObject.id;
    choreNameInput = choreObject.choreName;
    choreDateInput = choreObject.choreDate;
}

export default updateFormFields;


