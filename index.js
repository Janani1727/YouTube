// const API_key = `AIzaSyCKspbCf-Bya0SElHZXgQvHUWOUAFSqG6k`;


const API_key= `AIzaSyC63RHmWuZg9mYGoEQ2v-FHfJvPIUiyl_w`

const container_div = document.getElementById("container")

const SearchVideos = async () => {

try{

    const query = document.getElementById("query").value;
    

   const res = await fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${API_key}`)
   const data = await res.json();
   console.log(data);
   
  
   const actual_data = data.items;
   AppendVideos(actual_data)


}catch(error){

console.log(error)
}


}
// data is array of obj
const AppendVideos = (data) =>{

 
    container_div.innerHTML = null;

data.forEach( ({snippet ,id})  => {
    // console.log(el);

  

    const title = snippet.title;

    const videoId  = id.videoId;

    const thumbnail = snippet.thumbnails.high.url;


    const channel_name = snippet.channelTitle;

    // console.log(el)

    const div = document.createElement("div");
    const img = document.createElement("img");

    img.src = thumbnail;
   
    const title_html = document.createElement("h4");

    title_html.innerText = title;
    title_html.style.color  ="white";
    title_html.style.fontFamily =  'math';
 
    title_html.style.fontWeight = 200;

    const channel_html = document.createElement("h5");
    channel_html.innerText = channel_name;
    channel_html.style.color  ="white";
 

//for second page
    let data = {

       videoId,
       snippet,

    };

    div.onclick = ()=>{
    
        storeclickVideo(data);

    }


    div.append(img,title_html,channel_html);

   container_div.append(div)


})


}


function storeclickVideo(data){

localStorage.setItem("clicked_item",JSON.stringify(data));
window.location.href = "video.html";

}


const showVideo = (x)=>{

window.location.href = "video.html";

x = JSON.stringify(x);

localStorage.setItem("clicked_video",x)
}






    async function ab(){

        try{

            
        
            let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC63RHmWuZg9mYGoEQ2v-FHfJvPIUiyl_w&maxResults=20`);

     
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

        let tit = snippet.title;

        
        
       let title = document.createElement("h4");
       title.innerText = tit;
        


        let iframe =  document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`
        iframe.height = "180px";
        iframe.width = "90%";
        iframe.style.border = "1px solid black";
        iframe.style.marginTop = "10px";
       
        
        
        let div = document.createElement("div");
        
        div.append(iframe,title);
        
        document.getElementById("container").append(div)
        
        })
        
        
        } 
        