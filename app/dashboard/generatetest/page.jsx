import React from "react";
export default function generatetest() {
  return (
    <div>
      Basic settings
      <div className="bg-swhite rounded-lg p-5 w-full">
        <div className="rounded-lg w-full bg-sblue-100 p-3">
          <span className="text-sblue-200">
            <span className="font-medium">Info!</span>
            {` When you have a larger number of tests, assign them to specific categories, e.g. "Recruitment tests", etc. Using the category you'll be able to use filtering options in the My tests tab.`}
          </span>
        </div>
        <div>
          <label htmlFor="testtitle">Title your test</label>
          <input type="text" id="testtitle" />
        </div>
        <div>
          <label htmlFor="testdescription">Description (optional)</label>
          <input type="text" id="testdescription" />
        </div>
        <div className="flex justify-between items-end">
          <div>
            <label for="countries" className="mb-2 text-md">
              Category
            </label>
            <select
              id="countries"
              className="text-spurple-300 border-spurple-300 text-sm rounded-lg w-full p-2.5 "
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <button
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            className="text-swhite bg-spurple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Create category
          </button>

          {/* Modal start*/}
          <div
            id="default-modal"
            tabindex="-1"
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 rounded-t ">
                  <h3 className="text-xl font-semibold text-spurple-300 dark:text-white">
                    Create new category
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                    data-modal-hide="default-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-4 md:p-5 space-y-4">
                  <input type="text" placeholder="Category name" />
                </div>

                <div className="flex items-center p-4 md:p-5 rounded-b">
                  <button
                    data-modal-hide="default-modal"
                    className="text-swhite bg-spurple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Create
                  </button>
                  <button
                    data-modal-hide="default-modal"
                    className="ms-3 text-sgray-300 bg-white rounded-lg border border-sgray-300 text-sm font-medium px-5 py-2.5"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal end */}
        </div>
      </div>
      Questions management
      <div className="bg-swhite rounded-lg p-5 w-full">

      </div>
    </div>
  );
}
