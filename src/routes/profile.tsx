import { cookies } from "@/modules/auth";
import { User } from "../types";
import { useLoaderData } from "react-router-dom";

type MyUserResponse = {
  message: string;
  user: User;
};

export async function loader() {
  const tokern = cookies.get("token");
  const response = await fetch(
    `
        ${import.meta.env.VITE_BACKEND_API_URL}/auth/myprofile`,
    {
      headers: { Authorization: `Bearer ${tokern}` },
    }
  );
  const myUserResponse: MyUserResponse = await response.json();

  return { myUserResponse };
}

export function ProfileRoute() {
  const { myUserResponse } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <>
      <h2>My user Account Detail</h2>
      <pre>{JSON.stringify(myUserResponse, null, 2)}</pre>
    </>
  );
}
