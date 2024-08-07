import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button className='nupp'>Nupp</button>

      <p className='tekst'>Siin on uus tekst</p>

      <p className='tekst2'>Siin on teine tekst</p>

      <img className='pilt' src='https://www.interviewbit.com/blog/wp-content/uploads/2021/10/HTML-and-CSS-768x453.png' alt='HTML ja CSS pilt'></img>

      <table className="kliendid">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>  
</table>

    </div>
  ); 
}

export default App;
