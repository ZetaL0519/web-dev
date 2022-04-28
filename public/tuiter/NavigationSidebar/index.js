const NavigationSidebar = (active) => {
    return(`
    <div class="list-group">
        <div class="list-group-item mt-2">
            <i class="fab fa-twitter fa-1x" ></i>
        </div>

        <a href="../HomeScreen/home.html" style="text-decoration:none">
        <div class="list-group-item ${active === 'home'? 'active':''}">
            <div class = "row">
                <div class="col-2">
                <i class="fa fa-home"></i>
                </div>
                <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                    Home
                </div>
            </div>
        </div>

        <a href="../ExploreScreen/explore.html" style="text-decoration:none">
        <div class="list-group-item ${active === 'explore'? 'active':''}">
            <div class = "row">
                <div class="col-2">
                <i class="fa fa-hashtag"></i>
                </div>
                <div class="fg-font-bold col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                    Explore
                </div>
            </div>
        </div>

        <a href="#" style="text-decoration:none">
        <div class="list-group-item ${active === 'notification'? 'active':''}">
            <div class = "row">
                <div class="col-2">
                <i class="fa fa-bell"></i>
                </div>
                <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                    Notifications
                </div>
            </div>
        </div>


    <a href="#" style="text-decoration:none">
        <div class="list-group-item ${active === 'message'? 'active':''}">
            <div class = "row">
                <div class="col-2">
                <i class="fa fa-envelope"></i>
                </div>
                <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                    Messages
                </div>
            </div>
        </div>

    <a href="#" style="text-decoration:none">
        <div class="list-group-item ${active === 'bookmark'? 'active':''}">
            <div class = "row">
                <div class="col-2">
                <i class="fa fa-bookmark"></i>
                </div>
                <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                    Bookmarks
                </div>
            </div>
        </div>

    <a href="#" style="text-decoration:none">
        <div class="list-group-item ${active === 'list'? 'active':''}">
            <div class = "row">
                <div class="col-2">
                <i class="fa fa-list"></i>
                </div>
                <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                    Lists
                </div>
            </div>
        </div>

    <a href="#" style="text-decoration:none">
        <div class="list-group-item ${active === 'profile'? 'active':''}">
            <div class = "row">
                <div class="col-2">
                <i class="fa fa-user"></i>
                </div>
                <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                    Profile
                </div>
            </div>
        </div>

    <a href="#" style="text-decoration:none">
        <div class="list-group-item ${active === 'more'? 'active':''}">
            <div class = "row">
                <div class="col-2">
                <i class="fa fa-circle"></i>
                </div>
                <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                    More
                </div>
            </div>
        </div>
    </div>

    <div class="d-grid mt-2">
        <a href="tweet.html" class="btn btn-primary btn-block rounded-pill"> Tweet</a>
    </div>

    `);
}
export default NavigationSidebar;
