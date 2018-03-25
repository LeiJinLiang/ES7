import React, { Component } from 'react'
import styled from 'styled-components'


function Slider1( element ) {
    this.el = document.querySelector( element );
    this.init();
}

Slider1.prototype = {
    init: function() {
        this.links = this.el.querySelectorAll( "#slider-nav a" );
        this.wrapper = this.el.querySelector( "#slider-wrapper" );
        this.navigate();
    },
    navigate: function() {

        for( var i = 0; i < this.links.length; ++i ) {
            var link = this.links[i];
            this.slide( link );
        }
    },

    animate: function( slide ) {
        var parent = slide.parentNode;
        var caption = slide.querySelector( ".caption" );
        var captions = parent.querySelectorAll( ".caption" );
        for( var k = 0; k < captions.length; ++k ) {
            var cap = captions[k];
            if( cap !== caption ) {
                cap.classList.remove( "visible" );
            }
        }
        caption.classList.add( "visible" );
    },

    slide: function( element ) {
        var self = this;
        element.addEventListener( "click", function( e ) {
            e.preventDefault();
            var a = this;
            self.setCurrentLink( a );
            var index = parseInt( a.getAttribute( "data-slide" ), 10 ) + 1;
            var currentSlide = self.el.querySelector( ".slide:nth-child(" + index + ")" );

            self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
            self.animate( currentSlide );

        }, false);
    },
    setCurrentLink: function( link ) {
        var parent = link.parentNode;
        var a = parent.querySelectorAll( "a" );

        link.className = "current";

        for( var j = 0; j < a.length; ++j ) {
            var cur = a[j];
            if( cur !== link ) {
                cur.className = "";
            }
        }
    }
};

document.addEventListener( "DOMContentLoaded", function() {
    // var aSlider = new Slider1( "#slider" );

});



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
            ]
        }
    }

    renderLink = (idx) => {
        return (<Link onClick = {e => this.handleClick(idx)} key = {idx}>{idx+1}</Link>)
    }

    renderItem = (item,idx) => (
        <Item bg = {item.bg} key = {idx} ref = {'warpper'+idx}>
            <Img>{idx+1}</Img>
            <Text>Caption{idx+1}</Text>
        </Item>
    )


    handleClick = (idx) => {
        
    }

    render(){
        const { data } = this.state
        return(
            <Wrapper>
                <Content>
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