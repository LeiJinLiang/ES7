import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const loop = keyframes`
 0% {transform: translate(0,0);}
    15% {transform: translate(0,0);} 
    20% {transform: translate(-20%,0);} 
    35% {transform: translate(-20%,0);}

    40% {transform: translate(-40%,0);}
    55% {transform: translate(-40%,0);}

    60% {transform: translate(-60%,0);}
    75% {transform: translate(-60%,0);}

    80% {transform: translate(-80%,0);}
    95% {transform: translate(-80%,0);}

    100% {transform: translate(0,0);}
`;


const Wrapper = styled.div`
    position: relative;
    width: 500px;
    height: 300px;
    margin: 100px auto;
    overflow: hidden;    
`

const Content = styled.div`
    position: absolute;
    left: 0; top: 0;
    width: 500%;
    height: 100%;
    font-size: 0;
    animation: ${loop} 10s linear infinite;
`
const Item = styled.img`
    width: 500px;
    height: 300px;
`

const PureCssSlider = () => (
    <Wrapper>
        <Content>
            <Item src="//wx4.sinaimg.cn/thumb150/551dea9agy1fpjmqmztv1j20qo140x4d.jpg"></Item>
            <Item src="//wx1.sinaimg.cn/thumb150/4a8a8049gy1fpkq1sssmrj21bg0qo1kx.jpg"></Item>
            <Item src="//wx3.sinaimg.cn/thumb150/862dc77cly1fpj76tj5wbj218g270qcf.jpg"></Item>
            <Item src="//wx3.sinaimg.cn/thumb150/551dea9agy1fpnlahouebj21400qoncw.jpg"></Item>
            <Item src="//wx4.sinaimg.cn/thumb150/5f7e0c4cgy1fpj7pzzicvj215s0qo7ji.jpg"></Item>
        </Content>
    </Wrapper>
)


export default PureCssSlider