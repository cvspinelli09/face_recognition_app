import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Text from './components/Text/Text';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'b65e16600b28482bab4ffcd2581ab5eb'
});

const particlesOptions = {
   particles: {
    number: {
      value: 175,
      density: {
        enable: true,
        value: 789
      }
    },
    shape: {
      polygon: {
        ns_slides: 5
      }
    },
    move: {
      speed: 2.8
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtomSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(
        function(response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function(err) {
          // there was an error
        }
      );
  }

  render() {
    return (
      <div className="App">
            <Particles className='particles'
              params={particlesOptions}
            />
        <Navigation />
        <Logo />
        <Text />
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtomSubmit={this.onButtomSubmit} 
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}


export default App;
