import React, { Component } from 'react'
import styled from 'styled-components'



const Wrapper = styled.div`
    margin: 2em auto;
	width: 960px;
	overflow: hidden;
`

const Content = styled.div`
    width: 9999px;
	height: 300px;
	position: relative;
	transition: left 400ms linear;
`

const Item = styled.div`
    float: left;
	width: 960px;
	height: 300px;
	position: relative;
	overflow: hidden;
`

const Img = styled.div`
    position : absolute;
    left : 0;
    top : 0;
    right : 0;
    bottom: 0;
    text-align: center;
    line-height : 14;
    background-color: palegoldenrod;
`
const Text = styled.p`
    margin: 0;
	position: absolute;
	z-index: 100;
	bottom:0;
	left: 0;
	width: 100%;
	height: 2em;
	line-height: 2;
	text-align: center;
	background: rgba( 0, 0, 0, 0.6 );
	color: #fff;
	transition: bottom 500ms ease-in;
`

const Nav = styled.div`
    margin: 1em 0;
	text-align: center;
`
const Link = styled.a`
    width: 2em;
	height: 2em;
	border: 1px solid #ccc;
	text-align: center;
	text-decoration: none;
	color: #000;
	display: inline-block;
	line-height: 2;
	margin-right: 0.5em;
	cursor : pointer;
`

class Slider extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [
                {text : 'Caption1', bg : 'palegoldenrod'},
                {text : 'Caption2', bg : 'palevioletred'},
                {text : 'Caption3', bg : 'cadetblue'},
                {text : 'Caption4', bg : 'chocolate'},
                {text : 'Caption5', bg : 'pink'},
            ],
            count : 0,
            timer : ''
        }
    }

    renderLink = (idx) => {
        return (<Link onClick = {e => this.handleClick(idx)} key = {idx}>{idx+1}</Link>)
    }

    renderItem = (item,idx) => (
        <Item bg = {item.bg} key = {idx}>
            <Img>{idx+1}</Img>
            <Text>Caption{idx+1}</Text>
        </Item>
    )


    handleClick = (idx) => {
        if (this.search) {
            this.search.style.left = -(960*idx)+'px'
        }
    }

    handleMove = () => {
        if (this.search && this.state.count < 5) {
            console.log(2);
            this.search.style.left = -(960*this.state.count)+'px'
            this.state.count = this.state.count + 1;
        }else{
            this.search.style.left = '0px';
            this.state.count = 0;
        }

    }

    handleOnMouseOver = () => {
        clearInterval(this.state.timer);
    }

    handleOnMouseOut = () => {
        const _self = this
        this.state.timer = setInterval(_self.handleMove,1000);
    }

    componentDidMount() {
        const _self = this
       this.state.timer = setInterval(_self.handleMove,1000);
    }

    render(){
        const { data } = this.state
        return(
            <Wrapper onMouseOver = {this.handleOnMouseOver} onMouseOut = {this.handleOnMouseOut}>
                <Content innerRef={(search) => { this.search = search }}>
                    {data.map((item,idx)=>(
                        this.renderItem(item,idx)
                    ))}
                </Content>
                <Nav>
                    {data.map((item,idx)=>(
                        this.renderLink(idx)
                    ))}
                </Nav>
            </Wrapper>
        )
    }
}

export default Slider