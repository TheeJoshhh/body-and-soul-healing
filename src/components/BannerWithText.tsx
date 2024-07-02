import Image from "next/image";

interface ImageWithTextProps {
  text: string;
  imageUrl: string;
}

const BannerWithText: React.FC<ImageWithTextProps> = ({ text, imageUrl }) => {
  return (
    <div className="mx-auto w-fit relative">
      <Image
        className="mx-auto rounded-xl"
        src={imageUrl}
        width={1400}
        height={500}
        alt={text}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl text-white">{text}</h1>
      </div>
    </div>
  );
};

export default BannerWithText;