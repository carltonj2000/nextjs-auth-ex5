import { auth, signIn, signOut } from "@/app/auth";

function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <button className="border p-2 m-2 rounded" type="submit">
        Sign In
      </button>
    </form>
  );
}

function SignOut({ children }: { children: React.ReactNode }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="border p-2 m-2 rounded" type="submit">
        Sign out {children}
      </button>
    </form>
  );
}

export default async function Home() {
  let session = await auth();
  let user = session?.user?.email;
  return (
    <main className="flex flex-col gap-2 max-w-[960px] mx-auto items-center justify-center h-screen">
      <h1>Next Auth</h1>
      <div>{user ? <SignOut>{user}</SignOut> : <SignIn />}</div>
    </main>
  );
}
