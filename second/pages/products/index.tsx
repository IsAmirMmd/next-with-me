import axios from "axios";
import Link from "next/link";

interface ItemIndexProps {
  itemList: ItemStatus[];
}

interface ItemStatus {
  id: number;
  price: string;
  title: string;
}

const ProductIndex = ({ itemList }: ItemIndexProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center pb-4">
      <p className="text-lg font-bold text-center mb-4 mt-2">Mini Shop</p>
      <section className="bg-slate-950 p-4 rounded-lg">
        {itemList.map((item: ItemStatus) => {
          return (
            <div key={item.id} className="flex gap-2 items-center">
              <p className="pb-2 border-b border-slate-300 w-full pt-3">
                <Link href={`/products/${item.id}`}>
                  price : {item.price} - title : {item.title}
                </Link>
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ProductIndex;

export async function getStaticProps() {
  const { data } = await axios.get("http://localhost:4000/products");
  return {
    props: {
      itemList: data,
    },
  };
}
