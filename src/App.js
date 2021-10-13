// import logo from './logo.svg';
import './App.css';
import PriceList from './components/PriceList';
import ViewTab from './components/ViewTab';
import { LIST_VIEW, CHART_VIEW } from './utility';

const items = [
  {
    "id": 1,
    "title": "traveling",
    "price": 200,
    "date": "2021-09-10",
    "category": {
      "id": 1,
      "name": "travel",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  },
  {
    "id": 2,
    "title": "eating",
    "price": 300,
    "date": "2021-09-10",
    "category": {
      "id": 1,
      "name": "food",
      "type": "outcome",
      "iconName": "ios-plane"

    }
  }
];

const handleModify = (item) => {

  console.log('modify', item.id)

}

const handleDelete = (item) => {
  console.log('delete', item.id)

}


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="container">

        <ViewTab
          selectedTab={CHART_VIEW}
          onTabChange={(selectedView) => { console.log(selectedView) }}
        />
        <PriceList
          items={items}
          onModify={handleModify}
          onDelete={handleDelete}
        />

      </div>

    </div>

  );
}

export default App;
