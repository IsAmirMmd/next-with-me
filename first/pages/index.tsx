import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/blogs");
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>this is my home page</div>
      <ul>
        <li>
          <Link href="about" legacyBehavior>
            <a>about page</a>
          </Link>
        </li>
        <li>
          <Link href="posts" legacyBehavior>
            <a>posts page</a>
          </Link>
        </li>
        <li>
          <Link href="posts/1" legacyBehavior>
            <a>post - 1</a>
          </Link>
        </li>
        <li>
          <Link href="blogs" legacyBehavior>
            <a>main blog </a>
          </Link>
        </li>
        <li>
          <Link href="blogs/with/params" legacyBehavior>
            <a>blog with params</a>
          </Link>
        </li>
        <li>
          <Link href="/1" legacyBehavior>
            <a>user with id - 1</a>
          </Link>
        </li>
        <li>
          <Link href="/1/review/1" legacyBehavior replace>
            <a>
              (back to last visited link #replace )user with id - 1 with review
              id : 1
            </a>
          </Link>
        </li>
        <li>
          <button onClick={clickHandler}>
            [push] to blogs(using js not link and a tag)
          </button>
        </li>
      </ul>
    </main>
  );
}
