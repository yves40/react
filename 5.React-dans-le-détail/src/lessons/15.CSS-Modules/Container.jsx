import './Container.css'
import styles from './Container.module.css'
import scss from './Container.module.scss' // Don't forget to install sass : npm i sass

export default function Container() {

  console.log(styles);  
  console.log(scss);
  
  return (
    <div className={scss.hero}>
      <h1 className={styles.title}>CSS Modules</h1>
      <h2 className={scss.h2}>Sub section</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vero modi dolores id exercitationem earum minus magnam, ut provident eligendi?
      Nulla ipsam asperiores, quo recusandae officia facilis a nostrum quibusdam non fugiat distinctio amet nesciunt id numquam dolor rerum quia?
      Culpa exercitationem, saepe sequi adipisci hic doloremque omnis laudantium labore aperiam nobis aliquam earum natus eius, quam incidunt reprehenderit! Dolore!
      Dolorum sed omnis reiciendis minus et velit, adipisci maiores voluptatem aut asperiores ipsa aliquid incidunt tenetur sequi possimus consequatur unde!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quia ut animi ex exercitationem officia eos laborum eum blanditiis, sapiente, distinctio error nemo culpa dolores enim dolore maiores amet modi!
      Consectetur, vel ab officia fugit vitae in dolore, aspernatur reprehenderit facilis ipsum sed qui cum? Facere ex nisi iure dolores perferendis. Alias modi quas, obcaecati temporibus facere commodi beatae pariatur?
      Obcaecati possimus repellendus alias quam aspernatur provident excepturi expedita. Ab, minima? Quasi rem cupiditate id! Fuga similique magnam, pariatur voluptate saepe eligendi. Accusantium non quidem obcaecati? Harum deserunt officia molestiae.</p>
      <div className={scss.hero__details}>
        <span>These are the details</span>
      </div>
      <button onClick={ ()=> console.log('Register now')}>Register</button>
    </div>
  )
}
