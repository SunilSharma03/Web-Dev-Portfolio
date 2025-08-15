import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <div className="relative">
        <Image
          src="/images/banner.svg"
          alt="Amazon Banner"
          width={1500}
          height={600}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}