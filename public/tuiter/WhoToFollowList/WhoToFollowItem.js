// this is the single who to follow item
const WhoToFollowItem = (who) => {
    return (`
        <div class= "list-group-item">
            <div class= "row">
                <div class= "col-xl-3 col-lg-3 d-md-none d-lg-block mt-1">
                    <img src=${who.avatarIcon} class="profile-pic">
                </div>

            <div class= "col-xl-6 col-lg-4 mt-1">
                <div>
                    <span>${who.userName}</span>
                        <i class="fa fa-check-circle fg-font-bold"></i>
                    <br>
                    <span class= "fg-light-gray">@${who.handle}</span>
                </div>
            </div>

            <div class="col-xxl-3 col-xl-3 col-lg-3 pull-right">
                <button type="submit" class="rounded-pill btn btn-primary mt-2">Follow</button>
            </div>
            </div>
        </div>
    `);
}
export default WhoToFollowItem