import Slider from 'rc-slider';
import type { FC } from 'react';
import 'rc-slider/assets/index.css';

import { Section } from '@/components/section';
import { useOverridesDispatch } from '@/hooks/useOverridesDispatch';
import { useOverridesState } from '@/hooks/useOverridesState';
import { usePaymentState } from '@/hooks/usePaymentState';

export const Overrides: FC = () => {
  const paymentState = usePaymentState();
  const overridesState = useOverridesState();
  const overridesDispatch = useOverridesDispatch();

  if (paymentState.plan === 'full') {
    return;
  }

  const handleCourseChange = (value: number | number[], code: string): void => {
    if (typeof value === 'number') {
      overridesDispatch({ type: 'SET_OVERRIDE_COURSE_VALUE', payload: { code, value } });
    }
  };

  const handleChange = (value: number | number[]): void => {
    if (typeof value === 'number') {
      overridesDispatch({ type: 'SET_OVERRIDE_VALUE', payload: { value } });
    }
  };

  const handleReset = (): void => {
    overridesDispatch({ type: 'RESET_OVERRIDES' });
  };

  const handleInstallmentsChange = (installments: number | number[]): void => {
    if (typeof installments === 'number') {
      overridesDispatch({ type: 'SET_OVERRIDE_INSTALLMENTS', payload: { installments } });
    }
  };

  return (
    <Section>
      <h2 className="h1">Overrides</h2>

      <div className="row">

        <div className="col-12 col-lg-6">
          <div className="form-group">
            <div className="alert alert-primary p-4">
              <label htmlFor="totalDeposit">Total Deposit</label>
              <div className="row">
                <div className="col-7 col-sm-9 col-lg-8">
                  <Slider
                    min={overridesState.min}
                    max={overridesState.max}
                    step={0.01}
                    defaultValue={overridesState.default}
                    value={overridesState.value}
                    marks={{
                      [overridesState.default]: overridesState.default.toFixed(2),
                      [overridesState.max]: overridesState.max.toFixed(2),
                    }}
                    onChange={handleChange}
                    className="mb-3"
                    styles={{ track: { backgroundColor: '#007bff' }, handle: { borderColor: '#007bff' } }}
                    activeDotStyle={{ borderColor: '#007bff' }}
                  />
                </div>
                <div className="col-5 col-sm-3 col-lg-4">
                  <input type="number" id="totalDeposit" className="form-control d-inline-block mx-2" value={overridesState.value} min={overridesState.min} max={overridesState.max} onChange={e => handleChange(parseFloat(e.target.value))} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {overridesState.courses.filter(d => d.max > 0).length > 1 && (
          <div className="col-12 col-lg-6 order-lg-3">
            <div className="alert alert-secondary p-4">
              {overridesState.courses.filter(d => d.max > 0).map(d => (
                <div className="form-group" key={d.code}>
                  <label htmlFor={'depositOverride' + d.code}>{d.name} Deposit</label>
                  <div className="row">
                    <div className="col-7 col-sm-9 col-lg-8">
                      <Slider
                        min={d.min}
                        max={d.max}
                        step={0.01}
                        defaultValue={d.default}
                        value={d.value}
                        marks={{
                          [d.default]: d.default.toFixed(2),
                          [d.max]: d.max.toFixed(2),
                        }}
                        onChange={(value: number | number[]) => handleCourseChange(value, d.code)}
                        className="mb-3"
                      />
                    </div>
                    <div className="col-5 col-sm-3 col-lg-4">
                      <input type="number" id={'depositOverride' + d.code} className="form-control d-inline-block mx-2" value={d.value} min={d.min} max={d.max} onChange={e => handleCourseChange(parseFloat(e.target.value), d.code)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="col-12 col-lg-6 order-lg-2">
          <div className="form-group">
            <div className="alert alert-primary p-4">
              <label htmlFor="totalDeposit">Installments</label>
              <div className="row">
                <div className="col-8 col-sm-10 col-lg-9">
                  <Slider
                    min={1}
                    max={overridesState.maxInstallments}
                    step={1}
                    defaultValue={overridesState.defaultInstallments}
                    value={overridesState.installments}
                    marks={{
                      1: '1',
                      [overridesState.defaultInstallments.toFixed(0)]: overridesState.defaultInstallments.toFixed(0),
                      [overridesState.maxInstallments.toFixed(0)]: overridesState.maxInstallments.toFixed(0),
                    }}
                    onChange={handleInstallmentsChange}
                    className="mb-3"
                    styles={{ track: { backgroundColor: '#007bff' }, handle: { borderColor: '#007bff' } }}
                    activeDotStyle={{ borderColor: '#007bff' }}
                  />
                </div>
                <div className="col-4 col-sm-2 col-lg-3">
                  <input type="number" id="totalDeposit" className="form-control d-inline-block mx-2" value={overridesState.installments.toFixed(0)} step={1} min={1} max={overridesState.maxInstallments} onChange={e => handleChange(parseFloat(e.target.value))} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <button type="button" className="btn btn-danger" onClick={handleReset}>Reset Overrides</button>
    </Section>
  );
};
