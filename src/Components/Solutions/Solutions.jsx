import React from 'react';
import { Link, Outlet } from 'react-router-dom';


export default function Solutions() {
  return <>

    <div className="row py-5 solutionSection">

    <div className="col-md-3 border-start border-2 border-warning">
        <ul class="nav flex-column">
          <li class="nav-item">
            <Link class="nav-link main-color fs-4 active" aria-current="page" to={"utilities"}>Utilities</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link main-color fs-4" to={"landManagement"}>Land Management</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link main-color fs-4" to={"communication"}>Communication</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link main-color fs-4" to={""}>Navigation & Mapping</Link>
          </li>
        </ul>
      </div>
      <div className='col-md-9'>
        <Outlet></Outlet>
      </div>

    </div>
  </>
}
