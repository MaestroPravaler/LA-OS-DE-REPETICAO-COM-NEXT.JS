import Repeticao01 from '../loops/Repeticao01'
import Repeticao02 from '../loops/Repeticao02';
import Repeticao03 from '../loops/Repeticao03';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div>
          <h1>Laços de Repetição</h1>
          <p></p>
          <h2>Utilizando o for</h2>
          <Repeticao01 />
          <p>=============================================</p>
          <h2>Utilizando map e arrow function</h2>
          <Repeticao02 />
          <p>=============================================</p>
          <h2>Utilizando classe(data | model)</h2>
          <Repeticao03 />
          <p>=============================================</p>
      </div>
  );
}
