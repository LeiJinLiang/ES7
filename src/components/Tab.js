import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 100%;
	background-color: palegoldenrod;
	overflow: hidden;
	height : 200px;
`

const Content = styled.div`
    width: 100%;
	height: 100%;
	transition: transform 400ms linear;
	display: flex;
    flex: 1;
`

const Item = styled.div`
	width: 100%;
	height: 100%;
	flex-shrink:0;
	display: flex;
	justify-content: center;
	align-items: center;
`

class Tab extends React.Component{
    constructor(props){
        super(props)
        this.touchRange = 0 // x 轴触控距离
        this.state = {
            data : [
                {text : 'Caption1', bg : 'pink'},
                {text : 'Caption2', bg : 'palevioletred'},
                {text : 'Caption3', bg : 'cadetblue'},
                {text : 'Caption4', bg : 'chocolate'},
                {text : 'Caption5', bg : 'pink'}
            ]
        }
        this.current = 0
    }

    handleTouchStart = (e) => {
        this.touchRange = e.touches[0].pageX
    }

    handleTouchMove = (e) => {
        // console.log('this.current',this.current)
        this.container.style.webkitTransform = `translate3d(${-100*(this.current)}%,0,1px)`
    }

    handleTouchEnd = (e) => {
        const { data } = this.state
        const length = data.length
        if(this.touchRange - e.changedTouches[0].pageX>100){
            // console.log('left')
            this.current+=1
            if(this.current === length){
                this.current = length - 1
            }
        }
        if(this.touchRange - e.changedTouches[0].pageX<-100){
            // console.log('right')
            this.current-=1
            if(this.current < 0){
                this.current = 0
            }
        }

    }

    render(){
        const { data } = this.state
        return(
            <Wrapper onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd={this.handleTouchEnd}>
                <Content innerRef={(ele) => { this.container = ele }}>
                    {data.map((item,idx)=>(
                        <Item key={idx} style={{ backgroundColor : item.bg}}>{item.text}</Item>
                    ))}
                </Content>
            </Wrapper>
        )
    }
}

export default Tab