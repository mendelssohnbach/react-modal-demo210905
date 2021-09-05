import './App.css';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <h1>ボタンをクリックしてモーダルを開きます。</h1>
      <button className="openModalBtn">Open</button>
      <Modal />
    </div>
  );
}

export default App;
