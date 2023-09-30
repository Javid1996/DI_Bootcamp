// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)


class Video{
    constructor(title, uploader, time){
        this.time=time;
        this.uploader=uploader;
        this.title=title;
        
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}


let video1 = new Video('Avatar','James','3 hours');
    video1.watch();
let video2 = new Video('Titatic', 'Henry', '3.5 hours');
video2.watch();