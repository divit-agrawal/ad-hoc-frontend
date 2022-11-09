import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [beat, setBeat] = useState(0);

  const handleBeat = () => {
    setInterval(
      ()=>{fetch("http://localhost:3000/heartbeatget")
      .then((res) => res.json())
      .then((data) => {
        setBeat(data.heartbeat);})}
      ,1000);
  };
  useEffect(() => {
    handleBeat();
  });

  return (
    <div
      style={{
        fontSize: "2rem",
        color: "black",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="heading">Wireless Ad-hoc and Sensor Networks Project</div>
      <div style={{ margin: "2rem",border:"2px solid green",padding: "2rem",borderRadius:"2rem",boxShadow:"2px 2px " }}>Project Review 3</div>
      <div className="heading">
      {
        beat>=0 && <div>Heart Beat : {beat}</div>
      }
      {
      beat>=72 && <div style={{color:"orange"}}>Heart Beat : {beat}</div>
      }
      {
      beat>=82 && <div style={{color:"red"}}>Heart Beat : {beat}</div>
      }
      </div>

    </div>
  );
}
