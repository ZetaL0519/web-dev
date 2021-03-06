const PostItem = (post) => {
    return (
        `
        <li class="list-group-item">
        <!--profile picture-->
        <div class="row">
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-1 text-center">
                <img src=${post.profileImg} class="img-fluid profile-pic">
            </div>
            <!--tweet content-->
            <div class="fg-white col-xxl-10 col-xl-9 col-lg-9 col-md-10 col-sm-10 mt-1 px-1">
                <p>
                    <span class="fg-font-bold">${post.author} <i class="fa fa-check-circle"></i></span>
                    <span class="fg-light-gray">@${post.handle}</span>
                    <span class="fg-light-gray"> - ${post.time}</span>
                    </br>
                    ${post.tuit}
                </p>

                <!--retweet content-->
                <div>
                    <div class="card post-card mt-2">

                    ${post.title && post.summary ?

                    `
                    <img class="card-img-top card-picture" src=${post.postImg} alt= "...">

                    <div class="card-body">
                        ${post.title? `<h6 class= "class-title">${post.title}</h6>` : ""}
                        ${post.summary? `<p class="card-text fg-light-gray">${post.summary}</p>` : ""}
                    </div>
                    ` : `<img class="card-img-top card-picture" src=${post.postImg} style="border-radius: 18px">`
                    }
                </div>

            <div class="row mt-3 mb-2">
                <div class="col-3">
                    <i class="far fa-comment mx-2 fg-icon-color"></i>
                    <span>${post.commentCount}</span>
                </div>

                <div class="col-3">
                    <i class="far fa-retweet mx-2 fg-icon-color"></i>
                    <span>${post.retweetCount}</span>
                </div>

                <div class="col-3">
                    <i class="far fa-heart mx-2 fg-icon-color"></i>
                    <span>${post.likeCount}</span>
                </div>

                <div class="col-3">
                    <i class="fa fa-share-alt mx-2" style="font-size:16px;color:lightgray"></i>
                </div>
            </div>
            </div>

        </div>
        </li>
        `
    );
}
export default PostItem;