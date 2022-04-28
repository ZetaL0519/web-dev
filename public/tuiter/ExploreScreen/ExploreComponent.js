import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11">
                    <div class="input-group wd-rounded-corners-all-around">
                        <span class="input-group-text bg-light-gray"><i class="fa fa-search"></i></span>
                        <input type="text" class="form-control form-control-search wd-rounded-corners-all-around" placeholder="Search Tuiter">
                    </div>
                </div>
                <div class="col-1">
                    <a href="#"><i class="fa fa-cog fa-2x" style="color: rgba(255, 255, 255, 0.829)"></i></a>
                </div>
            </div>
            <nav class="navbar navbar-expand">
                <ul class="navbar-nav mt-2">
                    <li class="nav-item active pe-5"><a class="nav-link " href="#">For you</a></li>
                    <li class="nav-item pe-5"><a class="nav-link" href="#">Trending</a></li>
                    <li class="nav-item pe-5"><a class="nav-link" href="#">News</a></li>
                    <li class="nav-item pe-5"><a class="nav-link" href="#">Sports</a></li>
                    <li class="nav-item d-none d-md-block pe-5"><a class="nav-link" href="#">Entertainment</a></li>
                </ul>
            </nav>

            <div class="card">
                <img src="../image/spaceX.jpg" width="100%">
                <div class="wd-text-top"><b>SpaceX's Starship</b></div>
            </div>

           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
