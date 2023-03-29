
//  const API_key = `AIzaSyC63RHmWuZg9mYGoEQ2v-FHfJvPIUiyl_w`;



const video_details = document.getElementById("video_details") 

const playVideo = () =>{

let {snippet,videoId} = JSON.parse(localStorage.getItem("clicked_item"))

// console.log(data);

let title = snippet.title;
let description = snippet.description;

let iframe = document.createElement("iframe");

let tit = document.createElement("h2");
tit.innerText = title;
 let des = document.createElement("p");
 des.innerText = description;



iframe.src= `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
iframe.width = "90%";
iframe.height = "70%";
iframe.style.marginTop = "50px";
iframe.style.border = "3px solid black";
iframe.setAttribute("allowfullscreen",true);

video_details.append(iframe,tit,des);




};


async function ab(){

try{

let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC63RHmWuZg9mYGoEQ2v-FHfJvPIUiyl_w&maxResults=3
`);

let data = await res.json();

let items = data.items;

console.log("item:",items )

appendVideo(items)

}catch(error){

    console.log(error)
}



}

ab()

const appendVideo = (items) =>{



items.map((el)=>{

let {snippet,id:{videoId}}=el

console.log(snippet);

let iframe =  document.createElement("iframe");
iframe.src = `https://www.youtube.com/embed/${videoId}?`;

iframe.height = "177px";
iframe.width = "100%";
iframe.margin = "auto";
iframe.style.border = "1px solid black";


let div = document.createElement("div");

div.append(iframe);

document.getElementById("recommend").append(div)

})


} 






