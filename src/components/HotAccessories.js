import React from 'react'
import HotItemCard from "./HotItemCard.js"
import '../sass/HotAccessories/HotAccessories.css'
const HotAccessories = ({ music, musicCover, smCover, smartDevices, home, homeCover, lsCover, lifeStyle, mb, mbCover }) => {
    return (
        <div className='HotAccessories'>
            <div className='first'>
                <img src={musicCover || smCover || homeCover || lsCover || mbCover} alt="musicimg" />
            </div>
            {/* {------------------2nd----------------} */}
            <div className='second'>
                {
                    music && music.map((ele, ind) => (
                        <HotItemCard key={ele.image} name={ele.name} price={ele.price} image={ele.image} index={ind} />
                    ))
                }

                {
                    smartDevices && smartDevices.map((ele, ind) => (
                        <HotItemCard key={ele.image} name={ele.name} price={ele.price} image={ele.image} index={ind} />
                    ))
                }

                {
                    home && home.map((ele, ind) => (
                        <HotItemCard key={ele.image} name={ele.name} price={ele.price} image={ele.image} index={ind} />
                    ))
                }

                {
                    lifeStyle && lifeStyle.map((ele, ind) => (
                        <HotItemCard key={ele.image} name={ele.name} price={ele.price} image={ele.image} index={ind} />
                    ))
                }

                {
                    mb && mb.map((ele, ind) => (
                        <HotItemCard key={ele.image} name={ele.name} price={ele.price} image={ele.image} index={ind} />
                    ))
                }
                <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
            </div>

        </div>
    )
}

export default HotAccessories