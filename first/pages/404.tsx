import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <p>we couldn&apos;t find the right url</p>
      <Link href="/">back to home ? </Link>
    </div>
  );
};

export default NotFound;
