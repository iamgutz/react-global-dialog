import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Dialog from './dialog';
import Modal from './components/modal';
import DefaultTemplate from './templates/default';
import { ACTIONS } from './constants';

export const getTemplate = (template, currentTemplate) => {
  if (template && React.isValidElement(<template />)) {
    return template;
  }
  return currentTemplate || DefaultTemplate;
};

export const dialog = new Dialog();

class DialogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: null,
      DialogComponent: getTemplate(props.template),
    };
    this.addDialog = this.addDialog.bind(this);
    this.removeDialog = this.removeDialog.bind(this);
  }

  componentDidMount() {
    dialog.on(ACTIONS.SHOW, this.addDialog);
    dialog.on(ACTIONS.HIDE, this.removeDialog);
  }

  componentWillUnmount() {
    dialog.remove();
  }

  addDialog(options, templateArg) {
    const { template } = this.props;
    const { DialogComponent } = this.state;
    const newTemplate = templateArg || template;
    this.setState({
      options,
      DialogComponent: getTemplate(newTemplate, DialogComponent),
    });
  }

  removeDialog() {
    this.setState({
      options: null,
      DialogComponent: null,
    });
  }

  render() {
    const { options, DialogComponent } = this.state;
    return (
      <Fragment>
        {options &&
          <Modal>
            <DialogComponent {...options} />
          </Modal>
        }
      </Fragment>
    );
  }
}

DialogContainer.propTypes = {
  template: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]),
};

DialogContainer.defaultProps = {
  template: null,
};

export default DialogContainer;
