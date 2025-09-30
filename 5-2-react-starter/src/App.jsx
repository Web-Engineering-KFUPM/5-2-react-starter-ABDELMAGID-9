import './App.css'
import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* First instance */}
          <StudentCard
            name="ABDELMAGID OSMAN"
            studentId="S201837680"
            department="SWE"
          />

          {/* Second instance */}
          <StudentCard
            name="Omar Ali"
            studentId="S202033115"
            department="CS"
          />
        </div>
      </main>
    </div>
  )
}

export default App;
