export interface IFormProps {
    label?: string,
    method: string,
    url?: string,
    defaultParam?: IItemForm,
    data: IItemForm[],
    action?: any,
    className?: string,
    id?: string
    // renderFormData: void
}

export interface IItemForm {
    name?: string,
    label?: string,
    value?: string | number,
    type?: string,
    control?: string,
    placeholder?: string | number,
    field?: string,
    action?: any,
    event?: {
        name: string,
        callback: void 
    },
    validate?: IValidateForm
}


export interface IValidateForm {
    maxL?: {
        value: number,
        message(val: number): string
    },
    minL?: {
        value: number,
        message(val: number): string
    },
    require?: boolean,
    phone?: {
        value: string,
        message: string
    },
    email?: {
        value: boolean,
        message: string
    },
    callback?: {
        value (val: any): boolean,
        message: string
    }
}
export interface IFormState {}