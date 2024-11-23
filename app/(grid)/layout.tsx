import GridContainer from "../components/defaults/GridContainer";
import Sidebar from "../components/nav/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen">
      <GridContainer cols={12} className="h-full">
        <Sidebar/>
        <div className="bg-amber-800 col-span-10 h-full">{children}</div>
      </GridContainer>
    </main>
  );
}
