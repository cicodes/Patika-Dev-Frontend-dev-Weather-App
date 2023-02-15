import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { WeatherProvider } from "./context/WeatherContext";
import Container from "./components/Container";

// Navigator.location current olacak hem gelen data hem input için
// Önce 7 günlük veriyi çektir.
// Kullanıcı input değiştirince istek tekrar yapılıp yeni veri alınacak

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
