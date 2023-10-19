import { useSession, signIn } from "next-auth/react";

const Profile = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === "loading") {
    return (
      <div
        className={`flex min-h-screen flex-col items-center justify-center p-24`}
      >
        LOADING...
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
    >
      this is profile page that only the authurized one have an access to this
      page !!!
    </div>
  );
};

export default Profile;
