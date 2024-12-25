import Image from "next/image";
import Link from "next/link";

const Box = ({ item_data }) => {
  console.log("item_data:", item_data);
  return (
    <div className="bg-white h-[26rem] w-[15rem] rounded-lg border-2 border-zinc-700 p-4 flex flex-col gap-4 group">
      <Image
        src={item_data.poster}
        alt={item_data.title}
        width={200}
        height={300}
        className="rounded-lg"
      />
      <Link
        href={`/movies/${item_data.id}`}
        className="line-clamp-1 group-hover:text-sky-600 duration-500"
      >
        {item_data.title}
      </Link>
      <div className="flex justify-between items-center gap-2">
        <span className="bg-green-200 px-3 py-1 rounded text-xs">
          {item_data.imdb_rating} IMDB
        </span>
        <span className="bg-green-200 px-3 py-1 rounded text-xs">
          {item_data.year}
        </span>
      </div>
    </div>
  );
};

export default Box;
