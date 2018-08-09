import * as React from "react";
import { IFormProps, IFormState, IItemForm } from './IForm';
import validate from './validate';
import { Icon, Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

export default class FormBuilder extends React.Component<IFormProps, IFormState>{
  state: any = {
    data: {}
  };

  constructor(props: IFormProps) {
    super(props);
  }


  handleChange = (e: any, i: any) => { 
    const {name, value} = e.target;
    this.validateInput(i.validate, e.target.value) &&
    this.setState( (prevState: any) => {
      prevState.data[name] = value;
      return prevState;     
    });
  }

  getPlaceholder(i:IItemForm){
    const { placeholder } = i.placeholder ? i : this.props.defaultParam;
    switch (placeholder) {
      case 1:
        return i['label']
        break;
      case 0:
        return ''
        break;
      default:
        return placeholder;
        break;
    }
  }

  validateInput(i: any, value: any) {
    if(Object.keys(i).length) {
      const result = validate(value, i);
      // if(i.maxL && (value.length < i.maxL)) return {err:'Error label'};
    }
    return true;
  }

  renderInputField(i:IItemForm, key: number) {
    const validate = i.validate || this.props.defaultParam.validate || {}
    return <Form.Field 
      control = { Input }
      name = {i.name}
      label = {i.label}
      placeholder = {this.getPlaceholder(i)}
      value = {this.state.data[i.name] || ''}
      key = {key}
      type = {i.type}
      required = { validate && validate.require }
      onChange = {this.handleChange}
      validate = { validate }
      />
  }  
  
  renderButton(i:IItemForm, key: number) {
    const {action} = i.action ? i : this.props;
    return <Button onClick = {action(this.state.data)} key ={key}>{i.label}</Button>
  }

  renderField(i:IItemForm, key: number) {
    const { field } = i.field ? i : this.props.defaultParam;
    switch (field) {
      case 'Input':
        return this.renderInputField(i, key);
        break;
      case 'Button':
        return this.renderButton(i, key);
        break;
    
      default:
        break;
    }
  }

  renderFormData(data: IItemForm[]){
    let result;
    if (Array.isArray(data)){
        result = data.map((i, key)=>{
        return this.renderField(i,key)
      });
    }
    return result;
  }

  render() {
    return (
      <Form className={this.props.className}>
        {this.renderFormData(this.props.data)}
      </Form>
    );
  }
}
