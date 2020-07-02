// This module contains the form fields
//*This section was created by Lacey Walker*/

        //getting the referance to input fields in the form
const updateFormFields = (choreObject) => {
    const hiddenChoreId = document.querySelector("#choreInputId");
    const choreNameInput = document.querySelector("#choreNameInput");
    const choreDateInput = document.querySelector("#choreDateInput");

    hiddenChoreId.value = choreObject.id;
    choreNameInput.value = choreObject.choreName;
    choreDateInput.value = choreObject.choreDate;
}

export default updateFormFields;


