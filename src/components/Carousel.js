import React, { Component } from "react"
import profilbild from "../images/profilbild.jpg"
//import monsterMarketplace from "../monsterMarketplace.png"
import beaver1 from "../beaver1.jpg"
import beaver2 from "../beaver2.jpg"
import beaver3 from "../beaver3.jpg"
import beaver4 from "../beaver4.jpg"
import Card from "./Card"
import { Container, Row } from "react-bootstrap"

class Carousel extends Component{
    constructor(props){
        super(props)
        this.state = {
            items:[
                {
                    id:0,
                    title:"Projektet",
                    subTitle:"Det här projektet gjord",
                    imgSrc:beaver1, 
                    link:"https://erikrudhe.github.io/TNM084---Procedurally-generated-city/",
                    selcted:false
                },
                {
                    id:1,
                    title:"Test1",
                    subTitle:"Test igen2",
                    imgSrc:beaver2, 
                    link:" ",
                    selcted:false
                },
                {
                    id:2,
                    title:"Test2",
                    subTitle:"Test igen2",
                    imgSrc:beaver3, 
                    link:" ",
                    selcted:false
                },
                {
                    id:3,
                    title:"Test2",
                    subTitle:"Test igen2",
                    imgSrc:beaver4, 
                    link:" ",
                    selcted:false
                },
                {
                    id:4,
                    title:"Test2",
                    subTitle:"Test igen2",
                    imgSrc:profilbild, 
                    link:" ",
                    selcted:false
                }
            ]

        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel