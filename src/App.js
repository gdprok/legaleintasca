import { useState } from "react";
import {
  FaComments,
  FaFileAlt,
  FaCog,
  FaChartPie,
  FaGavel,
  FaUsers,
} from "react-icons/fa";
import "./App.css";

export default function LegalSupportApp() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">LegalApp</h2>
        <button className="nav-btn active">
          <FaChartPie /> Dashboard
        </button>
        <button className="nav-btn">
          <FaGavel /> Compliance GDPR
        </button>
        <button className="nav-btn">
          <FaUsers /> Diritto del Lavoro
        </button>
        <button className="nav-btn">
          <FaFileAlt /> Pianificazione Strategica
        </button>
        <button className="nav-btn">
          <FaCog /> Impostazioni
        </button>
      </div>

      {/* Area centrale con documento */}
      <div className="main-content">
        <h2 className="page-title">📄 Documento in Revisione</h2>
        <div className="document-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque nulla ut turpis placerat, ac facilisis velit tristique.
          </p>
          <button className="download-btn">📥 Scarica Documento</button>
        </div>
      </div>

      {/* Chatbot in basso a destra */}
      <div className={`chatbox ${chatOpen ? "open" : ""}`}>
        {!chatOpen ? (
          <button className="chat-toggle" onClick={() => setChatOpen(true)}>
            💬 Chat
          </button>
        ) : (
          <div className="chat-window">
            <div className="chat-header">
              <h3>AI Legal Assistant</h3>
              <button className="close-btn" onClick={() => setChatOpen(false)}>
                ✖
              </button>
            </div>
            <div className="chat-body">
              <p>Ciao! Come posso aiutarti oggi?</p>
            </div>
            <div className="chat-footer">
              <input type="text" placeholder="Scrivi qui..." />
              <button>➤</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
