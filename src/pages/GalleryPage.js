import React, {useState} from 'react';
import "../index.css";
import {AiOutlineClose} from 'react-icons/ai';



import Img1 from "../images/godisawoman.png";
import Img8 from "../images/káos.png";
import Img15 from "../images/getoutofyourway.jpg";
import Img2 from "../images/colorme.jpg";
import Img9 from "../images/nailedit.png";
import Img16 from "../images/letthatmango.png";
import Img3 from "../images/makespaceee.png";
import Img10 from "../images/bearwithme.png";
import Img17 from "../images/watchoutfordoubt.png";
import Img4 from "../images/hangon.png";
import Img11 from "../images/cottoncandysleep.jpg";
import Img18 from "../images/messythoughts.png";
import Img5 from "../images/loudinsidee.png";
import Img12 from "../images/prettyunbearable.png";
import Img19 from "../images/feeloutofplace.png";
import Img6 from "../images/nativesoul.png";
import Img13 from "../images/adventureandorgasm.png";
import Img20 from "../images/nonsense.jpg";
import Img7 from "../images/tonguetied.jpg";
import Img14 from "../images/popartme.png";
import Img21 from "../images/nothingtowear.jpg";

const GalleryPage = () => {
    let data =[
              {
            id: "god-is-a-woman",
            imgSrc: Img1,
            title:"GOD IS A WOMAN",
            text:"I was raised to believe that the only one I can believe in is God, never myself. That he is the only one worth believing in. It took me years to break away from it. I am no longer religious. But if there is a god, I truly hope she is a woman."
        },
        {
            id:"k-o-s",
            imgSrc: Img8,
            title:"K.O.s",
            text:"current state of mind."
        },
        {
            id:"get-out-your-own-way-2",
            imgSrc: Img15,
            title:"GET OUT OF YOUR OWN WAY",
            text:"Stop screwing yourself over. Get out of your own way."
        },
        {
            id:"colour-me-happy-2",
            imgSrc: Img2,
            title:"COLOUR ME HAPPY",
            text:"You have seen the colours in me when even I could not see them. And you let them shine through. Thank you."
        },
        {
            id: "nailed-it-2",
            imgSrc: Img9,
            title:"NAILED IT",
            text:"And then I started undressing my soul."
        },
        {
            id:"mango-2",
            imgSrc: Img16,
            title:"MANGO",
            text:"Let that man go!"
        },
        {
            id:"make-space-2",
            imgSrc: Img3,
            title:"MAKE SPACE",
            text:"Expand & make space for what matters."
        },
        {
            id: "bear-with-me-2",
            imgSrc: Img10,
            title:"BEAR WITH ME",
            text:"Sometimes, I can be unbearable. So please bear with me, dear."
        },
        {
            id:"watch-out-for-doubt-2",
            imgSrc: Img17,
            title:"WATCH OUT FOR DOUBT",
            text:"I used to feel judged. Watched. Followed. I am afraid the feeling is forever within me."
        },
        {
            id:"hang-on-2",
            imgSrc: Img4,
            title:"HANG ON",
            text:"Tough times don't last, tough people do. Hang on, dear."
        },
        {
            id:"cotton-candy-dreams-2",
            imgSrc: Img11,
            title:"COTTON CANDY DREAMS",
            text:"Copy paste me into your bed and let's have cotton candy dreams together."
        },
        {
            id:"messy-thoughts-2",
            imgSrc: Img18,
            title:"MESSY THOUGHTS",
            text:"Why would you give me that jar of honey?"
        },
        {
            id:"loud-inside-2",
            imgSrc: Img5,
            title:"LOUD INSIDE",
            text:"I hear voices in my head, that echo through my skin, and my mom, she is still asking, how you are doing and where you have been.."
        },
        {
            id:"pretty-2",
            imgSrc: Img12,
            title:"PRETTY.",
            text:"I feel pretty. Pretty unbearable."
        },
        {
            id:"feel-out-of-place-2",
            imgSrc: Img19,
            title:"FEEL OUT OF PLACE",
            text:"Desperately yearning to belong."
        },
        {
            id:"wild-reflection-2",
            imgSrc: Img6,
            title:"WILD REFLECTION",
            text:"And then, when looking into the wild river, I saw a perfect reflection of her."
        },
        {
            id:"adventure-orgasm-2",
            imgSrc: Img13,
            title:"ADVENTURE AND ORGASM",
            text:"A note to my future husband."
        },
        {
            id:"kaere-mor",
            imgSrc: Img20,
            title:"KAERE MOR",
            text:"Why are you never listening?"
        },
        {
            id:"tongue-tied-2",
            imgSrc: Img7,
            title:"TONGUE TIED",
            text:"Sometimes, I wanna tell you everything. Things that keeps me awake at night. Things I am afraid to talk about out loud. Explain myself. But for some reason, I feel chained. Tongue tied. Imprisoner in my own body."
        },
        {
            id: "mosaic",
            imgSrc: Img14,
            title:"MOSAIC",
            text:"A mosaic. Made of broken pieces."
        },
        {
            id: "nothing-to-wear",
            imgSrc: Img21,
            title:"ME, EVERY MORNING:",
            text:"I have nothing to wear):"
        },
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return(
        <>
        <div className= {model? "model open" : "model"}>
            <img src={tempimgSrc} />
            <AiOutlineClose onClick={()=> setModel(false)}/> 
        </div>
       <div className="gallery">
           {data.map((item, index)=>{
               return(
                   <>
                    <div className="pics card" key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%'}} />
                        <div className="info">
                        <h1 className=" h-info">{item.title}</h1>
                        <p className="p-info">{item.text}</p>
                        </div>
                    </div>  
                    </>         
           )
           })}

       </div>
    </>
    )
}
export default GalleryPage;