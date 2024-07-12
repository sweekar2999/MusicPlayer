let prevbtn=document.querySelector("#prevbtn");
let playpausebtn=document.querySelector("#playpausebtn");
let nextbtn=document.querySelector("#nextbtn");
let audioplay=document.querySelector("#audioPlayer");
let img=document.querySelector("img");
let inp=document.querySelector("input");
let searchbtn=document.querySelector("#searchSong");
let songs=[
    {
        name:"gummo",
        src :'gummo.mp3',
        imageurl:"https://imgs.search.brave.com/DoqNUpPvVop41OrHNlauqNnadjesKVHTmsTfocm-fEc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY2FwaXRhbHh0/cmEuY29tLzIwMTgv/NDcvdGVrYXNoaS02/aXg5aW5lLTE1NDMy/MzI2Nzktdmlldy0w/LmpwZw"
    },
    {
        name:"9:45",
        src:"prabh.mp3",
        imageurl:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieJr7eW4I7v0zmracn_P7McmrfunvYXRWjKrFxCBiWekLQ30BHitiZ1CGTWKri-4TQkVXPRasXPA0t5dnsbuI3zkSQ4YTVtfTnibRnki56r2bVCNVJOmPKrljT5eYGSkac8_pMMu1oymbQ8NEpPftvdhVLbve1AjHFrbdUScGS4VKwekhGUSJoq3rJUSY/s320/945%20Lyrics%20-%20Prabh%20Singh.jpg"
    },
    {
        name:"Crazy Story",
        src:"kingVon.mp3",
        imageurl:"https://imgs.search.brave.com/7VfbV5geJgUnhYqi7YRu2FfLXFlIsAAY4YESZT6EDzs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQva2lu/Zy12b24tbXVzaWNp/YW4tbWkyeDV6a3R6/YTg1em96by5qcGc"
    },
    {
        name:"Band4Band",
        src:"central.mp3",
        imageurl:"https://imgs.search.brave.com/c-dANoSUU9XimjPoq1BRuTeDA4GdS8DKUrb-aZV9db4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBo/b3BzaW5jZTE5ODcu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA1L3VubmFt/ZWQtMzMtMzM0eDUw/MC5qcGc"
    }
]
searchbtn.addEventListener("click",()=>{
    console.log(inp.value);
    let searchData=inp.value.toLowerCase();
    const foundSong=songs.find((song)=>{
        return song.name.toLowerCase().includes(searchData);
    })
    console.log(foundSong);
    if(foundSong){
        let id=songs.indexOf(foundSong);
        playmusic(id);
    }
    else{
        alert("Music not found");
    }
    
})
function playmusic(index){
    // img.src=songs[index].imageurl;
    img.setAttribute("src",songs[index].imageurl);
    // audioplay.src=songs[index].src;
    audioplay.setAttribute("src",songs[index].src);

    audioplay.play();
}
/* we use innerHTML when we just want to display entire content  and dont want to modify
contionously*/

function next(){
   ci=(ci+1)%songs.length;
   playmusic(ci);

}
function prev(){
    ci=(ci-1+songs.length)%songs.length;
    playmusic(ci);
 }
 function playNpause(){
    if(audioplay.paused){
       audioplay.play();
       playpausebtn.innerHTML="pause";
    }
    else{
        audioplay.pause();
        playpausebtn.innerHTML="play";
    }
 }
 prevbtn.addEventListener('click',prev);
playpausebtn.addEventListener('click',playNpause);
nextbtn.addEventListener('click',next);
