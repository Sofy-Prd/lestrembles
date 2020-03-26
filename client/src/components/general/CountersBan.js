import React, {Component} from 'react';
import CountUp from 'react-countup';





class CountersBan extends Component {

    
    render () {
     
        return (
            <div className="countersBan">

                 <div className="counterA"><p>+ de <CountUp start={0} end={150} duration={3}/></p><p>danseurs</p></div>
                 <div className="counterL"><p>+ de <CountUp start={0} end={20} delay={3} duration={2}/></p><p>bénévoles</p></div>
                 <div className="counterT"><p>+ de <CountUp start={0} end={10} delay={5} duration={3}/></p><p>niveaux</p></div>
                                      
            </div>
        );
    }
}

export default CountersBan;