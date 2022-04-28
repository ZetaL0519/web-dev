import WhoToFollowItem from "./WhoToFollowItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
        <ul class="list-group list-group-follow-suggestion ">
            <li class="list-group-item fg-white fg-font-bold">
                Who To Follow
            </li>
            ${
                who.map(who => {
                    return(WhoToFollowItem(who));
                }).join('')
            }
        </ul>
    `);
}
export default WhoToFollowList;