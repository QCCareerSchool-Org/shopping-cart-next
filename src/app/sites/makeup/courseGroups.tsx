import { CourseDescription } from '@/components/courseDescription';
import type { CourseGroup } from '@/domain/courseGroup';

export const courseGroups: CourseGroup[] = [
  {
    name: 'Best Value',
    items: [
      {
        code: 'AM',
        name: 'All-Access Program',
        badge: <span className="ms-2 badge bg-primary text-uppercase">Most Popular</span>,
        contents: {
          heading: 'All-Access Program',
          body: (
            <div className="p-sm-1 p-lg-3">
              <div className="row justify-content-center mb-4">
                <div className="col-12 col-lg-10 text-center">
                  <h4 className="lead fw-bold">Get the Most Comprehensive Training Available—with Expert Mentorship Included</h4>
                  <p className="mb-0">Unlock our complete library of online, self-paced event planning courses. Engage with interactive lessons and expert-led video training, complete practical assignments, and receive personalized mentor feedback as you develop confident, career-ready skills.</p>
                </div>
              </div>
              <div className="row g-3">
                <div className="col-12 col-lg-6">
                  <CourseDescription heading="Event & Wedding Planning">
                    Plan seamless weddings and events from concept to execution, mastering timelines, budgets, vendors, and client experience.
                  </CourseDescription>
                </div>
                <div className="col-12 col-lg-6">
                  <CourseDescription heading="Corporate Event Planning">
                    Lead professional events from company functions to public gatherings, mastering event logistics and risk management.
                  </CourseDescription>
                </div>
                <div className="col-12 col-lg-6">
                  <CourseDescription heading="Event Decor">
                    Elevate the guest experience by designing unforgettable event aesthetics.
                  </CourseDescription>
                </div>
                <div className="col-12 col-lg-6">
                  <CourseDescription heading="Luxury Wedding & Event Planning">
                    Attract high-end clients and confidently plan upscale weddings and celebrations.
                  </CourseDescription>
                </div>
                <div className="col-12 col-lg-6">
                  <CourseDescription heading="Destination Wedding Planning">
                    Manage travel, remote venues, and international logistics with expertise.
                  </CourseDescription>
                </div>
                <div className="col-12 col-lg-6">
                  <CourseDescription heading="Promotional Event Planning">
                    Design high-impact product launches, industry events and brand experiences that command attention.
                  </CourseDescription>
                </div>
                <div className="col-12 col-lg-6">
                  <CourseDescription heading="Festivals & Live Events">
                    Coordinate complex live productions and large-scale public events from start to finish.
                  </CourseDescription>
                </div>
                <div className="col-12 col-lg-6">
                  <CourseDescription heading="Accelerate Your Business">
                    Achieve your business goals faster with proven strategies and guidance from a professional planner.
                  </CourseDescription>
                </div>
                <div className="col-12 col-lg-6">
                  <CourseDescription heading="Virtual Events Training">
                    Master virtual platforms, audience engagement, and virtual event logistics to plan and deliver online events.
                  </CourseDescription>
                </div>
              </div>
            </div>
          ),
          modalSize: 'xl',
        },
      },
    ],
  },
  {
    name: 'Foundation Courses',
    items: [
      {
        code: 'MZ',
        name: 'Master Makeup Artistry',
      },
      {
        code: 'SK',
        name: 'Skincare Consultant',
      },
    ],
  },
  {
    name: 'Specialty Courses',
    items: [
      { code: 'SF', name: 'Special FX Makeup' },
      { code: 'MW', name: 'Pro Makeup Workshop' },
      { code: 'HS', name: 'Hair Styling Essentials' },
      { code: 'AB', name: 'Airbrush Makeup Workshop' },
      { code: 'PW', name: 'Portfolio Development' },
      { code: 'PF', name: 'Personal Styling' },
    ],
  },
];
