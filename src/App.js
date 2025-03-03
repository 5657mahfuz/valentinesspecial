import React, { useState } from "react";

function App() {
  const [yesSize, setYesSize] = useState(18);
  const [noMessageIndex, setNoMessageIndex] = useState(0);
  const [showLove, setShowLove] = useState(false);

  const noMessages = [
    "No",
    "Are you sure? 😢",
    "Think again! 🥺",
    "Really? 💔",
    "Last chance! 😭",
    "You’re breaking my heart! 💘",
    "Don't do this! 😭",
    "One last chance, pretty please?🥺",
    "Say Yes, and I’ll bring chocolates! 🍫",
  ];

  const handleNoClick = () => {
    if (yesSize < 150) {
      setYesSize(yesSize + 15); // Increase "Yes" button size
      setNoMessageIndex((prevIndex) => (prevIndex + 1) % noMessages.length);
    } else {
      setShowLove(true); // Show love decorations
    }
  };

  return (
    <div style={{ ...styles.container, ...(showLove ? styles.loveTheme : {}) }}>
      {/* Love Emoji Watermark */}
      <div style={styles.emojiWatermark}>❤️</div>
      <h1 style={showLove ? styles.hidden : styles.title}>💖 Will You Marry Me 💖</h1>

      {!showLove && (
        <div style={styles.buttonContainer}>
          <button
            style={{ ...styles.yesButton, fontSize: yesSize }}
            onClick={() => setShowLove(true)}
          >
            Yes
          </button>

          {yesSize < 150 && (
            <button style={styles.noButton} onClick={handleNoClick}>
              {noMessages[noMessageIndex]}
            </button>
          )}
        </div>
      )}

      {showLove && (
        <div style={styles.loveMessage}>
          <h1 style={styles.loveMessageText}>❤️ Yay! Love Wins! ❤️</h1>
          <p style={styles.loveText}>On this special day, I just want to remind you of how much you mean to me. You are the light in my life, the smile that brightens my darkest days, and the love that fills my heart. Every moment spent with you is a treasure, and I cherish every second of it.

Thank you for being my best friend, my confidant, and the love of my life. You make every day feel like Valentine’s Day 💕</p>
          <div style={styles.heartContainer}>
            {"❤️".repeat(100)}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#FFEBE8",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.5s ease-in-out",
    position: "relative", // For watermark positioning
  },
  emojiWatermark: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "250px",
    color: "rgba(255, 0, 0, 0.2)", // Light red for the watermark effect
    fontWeight: "bold",
    zIndex: -1, // Placing behind other elements
    opacity: 0.5,
    letterSpacing: "10px",
    animation: "fadeInOut 6s infinite", // Fade in and out effect for the watermark
  },
  title: {
    fontSize: "30px",
    marginBottom: "20px",
    color: "#FF1493",
    animation: "fadeIn 1s ease-in-out",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    width: "100%",
    animation: "fadeIn 2s ease-in-out",
  },
  yesButton: {
    padding: "20px 40px",
    backgroundColor: "#FF69B4",
    color: "white",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    fontSize: "22px",
    transition: "all 0.3s ease-in-out",
    transform: "scale(1)",
    maxWidth: "90%",
    textAlign: "center",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
  },
  noButton: {
    padding: "12px 24px",
    backgroundColor: "#B22222",
    color: "white",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    fontSize: "18px",
    transition: "all 0.3s ease-in-out",
    maxWidth: "90%",
    textAlign: "center",
  },
  loveTheme: {
    backgroundColor: "#FF1493",
    color: "white",
    textAlign: "center",
  },
  loveMessage: {
    textAlign: "center",
    animation: "fadeIn 1.5s ease-in-out",
  },
  loveMessageText: {
    fontSize: "30px",
    marginBottom: "10px",
    animation: "bounce 1s ease-in-out infinite",
  },
  loveText: {
    fontSize: "18px",
    marginBottom: "20px",
    animation: "fadeIn 2s ease-in-out",
  },
  heartContainer: {
    fontSize: "24px",
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    animation: "bounce 2s ease-in-out infinite",
  },
  hidden: {
    display: "none",
  },
};

// Keyframes for animations
const keyframes = `
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes fadeInOut {
    0% { opacity: 0.2; }
    50% { opacity: 0.5; }
    100% { opacity: 0.2; }
  }
  @keyframes bounce {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
`;

// Inject the keyframes CSS into the page
const styleTag = document.createElement("style");
styleTag.innerHTML = keyframes;
document.head.appendChild(styleTag);

export default App;
