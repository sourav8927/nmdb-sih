import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <>
      <h1 className="s-head">Services</h1>
      <div className="cards-container">
        <div className="s-card">
          <h2 className="s-title">Nasha Mukt Bharat Abhiyaan</h2>
          <p className="s-body">
            A National Level Campaign to combat the issue of Drug Abuse. Portal
            hosts an expert forum and map sharing location of Drug De-Addiction
            centres across the nation.
          </p>
          <div className="s-bene">Our beneficiaries No:</div>
          <p className="b-body">All Citizens of India</p>
        </div>

        <div className="s-card">
          <h2 className="s-title">
            Integrated Rehabilitation Centre for Addicts
          </h2>
          <p className="s-body">
            De-Addiction Centres for inpatient and outpatient facilities for
            drug users with focus on counselling, treatment and their
            rehabilitation.
          </p>
          <div className="s-bene">Our beneficiaries No:</div>
          <p className="b-body">Substance users</p>
        </div>

        <div className="s-card">
          <h2 className="s-title ss">Community based Peer-led Intervention</h2>
          <p className="s-body">
            Youth & Children below 18 trained as Peer Educators to lead peer led
            community intervention and implement early prevention education
            especially for vulnerable adolescents and youth in the community.
          </p>
          <div className="s-bene">Our beneficiaries No:</div>
          <p className="b-body">
            Youth (below 18) who are vulnerable to substance use
          </p>
        </div>

        <div className="s-card">
          <h2 className="s-title">Out Reach Drop-in Centre</h2>
          <p className="s-body">
            Safe and secure drop-in space for drug users in the community. They
            provide screening, assessment and counselling and would provide
            referral and linkage to treatment and rehabilitation services for
            drug dependents.
          </p>
          <div className="s-bene">Our beneficiaries No:</div>
          <p className="b-body">Substance users</p>
        </div>

        <div className="s-card">
          <h2 className="s-title">District Deaddiction Centre</h2>
          <p className="s-body">
            Comprehensive deaddiction and treatment, counselling, rehabilitation
            services under one roof.
          </p>
          <div className="s-bene">Our beneficiaries No:</div>
          <p className="b-body">
            Substance users and youth (below 18) who are vulnerable to substance
            use
          </p>
        </div>

        <div className="s-card">
          <h2 className="s-title">Addiction Treatment Facilities</h2>
          <p className="s-body">De-addiction centres in Government Hospitals</p>
          <div className="s-bene">Our beneficiaries No:</div>
          <p className="b-body">Substance users</p>
        </div>

        <div className="s-card">
          <h2 className="s-title">
            National toll-free Helpline for Drug De-Addiction
          </h2>
          <p className="s-body">
          24* 7 national helpline (14446) that provides primary counselling and immediate assistance to users.
          </p>
          <div className="s-bene">Our beneficiaries No:</div>
          <p className="b-body">All Citizens of India</p>
        </div>
      </div>
    </>
  );
}
