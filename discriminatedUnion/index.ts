type AccountCreationMessage = 
{kind: "ok" , greeting: string} 
| {kind:"passwordComplexityFailure", message: string} 
| {kind: "usernameExists"}


const ok: AccountCreationMessage = {
    kind: "ok", 
    greeting: "Welcome to the platform!"
    }

const passwordTooShort: AccountCreationMessage = {
    kind: "passwordComplexityFailure", 
    message: "Password must be at least 10 characters"
    }

const exists: AccountCreationMessage = {
    kind: "usernameExists", 
  
    }


function showMesage(msg: AccountCreationMessage){
    switch(msg.kind){
        case "ok":
            console.log(`${msg.greeting}`);
            break;
        case "passwordComplexityFailure":
            console.log(`${msg.message}`);
            break;
        case 'usernameExists':
            console.log(`That username already exists`)
            break;
    }
}

showMesage(ok);
showMesage(passwordTooShort)
showMesage(exists)