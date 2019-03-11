import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height : auto;
  position: relative;
`
const Nav = styled.nav`
  position: fixed;
  top:0;
  left: 0;
  right : 0;
  height : 40px;
  background-color: aqua; 
  display: flex;
  justify-content: center;
  align-content: center;
`
const NavItem = styled.div`
  flex: 1;
  text-align: center;
  line-height: 40px;
`
const Content = styled.section`
  padding-top: 40px;
  width: 100%;
  margin-bottom: 20px;
`
const Head = styled.h1`
     border-top: 1px solid #000;
`
const Item1 = styled.div`
  width: 100%;
  background-color: pink;
`

class AnchorComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : [
                {name : 'tab1', height : '200px'},
                {name : 'tab2', height : '400px'},
                {name : 'tab3', height : '600px'},
                {name : 'tab4', height : '800px'},
            ]
        }
        this.$list = []
        this.start = 0
        this.activeOffsetTop = 0
        this.requestID = 0
        this.speed = 33

    }

    step = (timestamp) => {
        this.start += this.speed
        window.scrollTo(0,this.start)
        if (this.start <=  this.activeOffsetTop) {
            this.requestID =  window.requestAnimationFrame(this.step);
        }else{
            window.scrollTo(0,this.activeOffsetTop)
            this.start = 0
            window.cancelAnimationFrame(this.requestID)
        }
    }


    handleMove = (idx) => {
        this.activeOffsetTop = this.$list[idx].offsetTop;
        window.scrollTo({
            top : this.$list[idx].offsetTop,
            behavior: "smooth"
        })
        // this.requestID = window.requestAnimationFrame(this.step);
    }

    handleTab = (idx) => {
        this.handleMove(idx);
    }

    render(){
        const { data } = this.state
        return(
            <Wrapper>
                <Nav>
                    {data.map((item,idx)=>(
                        <NavItem onClick={()=>this.handleTab(idx)} key={`tab-${idx}`}>{item.name}</NavItem>
                    ))}
                </Nav>
                    {data.map((item,idx)=>(
                        <Content innerRef={ele=>this.$list[idx]=ele} key={`item-${idx}`}>
                            <Head>{item.name}</Head>
                            <Item1 style={{height : item.height}}></Item1>
                        </Content>
                    ))}
            </Wrapper>
        )
    }
}

export default AnchorComponent