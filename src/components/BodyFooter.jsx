export default function BodyFooter() {
  return (
    <>
      <div className="flex justify-center text-gray-600 items-center p-2  ">
        <div className="border border-solid text-sm p-2 flex items-center justify-center rounded-md cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <span>Previous</span>
        </div>
        <div className=" text-sm px-3 py-2 flex items-center justify-center rounded-md cursor-pointer">
          1
        </div>
        <div className=" text-sm px-3 py-2 flex items-center justify-center rounded-md cursor-pointer">
          ...
        </div>
        <div className=" text-sm px-3 py-2 flex items-center justify-center rounded-md bg-blue-500 text-white font-semibold cursor-pointer">
          10
        </div>
        <div className=" text-sm px-3 py-2 flex items-center justify-center rounded-md cursor-pointer">
          11
        </div>
        <div className=" text-sm px-3 py-2 flex items-center justify-center rounded-md cursor-pointer">
          12
        </div>
        <div className=" text-sm px-3 py-2 flex items-center justify-center rounded-md cursor-pointer">
          13
        </div>
        <div className=" text-sm px-3 py-2 flex items-center justify-center rounded-md cursor-pointer">
          14
        </div>
        <div className=" text-sm px-3 py-2 flex items-center justify-center rounded-md cursor-pointer">
          15
        </div>
        <div className=" text-sm px-3 py-2 flex items-center justify-center rounded-md cursor-pointer">
          16
        </div>
        <div className=" text-sm px-3 py-2 flex items-center justify-center rounded-md cursor-pointer">
          17
        </div>
        <div className=" text-sm px-3 py-2 flex items-center justify-center rounded-md cursor-pointer">
          18
        </div>
        <div className="border border-solid text-sm px-3 py-2 flex items-center justify-center rounded-md cursor-pointer">
          <span>Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
