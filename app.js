document.getElementById("like-btn")
.addEventListener("click", function(){
    const likeCount = document.getElementById("like-counter").innerText;

    let likes = parseInt(likeCount);
    
    likes++;

    document.getElementById("like-counter").innerText = likes;
})


document.getElementById('comment-btn')
.addEventListener("click", function(){

    const comments = document.getElementById("comment-counter").innerText;

    let commentCount = parseInt(comments);
    commentCount++;

    document.getElementById("comment-counter").innerText = commentCount;
})





