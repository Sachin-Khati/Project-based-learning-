import { useState } from "react";
import axios from "axios";

function Sac() {
  const [processes, setProcesses] = useState(3);
  const [resources, setResources] = useState(3);
  const [maxResources, setMaxResources] = useState([]);
  const [allocated, setAllocated] = useState([]);
  const [available, setAvailable] = useState([]);
  const [result, setResult] = useState(null);

  const handleInputChange = (setter, row, col, value) => {
    setter(prev => {
      const newArr = [...prev];
      if (!newArr[row]) newArr[row] = [];
      newArr[row][col] = Number(value);
      return newArr;
    });
  };

  const checkSafeState = async () => {
    try {
      const response = await axios.post("http://localhost:5000/check_safe_state", {
        processes: Array.from({ length: processes }, (_, i) => `P${i + 1}`),
        max_resources: maxResources,
        allocated: allocated,
        available: available[0] || [],
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
 
 <div style={{
 position: "fixed",               // Fix to the viewport
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "linear-gradient(-45deg, #f3ec78, #af4261, #74ebd5, #acb6e5)",
  backgroundSize: "400% 400%",
  animation: "gradientBG 15s ease infinite",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: -1  
}}> 
  <div style={{
  maxWidth: "90%",
  width: "720px",
  margin: "2em auto",
  padding: "2.5em",
  borderRadius: "1.5em",
  background: "rgba(255, 255, 255, 0.85)",
  boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
  fontFamily: "'Segoe UI', sans-serif",
  backdropFilter: "blur(6px)",
  border: "1px solid rgba(200,200,200,0.3)",
  transition: "transform 0.3s ease-in-out"
}}>
  <h2 style={{
    textAlign: "center",
    marginBottom: "1.8em",
    color: "#2c3e50",
    fontSize: "2.4rem",
    fontWeight: "700",
    textShadow: "1px 1px 0 #f0f0f0"
  }}>
    🧮 Banker's Algorithm Simulator
  </h2>

  {/* Processes Input */}
  <div style={{ marginBottom: "1.5em" }}>
    <label style={{ fontWeight: "600", color: "#444",fontSize: "1.2rem"  }}>🔢 Number of Processes:</label>
    <input
      type="number"
      min="1"
      value={processes}
      onChange={e => setProcesses(Number(e.target.value))}
      style={{
        marginLeft: "1em",
        padding: "0.5em 0.8em",
        width: "4.5em",
        borderRadius: "0.6em",
        border: "1px solid #aaa",
        background: "#fafafa"
      }}
    />
  </div>

  {/* Resources Input */}
  <div style={{ marginBottom: "2em" }}>
    <label style={{ fontWeight: "600", color: "#444",fontSize: "1.2rem"  }}>🧩 Number of Resources:</label>
    <input
      type="number"
      min="1"
      value={resources}
      onChange={e => setResources(Number(e.target.value))}
      style={{
        marginLeft: "1em",
        padding: "0.5em 0.8em",
        width: "4.5em",
        borderRadius: "0.6em",
        border: "1px solid #aaa",
        background: "#fafafa",
        fontSize: "1.2rem" 
      }}
    />
  </div>

  {/* Matrix Inputs */}
  {[
    { label: "📊 Max Resources", setter: setMaxResources },
    { label: "✅ Allocated Resources", setter: setAllocated }
  ].map(({ label, setter }, idx) => (
    <div key={idx} style={{ marginBottom: "1.5em" }}>
      <h4 style={{ color: "#34495e", marginBottom: "0.5em", fontSize: "1.1rem" }}>{label}</h4>
      {Array.from({ length: processes }).map((_, i) => (
        <div key={i} style={{ marginBottom: "0.4em" }}>
          {Array.from({ length: resources }).map((_, j) => (
            <input
              key={j}
              type="number"
              onChange={e => handleInputChange(setter, i, j, e.target.value)}
              style={{
                width: "3em",
                padding: "0.5em",
                marginRight: "0.5em",
                borderRadius: "0.5em",
                border: "1px solid #ccc",
                background: "#fff"
              }}
            />
          ))}
        </div>
      ))}
    </div>
  ))}

  {/* Available Resources */}
  <div style={{ marginBottom: "2em" }}>
    <h4 style={{ color: "#34495e", marginBottom: "0.5em", fontSize: "1.1rem" }}>📦 Available Resources</h4>
    {Array.from({ length: resources }).map((_, j) => (
      <input
        key={j}
        type="number"
        onChange={e => handleInputChange(setAvailable, 0, j, e.target.value)}
        style={{
          width: "3em",
          padding: "0.5em",
          marginRight: "0.5em",
          borderRadius: "0.5em",
          border: "1px solid #ccc",
          background: "#fff"
        }}
      />
    ))}
  </div>

  {/* Check Button */}
  <button
    onClick={checkSafeState}
    style={{
      background: "linear-gradient(to right, #007bff, #0056b3)",
      color: "#fff",
      border: "none",
      padding: "0.8em 2.2em",
      borderRadius: "0.6em",
      fontSize: "1.05em",
      cursor: "pointer",
      display: "block",
      margin: "auto",
      transition: "transform 0.2s ease, background 0.3s"
    }}
    onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
    onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
  >
    🚦 Check Safe State
  </button>

  {/* Result Display */}
  {result && (
    <div
      style={{
        marginTop: "2em",
        padding: "1em 1.5em",
        backgroundColor: result.safe ? "#eaffea" : "#ffeaea",
        color: result.safe ? "#155724" : "#721c24",
        border: `1px solid ${result.safe ? "#c3e6cb" : "#f5c6cb"}`,
        borderRadius: "0.9em",
        fontWeight: "600",
        textAlign: "center",
        fontSize: "1.1rem",
        animation: "fadeIn 0.5s ease"
      }}
    >
      {result.safe
        ? `✅ Safe Sequence: ${result.safe_sequence.join(" → ")}`
        : `❌ ${result.safe_sequence}`}
    </div>
  )}
</div>
</div>


  );
}

export default Sac;
