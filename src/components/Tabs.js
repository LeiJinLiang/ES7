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

const Nav = styled.ul`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ededed;
    border-top:1px solid #ededed;
    display: flex;
`
const Tab = styled.li`
    flex: 1;
    text-align: center;
    line-height: 35px;
    list-style: none;
`
const TabActive = Tab.extend`
    border-bottom: 2px solid cornflowerblue;
`


class Tabs extends React.Component{
    constructor(props){
        super(props)
        this.touchRange = 0 // x 轴触控距离
        this.state = {
            data : [
                {text : 'Caption1', bg : 'pink'},
                {text : 'Caption2', bg : 'palevioletred'},
                {text : 'Caption3', bg : 'cadetblue'}
            ],
            current : 0
        }
    }

    handleTouchStart = (e) => {
        this.touchRange = e.touches[0].pageX
    }

    handleTouchMove = (e) => {
        console.log('this.state.current',this.state.current)
        const { current } = this.state
        this.container.style.webkitTransform = `translate3d(${-100*(current)}%,0,1px)`
    }

    handleTouchEnd = (e) => {
        const { data } = this.state
        const length = data.length
        if(this.touchRange - e.changedTouches[0].pageX>100){
            console.log('left')
            this.state.current+=1
            if(this.state.current === length){
                this.state.current = length - 1
            }
            this.setState({
                current : this.state.current
            })
        }
        if(this.touchRange - e.changedTouches[0].pageX<-100){
            console.log('right')
            this.state.current-=1
            if(this.state.current < 0){
                this.state.current = 0
            }
            this.setState({
                current : this.state.current
            })
        }
        this.container.style.webkitTransform = `translate3d(${-100*(this.state.current)}%,0,1px)`
    }

    handleClickTab = (idx) => {
        this.setState({
            current : idx
        },()=>{
            this.container.style.webkitTransform = `translate3d(${-100*(this.state.current)}%,0,1px)`
        })
    }

    render(){
        const { data, current } = this.state
        return(
            <React.Fragment>
                <Nav>
                    {data.map((item,idx)=>{
                        if(idx != this.state.current){
                            return (<Tab onClick={(index)=>this.handleClickTab(idx)} key={idx}>{item.text}</Tab>)
                        }else{
                            return (<TabActive onClick={(index)=>this.handleClickTab(idx)} key={idx}>{item.text}</TabActive>)
                        }
                    })}
                </Nav>
                <Wrapper onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd={this.handleTouchEnd}>
                    <Content innerRef={(ele) => { this.container = ele }}>
                        {data.map((item,idx)=>(
                            <Item key={idx} style={{ backgroundColor : item.bg}}>{item.text}</Item>
                        ))}
                    </Content>
                </Wrapper>
            </React.Fragment>
        )
    }
}

export default Tabs