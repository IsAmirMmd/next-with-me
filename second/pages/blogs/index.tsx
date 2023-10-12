import axios from "axios";
import { GetStaticPropsContext } from "next";

interface BlogList {
  blogs: AllBlogs[];
}

interface AllBlogs {
  id: number;
  title: string;
  description: string;
}

const BlogIndex = ({ blogs }: BlogList) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-center">this is blog pages</h2>
      {blogs.map((blog) => {
        return <div key={blog.id}>{blog.title}</div>;
      })}
    </div>
  );
};

export default BlogIndex;

export async function getServerSideProps(context: GetStaticPropsContext) {
  const { data } = await axios.get("http://localhost:4000/blogs");

  return {
    props: {
      blogs: data,
    },
  };
}
