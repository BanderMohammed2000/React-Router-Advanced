// useNavigation: يسمح لنا بإكتشاف سواء كنا في مرحلة انتقالية نشطة او اذا لم يكن لدينا انتقال نشط جار
import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
function RootLayout() {
  //   const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
