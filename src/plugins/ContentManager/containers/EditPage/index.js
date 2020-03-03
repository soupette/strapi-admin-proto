import React from 'react';
import { get } from 'lodash';
import { Container, Row, Col } from 'reactstrap';
import Input from '../../components/Input';
import form from './utils/form';

const EditPage = () => {
  const layout = get(form, ['layout', 'edit'], []);
  return (
    <Container fluid>
      <form>
        {layout.map((block, blockIndex) => {
          return (
            <div key={blockIndex}>
              {block.map((fieldsBlock, fieldsBlockIndex) => {
                console.log(fieldsBlock);

                return (
                  <Row key={fieldsBlockIndex}>
                    {fieldsBlock.map(field => {
                      return (
                        <Col size={field.size} key={field.name}>
                          <Input {...field} layout={layout} />
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
