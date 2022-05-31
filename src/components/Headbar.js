
import logo from '../asset/logo.svg'
export default function Headbar(props) {
  return (
          <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-[#1A202C]">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center">
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  
                  <img
                    className=" lg:block h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                 
                </div>
                </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#194BFB] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                 
                </span>
                {props.text}
              </button>
               </div>
            </div>  
            </div>    
                  )}
