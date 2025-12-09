import type { FC } from 'react';

import { useFormStyleVariant } from '../formStyleContext';
import type { AgreementLinks } from '@/domain/agreementLinks';
import { useAddressState } from '@/hooks/useAddressState';

type Props = {
  agreementLinks: AgreementLinks;
};

export const Agreement: FC<Props> = ({ agreementLinks }) => {
  const { countryCode } = useAddressState();
  const variant = useFormStyleVariant();

  const href = getHref(agreementLinks, countryCode);
  if (variant === 'ppa') {
    return <TermsEmbed />;
  }

  return <p className="mb-3">By clicking the &quot;Proceed to Payment&quot; button below, you agree to the terms of the <a rel="noopener noreferrer" target="_blank" href={href}>Enrollment Agreement</a>.</p>;
};

const TermsEmbed: FC = () => (
  <div className="terms-embed">
    <h3 className="terms-embed__title">Terms &amp; Conditions</h3>
    <div className="terms-embed__frame" role="region" aria-label="Paw Parent Academy Terms and Conditions" tabIndex={0}>
      <div className="terms-embed__content">
        <h4>Paw Parent Academy - Terms and Conditions</h4>
        <p>By enrolling in any course or program at Paw Parent Academy, you agree to the following Terms and Conditions. Please read them carefully.</p>
        <ol className="terms-embed__list">
          <li>
            <h5>14-Day Money-Back Guarantee</h5>
            <ul>
              <li>Paw Parent Academy offers a 14-day money-back guarantee for all course enrollments. If you decide the course is not the right fit, you may request a full refund within 14 days of enrollment.</li>
              <li>To request a refund, complete the course and email <a href="mailto:info@pawparentacademy.com">info@pawparentacademy.com</a> with a brief explanation of why the course does not meet your expectations.</li>
              <li>Refunds will be processed once we have verified your course completion.</li>
            </ul>
          </li>
          <li>
            <h5>Disclaimers</h5>
            <ul>
              <li><strong>Educational Purpose Only:</strong> Paw Parent Academy provides educational content, resources, and tutorials to assist you in grooming and caring for your dog at home. The techniques, methods, and knowledge you learn from this content will be applied entirely at your own risk.</li>
              <li><strong>No Professional Veterinary or Medical Advice:</strong> Our courses do not provide professional veterinary or medical advice. For any health concerns regarding your pet, it is important to consult a qualified veterinarian. Paw Parent Academy disclaims any responsibility for issues arising from your pet's health or safety due to improper application of grooming techniques.</li>
            </ul>
          </li>
          <li>
            <h5>Intellectual Property</h5>
            <p>All content provided by Paw Parent Academy, including but not limited to course materials, videos, images, and written content, is protected by copyright and is the exclusive intellectual property of Paw Parent Academy.</p>
            <p>You are granted a limited, non-transferable license to use the materials solely for personal, non-commercial purposes. You may not copy, reproduce, distribute, or modify any content without written permission.</p>
          </li>
          <li>
            <h5>User Conduct</h5>
            <p>You agree not to use any course materials or the Paw Parent Academy platform for illegal, abusive, or harmful activities. Any violations may result in the termination of your access to the courses or platform without a refund.</p>
          </li>
          <li>
            <h5>Governing Law and Jurisdiction</h5>
            <p>This Agreement is governed by the laws of the Province of Ontario and the laws of Canada applicable therein. Any disputes arising under this Agreement shall be resolved in the exclusive jurisdiction of the courts of Ontario.</p>
          </li>
          <li>
            <h5>Age of Majority</h5>
            <p>You must be 18 years of age or the legal age of majority in your jurisdiction to enroll in courses with Paw Parent Academy. If you are under 18, you will need a parental consent form to enroll. Please contact us at <a href="mailto:info@pawparentacademy.com">info@pawparentacademy.com</a> for instructions.</p>
          </li>
          <li>
            <h5>Privacy and Data Collection</h5>
            <ul>
              <li>Paw Parent Academy is committed to respecting your privacy. Any personal information collected during enrollment will be handled in accordance with our Privacy Policy.</li>
              <li>By enrolling in a course, you consent to receiving marketing communications from Paw Parent Academy. You can opt out at any time by following the instructions in the emails or contacting us directly.</li>
            </ul>
          </li>
          <li>
            <h5>Course Availability and Access</h5>
            <ul>
              <li>We strive to ensure that all courses are available and functioning properly; however, we do not guarantee continuous, uninterrupted access to course materials and are not liable for downtime or service interruptions.</li>
              <li>You are responsible for ensuring you have the necessary equipment to access course materials.</li>
            </ul>
          </li>
          <li>
            <h5>Limitation of Liability</h5>
            <p>Paw Parent Academy is not liable for any direct, indirect, incidental, or consequential damages arising from the use of the courses, the application of grooming techniques, or the results thereof. By enrolling, you agree to hold Paw Parent Academy harmless from any claims, damages, or liabilities arising from your use of course materials.</p>
          </li>
          <li>
            <h5>Course Modifications and Updates</h5>
            <p>Paw Parent Academy reserves the right to modify, update, or remove any course content at its discretion. While we strive to keep courses current and accurate, we do not guarantee that all content will remain unchanged.</p>
            <p>In the event of major course updates, enrolled students may receive access to updated content depending on the nature of the change.</p>
          </li>
          <li>
            <h5>Contact Information</h5>
            <p>For any questions regarding these Terms and Conditions, or for any other inquiries, please contact us at <a href="mailto:info@pawparentacademy.com">info@pawparentacademy.com</a>.</p>
          </li>
        </ol>
        <p>By enrolling in a course at Paw Parent Academy, you acknowledge and accept these Terms and Conditions. These terms are subject to change, and we recommend reviewing them periodically.</p>
      </div>
    </div>
  </div>
);

const getHref = (agreementLinks: AgreementLinks, countryCode: string): string => {
  for (const c of agreementLinks.custom) {
    if (c.countryCodes.includes(countryCode)) {
      return c.link;
    }
  }
  return agreementLinks.default;
};
