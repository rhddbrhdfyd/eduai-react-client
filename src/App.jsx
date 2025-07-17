import RoutesComponent from "./routes/index.jsx"; // ✅

export default function App() {
  return (
    <Router>
      <RoutesComponent /> {/* ✅ 여기서도 이름 일치 */}
    </Router>
  );
}
