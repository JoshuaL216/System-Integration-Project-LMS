
import Tabs from './Tabs';
import Calndr from './Calndr'
import Qoute from './Qoute';
import Welcome from './Welcome'
import Reminder from './Reminder'
import DataPiechart from "./DataPiechart";


function MainHomepage() {

  return (
    <div className="App">

        <div className="AppClassName">
        <Tabs/> 
        </div>

        <div className="AppCalendar">
        <Calndr/> 
        </div>

        <div className="AppQoute">
        <Qoute/> 
        </div>

        <div className="AppWelcome">
        <Welcome/> 
        </div>

        <div className="AppReminder">
        <Reminder/>
        </div>

        <div className="AppPieChart">
        <DataPiechart/>
        </div>

    </div>
  );
}
    
export default MainHomepage