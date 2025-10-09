import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,  // l'animation se déclenche une seule fois
    threshold: 0.5,     // 50% visible pour déclencher
  });

  return (
    <div
      ref={ref}
      className={`py-12 transition-opacity duration-1000 ${
        inView ? 'animate__animated animate__fadeInUp opacity-100' : 'opacity-0'
      }`}
      style={{ animationDuration: '1.5s' }} // ralentit un peu l'animation
    >
      <div className="mt-14 text-center">
        <p className="text-4xl font-bold text-gray-800">Education</p>
      </div>

      <div className="flex flex-col items-center mt-10">
        {/* Ligne verticale */}
        <div className="w-px h-36 bg-black"></div>

        {/* Événement 1 */}
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <div className="text-center mt-2 mb-6">
            <p className="font-semibold">Engineering Degree in Data Engineering</p>
            <h1 className="text-sm text-gray-700">National School of Applied Science, Al Hoceima</h1>
            <h5 className="text-sm text-gray-500">2023 - Present</h5>
          </div>
        </div>

        {/* Ligne verticale */}
        <div className="w-px h-36 bg-black"></div>

        {/* Événement 2 */}
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <div className="text-center mt-2 mb-6">
            <p className="font-semibold">Preparatory Classes to Engineering Degree</p>
            <h1 className="text-sm text-gray-700">National School of Applied Science, Al Hoceima</h1>
            <h5 className="text-sm text-gray-500">2021 - 2023</h5>
          </div>
        </div>

        {/* Ligne verticale */}
        <div className="w-px h-36 bg-black"></div>

        {/* Événement 3 */}
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <div className="text-center mt-2 mb-6">
            <p className="font-semibold">Bachelor of Science in Physics and Chemistry</p>
            <h1 className="text-sm text-gray-700">Mehdi Menjra Inzegane Qualified High School</h1>
            <h5 className="text-sm text-gray-500">2020 - 2021</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
