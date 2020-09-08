import React from 'react'

export default function Footer(props) {
  
    return (
      <footer className="footer">
      <h2>I have completed {props.completedItems.length} out of {props.todos.length} items on my list</h2>
    </footer>
    )
}