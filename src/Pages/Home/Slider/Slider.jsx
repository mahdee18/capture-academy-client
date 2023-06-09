import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div className="">
            <Carousel>
                <div>
                    <div className="relative">
                        <img src="https://cutewallpaper.org/21/windows-10-4k-backgrounds/Original-Windows-10-Home-Wallpaper-1920x1080-.jpg" className="h-[800px]" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                            <p className=" text-sm font-medium">Legend 1</p>
                            <p className="text-sm">Text 1</p>
                            <h2>Portait photography</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <img src="https://th.bing.com/th/id/R.2a5a6006bc06981b9f29935ea228f4af?rik=UrKUdJtf8jWHng&riu=http%3a%2f%2fqwallps.com%2fwp-content%2fuploads%2f2021%2f03%2fBeach-Macro-Photo-Wallpaper-with-Seashell-and-Sunrise.jpg&ehk=Phpvg1l9f1h6bH1VEnfzC%2bg9wobds10Od5UIcKwoNPQ%3d&risl=&pid=ImgRaw&r=0" className="h-[800px]" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <p className="text-white text-sm font-medium">Macro</p>
                            <p className="text-white text-sm">Text 2</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <img src="https://drscdn.500px.org/photo/103798759/q%3D80_m%3D1500/v2?sig=152f81800f9b91b23612d1b969d06f58ecaefe86eaea3659a90fb84aa870a3d9" className="h-[800px]" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <p className="text-white text-sm font-medium">Lendscape 3</p>
                            <p className="text-white text-sm">Text 3</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <img src="https://i.ytimg.com/vi/AmHo91ARwK4/maxresdefault.jpg" className='h-[800px]' />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <p className="text-white text-sm font-medium">still life 3</p>
                            <p className="text-white text-sm">Text 3</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <img src="https://th.bing.com/th/id/OIP.q1FKHaQE_vivZ_EveA6O9gHaE8?pid=ImgDet&rs=1" className='h-[800px]' />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <p className="text-white text-sm font-medium">still life 3</p>
                            <p className="text-white text-sm">Text 3</p>
                        </div>
                    </div>
                </div>
            </Carousel>

        </div>
    );
};

export default Slider;