import React, { Component } from "react";
import Slider from "react-slick";
import { Container,Wrapper,InnerWrapper } from "./style";


class Clothes extends Component{
        constructor(props){
            super(props);
            this.state = {
                products : [],
            }
        }

        componentDidMount(){
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> this.setState({products: json}))
        }


    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 3,
            arrows: true,
            autoplay:true,
            autoplaySpeed: 2000,
            pauseOnFocus:true,
        };
            console.log(this.state);
        return(
            <Container>
                <Wrapper>
        <Slider {...settings}>
        {this.state.products?.map((product) => (
            <InnerWrapper>
                <h3> {product.category.toUpperCase()}</h3>
                <img src={product.image} alt="product.title" />
                <InnerWrapper.P>{product.title}</InnerWrapper.P>
                <InnerWrapper.P>${product.price}</InnerWrapper.P>
                <InnerWrapper.P>{product.category}</InnerWrapper.P>
            </InnerWrapper>
          ))}
        </Slider> 
                </Wrapper>
            </Container>
        )
    }
}


export default Clothes