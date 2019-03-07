import React from 'react';
import * as peopleApi from '../api/people';

class PeoplePage extends React.Component {
  state = {
    isLoaded: false,
    people: [],
  };

  async componentDidMount() {
    const people = await peopleApi.getAll();

    this.setState({ people, isLoaded: true })
  }

  render() {
    const { people, isLoaded } = this.state;
    return (
      <div className="PeoplePage">
        <h1>People page</h1>
        { isLoaded ? (
          <ul>
            { people.map(person => (
              <li>{person.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}

      </div>
    );
  }
}

export default PeoplePage;
