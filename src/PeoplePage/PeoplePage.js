import React from 'react';

import * as peopleApi from '../api/people';
import Pagination from '../Common/Pagination'

class PeoplePage extends React.Component {
  state = {
    isLoaded: false,
    page: 1,
    count: 0,
    people: [],
  };

  async componentDidMount() {
    const { count, results: people } = await peopleApi.getAll();

    this.setState({
      people,
      count,
      isLoaded: true,
    });
  }

  render() {
    console.log(this.props.location.search);
    const { people, isLoaded, count, page } = this.state;
    return (
      <div className="PeoplePage">
        <h1>People page</h1>

        { isLoaded ? (
          <>
            <Pagination count={count} page={page} />
            <ul>
              { people.map(person => (
                <li key={person.name}>{person.name}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default PeoplePage;
