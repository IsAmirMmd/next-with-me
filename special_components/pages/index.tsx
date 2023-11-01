import Image from "next/image";
import staticImage from "../public/images/1.jpg";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";

type Props = {
  title: string;
  desc: string;
};

export default function Home({ title, desc }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Head>
      <p>this is picture box</p>
      <Image
        //! it will blur the main photo in static src
        placeholder="blur"
        quality={50}
        width={800}
        height={400}
        src={staticImage}
        alt="static iamge"
      />
      {["1", "2", "3"].map((path) => {
        return (
          <Image
            src={`/images/${path}.jpg`}
            width={800}
            height={400}
            key={path}
            alt={path}
            quality={50}
            //? it will show the blued photo of url before loading whole picture(in dynamic src)
            placeholder="blur"
            blurDataURL={`/images/${path}.jpg`}
            // ? loading ...
            loading="lazy" //! better to use it than "eager"
          />
        );
      })}

      <div>
        <h1>diffrent type of layout in Image tag</h1>
        <div>
          <h2>layout : fixed</h2>
          <Image src={staticImage} layout="fixed" alt="" />
        </div>

        <div>
          <h2>layout : intrinsic</h2>
          <Image
            src={staticImage}
            layout="intrinsic"
            width={200}
            height={200}
            alt=""
          />
        </div>

        {/* depends on parent */}
        <div className="w-[200px] h-[400px] relative">
          <h2 className="z-50 absolute">layout : fill</h2>
          <Image src={staticImage} layout="fill" alt="" />
        </div>
      </div>
    </div>
  );
}

//? we would set meta and title using this code ->
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      title: "it can be anything",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, fugiat.",
    },
  };
}
