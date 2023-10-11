import { useRouter } from "next/router";

// ? slug in next.js

const BlogParams = () => {
  const { query } = useRouter();

  return (
    <div>
      this is test for this &nbsp;
      {JSON.stringify(query.params)}
    </div>
  );
};

export default BlogParams;
