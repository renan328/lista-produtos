import './App.css';
import Produto from './Compontents/Produto/Produto';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Hamburgueria </h2>
      </header>

      <h1>Principais Hambúrgueres</h1>

      <section className="Products">


      <Produto name="Hambúrguer Simples"
      price="20,00"
      desconto="25,00"
      image="https://th.bing.com/th/id/R.a838e9dc96a7fb9c823f745ec9e2cf45?rik=uI%2fraPvcJXPYRw&riu=http%3a%2f%2fwww.nidelins.com.br%2fwp-content%2fuploads%2f2019%2f04%2fhamburguer-xique-xique.jpeg&ehk=Xx%2bnY5bICrmSDc1%2fgg5gctD%2bNU4Bpb62NQ7JjE79BNM%3d&risl=&pid=ImgRaw&r=0"
      descrict="Hambúrger com uma carne de 150g, bacon e muito queijo"/>


      <Produto name="Hambúrguer Duplo"
      price="30,00"
      desconto="42,00"
      image="https://i.pinimg.com/originals/d1/2d/19/d12d1927b7b8e60c8dd26468431d82de.jpg"
      descrict="Hambúrger com DUAS carnes de 100g e muito cheddar"/>

      <Produto name="Hambúrguer Triplo"
      price="45,00"
      desconto="52,00"
      image="https://baab.ci/wp-content/uploads/2021/04/Burger-Texas-Grillz-2-800x800.jpg"
      descrict="Hambúrger com TRÊS carnes de 100g, muito cheddar e bacon"/>

      <Produto name="Quatro Carnes"
      price="30,00"
      desconto="42,00"
      image="https://i.pinimg.com/736x/46/24/9b/46249bba892fb7d220a29cfbac17f05f.jpg"
      descrict="Hambúrger com quatro carnes de 100g e completo"/>

      <Produto name="Montanha"
      price="30,00"
      desconto="42,00"
      image="https://www.independent-birmingham.co.uk/wp-content/uploads/2020/11/120111133_764869604302721_7903174645213783618_o.jpg"
      descrict="Nosso maior Hambúrger, super completo!"/>

      <Produto name="Clássico"
      price="30,00"
      desconto="42,00"
      image="https://i.pinimg.com/originals/b7/87/4a/b7874a843b41de046c6cdcdcabad6395.jpg"
      descrict="O nosso Hambúrger clássico!"/>



      </section>

    </div>
  );
}

export default App;
