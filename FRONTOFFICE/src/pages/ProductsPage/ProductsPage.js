import React from "react";
import { Parallax } from "react-parallax";
import "./ProductsPage.css";
import Footer from "../../components/Footer/footer";
import ProductCard from "../../components/Products/productCard";

class ProductsPage extends React.Component {
	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch("https://localhost:44307/api/Dolci")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Attendi il caricamento dei prodotti... </h1> </div>;

		return (
			<div className="products">
				<Parallax bgImage={require("../../assets/banner-dolce-7.jpg")} strength={300}>
					<div className="products__parallax">
						<hr className="header__line-1" />
						<div className="products__title">Opere d'arte pasticcere</div>
						<hr className="header__line-2" />
					</div>
				</Parallax>
				<br />
				<div className="products__noteWrap">
					<h3>🎂 Prodotti principali</h3>
				</div>
				<br />
				{
					items.map((item) => (
						<div className="products__list">
							<ol key={item.id}>
								<div className="products__cards">
									<ProductCard
										name={item.nome}
										image={require("C:/Users/nikol/Downloads/BakeryWebsite-master/src/assets/pasticciotto-leccese-1.jpg")}
										price={item.prezzo}
									/>
								</div>
							</ol>
						</div>
					))
				}
				<Footer />
			</div>

		);
	}

}

export default ProductsPage;
