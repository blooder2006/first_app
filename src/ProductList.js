import React from "react";
import Product from "./Product";
import { products } from "./data";
import "semantic-ui-css/semantic.min.css";
import { Container, Item } from "semantic-ui-react";

class ProductList extends React.Component {
  state = { products: [] };

  componentDidMount() {
    this.setState({ products });
  }

  handleProductUpVote = productID => {
    const newProducts = this.state.products.map(product => {
      if (product.id === productID) {
        return { ...product, votes: (product.votes += 1) };
      } else {
        return product;
      }
    });

    this.setState(newProducts);
  };

  render() {
    const sortedProducts = this.state.products.sort(
      (a, b) => b.votes - a.votes
    );
    return (
      <Container>
        <div>Product List</div>
        <Item.Group>
          {sortedProducts.map(product => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              url={product.avatar}
              votes={product.votes}
              handleVote={this.handleProductUpVote}
            />
          ))}
        </Item.Group>
      </Container>
    );
  }
}

export default ProductList;
