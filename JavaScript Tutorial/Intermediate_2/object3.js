let myYoutubeVideoOne =
{
    title: 'Loops in javascript',
    videoLength: 15,
    videoCreator: 'Sameer Rathod',
    videoDescription: 'this is a video description and a long one.',

}


let myYoutubeVideoTwo =
{
    title: 'Functions in javascript',
    videoLength: 10,
    videoCreator: 'Sameer Rathod',
    videoDescription: 'this is a video description and a long one.',

}

//console.log(myYoutubeVideo);
//console.log(`hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);


//This function takes object as argument and returns the object.
let changeVideoLength = function (myObject) {
    return
    {
        //formatOne: `Time of this video is : ${myObject.videoLength + 2}`,
        formatTwo: `Time of this video is : ${myObject.videoLength + 1}`
    }

}

let addOne = changeVideoLength(myYoutubeVideoTwo)      //passed object as argument.
console.log(addOne.formatTwo);

//Time of this video is: 11





