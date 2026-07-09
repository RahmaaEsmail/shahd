import { Hourglass } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src="/SHAHD-IMAGE/loading.gif"
        alt=""
        className="w-[250px] h-[250px]"
      />
      {/* <Hourglass
        visible={true}
        height="100"
        width="100"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#ddb2b5", "#7189a2"]}
      /> */}
    </div>
  );
}
