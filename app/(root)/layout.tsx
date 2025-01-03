import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: "Hasnain", lastName: "Memon" }

  return (
    <main className="flex h-screen font-inter w-full">
        <Sidebar user={loggedIn} />

        <div className="flex flex-col size-full">
          <div className="root-layout">
            <Image src="/icons/logo.svg" alt="logo" width={30} height={30} />
            <div>
              <MobileNav user={loggedIn} />
            </div>
          </div>
        {children}
        </div>

    </main>
  );
}
