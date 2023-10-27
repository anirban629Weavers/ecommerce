import { ITeam_CLIENT } from "@/interfaces/team.interface";
import Image from "next/image";
import React from "react";

const ShowTeam = ({ teamMember }: { teamMember: ITeam_CLIENT }) => {
  const { description, imageLink, name, position } = teamMember;
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
      <Image
        src={imageLink}
        className="img-fluid mb-5"
        width={400}
        height={100}
        alt=""
      />

      <h3>
        <a href="#">
          <span className="">{name}</span>
        </a>
      </h3>
      <span className="d-block position mb-4">{position}</span>
      <p>{description} </p>
      {/* <p className="mb-0">
        <a href="#" className="more dark">
          Learn More <span className="icon-arrow_forward"></span>
        </a>
      </p> */}
    </div>
  );
};

export default ShowTeam;
