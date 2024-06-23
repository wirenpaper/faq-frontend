"use client";

import React, { useState } from "react";
import CustomButton from "./custom_button";
import QuestionDiv from "./question_div";

export default function Home() {
  const [btn1Text, setBtn1Text] = useState("+");
  const [btn2Text, setBtn2Text] = useState("+");
  const [btn3Text, setBtn3Text] = useState("+");

  const [isExpandable1Visible, setIsExpandable1Visible] = useState(false);
  const [isExpandable2Visible, setIsExpandable2Visible] = useState(false);
  const [isExpandable3Visible, setIsExpandable3Visible] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonId = event.currentTarget.id;
    switch (buttonId) {
      case "btn1":
        if (btn1Text == "+") {
          setBtn1Text("-");
          setIsExpandable1Visible(true);
        } else {
          setBtn1Text("+");
          setIsExpandable1Visible(false);
        }
        break;
      case "btn2":
        if (btn2Text == "+") {
          setBtn2Text("-");
          setIsExpandable2Visible(true);
        } else {
          setBtn2Text("+");
          setIsExpandable2Visible(false);
        }
        break;
      case "btn3":
        if (btn3Text == "+") {
          setBtn3Text("-");
          setIsExpandable3Visible(true);
        } else {
          setBtn3Text("+");
          setIsExpandable3Visible(false);
        }
        break;
      default:
        console.log("Unknown button clicked");
    }
  };

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
                  <CustomButton id="btn1" onClick={handleClick}>
                    {btn1Text}
                  </CustomButton>
                </div>
                <p
                  className={`mt-4 ${isExpandable1Visible ? "" : "hidden"}`}
                  id="expandable_1"
                >
                  What is this hahaha lolol
                </p>
              </div>
            </QuestionDiv>
            <QuestionDiv>
              <div className="flex-row w-full">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">How much does it cost?</p>
                  <CustomButton id="btn2" onClick={handleClick}>
                    {btn2Text}
                  </CustomButton>
                </div>
                <p
                  className={`mt-4 ${isExpandable2Visible ? "" : "hidden"}`}
                  id="expandable_2"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium eum nobis enim, expedita ducimus voluptates
                  placeat minima? Ipsa, exercitationem fugit aspernatur deleniti
                  incidunt harum placeat eos debitis perferendis aliquid
                  architecto.
                </p>
              </div>
            </QuestionDiv>
            <QuestionDiv className="mb-9">
              <div className="flex-row w-full">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">When can I get it?</p>
                  <CustomButton id="btn3" onClick={handleClick}>
                    {btn3Text}
                  </CustomButton>
                </div>
                <p
                  className={`mt-4 ${isExpandable3Visible ? "" : "hidden"}`}
                  id="expandable_3"
                >
                  hfljhahah
                </p>
              </div>
            </QuestionDiv>
          </div>
        </div>
      </div>
    </div>
  );
}
