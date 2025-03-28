import Loader from "@/components/shared/Loader";
import { useUserContext } from "@/context/AuthContext";
import { useGetPostById } from "@/lib/react-query/queriesAndMutation";
import { formatDate } from "@/lib/utils";
import { Link, useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || "");
  const { user } = useUserContext();
  return (
    <div className="post_details-container">
      {isPending ? (
        <Loader />
      ) : (
        <div className="post_details-card">
          <img src={post?.image_url} alt="post" />
          <div className="post_details-info">
            <div className="flex-between w-full"></div>
            <Link
              to={`/profile/${post?.creator.$id}`}
              className="flex items-center gap-3"
            >
              <img
                src={
                  post?.creator?.$image_url ||
                  "/assets/icons/profile-placeholder.svg"
                }
                alt="creator"
                className="rounded-full w-12 lg:h-12"
              />

              <div className="flex flex-col">
                <p className="base-medium lg:body-bold text-light-1">
                  {post?.creator.name}
                </p>
                <div>
                  <p className="subtle-semibold lg:small-regular">
                    {formatDate(post?.$createdAt! || "")}
                  </p>
                  -
                  <p className="subtle-semibold lg:small-regular">
                    {post?.location}
                  </p>
                </div>
              </div>
            </Link>

            <Link
              to={`update-post/${post?.$id}`}
              className={user.id !== post?.creator.$id ? "hidden" : ""}
            >
              <img src="/assets/icons/edit.svg" width={24} height={24} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
