import fuji from './assets/fuji.jpg'
import triangle from './assets/triangle.svg'

export default function Container() {

  return (
    <div>
      <h1>Utiliser des images</h1>
      <p>Images png, webp, etc....</p>
      <img src={fuji}  alt="" />
      <p>Utiliser le images du dossier public</p>
      <img src="/assets/forest-3.jpg" alt="" />
      <p>SVG</p>
      <img src={triangle} alt="" />
    </div>
  )
}
