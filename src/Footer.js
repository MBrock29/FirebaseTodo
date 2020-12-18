import React from 'react'

export default function Footer(props) {
  
    return (
      <footer className="footer">
      <h2>I have completed {props.completedItems.length} out of {props.todos.length} items</h2>
    </footer>
    )
}