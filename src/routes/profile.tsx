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
  // const user: User = myUserResponseJSON.data;

  return { myUserResponse: myUserResponse };
}

export function ProfileRoute() {
  const { myUserResponse } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div>
      <div className="p-6 mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Profile</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="text-lg font-medium text-gray-600">Username:</div>
            <div className="ml-2 text-lg text-gray-800">{myUserResponse.user.username}</div>
          </div>
          <div className="flex items-center">
            <div className="text-lg font-medium text-gray-600">Email:</div>
            <div className="ml-2 text-lg text-gray-800">{myUserResponse.user.email}</div>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Products You Might Want to Buy</h3>
    </div>
  );
}
