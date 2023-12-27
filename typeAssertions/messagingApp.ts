const messages: any[] = [
    { content: "Hello", timestamp: 1624567890 },
    { content: "How are you?", timestamp: 1624567900 },
    { content: "TypeScript is awesome!", timestamp: 1624567910 }
  ];
  
  // Iterate over messages and print the content of each message

  for (const message of messages){
    console.log(message.content as string)
  }