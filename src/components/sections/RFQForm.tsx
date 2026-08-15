import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';

type RFQValues = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  part: string;
  quantity: string;
  material: string;
  deliveryDate: string;
  details: string;
};

type RFQErrors = Partial<Record<keyof RFQValues | 'drawing', string>>;

const initialValues: RFQValues = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  part: '',
  quantity: '',
  material: '',
  deliveryDate: '',
  details: '',
};

const allowedExtensions = ['pdf', 'dwg', 'dxf', 'step', 'stp', 'iges', 'igs', 'jpg', 'jpeg', 'png'];
const maxFileSize = 15 * 1024 * 1024;

export function RFQForm() {
  const [values, setValues] = useState<RFQValues>(initialValues);
  const [errors, setErrors] = useState<RFQErrors>({});
  const [drawing, setDrawing] = useState<File | null>(null);
  const [integrationNotice, setIntegrationNotice] = useState(false);
  const minDate = useMemo(() => new Date().toISOString().split('T')[0], []);

  const updateValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setIntegrationNotice(false);
  };

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setDrawing(file);
    setErrors((current) => ({ ...current, drawing: undefined }));
    setIntegrationNotice(false);
  };

  const validate = () => {
    const nextErrors: RFQErrors = {};

    if (!values.fullName.trim()) nextErrors.fullName = 'Enter your full name.';
    if (!values.company.trim()) nextErrors.company = 'Enter your company name.';
    if (!values.email.trim()) nextErrors.email = 'Enter your work email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = 'Enter a valid email address.';
    if (values.phone && !/^[+\d\s().-]{7,24}$/.test(values.phone)) nextErrors.phone = 'Enter a valid phone number.';
    if (!values.part.trim()) nextErrors.part = 'Enter a part number or fastener type.';
    if (!values.quantity.trim()) nextErrors.quantity = 'Enter an estimated quantity.';
    else if (!/^\d+$/.test(values.quantity) || Number(values.quantity) < 1) nextErrors.quantity = 'Quantity must be a positive whole number.';
    if (!values.details.trim()) nextErrors.details = 'Tell us briefly about the project requirements.';

    if (drawing) {
      const extension = drawing.name.split('.').pop()?.toLowerCase() ?? '';
      if (!allowedExtensions.includes(extension)) nextErrors.drawing = 'Use PDF, DWG, DXF, STEP, IGES, JPG, or PNG.';
      else if (drawing.size > maxFileSize) nextErrors.drawing = 'The selected file must be 15 MB or smaller.';
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setIntegrationNotice(false);

    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => document.getElementById('rfq-error-summary')?.focus());
      return;
    }

    setIntegrationNotice(true);
    requestAnimationFrame(() => document.getElementById('rfq-integration-notice')?.focus());
  };

  const fieldError = (name: keyof RFQErrors) => (errors[name] ? `${name}-error` : undefined);

  return (
    <form className="rfq-form" onSubmit={handleSubmit} noValidate>
      {Object.keys(errors).length > 0 ? (
        <div id="rfq-error-summary" className="form-status form-status--error" role="alert" tabIndex={-1}>
          <strong>Please review the highlighted fields.</strong>
          <span>Your RFQ has not been sent.</span>
        </div>
      ) : null}

      {integrationNotice ? (
        <div id="rfq-integration-notice" className="form-status form-status--notice" role="status" tabIndex={-1}>
          <strong>Your RFQ details passed local validation.</strong>
          <span>
            Nothing was transmitted because the submission service is not connected yet. Please use the confirmed sales contact once supplied.
          </span>
        </div>
      ) : null}

      <div className="rfq-form__grid">
        <div className="field">
          <label htmlFor="fullName">Full Name <span aria-hidden="true">*</span></label>
          <input id="fullName" name="fullName" value={values.fullName} onChange={updateValue} autoComplete="name" aria-invalid={Boolean(errors.fullName)} aria-describedby={fieldError('fullName')} />
          {errors.fullName ? <span id="fullName-error" className="field__error">{errors.fullName}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="company">Company <span aria-hidden="true">*</span></label>
          <input id="company" name="company" value={values.company} onChange={updateValue} autoComplete="organization" aria-invalid={Boolean(errors.company)} aria-describedby={fieldError('company')} />
          {errors.company ? <span id="company-error" className="field__error">{errors.company}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="email">Work Email <span aria-hidden="true">*</span></label>
          <input id="email" name="email" type="email" value={values.email} onChange={updateValue} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={fieldError('email')} />
          {errors.email ? <span id="email-error" className="field__error">{errors.email}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" value={values.phone} onChange={updateValue} autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={fieldError('phone')} />
          {errors.phone ? <span id="phone-error" className="field__error">{errors.phone}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="part">Part Number or Fastener Type <span aria-hidden="true">*</span></label>
          <input id="part" name="part" value={values.part} onChange={updateValue} aria-invalid={Boolean(errors.part)} aria-describedby={fieldError('part')} />
          {errors.part ? <span id="part-error" className="field__error">{errors.part}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="quantity">Estimated Quantity <span aria-hidden="true">*</span></label>
          <input id="quantity" name="quantity" type="number" min="1" inputMode="numeric" value={values.quantity} onChange={updateValue} aria-invalid={Boolean(errors.quantity)} aria-describedby={fieldError('quantity')} />
          {errors.quantity ? <span id="quantity-error" className="field__error">{errors.quantity}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="material">Material or Finish</label>
          <input id="material" name="material" value={values.material} onChange={updateValue} placeholder="Example: alloy and finish requirement" />
        </div>
        <div className="field">
          <label htmlFor="deliveryDate">Required Delivery Date</label>
          <input id="deliveryDate" name="deliveryDate" type="date" min={minDate} value={values.deliveryDate} onChange={updateValue} />
        </div>
        <div className="field field--full">
          <label htmlFor="details">Project Details <span aria-hidden="true">*</span></label>
          <textarea id="details" name="details" rows={5} value={values.details} onChange={updateValue} placeholder="Include specifications, tolerances, application details, or questions that will help the review." aria-invalid={Boolean(errors.details)} aria-describedby={fieldError('details')} />
          {errors.details ? <span id="details-error" className="field__error">{errors.details}</span> : null}
        </div>
        <div className="field field--full">
          <label htmlFor="drawing">Drawing / File Upload</label>
          <div className="file-field">
            <input id="drawing" name="drawing" type="file" accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.jpg,.jpeg,.png" onChange={handleFile} aria-invalid={Boolean(errors.drawing)} aria-describedby={`drawing-help${errors.drawing ? ' drawing-error' : ''}`} />
            <span>{drawing ? drawing.name : 'Choose a drawing or specification file'}</span>
            <strong>Browse</strong>
          </div>
          <span id="drawing-help" className="field__help">PDF, DWG, DXF, STEP, IGES, JPG or PNG. Maximum 15 MB.</span>
          {errors.drawing ? <span id="drawing-error" className="field__error">{errors.drawing}</span> : null}
        </div>
      </div>

      <div className="rfq-form__footer">
        <p>
          Your information will only be used to review this request. Secure transmission and storage must be confirmed when the form backend is connected.
        </p>
        <button className="button button--primary" type="submit">Validate RFQ Details</button>
      </div>
    </form>
  );
}
