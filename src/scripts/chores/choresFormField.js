// This module contains the form fields
//*This section was created by Lacey Walker*/

        //getting the referance to input fields in the form
const updateFormFields = (choreObj) => {
    const hiddenChoreId = document.querySelector("#choresInputId");
    const choreNameInput = document.querySelector("#choreNameInput");
    const choreDateInput = document.querySelector("#choreDateInput");

    hiddenChoreId.value = choreObj.id;
    choreNameInput.value = choreObj.choreName;
    choreDateInput.value = choreObj.choreDate;
}

export default updateFormFields;


