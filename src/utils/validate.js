export const FormValidation=(email, password)=>{
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passwordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const nameRegex=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
    if(!emailRegex) return "Email is not valid";
    if(!passwordRegex) return "Password is not valid";
    if(!nameRegex) return "Name is not valid"
    return null;
}