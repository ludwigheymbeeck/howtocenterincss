/** @flow */

var React = require('react');
var RadioComponent = require('./RadioComponent');
var RadioListComponent = require('./RadioListComponent');

var Options = require('../how/Options');

class AlignmentComponent extends React.Component {
  _horizontal: RadioListComponent;
  _vertical: RadioListComponent;

  getHorizontalAlignment(): ?Options.HorizontalAlignment {
    return this._horizontal.getValue();
  }

  getVerticalAlignment(): ?Options.VerticalAlignment {
    return this._vertical.getValue();
  }

  render(): ?ReactElement {
    return (
      <div>
        <h2>Alignment</h2>
        <p>
          Surprise! This site isn't just for centering.
          How do you want to align the content?
        </p>
        <div className="col-group">
          <div className="col-5 col-mb-5">
            <h3>Horizontally</h3>
            <RadioListComponent ref={(c) => this._horizontal = c}>
              <RadioComponent
                labelText="Left"
                value={Options.HorizontalAlignment.LEFT}
              />
              <RadioComponent
                labelText="Center"
                value={Options.HorizontalAlignment.CENTER}
              />
              <RadioComponent
                labelText="Right"
                value={Options.HorizontalAlignment.RIGHT}
              />
            </RadioListComponent>
          </div>
          <div className="col-5 col-mb-5">
            <h3>Vertically</h3>
            <RadioListComponent ref={(c) => this._vertical = c}>
              <RadioComponent
                labelText="Top"
                value={Options.VerticalAlignment.TOP}
              />
              <RadioComponent
                labelText="Middle"
                value={Options.VerticalAlignment.MIDDLE}
              />
              <RadioComponent
                labelText="Bottom"
                value={Options.VerticalAlignment.BOTTOM}
              />
            </RadioListComponent>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = AlignmentComponent;
