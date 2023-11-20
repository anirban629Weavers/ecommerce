import Image from "next/image";
import Link from "next/link";
import React from "react";

const HelpSection = () => {
  return (
    <div className="we-help-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1">
                <Image  src="/images/img-grid-1.jpg" alt="Untree.co" width={400} height={400}/> 
              </div>
              <div className="grid grid-2">
                <Image src="/images/img-grid-2.jpg" alt="Untree.co" width={300} height={250}/> 
              </div>
              <div className="grid grid-3">
                <Image  src="/images/img-grid-3.jpg" alt="Untree.co" width={400} height={400}/> 
              </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h2 className="section-title mb-4">
              We Help You Make Modern Interior Design
            </h2>
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada
            </p>

            <ul className="list-unstyled custom-list my-4">
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
            </ul>
            <p>
              <Link href="/" className="btn">
                Explore
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
