import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BigNews = () => {
  const BIG_NEWS_ALERT_KEY = 'big-news-alert'
  const isBrowser = typeof window !== 'undefined'

  const [visible, setVisible] = useState(
    isBrowser && window.sessionStorage.getItem(BIG_NEWS_ALERT_KEY) !== 'true'
  )

  const onClose = () => {
    setVisible(false)

    if (isBrowser) {
      window.sessionStorage.setItem(BIG_NEWS_ALERT_KEY, 'true')
    }
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg sm:p-3">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-blue-700">
                <FontAwesomeIcon icon="bullhorn" className="text-white" />
              </span>

              <p className="m-0 ml-3 font-medium text-white truncate">
                <span className="md:hidden">Timecop is now out of Beta!</span>
                <span className="hidden md:inline">
                  Big news! My time tracking application Timecop is now out of
                  Beta!
                </span>
              </p>
            </div>

            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="https://timecop-app.com"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Learn more &rarr;
              </a>
            </div>

            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
                onClick={onClose}
              >
                <span className="sr-only">Dismiss</span>
                <FontAwesomeIcon icon="times" className="text-white text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BigNews
