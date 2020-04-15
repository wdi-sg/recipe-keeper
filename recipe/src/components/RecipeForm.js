// import React, { Component } from "react";

// class RecipeForm extends Component {
//   // add new recipe
//   state = {
//     id: "",
//     title: "",
//     ingredients: "",
//     instructions: "",
//   };

//   onAdd = (event) => {
//     event.preventDefault();
//     console.log(this.state);
//     this.props.whenSubmit(this.state);
//     this.setState({
//       title: "",
//       ingredients: "",
//       instructions: "",
//     });
//   };

//   render() {
//     return (
//       <div>
//         <form>
//           <input
//             type="text"
//             name="title"
//             placeholder="Title"
//             value={this.state.title}
//             onChange={(event) => this.setState({ title: event.target.value })}
//           />
//           <br />
//           <input
//             type="text"
//             name="ingredients"
//             placeholder="Ingredients"
//             value={this.state.ingredients}
//             onChange={(event) =>
//               this.setState({ ingredients: event.target.value })
//             }
//           />
//           <br />
//           <input
//             type="text"
//             name="instructions"
//             placeholder="Instructions"
//             value={this.state.instructions}
//             onChange={(event) =>
//               this.setState({ instructions: event.target.value })
//             }
//           />
//           <br />

//           <button onClick={(event) => this.onAdd(event)}>Add</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default RecipeForm;
