import { Models } from "appwrite";
// import {
//   useDeleteSavedPosts,
//   useGetCurrentUser,
//   useSavePosts,
// } from "@/lib/react-query/queriesAndMutation";
import { useLikePosts } from "@/lib/react-query/queriesAndMutation";
import { useState } from "react";

const PostStats = ({
  posts,
  userId,
}: {
  posts: Models.Document;
  userId: string;
}) => {
  const likesList = posts.likes.map((user: Models.Document) => user.$id);

  const [likes, setLikes] = useState(likesList);
  const [isSaved] = useState(false);

  const { mutate: likePost } = useLikePosts();

  // const { mutate: savePost } = useSavePosts();
  // const { mutate: deleteSavedPost } = useDeleteSavedPosts();

  // const { data: currentUser } = useGetCurrentUser();

  const handleLikePost = (e: React.MouseEvent) => {
    e.stopPropagation();

    let newLikes = [...likes];

    const hasLiked = newLikes.includes(userId);

    if (hasLiked) {
      newLikes = newLikes.filter((like) => like !== userId);
    } else {
      newLikes.push(userId);
    }
    setLikes(newLikes);
    likePost({ postId: posts.$id, likesArray: newLikes });
  };

  const handleSavePost = () => {};

  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5">
        <img
          src={
            likes.includes(userId)
              ? "/assets/icons/liked.svg"
              : "/assets/icons/like.svg"
          }
          alt="like"
          height={20}
          width={20}
          onClick={handleLikePost}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">{likes.length}</p>
      </div>
      <div className="flex gap-2">
        <img
          src={`${
            isSaved ? "/assets/icons/saved.svg" : "/assets/icons/save.svg"
          }`}
          alt="save"
          height={20}
          width={20}
          onClick={handleSavePost}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium"></p>
      </div>
    </div>
  );
};

export default PostStats;
