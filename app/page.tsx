export default function Home() {
  return (
    <div>
      <h1 className="text-center p-5">Project 2: FAQ/Accordian</h1>
      <div className="flex justify-center">
        <div className="bg-blue-800 rounded-md w-42rem">
          <h2 className="text-white flex justify-center pt-3">
            Frequently Asked Questions
          </h2>
          <div>
            <div className="bg-white my-4 mx-5 py-3 px-4 flex items-center justify-between">
              <p className="font-semibold">Is this a good product?</p>
              <button className="border-2 px-1.5 border-blue-800 
                rounded-md bg-blue-200 text-20px text-blue-800">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
