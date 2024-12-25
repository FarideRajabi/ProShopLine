import AsideComponent from "@/app/components/aside";
import Image from "next/image";

const getData = async (slug) => {
  const data = await fetch(`https://moviesapi.ir/api/v1/movies/${slug}`, {
    cache: "no-store",
  });
  return data.json();
};

const SingleMouvePage = async ({ params }) => {
  const item_params = await params;

  const data = await getData(item_params.slug);

  return (
    <div className=" flex justify-between items-start gap-8 m-20">
      <div className=" p-20 bg-gray-200 rounded-3xl flex flex-col gap-8">
        <h1>{data.title}</h1>
        <Image
          className="rounded-3xl my-5"
          width={250}
          height={200}
          alt={data.title}
          src={data.poster}
        />
        <div>کارگردان :{data.director}</div>
        <div>نویسنده :{data.writer}</div>
        <div className="my-5">خلاصه داستان :{data.plot}</div>
        <div>
          <h2>ژانرها:</h2>
          <div className="flex justify-start items-center gap-4">
            {data.genres.map((item, index) => (
              <p
                className="bg-black rounded-md text-white p-2 text-xs"
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="my-5">
          <h2>تصاویر دیگر: </h2>
          <div className="flex flex-wrap justify-start items-center gap-4">
            {data.images.map((item, index) => (
              <Image
                key={index}
                className="rounded-3xl"
                width={250}
                height={200}
                alt={data.title}
                src={item}
              />
            ))}
          </div>
        </div>
      </div>
      <AsideComponent />
    </div>
  );
};

export default SingleMouvePage;
