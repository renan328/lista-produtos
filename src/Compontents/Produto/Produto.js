import Styles from './Produto.module.css';
function Produto({name, price, image, descrict, desconto}) {
    return(
        <div className={Styles.Produto}>

            <div className={Styles.images}>
                <img src={image} alt="" />
            </div>
                
            <div className={Styles.details}>
                <div className={Styles.details2}>
                    <h2>{name} </h2>
                </div>
                <div className={Styles.details2}>
                    <p className={Styles.descricao}>{descrict}</p>
                </div>
                <div className={Styles.details2}>
                    <h4 className={Styles.desconto}><s>R${desconto}</s></h4>
                    <h4>R${price} </h4>
                </div>

                <div className={Styles.details2}>
                    <button className={Styles.botao}>Ver Mais +</button>
                </div>
            </div>
        </div>
    );
}

export default Produto;