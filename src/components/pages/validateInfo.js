export default function validateInfo(values){
    let errors = {};

    if(!values.username.trim()){
        errors.username = 'Username Required!'
    }
    if(!values.email){
        errors.email = 'Email Required!'
    }
    if(!values.password){
        errors.password = 'Password Required!'
    }else if (values.password < 6) {
        errors.password = 'Password must be 6 characters above'
    }
    return errors;
}