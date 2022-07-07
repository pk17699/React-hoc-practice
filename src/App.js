import Form from "./Form";
import "./styles.css";
import ErrorBoundary from "./ErrorBoundary";
export default function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Form />
      </ErrorBoundary>
      <p style={{ textAlign: "center", marginTop: "1.5rem", color: "grey" }}>
        Copyright &copy;{" "} 2022
      </p>
    </div>
  );
}
