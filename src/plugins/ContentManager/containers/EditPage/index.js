import React, { useReducer } from 'react';
import { get } from 'lodash';
import { Container, Row, Col } from 'reactstrap';
import Input from '../../components/Input';
import form from './utils/form';
import init from './init';
import reducer, { initialState } from './reducer';

const EditPage = () => {
  const layout = get(form, ['layout', 'edit'], []);
  const [reducerState, dispatch] = useReducer(reducer, initialState, init);
  const { modifiedData } = reducerState.toJS();

  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: 'ON_CHANGE',
      keys: name,
      value,
    });
  };

  return (
    <Container fluid>
      <form>
        {layout.map((block, blockIndex) => {
          return (
            <div key={blockIndex}>
              {block.map((fieldsBlock, fieldsBlockIndex) => {
                return (
                  <Row key={fieldsBlockIndex}>
                    {fieldsBlock.map(field => {
                      return (
                        <Col size={field.size} key={field.name}>
                          <Input
                            {...field}
                            layout={form}
                            value={get(modifiedData, field.name, '')}
                            onChange={handleChange}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                );
              })}
            </div>
          );
        })}
      </form>
    </Container>
  );
};

export default EditPage;
