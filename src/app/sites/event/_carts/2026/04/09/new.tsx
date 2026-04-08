'use client';

import { Award, Briefcase, CheckCircle2, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { cloneElement, type FC } from 'react';

export const Body: FC = () => (
  <>
    {/* Scrollable Content Wrapper (Header + Body) */}
    <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col">
      {/* Modal Header */}
      <div className="bg-white border-b border-slate-200 px-5 pt-12 pb-6 sm:px-10 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6 shrink-0 relative overflow-hidden">
        <div className="relative z-10 flex-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold tracking-wide uppercase mb-3 border border-teal-100">
            <ShieldCheck className="w-3.5 h-3.5" /> All-Access Program
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A0F3D] leading-tight">
            Unlock Your Event Planning Career
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Enroll once, unlock full access to every QC Event Planning course.
          </p>
        </div>

        {/* Pricing Block */}
        <div className="relative z-10 md:text-right bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="text-sm font-semibold text-slate-500 mb-1 flex items-center md:justify-end gap-2">
            Standard Value <span className="line-through decoration-red-400/50 decoration-2">$7,331</span>
          </div>
          <div className="flex items-baseline md:justify-end gap-1">
            <span className="text-4xl font-extrabold text-[#0A0F3D]">$1,698</span>
            <span className="text-sm font-medium text-slate-500">*</span>
          </div>
          <div className="text-sm font-medium text-[#1DD1A1] mt-1">
            You save $5,633 today
          </div>
        </div>
      </div>

      {/* Modal Body */}
      <div className="p-5 sm:px-10 py-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Courses list */}
          <div className="lg:col-span-5 flex flex-col">
            <h3 className="text-lg font-bold text-[#0A0F3D] mb-5 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#1DD1A1]" />
              Certification Courses Included
            </h3>

            <ul className="space-y-3 flex-1">
              {courses.map((course, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-[#1DD1A1] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 font-medium group-hover:text-[#0A0F3D] transition-colors">
                    {course}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-teal-50/50 rounded-xl border border-teal-100">
              <p className="text-sm text-teal-900 font-medium">
                Need more time? <span className="font-normal text-teal-700">Simply contact the school and we'll extend your one-year completion time for free.</span>
              </p>
            </div>
          </div>

          {/* Vertical Divider (Desktop only) */}
          <div className="hidden lg:block lg:col-span-1 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
          </div>

          {/* Right Column: Value Props */}
          <div className="lg:col-span-6 space-y-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4 sm:gap-5 group">
                <div className="shrink-0 w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-[#1DD1A1] group-hover:border-[#1DD1A1] transition-colors duration-300">
                  {cloneElement(feature.icon, {
                    className: 'w-6 h-6 text-[#1DD1A1] group-hover:text-[#0A0F3D] transition-colors duration-300',
                  })}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0A0F3D] mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Bonus Highlight */}
            <div className="relative overflow-hidden rounded-xl bg-[#0A0F3D] text-white p-5 sm:p-6 mt-6 shadow-lg shadow-[#0A0F3D]/10 transform transition-transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1DD1A1] rounded-full blur-[50px] opacity-20 -mr-10 -mt-10 pointer-events-none" />
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="bg-[#1DD1A1] text-[#0A0F3D] text-xs px-2 py-0.5 rounded uppercase tracking-wider font-bold">Bonus</span>
                Free Software Access
              </h4>
              <p className="text-slate-300 text-sm">
                Enroll today and get six months of free access to <strong className="text-white font-semibold">AislePlanner</strong> software to streamline your new business.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>
);

export const Footer: FC = () => (
  <div className="bg-white border-t border-slate-200 p-4 sm:p-6 sm:px-10 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)] z-10">
    <div className="text-center sm:text-left">
      <p className="text-slate-500 text-xs sm:text-sm">
        * Flexible payment plans available.
      </p>
      <p className="text-slate-800 font-semibold text-sm sm:text-base">
        Start your journey today for only <span className="text-[#1DD1A1] font-bold">$398</span>.
      </p>
    </div>

    <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 sm:gap-3">
      <button className="px-4 py-2.5 sm:px-6 sm:py-3 bg-white border-2 border-slate-200 text-[#0A0F3D] font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-colors focus:ring-4 focus:ring-slate-100 w-full sm:w-auto text-sm sm:text-base">
        View Payment Plans
      </button>
      <button className="px-4 py-2.5 sm:px-8 sm:py-3 bg-[#1DD1A1] text-[#0A0F3D] font-bold rounded-xl hover:bg-[#1bc094] shadow-md shadow-[#1DD1A1]/20 transition-all hover:shadow-lg hover:shadow-[#1DD1A1]/30 transform hover:-translate-y-0.5 focus:ring-4 focus:ring-[#1DD1A1]/30 w-full sm:w-auto text-sm sm:text-base">
        Enroll Now
      </button>
    </div>
  </div>
);

const courses = [
  'Event & Wedding Planning',
  'Corporate Event Planning',
  'Event Decor',
  'Luxury Wedding & Event Planning',
  'Destination Wedding Planning',
  'Promotional Event Planning',
  'Festivals & Live Events',
  'Virtual Events Training',
  'Accelerate Your Business',
];

const features = [
  {
    icon: <Users className="w-6 h-6 text-[#1DD1A1]" />,
    title: 'Learn From Industry Experts',
    description: 'Every course includes guidance from experienced event planners and practical assignments with personalized feedback.',
  },
  {
    icon: <Award className="w-6 h-6 text-[#1DD1A1]" />,
    title: '10 Certifications Included',
    description: 'Graduate with up to ten industry-recognized certifications, including the prestigious Master Planner Certificate.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#1DD1A1]" />,
    title: 'Business Training Built In',
    description: 'Actionable strategies and mentorship to confidently launch, market, and grow your services.',
  },
];
