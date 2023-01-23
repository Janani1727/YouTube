
// const playVideo=() =>{

//     let data=JSON.parse(localStorage.getItem("clicked_video"));

//     console.log(data);
// }

const api = `AIzaSyC63RHmWuZg9mYGoEQ2v-FHfJvPIUiyl_w`;

const video_details = document.getElementById("video_details") 
console.log(video_details)

const playVideo = () =>{

let {videoId} = JSON.parse(localStorage.getItem("clicked_item"))

//console.log(data);


let iframe = document.createElement("iframe");

iframe.src= `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
iframe.width = "100%";
iframe.height = "100%";
// iframe.style.marginTop = "50px";
// iframe.style.border = "3px solid black";
iframe.setAttribute("allowfullscreen",true);

video_details.append(iframe);




};
