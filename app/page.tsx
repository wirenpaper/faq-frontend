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
              <p className="font-semibold">Is this a good product?</p>
              <CustomButton>+</CustomButton>
            </QuestionDiv>
            <QuestionDiv>
              <p className="font-semibold">Is this a good product?</p>
              <CustomButton>+</CustomButton>
            </QuestionDiv>
            <QuestionDiv className="mb-10">
              <p className="font-semibold">Is this a good product?</p>
              <CustomButton>+</CustomButton>
            </QuestionDiv>
          </div>
        </div>
      </div>
    </div>
  );
}
