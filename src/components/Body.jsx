import React from "react";
import Supervisor from "../assets/four-card-feature-section-master/four-card-feature-section-master/images/icon-supervisor.svg";
import teamBuilder from "../assets/four-card-feature-section-master/four-card-feature-section-master/images/icon-team-builder.svg";
import Karma from "../assets/four-card-feature-section-master/four-card-feature-section-master/images/icon-karma.svg";
import Calculator from "../assets/four-card-feature-section-master/four-card-feature-section-master/images/icon-calculator.svg";

const Body = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[80%] justify-center items-center">
      <div className="flex flex-col p-6 w-[24rem] lg:w-[18rem] border-t-2 border-[#16ccc9] shadow-lg rounded-lg lg:mx-3 my-3">
        <h1 className="font-[800] text-xl lg:text-base my-2">Supervisor</h1>
        <p className="font-[200] text-base lg:text-xs mb-10 mr-16">
          Monitors activity to identify project roadblocks
        </p>
        <img src={Supervisor} alt="supervisor" className="w-[18%] self-end" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col p-6 w-[24rem] border-t-2 lg:w-[18rem] border-[#e63950] shadow-lg rounded-lg lg:mx-3 my-3">
          <h1 className="font-[800] text-xl lg:text-base my-2">Team Builder</h1>
          <p className="font-[200] text-base lg:text-xs mb-10 mr-16">
            Scans our talent network to create the optimal team for your project
          </p>
          <img
            src={teamBuilder}
            alt="teamBuilder"
            className="w-[18%] self-end"
          />
        </div>
        <div className="flex flex-col p-6 w-[24rem] border-t-2 lg:w-[18rem] border-[#ff9900] shadow-lg rounded-lg lg:mx-3 my-3">
          <h1 className="font-[800] text-xl lg:text-base my-2">Karma</h1>
          <p className="font-[200] text-base lg:text-xs mb-10 mr-16">
            Regularly evaluates our talent to ensure quality
          </p>
          <img src={Karma} alt="karma" className="w-[18%] self-end" />
        </div>
      </div>
      <div className="flex flex-col p-6 w-[24rem] border-t-2 lg:w-[18rem] border-[#377fd2] shadow-lg rounded-lg lg:mx-3 my-3">
        <h1 className="font-[800] text-xl lg:text-base my-2">Calculator</h1>
        <p className="font-[200] text-base lg:text-xs mb-10 mr-16">
          Uses data from past projects to provide better delivery estimates
        </p>
        <img src={Calculator} alt="calculator" className="w-[18%] self-end" />
      </div>
    </div>
  );
};

export default Body;
