import Search from './components/Search';
import SelectedCountries from './components/SelectedCountries';
import {CountriesProvider} from './Context';

function App() {
  return (
    <CountriesProvider>
      <div className="col w-100 d-flex pt-2 justify-content-around">
          <Search />
          <SelectedCountries />
      </div>
    </CountriesProvider>
  );
}

export default App;
