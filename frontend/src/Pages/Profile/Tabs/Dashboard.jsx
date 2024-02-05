import React from 'react'

const Dashboard = () => {
  
  return (
    <React.Fragment>
            <h2 className="text-2xl font-semibold">Dashboard</h2>
                <div className="grid grid-cols-1 my-4 md:grid-cols-3 gap-8 rounded-lg overflow-hidden ">
                  <div className="border-l-4 h-20 bg-darkOrange-100 bg-opacity-10  rounded-lg w-full flex justify-between  items-center border-green-500 py-2 px-4">
                    <div>
                      <h2 className="text-md m-0 font-bold opacity-50 text-black">
                        Total Booked Seats
                      </h2>
                      <p className="text-green-500  font-extrabold text-2xl ">
                        {/* {bookedSeatsCount} */}
                        30
                      </p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="border-l-4 h-20 bg-darkOrange-100 bg-opacity-10 rounded-lg w-full flex justify-between  items-center border-red-500 px-4 py-2">
                    <div>
                      <h2 className="text-md m-0 opacity-50 font-bold text-black">
                        Total Canceled Seats
                      </h2>
                      <p className="text-red-500 font-extrabold text-2xl ">0</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="border-l-4 h-20 bg-darkOrange-100 bg-opacity-10 rounded-lg w-full flex justify-between  items-center border-yellow-500 py-2 px-4">
                    <div>
                      <h2 className="text-md m-0 font-bold opacity-50 text-black">
                        Total Pending Seats
                      </h2>
                      <p className="text-yellow-500 font-extrabold text-2xl ">
                        0
                      </p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
    </React.Fragment>
  )
}

export default Dashboard