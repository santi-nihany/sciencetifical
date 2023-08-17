import Landing from "../components/home-landing/Landing";
import Sections from "../components/home-landing/Sections";
import CreateProject from "../components/home-res/CreateProject";
import Info from "../components/home-landing/Info";

export default function Home() {
  const isAuthenticated = false;
  const researcher = true;
  return (
    <div>
      {isAuthenticated ? (
        <div>
          {researcher ? (
            <div className="mx-[4.8rem] mt-[2rem]">
              <CreateProject />
            </div>
          ) : (
            <div>hi participant</div>
          )}
        </div>
      ) : (
        <>
          <Landing />
          <Info />
          <Sections />
        </>
      )}
    </div>
  );
}
