import React from "react";

import  Charts from './Coponents/Charts/Charts';
import  Cards from './Coponents/Cards/Cards';
import  CountryPicker from './Coponents/CountryPicker/CountryPicker';
import { fetchData } from './api';

// import {Charts , Cards , CountryPicker} from './Coponents';

import styles from './App.module.css';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <h1>COVID-19 TRACKER</h1>
        <Charts data={data} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
      </div>
    );
  }
}
export default App;
//   }


//   async componentDidMount(){
//     const data = await fetchData();
//     this.setState({ data: data });
//   }


    
//   render() {
//     const { data } = this.state;
//       return(
//         <div className={styles.container}>
//             <Cards data= />
//             <Charts />
//             <CountryPicker />
//         </div>
//       )
//   }
//   }

// export default App;