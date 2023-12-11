import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const { t } = useTranslation();

  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
            
          <LinkContainer to='/'>
              
            <Nav.Link>
            <div className="order-tracking completed m-auto">
                            <span className="is-complete"></span>
                            
                        </div>
                {t('step1')}
                </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>{t('step1')}</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>
            <div className="order-tracking completed m-auto">
                            <span className="is-complete"></span>
                            
                        </div>
                        {t('step2')}
                
                </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
               <div className="order-tracking  m-auto">
                            <span className="is-complete"></span>
                            
                        </div>
                        {t('step2')}
              </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>
            <div className="order-tracking completed m-auto">
                            <span className="is-complete"></span>
                            
                        </div>
                        {t('step3')}

                </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
               <div className="order-tracking  m-auto">
                            <span className="is-complete"></span>
                            
                        </div>
                        {t('step3')}
              </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>
            <div className="order-tracking completed m-auto">
                            <span className="is-complete"></span>
                            
                        </div>
                        {t('step4')}
                </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
               <div className="order-tracking  m-auto">
                            <span className="is-complete"></span>
                            
                        </div>
                        {t('step4')}
              </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;