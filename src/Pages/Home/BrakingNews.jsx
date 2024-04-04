import Marquee from "react-fast-marquee";

const BrakingNews = () => {
  return (
    <div className="flex lg:mx-36">
      <button className="btn bg-[#D72050] text-white">Breaking News</button>
      <Marquee>
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BrakingNews;
