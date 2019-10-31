import React from 'react';
export default class PeopleList extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           people: []
       };
   }
   componentDidMount() {
       console.log(this.props.token)
       fetch('/api/person', {
           method: 'GET',
           headers: {
                'Authorization': 'Bearer ' + this.props.token
           }
       })
           .then(response => response.json())
           .then(list => {
               this.setState({ people: list });
           });
   }
   render() {
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