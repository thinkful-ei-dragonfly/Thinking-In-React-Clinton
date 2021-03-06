import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Total from "./components/Total/Total";
import SummaryList from "./components/SummaryList/SummaryList";
import Features from "./components/Features/Features";


class App extends Component {
  constructor(props) {
    super(props);
    // ~Old Style React ~
    // this.updateFeature = this.updateFeature.bind(this);
    // ~New Style React ~ 
    // updateFeature = (props, otherProps) => {logic} // (Line 37)
    this.state = {
      selected: {
        Processor: {
          name: "17th Generation Intel Core HB (7 Core with donut spare)",
          cost: 700
        },
        "Operating System": {
          name: "Ubuntu Linux 16.04",
          cost: 200
        },
        "Video Card": {
          name: "Toyota Corolla 1.5v",
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }
  
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <Features
              features={this.props.features}
              selected={this.state.selected}
              updateFeature={this.updateFeature}
            />
          </section>
          <section>
            <SummaryList
              features={this.props.features}
              selected={this.state.selected}
              updateFeature={this.updateFeature}
            />
            <Total selected={this.state.selected} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
