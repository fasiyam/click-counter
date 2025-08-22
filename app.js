document.getElementById("like-btn")
.addEventListener("click", function(){
    const likeCount = document.getElementById("like-counter").innerText;

    let likes = parseInt(likeCount);
    
    likes++;

    document.getElementById("like-counter").innerText = likes;
})




