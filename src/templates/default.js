import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../components/icon';
import Button from '../components/button';
import Text from '../components/text';
import Title from '../components/title';
import { TYPES } from '../constants';

const DefaultTemplate = ({
  type, title, text, ctaText, ctaOnClick,
}) => (
  <TemplateBase>
    <Icon type={type} />
    {title &&
      <Title>{title}</Title>
    }
    {text &&
      <Text>
        {text}
      </Text>
    }
    {ctaText && ctaOnClick &&
      <Button status={type} onClick={ctaOnClick} type="button">
        {ctaText}
      </Button>
    }
  </TemplateBase>
);

DefaultTemplate.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)),
  title: PropTypes.string,
  text: PropTypes.string,
  ctaText: PropTypes.string,
  ctaOnClick: PropTypes.func,
};

DefaultTemplate.defaultProps = {
  type: null,
  title: null,
  text: null,
  ctaText: null,
  ctaOnClick: null,
};

export default DefaultTemplate;

const TemplateBase = styled.div`
  position: relative;
  padding: 1rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
