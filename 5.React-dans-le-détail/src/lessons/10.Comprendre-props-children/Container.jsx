import Child from "./Child"

export default function Container() {
  return (
    <div>
      <h1>Props children</h1>
      <Child txt={"Test des modes de passage des props"}>
        <h1>props passés directement (pas dans le tag Child)</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis vel mollitia unde animi harum excepturi quidem laborum eaque nisi quibusdam.
        Sunt, repellendus et, debitis atque dolorum cumque necessitatibus placeat possimus magnam ullam deleniti ad aspernatur quia sed, fuga animi unde?
        Assumenda ut qui fugit cumque laudantium, expedita quas ab, itaque repellendus est sapiente id sint cum impedit dignissimos repellat illum!
        Quis commodi eveniet aliquid placeat doloremque in? Distinctio illum quasi alias sapiente unde assumenda ullam cupiditate! Maiores autem eveniet magnam.
        Odio itaque voluptatibus exercitationem soluta, cum sit reiciendis fuga recusandae nam, distinctio ipsa ex inventore quia blanditiis enim sapiente architecto!
        Eveniet atque nemo consectetur, eos dignissimos natus recusandae tempora nobis error dolorum odio reprehenderit illum adipisci, officia quam voluptatum possimus?
        Natus dolores asperiores vitae rerum harum totam culpa quia illo voluptas, quam architecto iusto nemo dolorem dolor vel molestiae itaque?
        Optio iusto numquam rem voluptas voluptatem architecto vel laborum dicta. Hic nobis expedita voluptate ipsam soluta distinctio alias, mollitia voluptatem.
        Dolor eligendi magni, molestias id quibusdam cupiditate fuga blanditiis repellendus laborum quo, placeat error aperiam quam consectetur, repudiandae accusantium maxime.
        Consequuntur nostrum dolores expedita fugit iste alias? Dolorem officia dolor dolorum atque enim numquam? Totam quas ab iste necessitatibus iusto.
        </p>
      </Child>
      <Child><button>Valider</button></Child>
      <Child><input type="text" /></Child>
      <Child><input type="text" /></Child>
      <Child><input type="text" /></Child>
    </div>
  )
}
