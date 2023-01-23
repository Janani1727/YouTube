//'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]'






const container_div=document.getElementById("video_details")

const api=`AIzaSyC63RHmWuZg9mYGoEQ2v-FHfJvPIUiyl_w`

const searchVideos=async()=>{

    try{
        const query =document.getElementById('query').value

     const res=await fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api}`)
    
    const data =await res.json()

    const actual_data=data.items;

    appendVideos(actual_data)
     console.log(data)

    }
    catch(error){
        console.log(error)
    }


}

//searchVideos()

const appendVideos = (data)=>{

    container_div.innerHTML=null
    data.forEach(({snippet ,id})=>{

        const title=snippet.title;

        const videoId= id.videoId;
    
        const thumbnail=snippet.thumbnails.high.url;
    
        const channel_name= snippet.channelTitle;
        
    
        const div=document.createElement("div");
    
        const img=document.createElement("img");
        img.src=thumbnail
    
        const title_html=document.createElement("h4");
         title_html.innerText=title
    
        const channel_html=document.createElement("h5");
         channel_html.innerText=channel_name;

         let data = {

            videoId,
            snippet,
        
         };
        
         div.onclick = ()=>{
              storeclickVideo(data);
        }
        //  div.onclick=()=>{
        //     //console.log("clicked")
        //  }

         div.append(img,title_html,channel_html);
        
         container_div.append(div)
    })
 
  

}




const showVideo = (x)=>{

window.location.href = "video.html";

x = JSON.stringify(x);

localStorage.setItem("clicked_video",x)
}

function storeclickVideo(data){

    //console.log(data)

    localStorage.setItem("clicked_item",JSON.stringify(data));
    window.location.href = "video.html";
    
    }