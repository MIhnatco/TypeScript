/**
 * Represents different types of content, including "Article," "Image," and "Video."
 * @typedef {object} Content
 * @property {"Article"} kind - The type of content.
 * @property {string} title - The title of the content.
 * @property {string} author - The author of the article (for "Article" kind).
 * @property {string} content - The text content of the article (for "Article" kind).
 * @property {string} url - The URL of the image or resource (for "Image" and "Video" kinds).
 * @property {string} caption - The caption for the image (for "Image" kind).
 * @property {string} videoUrl - The URL of the video (for "Video" kind).
 * @property {number} duration - The duration of the video in minutes (for "Video" kind).
 */

type Content = {kind: "Article"; title: string; author: string; content: string} 
| {kind: "Image"; title: string, url: string; caption: string} 
| {kind: "Video"; title: string, videoUrl: string; duration: number}

const article: Content = {
    kind: "Article",
    title: "Night Sky", 
    author: "John McDoe", 
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

const image: Content = {
    kind: "Image", 
    title: "Scream",
    url: "https://en.wikipedia.org/wiki/The_Scream",
    caption: "Edward Munch"

}

const video: Content = {
    kind: "Video", 
    title: "Guitar Music", 
    videoUrl: 'https://www.youtube.com/watch?v=ZVPjc_rqkNc', 
    duration: 1.5
}

/**
 * Displays information about different types of content.
 * @param {Content} element - The content to display.
 */
function displayContent(element: Content){
    switch(element.kind){
        case "Article":
            console.log("Article:")
            console.log(`Title: ${element.title}`)
            console.log(`Author: ${element.author}`)
            console.log(`Text: ${element.content}`)
            break;

        case "Image":
            console.log("Image:")
            console.log(`Title: ${element.title}`)
            console.log(`URL: ${element.url}`)
            console.log(`Caption: ${element.caption}`)
            break;

        case "Video":
            console.log("Video:")
            console.log(`Title: ${element.title}`)
            console.log(`Video URL: ${element.videoUrl}`)
            console.log(`Duration: ${element.duration}`)
            break;

    }
}


displayContent(article);
displayContent(image);
displayContent(video);