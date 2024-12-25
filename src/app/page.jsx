const { default: Box } = require("./components/box");
import Loading from "./(public)/loading";

const getData = async () => {
  const data = await fetch("https://moviesapi.ir/api/v1/movies", {
    cache: "force-cache",
  });

  return data.json();
};

const HomePage = async () => {
  const data = await getData();

  return (
    <div className="bg-gray-300 m-20 p-20 rounded-2xl flex justify-between items-center gap-4 flex-wrap">
      {data ? (
        data.data.map((item, index) => <Box key={index} item_data={item} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default HomePage;
