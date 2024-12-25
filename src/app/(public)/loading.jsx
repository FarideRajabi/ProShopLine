import Image from "next/image";

const Loading = () => {
  return (
    <div className="mid-h-[20rem] flex items-center justify-center">
      <Image width={150} height={150} alt="loading" src="/spinner.svg" />
    </div>
  );
};

export default Loading;
