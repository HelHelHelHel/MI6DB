import React from 'react';
export default class PeopleList extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           people: []
       };
   }
   componentDidMount() {
       fetch('/api/person')
           .then(response => response.json())
           .then(list => {
               this.setState({ people: list });
           });
   }
   render() {
       console.log(this.state.people);
       return (
           <>
               {this.state.people.map((item, i) =>
               <div>
                   <h1>{item.name}</h1>
                   <img src={`/images/${item.image.url}`} alt=""/>
               </div>
               )}
           </>
       );
   }
}