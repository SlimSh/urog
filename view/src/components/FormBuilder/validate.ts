import { IValidateForm } from './IForm';
export default function validate(val: any, rules: IValidateForm) {
        for (const key in rules) {
            switch (key) {
                case 'maxL':
                    val.length > rules[key].value && console.error(rules[key].message(rules[key].value));
                    break;
                case 'minL':
                    val.length < rules[key].value && console.error(rules[key].message(rules[key].value));
                    break;
                case 'phone':
                    val && false;
                    break;
                case 'email':
                    
                    break;
                case 'callback':
                    
                    break;
                
                default:
                    break;
            }
        }
}