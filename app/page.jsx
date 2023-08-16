import HeaderHome from './components/home-landing/HeaderHome'
import Landing from './components/home-landing/Landing'
import Sections from './components/home-landing/Sections'
import CreateProject from './components/home-res/CreateProject'


export default function Home() {
  const isAuthenticated = false;
  const researcher = true;
  return (
    <div>
        <HeaderHome  auth={isAuthenticated}/>
      {isAuthenticated ? (
        <div >
          { researcher ? (
              <div className='mx-[4.8rem] mt-[2rem]'>
                <CreateProject/>
              </div>
            ):(
            <div>hi participant</div>
            )
          }
        </div>
      ) : (
        <>
          <Landing />
          <Sections />
        </>
      )}
    </div>
  )
}
