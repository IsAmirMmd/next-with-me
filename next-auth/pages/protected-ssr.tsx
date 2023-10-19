import { getSession, useSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";

const ProtectedSSR = () => {
  const { data: session, status } = useSession();

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
    >
      welcome {session?.user?.name}
    </div>
  );
};

export default ProtectedSSR;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  //! checking from the server side
  if (!session) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callbackUrl=http://localhost:3000/protected-ssr",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
