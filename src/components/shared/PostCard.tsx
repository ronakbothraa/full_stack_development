import { useUserContext } from "@/context/AuthContext";
import { formatDate } from "@/lib/utils";
import { Models } from "appwrite";
import { Link } from "react-router-dom";
import PostStats from "./PostStats";
import { storage } from "@/lib/appwrite/config";

const PostCard = ({ post }: { post: Models.Document }) => {
  const { user } = useUserContext();

  console.log("storage: ", storage.getFileDownload("67cc2d5a0021336a641b", post.$id))
  console.log("Posts: ", post);
  // console.log("image url: ", `https://fra.cloud.appwrite.io/v1/storage/buckets/67cc2d5a0021336a641b/files/${post.$id}/view?project=67cc2c200020a86ca20e&mode=admin`);

  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${post.creator.$id}`}>
            <img
              src={
                post?.creator?.ImageUrl ||
                "/assets/icons/profile-placeholder.svg"
              }
              alt="creator"
              className="rounded-full w-12 lg:h-12"
            />
          </Link>
          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              {post.creator.name}
            </p>
            <div>
              <p className="subtle-semibold lg:small-regular">
                {formatDate(post.$createdAt)}
              </p>
              -
              <p className="subtle-semibold lg:small-regular">
                {post.location}
              </p>
            </div>
          </div>
        </div>
        <Link
          to={`/update-post/${post.$id}`}
          className={`${user.id !== post.creator.$id ? "hidden" : ""}`}
        >
          <img src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
        </Link>
      </div>
      <Link to={`/post/${post.$id}`}>
        <div className="small-medium lg:base-medium py-5">
          <p>{post.caption}</p>
          <ul className="flex gap-1 mt-2">
            {post.tags.map((tag: string) => (
              <li key={tag} className="text-light-3">
                #{tag}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={`https://fra.cloud.appwrite.io/v1/storage/buckets/67cc2d5a0021336a641b/files/${post.image_id}/view?project=67cc2c200020a86ca20e&mode=admin` || "assets/icons/profile-placeholder.svg"}
          alt="post image"
          className="post-card_img"
        />
      </Link>

      <PostStats posts={post} userId={user.id}/>
    </div>
  );
};

export default PostCard;
