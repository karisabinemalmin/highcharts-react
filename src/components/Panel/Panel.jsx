import React from 'react'

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    }
  }

  handleSlide(e) {
    this.props.handleSlide(e)
    this.setState({
      selected: !this.state.selected,
    })
  }

  render() {

    return (
      <div style={{'display': 'inline-block', 'verticalAlign': 'top', 'margin-left': '.5em'}}>
        <label className={this.state.selected
          ? 'panel--active'
          : 'panel--inactive'}>
          <input
             onClick={this.handleSlide.bind(this)}
             value={this.props.title}
             name="datagrunnlag"
             type="checkbox"
             checked={this.state.selected}
             style={{"opacity": "0", "position": "absolute"}}
           /> Vis datagrunnlag
         </label>

        <div className={this.state.selected
          ? 'panel panel--visible'
          : 'panel panel--hidden'}>
          <h2>Datagrunnlag for «{this.props.title}»</h2>
          {this.props.datagrunnlag}
        </div>
      </div>
    )
  }
}
