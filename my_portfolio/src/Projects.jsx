export default function Projects() {
  return (
    <div className="py-16 px-6 md:px-20 ">
      <div className="mb-12 text-center">
        <p className="text-4xl font-bold text-gray-800">Projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
       
        <div className=" border border-black  shadow-md p-6 hover:shadow-xl transition">
          <p className="text-2xl font-semibold text-gray-800 mb-4">Stock Management Application</p>
          <img src="/images/stock.jpg" alt="Stock Management" className="w-full h-48 object-cover rounded-lg mb-4" />
          
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A comprehensive web application that allows businesses to manage their inventory efficiently and centrally. It offers an intuitive interface for tracking products, managing warehouses, recording stock entries and exits, performing transfers between warehouses and conducting regular inventories. This solution facilitates real-time visibility into stock status, limits human error and improves movement traceability. It has several features such as: Product and warehouse management, Recording stock entries and exits, Transferring products between warehouses, Inventory tracking, Secure authentication.
          </p>
    

          <h2 className="text-xl font-semibold mb-2">Tools</h2>
          <div className="flex flex-wrap gap-2">
            <span className="border border-black bg-gray-200 px-3 py-1 ">Spring Boot</span>
            <span className="border border-black bg-gray-200 px-3 py-1 ">MySQL</span>
            <span className="border border-black bg-gray-200 px-3 py-1 ">React Js</span>
          </div>
        </div>

        {/* Real-Time Log Processing Pipeline */}
        <div className=" border border-black shadow-md p-6 hover:shadow-xl transition">
          <p className="text-2xl font-semibold text-gray-800 mb-4">Real-Time Log Processing Pipeline</p>
          <img src="/public/pictures/architecture.png" alt="Log Processing" className="w-full h-64 object-cover rounded-lg mb-4" />
          
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The goal is to build a distributed pipeline capable of collecting logs from different sources (applications, servers), transmitting them in real time, automatically analyzing them, storing them, and visualizing them via a graphical user interface.
This system allows for monitoring the health of services (observability), automatically detecting errors, exceptions, or anomalies, analyzing the performance of system components, and generating alerts in the event of critical behavior.
          </p>
          <h2 className="text-xl font-semibold mb-2">Tools</h2>
          <div className="flex flex-wrap gap-2">
            <span className="border border-black  bg-gray-200 px-3 py-1 ">Python</span>
            <span className="border border-black bg-gray-200 px-3 py-1 ">Java</span>
            <span className="border border-black bg-gray-200 px-3 py-1 ">Docker</span>
            <span className="border border-black bg-gray-200 px-3 py-1 ">Apache Kafka</span>
            <span className="border border-black bg-gray-200 px-3 py-1 ">Apache Spark</span>
            <span className="border border-black bg-gray-200 px-3 py-1 ">React Js</span>
          </div>
        </div>

        {/* ML Fantasy */}
        <div className="border border-black  shadow-md p-6 hover:shadow-xl transition">
          <p className="text-2xl font-semibold text-gray-800 mb-4">ML Fantasy</p>
          <img src="/images/ml_fantasy.jpg" alt="ML Fantasy" className="w-full h-48 object-cover rounded-lg mb-4" />
          
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The goal of this project is to develop a machine learning model capable of predicting the points a Premier League player is likely to score in the coming matches, based on their overall statistics as well as their recent performances (last 3 matches). The objective is to assist users in their strategic decisions to optimize their team in the Fantasy Premier League game
          </p>
          <h2 className="text-xl font-semibold mb-2">Tools</h2>
          <div className="flex flex-wrap gap-2">
            <span className="border border-black bg-gray-200 px-3 py-1 ">Python</span>
            <span className="border border-black bg-gray-200 px-3 py-1 ">Flask</span>
            <span className="border border-black bg-gray-200 px-3 py-1 ">Scikit-learn</span>
            <span className="border border-black bg-gray-200 px-3 py-1 ">Pandas</span>
          </div>
        </div>

        {/* Linux Distribution */}
        <div className=" border border-black  shadow-md p-6 hover:shadow-xl transition">
          <p className="text-2xl font-semibold text-gray-800 mb-4">Linux Distribution</p>
          <img src="/public/pictures/dis.png" alt="Linux Distro" className="w-full h-48 object-cover rounded-lg mb-4" />
          
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This project involves building a custom Linux distribution to gain a deep understanding of Linux filesystem architecture. The goal is to explore the essential components of a Linux system, from the boot process to directory organization, while developing skills in system administration, kernel compilation, and low-level configuration.
          </p>
          <h2 className="text-xl font-semibold mb-2">Tools</h2>
          <div className="flex flex-wrap gap-2">
            <span className="border border-black bg-gray-200 px-3 py-1 ">Python</span>
            <span className="border border-black bg-gray-200 px-3 py-1 ">Shell</span>
            <span className="border border-black bg-gray-200 px-3 py-1 ">Cubic</span>
            <span className="border border-black bg-gray-200 px-3 py-1 ">Linux</span>
          </div>
        </div>
        <div className=" border border-black shadow-md p-6 hover:shadow-xl transition">
          <p className="text-2xl font-semibold text-gray-800 mb-4">ETL Reddit datapipline</p>
          <img src="/public/pictures/reddit.png" alt="Log Processing" className="w-92 h-92 object-cover rounded-lg mb-4" />
          
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
           This project aims to build an ETL (Extract, Transform, Load) pipeline to collect near-real-time data from Reddit, transform it, and store it in a relational database to enable analysis, reporting, or training of machine learning models.
          </p>
          <h2 className="text-xl font-semibold mb-2">Tools</h2>
          <div className="flex flex-wrap gap-2">
            <span className="border border-black  bg-gray-200 px-3 py-1 ">Python</span>
            <span className="border border-black bg-gray-200 px-3 py-1 ">Docker</span>
            <span className="border border-black bg-gray-200 px-3 py-1 ">Apache Airflow</span>
            <span className="border border-black bg-gray-200 px-3 py-1 ">Postgres</span>
          </div>
        </div>
      </div>
    </div>
  );
}
