import './DataPiechart.css';
import {PieChart, Pie, Tooltip, Cell, label} from 'recharts';

const DataPieChart = () => {

  const data = [
    {name: "Completed", value: 70},
    {name: "In-Progress", value: 30},
  ];

  const data1 = [
    {name: "Completed", value: 40},
    {name: "In-Progress", value: 60},
  ];


  const COLORS = [ '#00C49F', '#0088FE'];

  return (
    <div>
      <div className="containerPieChart1">
      <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={100}
            label={data}
            fill="#0B58CB"
          >
              {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          
          <Tooltip />
        </PieChart>
      </div>


      <div className="containerPieChart2">
      <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data1}
            cx={200}
            cy={200}
            outerRadius={100}
            fill="#0B58CB"
          >
              {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div className="containerPieChart1Label">
      <p>Design and Digital Arts</p>
      </div>

      <div className="containerPieChart1Labe2">
      <p>Life and Works of Rizal</p>
      </div>




    </div>
  );

}

export default DataPieChart;
