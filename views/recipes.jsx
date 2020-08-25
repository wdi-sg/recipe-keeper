
import React from 'react'
import styled from 'styled-components'


const Body = styled.body`
  color: palevioletred;
`

export default class Recipes extends React.Component {
    render(){

    const idArr = this.props.ids;
    const titleArr = this.props.title
    const mystyle = {
      color: "white",
      padding: "10px",
      fontFamily: "Georgia",
      fontFamily: "Montserrat",
      background: 'url("https://images.unsplash.com/photo-1532768907235-78653b7dc71d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80")',
      textAlign: "center",


    };
       let titleList = titleArr.map((item,index)=> {
        return <li><a href={`/recipes/${index}`}style={{color: "lightblue"}}>{item}</a></li> })

        return (
        <html>
        <Body style={mystyle}>
          <div>
            <h1>Recipe Title</h1>
            <ul style ={{listStyle:"none"}}>{titleList}</ul>

          </div>
        </Body>
      </html>
            );
    }
}