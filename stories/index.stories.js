/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/button';
import Title from '../src/components/title';
import { DialogContainer, dialog } from '../src/index';

const showSuccess = () => {
  dialog.show({
    status: 'success',
    title: 'Great! Successful',
    text: 'Yep! This dialog shows you a successful thing has happened!',
    ctaText: 'Close me now!',
    ctaOnClick() { dialog.close(); },
  });
};
const showError = () => {
  dialog.show({
    status: 'error',
    title: 'Oops! Not good!',
    text: 'Boo! This dialog shows you a bad thing has happened!',
    ctaText: 'Close me now!',
    ctaOnClick() { dialog.close(); },
  });
};
const showPending = () => {
  dialog.show({
    status: 'pending',
    title: 'Wait! We are working!',
    text: 'Hang tight! This dialog shows you a thing is happening!',
    ctaText: 'Close me now!',
    ctaOnClick() { dialog.close(); },
  });
};
const showDefault = () => {
  dialog.show({
    title: 'Nothing fancy!',
    text: 'Just a regular dialog with no colors!',
    ctaText: 'Close me now!',
    ctaOnClick() { dialog.close(); },
  });
};

storiesOf('Dialog', module)
  .add('Basic Usage', () => (
    <div>
      <Title>Basic Usage of the Dialog Component</Title>
      <DialogContainer />
      <Button onClick={showSuccess} status="success">
        Show Success Dialog
      </Button>
      <Button onClick={showError} status="error">
        Show Error Dialog
      </Button>
      <Button onClick={showPending} status="pending">
        Show Pending Dialog
      </Button>
      <Button onClick={showDefault}>
        Show Default Dialog
      </Button>
    </div>
  ));