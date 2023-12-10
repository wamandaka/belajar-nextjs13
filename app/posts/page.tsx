import { CardList } from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const resp = await fetch(baseURL, {
    cache: "no-store",
  });
  const posts: Iposts[] = await resp.json();
  return (
    <>
      <h1>Posts page</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <p>{post.id}</p>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId} />
          </CardList>
        );
      })}
    </>
  );
};

export default Posts;
