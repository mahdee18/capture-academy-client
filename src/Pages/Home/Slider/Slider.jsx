import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div className="">
            <Carousel>
                <div>
                    <div className="relative">
                        <img src="https://cutewallpaper.org/21/windows-10-4k-backgrounds/Original-Windows-10-Home-Wallpaper-1920x1080-.jpg" className="h-[500px]" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black opacity-50">
                            <h2 className="text-white text-4xl mb-4 font-bold">Capturing Souls: The Art of Portrait Photography</h2>
                            <p className="text-sm">Mastering the Craft of Portraiture and Unleashing the Power of Human Connection</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <img src="https://th.bing.com/th/id/R.2a5a6006bc06981b9f29935ea228f4af?rik=UrKUdJtf8jWHng&riu=http%3a%2f%2fqwallps.com%2fwp-content%2fuploads%2f2021%2f03%2fBeach-Macro-Photo-Wallpaper-with-Seashell-and-Sunrise.jpg&ehk=Phpvg1l9f1h6bH1VEnfzC%2bg9wobds10Od5UIcKwoNPQ%3d&risl=&pid=ImgRaw&r=0" className="h-[500px]" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black opacity-50">
                            <h2 className="text-white text-4xl mb-4 font-bold">Unveiling the Microcosmos: The Art of Macro Photography</h2>
                            <p className="text-sm">Exploring the Hidden Beauty and Intricate Details of the Miniature World</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <img src="https://drscdn.500px.org/photo/103798759/q%3D80_m%3D1500/v2?sig=152f81800f9b91b23612d1b969d06f58ecaefe86eaea3659a90fb84aa870a3d9" className="h-[500px]" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black opacity-50">
                            <h2 className="text-white text-4xl mb-4 font-bold">Enchanting Horizons: The Majesty of Landscape Photography</h2>
                            <p className="text-sm">Capturing Nature's Grandeur and Inviting Serenity into Frame</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <img src="https://i.ytimg.com/vi/AmHo91ARwK4/maxresdefault.jpg" className='h-[500px]' />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black opacity-50">
                            <h2 className="text-white text-4xl mb-4 font-bold">Frozen Moments: The Artistry of Still Life Photography</h2>
                            <p className="text-sm">Elevating Ordinary Objects into Extraordinary Narratives of Beauty and Meaning</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <img src="https://th.bing.com/th/id/OIP.q1FKHaQE_vivZ_EveA6O9gHaE8?pid=ImgDet&rs=1" className='h-[500px]' />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black opacity-50">
                            <h2 className="text-white text-4xl mb-4 font-bold">City Chronicles: Unveiling the Soul of Street Photography</h2>
                            <p className="text-sm">Capturing the Rhythm, Stories, and Serendipity of Urban Life Through the Lens</p>
                        </div>
                    </div>
                </div>
            </Carousel>

        </div>
    );
};

export default Slider;

