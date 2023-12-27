var messages = [
    { content: "Hello", timestamp: 1624567890 },
    { content: "How are you?", timestamp: 1624567900 },
    { content: "TypeScript is awesome!", timestamp: 1624567910 }
];
// Iterate over messages and print the content of each message
for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
    var message = messages_1[_i];
    console.log(message.content);
}
