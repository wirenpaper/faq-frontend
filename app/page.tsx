import CustomButton from "./custom_button";
import QuestionDiv from "./question_div";

export default function Home() {
  return (
    <div>
      <h1 className="text-center p-5">Project 2: FAQ/Accordian</h1>
      <div className="flex justify-center">
        <div className="bg-blue-800 rounded-12px w-42rem">
          <h2 className="text-white flex justify-center pt-3">
            Frequently Asked Questions
          </h2>
          <div>
            <QuestionDiv>
              <div className="flex-row w-full">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Is this a good product?</p>
                  <CustomButton>+</CustomButton>
                </div>
                <p className="mt-4 hidden">What is this hahaha lolol</p>
              </div>
            </QuestionDiv>
            <QuestionDiv>
              <div className="flex-row w-full">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">How much does it cost?</p>
                  <CustomButton>+</CustomButton>
                </div>
                <p className="mt-4 hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum nobis enim, expedita ducimus voluptates placeat minima? Ipsa, exercitationem fugit aspernatur deleniti incidunt harum placeat eos debitis perferendis aliquid architecto.</p>
              </div>
            </QuestionDiv>
            <QuestionDiv>
              <div className="flex-row w-full">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">When can I get it?</p>
                  <CustomButton>+</CustomButton>
                </div>
                <p className="mt-4 hidden">hfljhahah</p>
              </div>
            </QuestionDiv>
          </div>
        </div>
      </div>
    </div>
  );
}
