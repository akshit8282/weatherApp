import React from "react";
import Outer from './outerdiv/outerdiv'
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import tryagain from './images/tryagain.jpg'
import natural from './images/natural.jpg'

const API_KEY = "6e4b6f248f9ad121b13b5b474be159a6";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    cityf:false,
   bg:'',
   ok:false
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
console.log(city);
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`).catch(err=>{
  console.log(err);
    });
    
    const data = await api_call.json();
    if(data.cod==404){
      this.setState({cityf:true});
    }
   else{
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }
 
this.state.humidity<=25?this.setState({bg:'natural',ok:true}):this.setState({bg:'cloud',ok:true})

  }
  render() {
    return (
      <div>
  <Outer  back={this.state.bg} ok={this.state.ok}>
 
        <div className="wrapper">
     
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  {this.state.cityf?
                  <div >
                    <a href="/"><img style={{display:'block',margin:'auto'}} src={tryagain} height="100px" width="100px" /></a>
                  <marquee><h1 style={{color:"whitesmoke"}}>CITY NOT FOUND</h1></marquee>
                  </div>:
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
  }
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </Outer>
      </div>
    );
  }
};

export default App;