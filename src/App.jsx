import React, { useState } from "react";
import "./App.css";

const fields = [
  { key: "satellite", label: "Satellite Name" },

  { key: "start", type: "datetime-local", label: "Start Epoch" },
  { key: "end", type: "datetime-local", label: "End Epoch" },
  { key: "coordEpoch", type: "datetime-local", label: "Coordinate Epoch" },

  { key: "timestep", label: "Time Step" },

  { key: "coord", label: "Coord Flags (1 1 1)" },
  { key: "initGuess", label: "Initial Guess" },

  { key: "state", label: "State Vector (X Y Z VX VY VZ)" },

  { key: "orbit", label: "Orbit Settings (Start Flag Type)" },
  { key: "spaceWeatherFlag", label: "Space Weather Flag" },
  { key: "solar", label: "Solar Flux Values" },

  { key: "mass", label: "Mass" },
  { key: "drag", label: "Drag Area and Cd" },
  { key: "srp", label: "SRP Area and Cr" },

  { key: "forceType", label: "Force Type" },
  { key: "forceModel", label: "Force Model" },
  { key: "gravity", label: "Gravity Degree and Order" },

  { key: "ephem", label: "Ephemeris Flags" },

  { key: "dragFlag", label: "Drag Force Flag" },
  { key: "atmModel", label: "Atmospheric Model" },
  { key: "thirdBody", label: "Third Body Flags (11 values)" },
  { key: "srpFlag", label: "SRP Flag" },

  { key: "shadow", label: "Shadow Model" },
  { key: "relativity", label: "Relativity Flag" },
  { key: "solidTide", label: "Solid Tide Flag" },

  { key: "ocean", label: "Ocean Tide Params" },

  { key: "crp", label: "CRP Flag" },
  { key: "propagationType", label: "Propagation Type" },

  { key: "integrator", label: "Integrator" },
  { key: "stepMode", label: "Step Mode" },
  { key: "tolerance", label: "Tolerance" },

  { key: "interp", label: "Interpolation Params" },

  { key: "fpa", label: "Flight Path Angle Flag" },
  { key: "frequency", label: "Downlink Frequency" },

  { key: "gravityFile", label: "Gravity File Path" },
  { key: "station", label: "Ground Station Name" },
  { key: "planetFlag", label: "Planet Flag" },

  { key: "ground", label: "Ground Station Data (Alt Lat Lon Bias Cutoff)" },

  { key: "antenna", label: "Antenna Diameter" },
  { key: "dataFile", label: "Data File Name" },

  { key: "central", label: "Central Body Params" },
  { key: "twoBody", label: "Two/Three Body Flag" },
  { key: "systemFlag", label: "System Flag" },
  { key: "lagrange", label: "Lagrange Params" },

  { key: "amplitude", label: "Out-of-Plane Amplitude" },
  { key: "haloType", label: "Halo Type" },

  { key: "burnType", label: "Burn Type" },
  { key: "omType", label: "OM Type" },
  { key: "opc", label: "OPC Flag" },

  { key: "thrust", label: "Thrust" },
  { key: "isp", label: "Isp" },
  { key: "duration", label: "Burn Duration" },

  { key: "offMod", label: "Off Modulation" },
  { key: "efficiency", label: "Efficiency" },
  { key: "cantAngle", label: "Cant Angle" },

  { key: "smaChange", label: "SMA Change" },
  { key: "incChange", label: "Inclination Change" },

  { key: "axis", label: "Thruster Axis (3 values)" },

  { key: "jplFile", label: "JPL File Path" },

  { key: "tdsFlag", label: "TDS Flag" },
  { key: "objectFlag", label: "Object Flag" },
  { key: "raDec", label: "RA DEC Values" },

  { key: "tle", label: "TLE File Name" },
  { key: "element", label: "Element Number" },
  { key: "catalog", label: "Catalog Number" },
  { key: "launchYear", label: "Launch Year" },
  { key: "launchNo", label: "Launch Number" },
  { key: "naif", label: "NAIF ID" },

  { key: "oemVersion", label: "OEM Version" },
  { key: "origin", label: "Origin" },
  { key: "oemFile", label: "OEM File Name" },

  { key: "covFlag", label: "Covariance Flag" },
  { key: "covDeg", label: "Covariance Degree and Order" },
  { key: "covFrame", label: "Covariance Frame" },
  { key: "covRep", label: "Covariance Representation" },

  { key: "cov1", label: "Covariance Row 1" },
  { key: "cov2", label: "Covariance Row 2" },
  { key: "cov3", label: "Covariance Row 3" },
  { key: "cov4", label: "Covariance Row 4" },
  { key: "cov5", label: "Covariance Row 5" },
  { key: "cov6", label: "Covariance Row 6" }
];

export default function App() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    const pad = (n) => ("00" + n).slice(-2);
    return `${d.getFullYear()} ${pad(d.getMonth() + 1)} ${pad(d.getDate())} ${pad(d.getHours())} ${pad(d.getMinutes())} ${pad(d.getSeconds())}.000`;
  };

  const generateFile = () => {
    const content = `${form.satellite}\t\t\t// Satellite/Object(Planet/Star) Name
${formatDate(form.start)} // Initial/Orbit Epoch
${formatDate(form.end)} // End Epoch
${formatDate(form.coordEpoch)} // Coordinate Epoch
${form.timestep}

${form.coord}
${form.initGuess}
${form.state}

${form.orbit}
${form.spaceWeatherFlag}
${form.solar}

${form.mass}
${form.drag}
${form.srp}

${form.forceType}
${form.forceModel}
${form.gravity}
${form.ephem}

${form.integrator}
${form.stepMode}
${form.tolerance}
${form.interp}

${form.gravityFile}
${form.station}
${form.planetFlag}
${form.ground}
${form.antenna}
${form.dataFile}`;

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "OTK.inp";
    link.click();
  };

  return (
    <div className="container">
      <h1>IMAP Generator</h1>

      <div className="main-grid">
        {fields.map((f) => (
          <div key={f.key} className="field">
            <label>{f.label}</label>
            <input
              type={f.type || "text"}
              name={f.key}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      <button className="generate-btn" onClick={generateFile}>
        Generate File
      </button>
    </div>
  );
}