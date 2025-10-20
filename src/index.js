  import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const bmi = useMemo(() => {
    return (weight / ((height / 100) ** 2)).toFixed(2);
  }, [height, weight]);

  const category = useMemo(() => {
    if (bmi < 18.5) return { text: "Underweight", color: "#4FC3F7" };
    if (bmi >= 18.5 && bmi < 24.9) return { text: "Normal", color: "#81C784" };
    if (bmi >= 25 && bmi < 29.9) return { text: "Overweight", color: "#FFD54F" };
    return { text: "Obese", color: "#E57373" };
  }, [bmi]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>💪 BMI Calculator</h1>

        <div style={styles.section}>
          <p style={styles.label}>Weight: {weight} kg</p>
          <input
            type="range"
            min="1"
            max="200"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={styles.slider}
          />
        </div>

        <div style={styles.section}>
          <p style={styles.label}>Height: {height} cm</p>
          <input
            type="range"
            min="100"
            max="220"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={styles.slider}
          />
        </div>

        <div style={styles.resultBox}>
          <h2 style={styles.bmiText}>Your BMI: {bmi}</h2>
          <p style={{ ...styles.category, color: category.color }}>
            {category.text}
          </p>
        </div>

        <p style={styles.footer}>Made with ❤️ by Udit</p>
      </div>
    </div>
  );
};

// 🌈 Inline CSS Styles
const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    width: "350px",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    color: "#333",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "25px",
  },
  label: {
    marginBottom: "10px",
    fontWeight: "500",
    color: "#444",
  },
  slider: {
    width: "100%",
    accentColor: "#667eea",
  },
  resultBox: {
    marginTop: "30px",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#f3f4f6",
  },
  bmiText: {
    fontSize: "22px",
    color: "#333",
    margin: "5px 0",
  },
  category: {
    fontWeight: "600",
    fontSize: "20px",
  },
  footer: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#666",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
