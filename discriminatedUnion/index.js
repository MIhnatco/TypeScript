var ok = {
    kind: "ok",
    greeting: "Welcome to the platform!"
};
var passwordTooShort = {
    kind: "passwordComplexityFailure",
    message: "Password must be at least 10 characters"
};
var exists = {
    kind: "usernameExists",
};
function showMesage(msg) {
    switch (msg.kind) {
        case "ok":
            console.log("".concat(msg.greeting));
            break;
        case "passwordComplexityFailure":
            console.log("".concat(msg.message));
            break;
        case 'usernameExists':
            console.log("That username already exists");
            break;
    }
}
showMesage(ok);
showMesage(passwordTooShort);
showMesage(exists);
