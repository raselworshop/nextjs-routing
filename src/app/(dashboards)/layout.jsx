import React from 'react'

export default function dashboardLayout({children}) {
  return (
    <div>
        <div className='grid grid-cols-12'>
            {/* sidenav */}
            <div className="col-span-3">
                <ul>
                    <li>Users List</li>
                </ul>
            </div>

            {/* dashboard  */}
            <div className="col-span-9">{children}</div>
        </div>
    </div>
  )
}
