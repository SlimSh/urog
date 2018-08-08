const passwordField = {
  name: "password",
  type: "password",
  label: "Пароль",
  placeholder: 1
};

const emailField = {
  name: "email",
  label: "Электронная почта",
  type: "email",
  validate: {
    maxL: {
      value: 10,
      message: (val: any)=>`Длина строки не должна превышать ${val} символов`
    },
    minL: {
      value: 2,
      message: (val: any)=>`Длина строки должна быть не менее ${val} символов`
    },
    require: true,
    phone: {
      value: 'rus',
      message: `Поле должно быть заполненно в формате +7 (xxx) xxx xx xx`
    },
    email: {
      value: true,
      message: `Необходимо ввести email`
    },
    callback: {
      value: (val:any ) => {
        if (val.lenght > 2) return true;
      },
      message: `Здесь можно создать свою валидацию`
    }
  }
};

const defaultParam = {
  field: "Input",
  placeholder: 1,
};

const buttonReg = {
  field: "Button",
  label: "Регистрация"
};
const buttonSignIn = {
  field: "Button",
  label: "Войти"
};

export const addUserForm = (call: any) => {
  return {
    label: "Регистрация пользователя",
    method: "POST",
    url: "/users/add",
    className: "add-user",
    id: "data-add-user-form",
    data: [
      {
        name: "name",
        label: "Имя пользователя",
        placeholder: "Ваше имя"
      },
      {
        name: "age",
        label: "Возраст",
        placeholder: 1,
        type: 'number'
      },
      emailField,
      passwordField,
      buttonReg,
      {
        name: "close",
        field: "Button",
        label: "Возраст",
      },
    ],
    defaultParam,
    action: call
  };
};

export const SignIn = (call: any) => {
  return {
    label: "Авторизация",
    method: "POST",
    url: "/auth/signIn",
    defaultParam,
    data: [emailField, passwordField, buttonSignIn],
    action: call,
    className: "add-user",
    id: "data-add-user-form"
  };
};
