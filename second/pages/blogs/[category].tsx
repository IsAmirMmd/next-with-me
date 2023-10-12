import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

interface BlogList {
  category?: string;
  blogs: AllBlogs[];
}

interface AllBlogs {
  id: number;
  title: string;
  description: string;
}

const BlogIndex = ({ blogs, category }: BlogList) => {
  const router = useRouter();

  return (
    <div>
      <h2 className="text-xl font-bold text-center">
        this is blog pages of : {category}
      </h2>
      {blogs.map((blog) => {
        return <div key={blog.id}>{blog.title}</div>;
      })}
    </div>
  );
};

export default BlogIndex;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;

  const { data } = await axios.get(
    `http://localhost:4000/blogs?category=${params?.category}`
  );

  return {
    props: {
      category: params?.category || undefined,
      blogs: data,
    },
  };
}
