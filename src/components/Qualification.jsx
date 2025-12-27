const Qualification = () => {
    return (
  
      <div id="qualification" className="container mt-11">
          <h2 className="headline-2">Qualification</h2>
  
      <div className="container mx-auto mt-12 space-y-8">
        {/* Qualification Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  
          <div className="qualification-box lg:col-span-2 flex flex-col justify-between p-4 ring-1 ring-gray-200 rounded-xl">
            <img src="images/rupp.png" alt="school collaboration" className="w-60 h-60 object-contain mb-3" />
            <div>
              <h3 className="text-xl font-bold mb-3">Bachelor Degree in Computer Science and Engineer</h3>
              <p className="font-semibold text-gray-400">Royal University of Phnom Penh</p>
              <p className="font-semibold text-gray-400">( Gratuated 2025 )</p>
            </div>
          </div>
  
          <div className="qualification-box lg:col-span-2 flex flex-col justify-between p-4 ring-1 ring-gray-200 rounded-xl">
            <img src="images/ACE.png" alt="school collaboration" className="rounded-xl mb-3" /> 
            <div>
              <h3 className="text-xl font-bold mb-3">General English Program</h3>
              <p className="font-semibold text-gray-400">Australian Centre for Education (ACE)</p>
              <p className="font-semibold text-gray-400">( GEP 12 )</p>
            </div>
          </div>

          <div className="qualification-box lg:col-span-2 flex flex-col justify-between p-4 ring-1 ring-gray-200 rounded-l">
            <img src="images/icon.png" alt="school collaboration" className="w-40 h-40 object-contain mb-3" /> 
            <div>
              <h3 className="text-xl font-bold mb-3">DevOps Engineering Course</h3>
              <p className="font-semibold text-gray-400">CSTAD</p>
              <p className="font-semibold text-gray-400">( Gratuated in 2025 )</p>
            </div>
          </div>
  
          <div className="qualification-box flex flex-col justify-between p-4 ring-1 ring-gray-200 rounded-xl">
            <img src="images/kataloncert.png" alt="SQL" className="mb-3" />
            <div>
              <h3 className="text-xl font-semibold mb-3">Katalon Certificate Program</h3>
              <p className="text-gray-700">Katalon automation testing with Groovy scripting</p>
            </div>
          </div>
  
          <div className="qualification-box flex flex-col justify-between p-4 ring-1 ring-gray-200 rounded-xl">
            <img src="images/ASEAN school collaboration.jpeg" alt="school collaboration" className="mb-3" />
            <div>
              <h3 className="text-xl font-semibold mb-3">Asian School Collaboration</h3>
              <p className="text-gray-700">A 21st-century skill collaboratßion project with Lao student</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default Qualification;
  