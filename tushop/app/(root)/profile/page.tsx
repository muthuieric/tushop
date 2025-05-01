import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import EditProfileForm from "@/components/forms/EditProfileForm";

async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/signin"); // Redirect to login page
  }

  const userId = session.user.id;

  return (
    <div>
      <EditProfileForm userId={userId} />
    </div>
  );
}

export default ProfilePage;
