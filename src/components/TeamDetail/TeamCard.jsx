export default function Card({ name, src, des }) {
    return (
        <div className="flex bg-[#E8F4FD] flex-col lg:flex-row rounded-lg py-4 px-8 my-6">
            <div className="justify-center flex flex-col items-center">
                <div>
                    <img className="rounded-xl" src={src} alt="" />
                </div>
                <div className="text-[#0F1629] text-[15px] font-semibold py-1">
                    {name}
                </div>
                <div className="text-[#788F9B] text-xs font-medium">{des}</div>
            </div>
            <div className="flex justify-center items-center px-4 ml-4 text-[#0F1629] text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
                fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
                nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
                sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
                consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
                ipsum. Malesuada etiam mi gravida praesent interdu
            </div>
        </div>
    );
}