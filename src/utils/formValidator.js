/* eslint-disable react-hooks/rules-of-hooks */
import * as constants from '../store/CONSTANTS'

function formValidator(value, isPasswordArea) {
    let text='';   
    if(!isPasswordArea) {
        if(value.length > constants.MAX_NICK_NAME_LENGTH) {
            text = `превышена максимальная длина имени ${constants.MAX_NICK_NAME_LENGTH} символов`; 
            return text;
        } 
        if((!value.match(constants.REGULAR_EXPRESSION_FOR_NICK_NAME) && value.length !== 0)) {
            text = 'используйте только латинские символы, цифры или _';
            return text;
        }    
    } 
    if(isPasswordArea) {
        if(value.length < constants.MIN_PASSWORD_LENGTH || value.length > constants.MAX_PASSWORD_LENGTH) {
                text = `длина пароля должна быть ${constants.MIN_PASSWORD_LENGTH} - ${constants.MAX_PASSWORD_LENGTH} символов`; 
                return text;
        } 
        if((!value.match(constants.REGULAR_EXPRESSION_FOR_PASSWORD) && value.length !== 0)) {
                text =  'пароль не соответствует требованиям';           
                return text;
        }  
    }

    return text;
}

export default formValidator;