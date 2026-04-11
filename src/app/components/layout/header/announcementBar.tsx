import Image from "next/image";

const AnnouncementBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="group relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-[url('/images/announcementbar/announcementbar-bg.jpg')] bg-cover bg-center bg-no-repeat" />
        </div>
        <div className="relative z-10 container">
          <div className="py-2.5 flex items-center justify-center gap-2">
            <p className="text-sm sm:text-base text-white">
              Now available on Figma & Code — start customizing your personal
              site today.
            </p>
            <Image
              src={"/images/icon/arrow-icon.svg"}
              alt="arrow-icon"
              width={24}
              height={24}
              className="group-hover:translate-x-1.5 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
