import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { Translate, TextFormat } from 'react-jhipster';
import { Link, RouteComponentProps } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import { debounce } from 'lodash';
import Select from 'react-select';
import { ICompany } from 'app/shared/model/company.model';
import { IRootState } from 'app/shared/reducers';
import { getEntities as getCompanies } from 'app/entities/company/company.reducer';


export interface ICompanySelectorProps extends StateProps, DispatchProps {
  id?: string;
  name?: string;
  placeholder?: string;
  onChange?: Function;
  companyId?: string;
  className?: string
}

const getOptionValue = option => option.id;
const getOptionLabel = option => option.name;

export class CompanySelector extends React.Component<ICompanySelectorProps> {

  componentDidMount() {
    this.props.getCompanies();
  }

  render() {
    const { id, name, placeholder, onChange, companies, className } = this.props;
    return (
      <Select
        id={id}
        name={name}
        options={companies}
        className={className}
        isClearable
        escapeClearsValue
        backspaceRemovesValue
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  companies : storeState.company.entities,
});

const mapDispatchToProps = {
  getCompanies
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanySelector);
