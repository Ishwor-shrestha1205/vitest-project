import { useState } from "react";
import { $fetch } from "ohmyfetch";
import { Post } from "../types";

export const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchPosts = async () => {
    setIsLoading(true);
    const posts = await $fetch<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(posts);

    setIsLoading(false);
  };

  return (
    <>
      <h1>MSW Testing Library Example</h1>
      {isLoading && <span aria-label="loading">Loading...</span>}
      {posts.length > 0 &&
        posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      <button onClick={() => fetchPosts()}>Fetch Posts</button>
    </>
  );
};
