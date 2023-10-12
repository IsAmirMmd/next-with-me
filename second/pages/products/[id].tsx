import axios from "axios";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

//? define type for episode data
interface ItemStatus {
  product: {
    id: number;
    title: string;
    price: string;
  };
  id: number;
}

//? get episode from ssr in dynamic route
const Product = ({ product }: ItemStatus) => {
  // !we use loading bar when fallback is "true"
  const router = useRouter();
  if (router.isFallback) return <p>loading</p>;

  return (
    <div className="absolute w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-slate-950 rounded-lg">
      <p>id : {product.id}</p>
      <p>title : {product.title}</p>
      <p>price : {product.price}$</p>
    </div>
  );
};

export default Product;

//! we use getStaticPaths in [this].tsx format
export async function getStaticPaths() {
  const { data } = await axios.get(`http://localhost:4000/products`);
  const paths = data.map((item: ItemStatus) => {
    return {
      params: { id: `${item.id}` },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

//^ use this as we have in past commit for getting data in serverside(ssr)
export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  const { data } = await axios.get(
    `http://localhost:4000/products/${params?.id}`
  );

  return {
    props: {
      product: data,
    },
    //^ in this situation it will regenerate the data from api
    //^ after coming any request ( update data in build time )
    //* if we log anything in this functon it would take [n] sec to show in console
    revalidate: 30,
  };
}
