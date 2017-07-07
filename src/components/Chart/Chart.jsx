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

    const plotOptions = {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: false
        }
      }
    }

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

    new Highcharts.chart(this.props.title, {
      colors: colors,
      chart: {
        type: 'column'
      },
      title: {
        text: this.props.title
      },
      xAxis: {
        type: 'category'
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
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
      drilldown: {
        series: drilldown
      }
    })
  }

  render() {

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

        <h2>{this.props.title}</h2>

        <label><input type="radio" name={this.props.title + '_visning'} value="figur" checked="true" onChange={this.handleVisning.bind(this)} checked={this.state.selectedVisning === 'figur'}/>
          Figur</label>
        <label><input type="radio" name={this.props.title + '_visning'} value="tabell" onChange={this.handleVisning.bind(this)} checked={this.state.selectedVisning === 'tabell'}/>
          Tabell</label>

        <DropdownList onChange={this.dropdownChange.bind(this)} defaultValue={this.state.selectedType} data={colors}/>
        <Panel title={this.props.title} datagrunnlag={this.props.datagrunnlag} selectedPanel={this.props.selectedPanel} handleSlide={this.props.handleSlide.bind(this)}/>

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
