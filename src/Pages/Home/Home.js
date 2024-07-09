//Modules
import { useEffect, useState } from "react"
import equationimg from '../../assets/equation.png'
import Chart from 'react-google-charts'
import { motion } from 'framer-motion'
// Styles
import './Home.css'


export default function Home() {
    
    const [k0, setK0] = useState(0.0)
    const [temperature, SetTemperature] = useState(0.0)
    const [activationenergy, SetActivationenergy] = useState(0.0)
    const [rateconstant, SetRateconstant] = useState(0.0)
    const [chartdata, SetChartdata] = useState([])
    const [AIoutput, SetAIoutput] = useState(0.0)

    // Init chart array
    let chartarray = [];
    console.log(AIoutput)

    useEffect(() => {
        //Calculate the Rate Constant
        SetRateconstant(parseFloat(k0) * Math.exp(parseFloat(-activationenergy) * 1000 / (8.314 * (parseFloat(temperature) + 273.15) ) ))

        // Generating the 2D array for the plot
        chartarray = [["1/T", "ln(k)"]];
        for(var i=1; i<=10; i++){
            let x = 0.01 * i;
            let y = -(parseFloat(activationenergy) * 1000 /8.314) * x + Math.log(k0);
            chartarray.push([x,y]);
        }
        
        SetChartdata(chartarray);

        if(typeof window.network != 'undefined'){
          // For example : k0 is 72 , Activation Energy is 11 kJ/mol , Temperature is 99 Celsius
          //We also need to convert kJ to J and Celsius to Kelvin
          //network.run([72/100.0,11000/100000,(99+273-273)/(373-273)]).o  * 100
          
          SetAIoutput(window.network.run([k0/100.0, activationenergy * 1000 / 100000.0, ( Number(temperature) + 273 - 273) / (373.0 - 273.0)]).o * 100)
        }
        
    }, [k0 , temperature , activationenergy]);

  
  const options = {
    title: 'Arrhenius Plot : ln( k ) vs 1/T',
    titleTextStyle : {
      fontSize : 16
    },
    hAxis: {
      title: "1/T",
      titleTextStyle : {
        fontSize : 16,
        bold: true,
        italic: false
      }
    },
    vAxis: {
      title: "ln( k )",
      titleTextStyle : {
        fontSize : 16,
        bold: true,
        italic: false
      }
    },
    legend: 'none'
  };


  return (
    <motion.div
      initial={ {opacity : 0} }
      animate={ {opacity: 1} }
      transition={ {duration: 0.75} }
    >
      <div className="container">
        <div className="row content-home">
          <div className="col-lg-6">
            <div className='input-content'>
              <form>
                <div className="row justify-content-center">
                <img id="equation-img" src={equationimg} alt="equation" />
                  <div className="form-group ">
                    <div className="input-group mb-3 " >
                      <span className="input-group-text"  id="k0">A or k0 [1/s] :</span>
                      <input type="number" className="form-control"  id="k0" value={k0} onChange={(e) => setK0(e.target.value)}  />
                    </div>
                  </div>
                  <div className="form-group ">
                    <div className="input-group mb-3 " >
                      <span className="input-group-text"  id="temperature">Temperature [Celsius] :</span>
                      <input type="number" className="form-control"  id="temperature" value={temperature} onChange={(e) => SetTemperature(e.target.value)}/>
                    </div>
                  </div>
                  <div className="form-group ">
                    <div className="input-group mb-3 " >
                      <span className="input-group-text"  id="activationenergy">Activation Energy [kJ/mol] :</span>
                      <input type="number" className="form-control"  id="activationenergy" value={activationenergy} onChange={(e) => SetActivationenergy(e.target.value)}/>
                    </div>
                  </div>
                </div>
              </form>
              <div className="row justify-content-center">
                <span className="fw-bolder text-center fs-2 mt-3 mb-3">Rate Constant (k) : { rateconstant.toFixed(2) }</span>
                <span className="fw-bolder text-center fs-2 mt-3 mb-3 ai-output">AI Output for Rate Constant (k) : { AIoutput.toFixed(2) }</span>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <Chart
                chartType="LineChart"
                width="100%"
                height="500px"
                data={chartdata}
                options={options}
                className="chart"
            />
          </div>
        </div>
      </div>
   


    </motion.div>
  )
}
