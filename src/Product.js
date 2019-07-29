import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Item, Button, Icon } from "semantic-ui-react";

class Product extends React.Component {
  handleUpVote = () => this.props.handleVote(this.props.id);
  render() {
    return (
      <React.Fragment>
        <Item>
          <Item.Image size="small" src={this.props.url} />

          <Item.Content>
            <Item.Header as="a">{this.props.title}</Item.Header>
            <Item.Description>{this.props.description}</Item.Description>
            <Item.Extra>
              {this.props.votes + " "}
              <Button icon onClick={this.handleUpVote}>
                <Icon name="heart" />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </React.Fragment>
    );
  }
}

export default Product;
