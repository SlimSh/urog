
function dfPO (data: any) {
    return {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
}


export async function getAllUsers() {
    let users = await fetch("/users/all");
    return users.json();
};

export async function removeUser(_id: string) {
    const rawResponse = await fetch('users/remove', dfPO({id:_id}));
    const result = await rawResponse.json();
    return result;
};

export async function signUp(user: any) {
    const addUserReq = await fetch('auth/signUp', dfPO(user));
    const result = await addUserReq.json();

    return result;
}
