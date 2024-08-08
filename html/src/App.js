import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <button>Nupp</button>

      <p style={{ color: 'blue', fontStyle: "italic" }} className="tekst">Siin on uus tekst</p>

      <p className='tekst2'>Siin on teine tekst</p>

      <img src='https://www.interviewbit.com/blog/wp-content/uploads/2021/10/HTML-and-CSS-768x453.png' alt='HTML ja CSS pilt'></img>

    <table>
      <tr >
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
    

    <iframe width="420" height="315" title="Kanad laulavad"
src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1?controls=1">
</iframe>


    </div>
  ); 
}

export default App;
