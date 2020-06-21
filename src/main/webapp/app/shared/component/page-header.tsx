import React from 'react';
import { Row, Col } from 'reactstrap';
import './page-header.scss';
import { Translate } from 'react-jhipster';

type Props = {
  titleKey: string;
  descriptionKey?: string;
};

const PageHeader: React.FC<Props> = (props) => {
  return (
    <Row className="password__title page-header">
      <Col className="page-header-title">
        <Translate contentKey={props.titleKey} />
      </Col>
      {props.descriptionKey && (
        <Col>
          <Translate contentKey={props.descriptionKey} />
        </Col>
      )}
    </Row>
  );
};

export default PageHeader;
