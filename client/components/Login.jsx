
import React, { useState } from "react"

export default function Login() {
	const formData = useState({
		username: '',
		password: ''
	});
	return (
		<div>
			<form 
				onSubmit={(e) => {
					e.preventDefault()
				}}
			>
				<h1>Login </h1>
				<label htmlFor="username"></label>
				<input id="username" placeholder="username" value={formData.username}></input>
				<label htmlFor="password"></label>
				<input id='password' placeholder="password" vlaue={formData.password}></input>
        <button type='submit'>Submit</button>
			</form>
		</div>
	)
}

/* <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */