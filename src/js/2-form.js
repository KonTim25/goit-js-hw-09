const formData = {
    email: "",
    message: ""
};

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";

    document.querySelector('input').value = formData.email;
    document.querySelector('textarea').value = formData.message;
}

document.querySelector('.feedback-form').addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

document.querySelector('.feedback-form').addEventListener('submit', (event) => {
    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    document.querySelector('input').value = '';
    document.querySelector('textarea').value = '';
    
    formData.email = "";
    formData.message = "";
});
