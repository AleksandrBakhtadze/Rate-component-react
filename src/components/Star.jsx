import Starimg from "../assets/Star.svg"

const Star = () => {
    return (
        <div style={{
            width: "48px", height: "48px", backgroundColor: "#262E38", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <img src={Starimg}/>
        </div>
    )
}

export default Star
