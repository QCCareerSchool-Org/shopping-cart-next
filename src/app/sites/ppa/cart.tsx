import Image from 'next/image';
import type { FC } from 'react';

import { agreementLinks } from './agreementLinks';
import { courseGroups } from './courseGroups';
import type { PpaCourse } from './courses';
import { PpaPriceDisplay } from './ppaPriceDisplay';
import { Form } from '@/components/form';

const successLink = 'https://www.pawparentacademy.com/thank-you';

interface Props {
  date: number;
  course: PpaCourse;
}

export const PpaCart: FC<Props> = ({ date, course }) => {
  const heroImageSrc = typeof course.heroImage === 'string' ? course.heroImage : course.heroImage.src;
  const trustBadgeWidth = course.trustBadge?.width ?? 360;
  const trustBadgeHeight = course.trustBadge?.height ?? 120;

  return (
    <div className="ppaCheckout">
      <section
        className="ppaCheckoutBanner"
        aria-label="Course banner"
        style={{ backgroundImage: `url(${heroImageSrc})` }}
      >
        <span className="visually-hidden">{course.heroImageAlt}</span>
      </section>

      <div className="ppaCheckoutContent">
        <div className="ppaCheckoutGrid" id="enroll">
          <aside className="ppaCheckoutInfo">
            <div className="ppaCheckoutInfo__media">
              <Image
                src={course.productImage}
                alt={`${course.name} product thumbnail`}
                width={560}
                height={360}
              />
            </div>
            <div className="ppaCheckoutInfo__copy">
              <h1 className="ppaCheckoutInfo__title">{course.name}</h1>
              <p className="ppaCheckoutInfo__summary">
                {course.summaryBody}
              </p>

              <div className="ppaInfoBlock ppaInfoBlock--cta">
                <h5>{course.includesHeading}</h5>
                <ul className="ppaHighlights">
                  {course.includes.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="ppaInfoBlock">
                <h5>{course.benefitsHeading}</h5>
                <ul className="ppaHighlights">
                  {course.benefits.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="ppaInfoBlock">
                <h5>Enroll Now & Start Grooming Today!</h5>
                {course.trustBadge && (
                  <div className="ppaTrustBadge">
                    <Image
                      src={course.trustBadge.src}
                      alt={course.trustBadge.alt}
                      width={trustBadgeWidth}
                      height={trustBadgeHeight}
                      sizes="(max-width: 768px) 80vw, 540px"
                      style={{ width: '100%', height: 'auto', maxWidth: `${trustBadgeWidth}px` }}
                    />
                  </div>
                )}
              </div>

              <div className="ppaTestimonials">
                <h5>What people are saying</h5>
                <ul className="ppaTestimonialsList">
                  {course.testimonials.map(testimonial => (
                    <li key={testimonial.id} className="ppaTestimonial">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={64}
                        height={64}
                      />
                      <div>
                        <q>{testimonial.quote}</q>
                        <p className="ppaTestimonial__author">{testimonial.author}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ppaLegalLinks">
                <a href="https://www.pawparentacademy.com/contact" target="_blank" rel="noreferrer">
                  Contact Us
                </a>
                <a href="https://www.pawparentacademy.com/privacy-policy" target="_blank" rel="noreferrer">
                  Privacy Policy
                </a>
              </div>

            </div>
          </aside>

          <section className="ppaCheckoutPanel" aria-labelledby="ppaCheckoutPrice">
            <header className="ppaCheckoutPanel__header">
              {course.tuitionSubLabel && (
                <p className="ppaCheckoutPanel__label">{course.tuitionSubLabel}</p>
              )}
              <PpaPriceDisplay className="ppaCheckoutPanel__price" />
            </header>
            <div className="ppaCheckoutPanel__body">
              <Form
                date={date}
                courseGroups={courseGroups}
                coursesOverride={[ course.code ]}
                hideCourseSelection
                hideCourseTable
                school="Paw Parent Academy"
                successLink={successLink}
                agreementLinks={agreementLinks}
                guarantee={null}
                showPromoCodeInput
                visualPaymentPlans={false}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
