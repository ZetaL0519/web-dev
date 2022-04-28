import posts from "./post.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(`
        <ul class="list-group list-group-content">
            ${
                posts.map( post => {
                  return (PostSummaryItem(post));
                }).join('')
            }
        </ul>
    `);
}
export default PostSummaryList;