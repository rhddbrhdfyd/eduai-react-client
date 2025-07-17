import RoutesComponent from "./routes"; // ✅ default import 이름 맞춰줌

export default function App() {
  return (
    <Router>
      <RoutesComponent /> {/* ✅ 여기서도 이름 일치 */}
    </Router>
  );
}
