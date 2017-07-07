import React from 'react'
import Highcharts from 'highcharts'
import Exporting from 'highcharts/modules/exporting.src'
import Drilldown from 'highcharts/modules/drilldown.src'
import Data from 'highcharts/modules/data.src'
import Panel from '../Panel/Panel.jsx';

Exporting(Highcharts)
Drilldown(Highcharts)
Data(Highcharts)

import update from 'immutability-helper';
import DropdownList from 'react-widgets/lib/DropdownList';
import ReactWidgets from 'react-widgets/lib/scss/react-widgets.scss';

const colors = ['line', 'pie', 'bar', 'table'];

export default class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: this.props.type,
      items: this.props.data,
      selectedVisning: 'figur'
    }
  }

  handleVisning(e) {
    console.log(e.target.value);
    this.setState({selectedVisning: e.target.value})
  }

  handleSelect(changeEvent) {
    this.setState({selectedType: changeEvent.target.value})
  }

  dropdownChange(changeEvent) {
    this.setState({selectedType: changeEvent})
  }

  componentDidMount() {

    const colors = [
      '#f6c034',
      '#7e9b40',
      '#809ba0',
      '#117eb4',
      '#79006c',
      '#7e9b40',
      '#574319'
    ]

    const newDrilldown = []
    const drilldown = update(newDrilldown, {
      $push: this.state.items.map((item) => ({'id': item.id, 'data': item.data}))
    })

    const newSeries = []
    const series = update(newSeries, {
      $push: this.state.items.map((item) => ({
        'name': item.name,
        'y': item.y,
        'drilldown': item.data
          ? item.id
          : null
      }))
    })

    const newxAxis = []
    const xAxis = update(newxAxis, {
      $push: this.state.items.map((item) => (
        item.name
      ))
    })

    console.log(xAxis);


    new Highcharts.chart(this.props.title, {
      colors: colors,
      chart: {
        type: this.props.type,
        style: {
          fontFamily: 'Roboto'
        }
      },
      title: {
        text: this.props.title
      },
      xAxis: {
        type: 'category',
        labels: {
          style: {
            color: '#333',
            fontSize: '16px'
          }
        }
      },
      legend: {
        itemStyle: {
          fontSize: '16px'
        },
        enabled: true,
        enabled: true,
        align: 'center',
        verticalAlign: 'top',
      },
      tooltip: {
        shadow: false,
        borderWidth: 5
      },
      plotOptions: {
        series: {
          animation: false,
          borderWidth: 0,
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [
        {
          name: this.props.title,
          colorByPoint: true,
          data: series
        }
      ],
      drilldown:
      {
        series: drilldown
      }
    })
  }

  render() {

    // console.log(this.state.items);

    const tabell = this.state.items.map((item) => <tbody>
      <tr>
        <th rowSpan={item.data
          ? item.data.length + 1
          : null}>
          {item.name}
        </th>
        <td rowSpan={item.data
          ? item.data.length + 1
          : null}>
          {item.y}
        </td>
      </tr>
      {item.data
        ? item.data.map((item) => <tr>
          <th>{item.name}</th>
          <td>{item.y}</td>
        </tr>)
        : null}
    </tbody>)

    return (
      <div className="highchart">

        <div style={{'position': 'relative'}}>
          <h2>{this.props.title}</h2>

          <div className="visning">
          <label><input type="radio" name={this.props.title + '_visning'} value="figur" checked="true" onChange={this.handleVisning.bind(this)} checked={this.state.selectedVisning === 'figur'}/>
            <span>Figur</span>
          </label>
          <label><input type="radio" name={this.props.title + '_visning'} value="tabell" onChange={this.handleVisning.bind(this)} checked={this.state.selectedVisning === 'tabell'}/>
            <span>Tabell</span>
          </label>
          </div>
          <DropdownList onChange={this.dropdownChange.bind(this)} defaultValue={this.state.selectedType} data={colors}/>
          <Panel title={this.props.title} datagrunnlag={this.props.datagrunnlag} selectedPanel={this.props.selectedPanel} handleSlide={this.props.handleSlide.bind(this)}/>
        </div>

        <div>

          <div style={{
            height: this.state.selectedVisning === 'figur'
              ? 'auto'
              : '0',
            opacity: this.state.selectedVisning === 'figur'
              ? '1'
              : '0'
          }}>
            <div id={this.props.title}></div>
          </div>
        </div>

        <div style={{
          height: this.state.selectedVisning === 'tabell'
            ? 'auto'
            : '0',
          opacity: this.state.selectedVisning === 'tabell'
            ? '1'
            : '0'
        }}>

          <table>
            <caption>{this.props.title}</caption>
            {tabell}
          </table>

        </div>

      </div>
    )
  }
}
