import React from "react";

const What = () => {
  return <div>
  <div style={{ display: "flex", alignItems: "flex-end", gap: "100px", background: "#0a1422", padding: "200px"}}>
    <div style={{ flex: "1", backgroundColor: "#888", height: "400px", borderRadius: "20px" }}>
      {/* Placeholder for image or video */}
    </div>
    <div style={{ flex: "1.2", backgroundColor: "#054f8d", padding: "70px", borderRadius: "15px" }}>
      <div style={{ position: "absolute", top: "270px", left: "650px", backgroundColor: "#082c4f", padding: "15px 50px", borderRadius: "15px", borderColor: "#0276d7", borderWidth: "4px", fontSize: "28px" }}>
        <h3 style={{ color: "white", margin: 0, fontWeight: "bold" }}>What we do!</h3>
      </div>
      <p style={{ color: "white", fontSize: "23px"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      </div>
    </div> 
  </div>;
};

export default What;
