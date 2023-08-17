import image from "../../../public/images/ethics.png"

const EthicsForm = () => {
  return (
    <div className="h-screen w-screen absolute top-0 left-0" style={{mixBlendMode: "hard-light",backgroundImage: `url(${image.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
    </div>
  )
}

export default EthicsForm