import { teamData } from "@/data/team";
import ShowTeam from "@/helpers/ShowTeam";
import { ITeam_CLIENT } from "@/interfaces/team.interface";
import Image from "next/image";
import React from "react";

const TeamSection = () => {
  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="section-title">Our Team</h2>
          </div>
        </div>

        <div className="row">
          {teamData.map((teamMember: ITeam_CLIENT) => (
            <ShowTeam key={teamMember.id} teamMember={teamMember} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
