var article = {
    kind: "Article",
    title: "Night Sky",
    author: "John McDoe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};
var image = {
    kind: "Image",
    title: "Scream",
    url: "https://en.wikipedia.org/wiki/The_Scream",
    caption: "Edward Munch"
};
var video = {
    kind: "Video",
    title: "Guitar Music",
    videoUrl: 'https://www.youtube.com/watch?v=ZVPjc_rqkNc',
    duration: 1.5
};
function displayContent(element) {
    switch (element.kind) {
        case "Article":
            console.log("Article:");
            console.log("Title: ".concat(element.title));
            console.log("Author: ".concat(element.author));
            console.log("Text: ".concat(element.content));
            break;
        case "Image":
            console.log("Image:");
            console.log("Title: ".concat(element.title));
            console.log("Author: ".concat(element.url));
            console.log("Text: ".concat(element.caption));
            break;
        case "Video":
            console.log("Video:");
            console.log("Title: ".concat(element.title));
            console.log("Author: ".concat(element.videoUrl));
            console.log("Text: ".concat(element.duration));
            break;
    }
}
displayContent(article);
displayContent(image);
displayContent(video);
